import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';
class SDK {
    constructor() {
        this.spec = Oas.init(definition);
        this.core = new APICore(this.spec, 'budibase/1.0.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config) {
        this.core.setConfig(config);
    }
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    /**
     * Create an application
     *
     */
    appCreate(body, metadata) {
        return this.core.fetch('/applications', 'post', body, metadata);
    }
    /**
     * Update an application
     *
     */
    appUpdate(body, metadata) {
        return this.core.fetch('/applications/{appId}', 'put', body, metadata);
    }
    /**
     * Delete an application
     *
     */
    appDestroy(metadata) {
        return this.core.fetch('/applications/{appId}', 'delete', metadata);
    }
    /**
     * Retrieve an application
     *
     */
    appGetById(metadata) {
        return this.core.fetch('/applications/{appId}', 'get', metadata);
    }
    /**
     * Unpublish an application
     *
     */
    appUnpublish(metadata) {
        return this.core.fetch('/applications/{appId}/unpublish', 'post', metadata);
    }
    /**
     * Publish an application
     *
     */
    appPublish(metadata) {
        return this.core.fetch('/applications/{appId}/publish', 'post', metadata);
    }
    /**
     * This endpoint is only available on a business or enterprise license.
     *
     * @summary Import an app to an existing app 🔒
     */
    appImport(body, metadata) {
        return this.core.fetch('/applications/{appId}/import', 'post', body, metadata);
    }
    /**
     * This endpoint is only available on a business or enterprise license.
     *
     * @summary Export an app 🔒
     */
    appExport(body, metadata) {
        return this.core.fetch('/applications/{appId}/export', 'post', body, metadata);
    }
    /**
     * Based on application properties (currently only name) search for applications.
     *
     * @summary Search for applications
     */
    appSearch(body) {
        return this.core.fetch('/applications/search', 'post', body);
    }
    /**
     * Output metrics in OpenMetrics format compatible with Prometheus
     *
     * @summary Retrieve Budibase tenant metrics
     */
    metricsGet() {
        return this.core.fetch('/metrics', 'get');
    }
    /**
     * Queries which have been created within a Budibase app can be executed using this,
     *
     * @summary Execute a query
     */
    queryExecute(body, metadata) {
        return this.core.fetch('/queries/{queryId}', 'post', body, metadata);
    }
    /**
     * Based on query properties (currently only name) search for queries.
     *
     * @summary Search for queries
     */
    querySearch(body, metadata) {
        return this.core.fetch('/queries/search', 'post', body, metadata);
    }
    /**
     * This is a business/enterprise only endpoint
     *
     * @summary Assign a role to a list of users
     */
    roleAssign(body) {
        return this.core.fetch('/roles/assign', 'post', body);
    }
    /**
     * This is a business/enterprise only endpoint
     *
     * @summary Un-assign a role from a list of users
     */
    roleUnAssign(body) {
        return this.core.fetch('/roles/unassign', 'post', body);
    }
    /**
     * Creates a row within the specified table.
     *
     * @summary Create a row
     */
    rowCreate(body, metadata) {
        return this.core.fetch('/tables/{tableId}/rows', 'post', body, metadata);
    }
    /**
     * Updates a row within the specified table.
     *
     * @summary Update a row
     */
    rowUpdate(body, metadata) {
        return this.core.fetch('/tables/{tableId}/rows/{rowId}', 'put', body, metadata);
    }
    /**
     * Deletes a row within the specified table.
     *
     * @summary Delete a row
     */
    rowDestroy(metadata) {
        return this.core.fetch('/tables/{tableId}/rows/{rowId}', 'delete', metadata);
    }
    /**
     * This gets a single row, it will be enriched with the full related rows, rather than the
     * squashed "primaryDisplay" format returned by the search endpoint.
     *
     * @summary Retrieve a row
     */
    rowGetById(metadata) {
        return this.core.fetch('/tables/{tableId}/rows/{rowId}', 'get', metadata);
    }
    /**
     * Search for rows
     *
     */
    rowSearch(body, metadata) {
        return this.core.fetch('/tables/{tableId}/rows/search', 'post', body, metadata);
    }
    /**
     * Create a table, this could be internal or external.
     *
     * @summary Create a table
     */
    tableCreate(body, metadata) {
        return this.core.fetch('/tables', 'post', body, metadata);
    }
    /**
     * Update a table, this could be internal or external.
     *
     * @summary Update a table
     */
    tableUpdate(body, metadata) {
        return this.core.fetch('/tables/{tableId}', 'put', body, metadata);
    }
    /**
     * Delete a table, this could be internal or external.
     *
     * @summary Delete a table
     */
    tableDestroy(metadata) {
        return this.core.fetch('/tables/{tableId}', 'delete', metadata);
    }
    /**
     * Lookup a table, this could be internal or external.
     *
     * @summary Retrieve a table
     */
    tableGetById(metadata) {
        return this.core.fetch('/tables/{tableId}', 'get', metadata);
    }
    /**
     * Based on table properties (currently only name) search for tables. This could be an
     * internal or an external table.
     *
     * @summary Search for tables
     */
    tableSearch(body, metadata) {
        return this.core.fetch('/tables/search', 'post', body, metadata);
    }
    /**
     * Create a user
     *
     */
    userCreate(body) {
        return this.core.fetch('/users', 'post', body);
    }
    /**
     * Update a user
     *
     */
    userUpdate(body, metadata) {
        return this.core.fetch('/users/{userId}', 'put', body, metadata);
    }
    /**
     * Delete a user
     *
     */
    userDestroy(metadata) {
        return this.core.fetch('/users/{userId}', 'delete', metadata);
    }
    /**
     * Retrieve a user
     *
     */
    userGetById(metadata) {
        return this.core.fetch('/users/{userId}', 'get', metadata);
    }
    /**
     * Based on user properties (currently only name) search for users.
     *
     * @summary Search for users
     */
    userSearch(body) {
        return this.core.fetch('/users/search', 'post', body);
    }
}
const createSDK = (() => { return new SDK(); })();
export default createSDK;
