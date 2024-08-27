import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Create an application
     *
     */
    appCreate(body: types.AppCreateBodyParam, metadata: types.AppCreateMetadataParam): Promise<FetchResponse<200, types.AppCreateResponse200>>;
    /**
     * Update an application
     *
     */
    appUpdate(body: types.AppUpdateBodyParam, metadata: types.AppUpdateMetadataParam): Promise<FetchResponse<200, types.AppUpdateResponse200>>;
    /**
     * Delete an application
     *
     */
    appDestroy(metadata: types.AppDestroyMetadataParam): Promise<FetchResponse<200, types.AppDestroyResponse200>>;
    /**
     * Retrieve an application
     *
     */
    appGetById(metadata: types.AppGetByIdMetadataParam): Promise<FetchResponse<200, types.AppGetByIdResponse200>>;
    /**
     * Unpublish an application
     *
     */
    appUnpublish(metadata: types.AppUnpublishMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Publish an application
     *
     */
    appPublish(metadata: types.AppPublishMetadataParam): Promise<FetchResponse<200, types.AppPublishResponse200>>;
    /**
     * This endpoint is only available on a business or enterprise license.
     *
     * @summary Import an app to an existing app 🔒
     */
    appImport(body: types.AppImportBodyParam, metadata: types.AppImportMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * This endpoint is only available on a business or enterprise license.
     *
     * @summary Export an app 🔒
     */
    appExport(body: types.AppExportBodyParam, metadata: types.AppExportMetadataParam): Promise<FetchResponse<200, types.AppExportResponse200>>;
    /**
     * Based on application properties (currently only name) search for applications.
     *
     * @summary Search for applications
     */
    appSearch(body: types.AppSearchBodyParam): Promise<FetchResponse<200, types.AppSearchResponse200>>;
    /**
     * Output metrics in OpenMetrics format compatible with Prometheus
     *
     * @summary Retrieve Budibase tenant metrics
     */
    metricsGet(): Promise<FetchResponse<200, types.MetricsGetResponse200>>;
    /**
     * Queries which have been created within a Budibase app can be executed using this,
     *
     * @summary Execute a query
     */
    queryExecute(body: types.QueryExecuteBodyParam, metadata: types.QueryExecuteMetadataParam): Promise<FetchResponse<200, types.QueryExecuteResponse200>>;
    /**
     * Based on query properties (currently only name) search for queries.
     *
     * @summary Search for queries
     */
    querySearch(body: types.QuerySearchBodyParam, metadata: types.QuerySearchMetadataParam): Promise<FetchResponse<200, types.QuerySearchResponse200>>;
    /**
     * This is a business/enterprise only endpoint
     *
     * @summary Assign a role to a list of users
     */
    roleAssign(body: types.RoleAssignBodyParam): Promise<FetchResponse<200, types.RoleAssignResponse200>>;
    /**
     * This is a business/enterprise only endpoint
     *
     * @summary Un-assign a role from a list of users
     */
    roleUnAssign(body: types.RoleUnAssignBodyParam): Promise<FetchResponse<200, types.RoleUnAssignResponse200>>;
    /**
     * Creates a row within the specified table.
     *
     * @summary Create a row
     */
    rowCreate(body: types.RowCreateBodyParam, metadata: types.RowCreateMetadataParam): Promise<FetchResponse<200, types.RowCreateResponse200>>;
    /**
     * Updates a row within the specified table.
     *
     * @summary Update a row
     */
    rowUpdate(body: types.RowUpdateBodyParam, metadata: types.RowUpdateMetadataParam): Promise<FetchResponse<200, types.RowUpdateResponse200>>;
    /**
     * Deletes a row within the specified table.
     *
     * @summary Delete a row
     */
    rowDestroy(metadata: types.RowDestroyMetadataParam): Promise<FetchResponse<200, types.RowDestroyResponse200>>;
    /**
     * This gets a single row, it will be enriched with the full related rows, rather than the
     * squashed "primaryDisplay" format returned by the search endpoint.
     *
     * @summary Retrieve a row
     */
    rowGetById(metadata: types.RowGetByIdMetadataParam): Promise<FetchResponse<200, types.RowGetByIdResponse200>>;
    /**
     * Search for rows
     *
     */
    rowSearch(body: types.RowSearchBodyParam, metadata: types.RowSearchMetadataParam): Promise<FetchResponse<200, types.RowSearchResponse200>>;
    /**
     * Create a table, this could be internal or external.
     *
     * @summary Create a table
     */
    tableCreate(body: types.TableCreateBodyParam, metadata: types.TableCreateMetadataParam): Promise<FetchResponse<200, types.TableCreateResponse200>>;
    /**
     * Update a table, this could be internal or external.
     *
     * @summary Update a table
     */
    tableUpdate(body: types.TableUpdateBodyParam, metadata: types.TableUpdateMetadataParam): Promise<FetchResponse<200, types.TableUpdateResponse200>>;
    /**
     * Delete a table, this could be internal or external.
     *
     * @summary Delete a table
     */
    tableDestroy(metadata: types.TableDestroyMetadataParam): Promise<FetchResponse<200, types.TableDestroyResponse200>>;
    /**
     * Lookup a table, this could be internal or external.
     *
     * @summary Retrieve a table
     */
    tableGetById(metadata: types.TableGetByIdMetadataParam): Promise<FetchResponse<200, types.TableGetByIdResponse200>>;
    /**
     * Based on table properties (currently only name) search for tables. This could be an
     * internal or an external table.
     *
     * @summary Search for tables
     */
    tableSearch(body: types.TableSearchBodyParam, metadata: types.TableSearchMetadataParam): Promise<FetchResponse<200, types.TableSearchResponse200>>;
    /**
     * Create a user
     *
     */
    userCreate(body: types.UserCreateBodyParam): Promise<FetchResponse<200, types.UserCreateResponse200>>;
    /**
     * Update a user
     *
     */
    userUpdate(body: types.UserUpdateBodyParam, metadata: types.UserUpdateMetadataParam): Promise<FetchResponse<200, types.UserUpdateResponse200>>;
    /**
     * Delete a user
     *
     */
    userDestroy(metadata: types.UserDestroyMetadataParam): Promise<FetchResponse<200, types.UserDestroyResponse200>>;
    /**
     * Retrieve a user
     *
     */
    userGetById(metadata: types.UserGetByIdMetadataParam): Promise<FetchResponse<200, types.UserGetByIdResponse200>>;
    /**
     * Based on user properties (currently only name) search for users.
     *
     * @summary Search for users
     */
    userSearch(body: types.UserSearchBodyParam): Promise<FetchResponse<200, types.UserSearchResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
