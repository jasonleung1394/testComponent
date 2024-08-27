<script>
  import { onMount, getContext } from "svelte";
  import { marked } from "marked";

  let tasks = [];
  let selectedTask = null;
  let isReorderPopupVisible = false;
  let columnOrder = [];
  let additionalColumns = {}; // To hold additional columns
  let showCounts = true;

  const component = getContext("dataProvider");
  const { API, navigate } = getContext("sdk");
  export let dataProvider;
  export let arrayTabs;
  export let fieldSelection;

  // Convert arrayTabs into columnOrder
  $: columnOrder = arrayTabs
    ? arrayTabs.split(",").map((tab) => tab.trim())
    : [];
  $: fieldSelection = fieldSelection;
  const tableId = dataProvider.datasource.tableId;
  // Fetch tasks from the dataProvider and extract additional columns
  $: {
    if (dataProvider?.rows) {
      tasks = dataProvider.rows.map((obj) => ({
        id: obj.auto_id,
        task_name: obj.Title,
        status: obj.Status,
        description: obj.Description,
        _id: obj._id,
        ...obj, // Spread the rest of the object properties
      }));

      // Extract additional columns from the first row's keys (assuming all rows have the same columns)
      if (dataProvider.rows.length > 0) {
        const firstRow = dataProvider.rows[0];
        let excludedColumns = [
          "auto_id",
          "_id",
          "task_name",
          "status",
          "_rev",
          "type",
          "tableId",
          "createdAt",
          "updatedAt",
        ];
        let outObjs = fieldSelection.filter((field) => field.active === false);
        let outNames = outObjs.map((objs) => objs.field);
        excludedColumns = excludedColumns.concat(outNames);

        // Record sequence of relevant fields
        const relevantFields = fieldSelection
          .filter(
            (field) =>
              field.active === true && !excludedColumns.includes(field.field)
          )
          .map((field) => field.field);
        // Ensure sequence in additionalColumns
        additionalColumns = relevantFields.reduce((acc, field) => {
          if (firstRow.hasOwnProperty(field)) {
            acc[field] = field;
          }
          return acc;
        }, {});
        // Append any remaining columns that are not in relevantFields
        Object.keys(firstRow).forEach((key) => {
          if (!excludedColumns.includes(key) && !relevantFields.includes(key)) {
            additionalColumns[key] = key;
          }
        });

        console.log(additionalColumns);
      }
    }
  }

  let draggedTask = null;

  function handleDragStart(event, task) {
    draggedTask = task;
    event.dataTransfer.effectAllowed = "move";
  }

  function handleDrop(event, status) {
    event.preventDefault();

    if (draggedTask) {
      draggedTask.status = status;
      updateTaskStatus(draggedTask);
      tasks = [...tasks];
      draggedTask = null;
    }
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  const getRow = async (rowId, tableId) => {
    return await API.fetchRow({ rowId, tableId });
  };

  async function updateTaskStatus(task) {
    const row = await getRow(task._id, tableId);
    await API.saveRow({
      ...row,
      status: task.status,
    });
  }
  let editableTask = {};

  async function openEditPopup(taskId) {
    selectedTask = tasks.find((task) => task._id === taskId);

    if (selectedTask) {
      editableTask = { ...selectedTask };
      document.querySelector(".edit-popup").style.display = "block";
    }
  }
  //edit save change
  async function saveChanges() {
    Object.assign(selectedTask, editableTask);
    if (selectedTask) {
      await updateTask(selectedTask);

      const taskIndex = tasks.findIndex(
        (task) => task._id === selectedTask._id
      );
      if (taskIndex !== -1) {
        tasks[taskIndex] = { ...selectedTask };
        tasks = [...tasks];
      }

      document.querySelector(".edit-popup").style.display = "none";
      selectedTask = null;
    }
  }
  //edit update tasks
  async function updateTask(task) {
    const row = await getRow(task._id, tableId);
    await API.saveRow({
      ...row,
      status: task.status,
      task_name: task.task_name,
      // description: task.description,
      ...Object.fromEntries(
        Object.entries(task).filter(([key]) => additionalColumns[key])
      ),
    });
  }

  function closePopup() {
    document.querySelector(".edit-popup").style.display = "none";
    selectedTask = null;
  }

  function is_empty(value) {
    return value === null || value === undefined || value.trim() === "";
  }

  // Show reorder popup
  function openReorderPopup() {
    isReorderPopupVisible = true;
  }

  // Hide reorder popup
  function closeReorderPopup() {
    isReorderPopupVisible = false;
  }

  // Move a column up in the order
  function moveUp(index) {
    if (index > 0) {
      const temp = columnOrder[index];
      columnOrder[index] = columnOrder[index - 1];
      columnOrder[index - 1] = temp;
    }
  }

  // Move a column down in the order
  function moveDown(index) {
    if (index < columnOrder.length - 1) {
      const temp = columnOrder[index];
      columnOrder[index] = columnOrder[index + 1];
      columnOrder[index + 1] = temp;
    }
  }

  async function addNewTask(task) {
    // Create a new task object
    const newTask = {
      task_name: task.task_name,
      // description: task.description,
      status: task.status,
      ...Object.fromEntries(
        Object.entries(task).filter(([key]) => additionalColumns[key])
      ),
    };

    // Add the new task to the tasks array

    // Save the new task to the database
    let response = await saveNewTask(newTask);
    console.log(response);

    let savedNewTask = {
      ...newTask,
      _id: response._id,
    };
    tasks = [...tasks, savedNewTask];
  }

  async function saveNewTask(task) {
    let response = await API.saveRow({
      ...task,
      tableId,
    });
    return response;
  }

  let newTask = {
    task_name: "",
    // description: "",
    status: columnOrder[0], // Default to the first column's status
    ...Object.fromEntries(
      Object.keys(additionalColumns).map((key) => [key, ""])
    ),
  };

  function openAddTaskPopup() {
    newTask = {
      task_name: "",
      // description: "",
      status: columnOrder[0], // Reset to default values
      ...Object.fromEntries(
        Object.keys(additionalColumns).map((key) => [key, ""])
      ),
    };
    document.querySelector(".add-task-popup").style.display = "block";
  }

  function closeAddTaskPopup() {
    document.querySelector(".add-task-popup").style.display = "none";
  }

  function handleAddTask() {
    if (newTask.task_name.trim() === "") {
      alert("Task name is required.");
      return;
    }

    addNewTask(newTask);
    closeAddTaskPopup();
  }

  async function deleteTask(taskId) {
    // Remove the task from the database
    await API.deleteRow({ rowId: taskId, tableId });
    // Update the tasks array to remove the deleted task
    tasks = tasks.filter((task) => task._id !== taskId);
    // Close the edit popup
    closePopup();
  }

  let columnCounts = {};
  function getColumnCardCounts(tasks, columnOrder) {
    const columnCounts = {};

    columnOrder.forEach((status) => {
      columnCounts[status] = 0;
    });

    tasks.forEach((task) => {
      if (columnCounts.hasOwnProperty(task.status)) {
        columnCounts[task.status]++;
      }
    });

    return columnCounts;
  }
  // Function to calculate and update column counts
  function updateColumnCounts() {
    columnCounts = getColumnCardCounts(tasks, columnOrder);
  }

  onMount(() => {
    // Initialize counts when component mounts
    updateColumnCounts();
  });

  // Update counts whenever tasks or columnOrder change
  $: tasks, updateColumnCounts();

  function toggleCountVisibility() {
    showCounts = !showCounts;
  }
</script>

<!-- Kanban Board -->
<div class="kanban-header">
  <div class="kanban-title">
    <!-- placeholder -->
  </div>
  <div class="btn-group">
    <button on:click={openReorderPopup} style="float: right;">
      Reorder Columns
    </button>
    <button
      on:click={openAddTaskPopup}
      style="float: right; margin-right: 10px;"
    >
      Add New Task
    </button>
    <button
      on:click={toggleCountVisibility}
      style="float: right; margin-right: 10px;"
    >
      {showCounts ? "Hide Counts" : "Show Counts"}
    </button>
  </div>
</div>
<div class="kanban-board">
  {#each columnOrder as status}
    <div
      class="kanban-column"
      on:drop={(event) => handleDrop(event, status)}
      on:dragover={handleDragOver}
    >
      <h2>
        {status.charAt(0).toUpperCase() + status.slice(1)}
        {#if showCounts}
          ({columnCounts[status] || 0})
        {/if}
      </h2>
      {#each tasks.filter((task) => task.status === status) as task}
        <div
          class="kanban-card"
          draggable="true"
          on:dragstart={(event) => handleDragStart(event, task)}
        >
          <h3>{task.task_name}</h3>
          <div class="btn-container">
            <button on:click={() => openEditPopup(task._id)}>Edit</button>
          </div>
          <!-- {#if !is_empty(task.description)}
            <div class="description-container">
              {@html marked(task.description)}
            </div>
          {/if} -->
          <div class="additional-container">
            {#each Object.entries(additionalColumns) as [key, _]}
              {#if !is_empty(task[key])}
                <div class="additional-column">
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                  {#if key === "description"}
                    <!-- Render as Markdown -->
                    {@html marked(task[key])}
                  {:else if key === "date"}
                    <!-- Format Date -->
                    <p>{new Date(task[key]).toLocaleDateString()}</p>
                  {:else}
                    <!-- Default Display -->
                    <p>{task[key]}</p>
                  {/if}
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/each}
</div>

<!-- Edit Popup -->
<div class="edit-popup" style="display: none;">
  {#if editableTask}
    <form on:submit|preventDefault={saveChanges}>
      <label>
        Task Name:
        <input type="text" bind:value={editableTask.task_name} />
      </label>
      <!-- <label>
        Description:
        <textarea bind:value={editableTask.description}></textarea>
      </label> -->
      <label>
        Status:
        <select bind:value={editableTask.status}>
          {#each columnOrder as status}
            <option value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          {/each}
        </select>
      </label>
      {#each Object.keys(additionalColumns) as column}
        <label>
          {column.charAt(0).toUpperCase() + column.slice(1)}:
          {#if column === "description"}
            <!-- Render as a Markdown Editor -->
            <textarea bind:value={editableTask[column]} rows="4" cols="50"
            ></textarea>
          {:else if column === "date"}
            <!-- Render as a Date Picker -->
            <input type="date" bind:value={editableTask[column]} />
          {:else}
            <!-- Default Input Field -->
            <input type="text" bind:value={editableTask[column]} />
          {/if}
        </label>
      {/each}
      <div class="btn-group">
        <button
          type="button"
          on:click={() => deleteTask(editableTask._id)}
          class="delete-button">Delete</button
        >
        <button type="button" on:click={closePopup}>Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>
  {/if}
</div>

<!-- Reorder Popup -->
{#if isReorderPopupVisible}
  <div class="reorder-popup">
    <h3>Reorder Columns</h3>
    {#each columnOrder as status, index}
      <div class="reorder-item">
        <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
        <button on:click={() => moveUp(index)}>Move Up</button>
        <button on:click={() => moveDown(index)}>Move Down</button>
      </div>
    {/each}
    <button on:click={closeReorderPopup}>Close</button>
  </div>
{/if}

<!-- Add Task Popup -->
<div class="add-task-popup" style="display: none;">
  <form on:submit|preventDefault={handleAddTask}>
    <label>
      Task Name:
      <input type="text" bind:value={newTask.task_name} />
    </label>
    <!-- <label>
      Description:
      <textarea bind:value={newTask.description}></textarea>
    </label> -->
    <label>
      Status:
      <select bind:value={newTask.status}>
        {#each columnOrder as status}
          <option value={status}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </option>
        {/each}
      </select>
    </label>
    {#each Object.keys(additionalColumns) as column}
      <label>
        {column.charAt(0).toUpperCase() + column.slice(1)}:
        {#if column === "description"}
          <!-- Render as a Markdown Editor or Textarea -->
          <textarea bind:value={newTask[column]} rows="4" cols="50"></textarea>
        {:else if column === "date"}
          <!-- Render as a Date Picker -->
          <input type="date" bind:value={newTask[column]} />
        {:else}
          <!-- Default Input Field for other types -->
          <input type="text" bind:value={newTask[column]} />
        {/if}
      </label>
    {/each}
    <div class="btn-group">
      <button type="button" on:click={closeAddTaskPopup}>Cancel</button>
      <button type="submit">Add Task</button>
    </div>
  </form>
</div>

<style>
  :root {
    --pr--button-color: rgb(13, 102, 208);
    --pr--button-color-hover: rgb(20, 115, 230);
    --pr--delete-red: rgb(234, 56, 41);
  }

  .btn-group {
    display: flex;
    justify-content: space-between;
  }
  .kanban-header .btn-group {
    padding-right: 20px;
  }
  .kanban-header .btn-group button {
    margin-top: 10px;
    margin-right: 10px;
    padding: 10px;
    padding-right: 13px;
    padding-left: 13px;
    border: none;
    border-radius: 20px;
    background-color: var(--pr--button-color);
    color: white;
    cursor: pointer;
    font-weight: bold;
  }
  .kanban-header .btn-group button:hover {
    background-color: var(--pr--button-color-hover);
  }
  .kanban-header {
    display: flex;
    justify-content: space-between;
  }

  .kanban-board {
    display: flex;
    overflow-x: auto;
    padding: 20px;
    gap: 10px;
  }

  .kanban-column {
    flex: 1;
    min-width: 200px;
    background-color: #f4f4f4;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }

  .kanban-column h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;
    color: #333;
  }

  .kanban-card {
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    cursor: grab;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    position: relative;
    display: grid;
    grid-template-areas:
      "title ph ph edit"
      "description description description description"
      "additional additional additional additional";
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .kanban-card:hover {
    background-color: #f9f9f9;
  }

  .kanban-card h3 {
    grid-area: title;
  }
  .btn-container {
    grid-area: edit;
    margin: auto;
  }

  .kanban-card button {
    display: none;
    margin-right: 10px;
    padding-right: 13px;
    padding-left: 13px;
    border: none;
    border-radius: 20px;
    background-color: var(--pr--button-color);
    color: white;
    cursor: pointer;
    font-weight: bold;
  }
  .kanban-card:hover button {
    grid-area: edit;
    height: 2vh;
    display: block;
    background-color: var(--pr--button-color-hover);
  }

  .kanban-card .description-container {
    visibility: hidden;
    opacity: 0;
    transition:
      visibility 0s,
      opacity 0.2s ease-in-out;
    height: 0px;
  }

  .kanban-card:hover .description-container {
    visibility: visible;
    opacity: 1;
    grid-area: description;
    height: auto;
  }

  .kanban-card .additional-container {
    visibility: hidden;
    opacity: 0;
    height: 0px;
    transition:
      visibility 0s,
      opacity 0.2s ease-in-out;
  }

  .kanban-card:hover .additional-container {
    visibility: visible;
    opacity: 1;
    height: auto;
    grid-area: additional;
    display: flex;
    flex-direction: column;
  }

  .edit-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }

  .edit-popup form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .edit-popup label {
    display: flex;
    flex-direction: column;
  }

  .edit-popup input,
  .edit-popup textarea,
  .edit-popup select {
    margin-top: 5px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .edit-popup textarea {
    width: 20vw;
    height: 15vh;
  }

  .edit-popup button {
    margin-top: 10px;
    margin-right: 10px;
    padding: 10px;
    padding-right: 13px;
    padding-left: 13px;
    border: none;
    border-radius: 20px;
    background-color: var(--pr--button-color);
    color: white;
    cursor: pointer;
    font-weight: bold;
  }

  .edit-popup button[type="button"] {
    background-color: #6c757d;
  }
  .edit-popup .delete-button {
    background-color: var(--pr--delete-red); /* Red color for delete */
    margin-top: 10px;
    padding: 10px;
    padding-right: 13px;
    padding-left: 13px;
    border: none;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-weight: bold;
  }

  .edit-popup .delete-button:hover {
    background-color: #c82333; /* Darker red on hover */
  }

  .reorder-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .reorder-popup .reorder-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .reorder-popup button {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }

  .reorder-popup button:hover {
    background-color: #0056b3;
  }

  .add-task-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }

  .add-task-popup form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .add-task-popup label {
    display: flex;
    flex-direction: column;
  }

  .add-task-popup input,
  .add-task-popup textarea,
  .add-task-popup select {
    margin-top: 5px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .add-task-popup button {
    margin-top: 10px;
    padding: 10px;
    padding-right: 13px;
    padding-left: 13px;
    border: none;
    border-radius: 20px;
    background-color: var(--pr--button-color);
    color: white;
    cursor: pointer;
    font-weight: bold;
  }

  .add-task-popup button[type="button"] {
    background-color: #6c757d;
  }
</style>
