declare const AppCreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly description: "The name of the app.";
                readonly type: "string";
            };
            readonly url: {
                readonly description: "The URL by which the app is accessed, this must be URL encoded.";
                readonly type: "string";
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "x-budibase-app-id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["x-budibase-app-id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly description: "The name of the app.";
                            readonly type: "string";
                        };
                        readonly url: {
                            readonly description: "The URL by which the app is accessed, this must be URL encoded.";
                            readonly type: "string";
                        };
                        readonly _id: {
                            readonly description: "The ID of the app.";
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly description: "The status of the app, stating it if is the development or published version.\n\n`development` `published`";
                            readonly type: "string";
                            readonly enum: readonly ["development", "published"];
                        };
                        readonly createdAt: {
                            readonly description: "States when the app was created, will be constant. Stored in ISO format.";
                            readonly type: "string";
                        };
                        readonly updatedAt: {
                            readonly description: "States the last time the app was updated - stored in ISO format.";
                            readonly type: "string";
                        };
                        readonly version: {
                            readonly description: "States the version of the Budibase client this app is currently based on.";
                            readonly type: "string";
                        };
                        readonly tenantId: {
                            readonly description: "In a multi-tenant environment this will state the tenant this app is within.";
                            readonly type: "string";
                        };
                        readonly lockedBy: {
                            readonly description: "The user this app is currently being built by.";
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly required: readonly ["_id", "name", "url", "status", "createdAt", "updatedAt", "version"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AppDestroy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly appId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["appId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly description: "The name of the app.";
                            readonly type: "string";
                        };
                        readonly url: {
                            readonly description: "The URL by which the app is accessed, this must be URL encoded.";
                            readonly type: "string";
                        };
                        readonly _id: {
                            readonly description: "The ID of the app.";
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly description: "The status of the app, stating it if is the development or published version.\n\n`development` `published`";
                            readonly type: "string";
                            readonly enum: readonly ["development", "published"];
                        };
                        readonly createdAt: {
                            readonly description: "States when the app was created, will be constant. Stored in ISO format.";
                            readonly type: "string";
                        };
                        readonly updatedAt: {
                            readonly description: "States the last time the app was updated - stored in ISO format.";
                            readonly type: "string";
                        };
                        readonly version: {
                            readonly description: "States the version of the Budibase client this app is currently based on.";
                            readonly type: "string";
                        };
                        readonly tenantId: {
                            readonly description: "In a multi-tenant environment this will state the tenant this app is within.";
                            readonly type: "string";
                        };
                        readonly lockedBy: {
                            readonly description: "The user this app is currently being built by.";
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly required: readonly ["_id", "name", "url", "status", "createdAt", "updatedAt", "version"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AppExport: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly encryptPassword: {
                readonly description: "An optional password used to encrypt the export.";
                readonly type: "string";
            };
            readonly excludeRows: {
                readonly description: "Set whether the internal table rows should be excluded from the export.";
                readonly type: "boolean";
            };
        };
        readonly required: readonly ["encryptPassword", "excludeRows"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly appId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["appId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "string";
            readonly format: "binary";
            readonly examples: readonly ["Tarball containing database and object store contents..."];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AppGetById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly appId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["appId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly description: "The name of the app.";
                            readonly type: "string";
                        };
                        readonly url: {
                            readonly description: "The URL by which the app is accessed, this must be URL encoded.";
                            readonly type: "string";
                        };
                        readonly _id: {
                            readonly description: "The ID of the app.";
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly description: "The status of the app, stating it if is the development or published version.\n\n`development` `published`";
                            readonly type: "string";
                            readonly enum: readonly ["development", "published"];
                        };
                        readonly createdAt: {
                            readonly description: "States when the app was created, will be constant. Stored in ISO format.";
                            readonly type: "string";
                        };
                        readonly updatedAt: {
                            readonly description: "States the last time the app was updated - stored in ISO format.";
                            readonly type: "string";
                        };
                        readonly version: {
                            readonly description: "States the version of the Budibase client this app is currently based on.";
                            readonly type: "string";
                        };
                        readonly tenantId: {
                            readonly description: "In a multi-tenant environment this will state the tenant this app is within.";
                            readonly type: "string";
                        };
                        readonly lockedBy: {
                            readonly description: "The user this app is currently being built by.";
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly required: readonly ["_id", "name", "url", "status", "createdAt", "updatedAt", "version"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AppImport: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly encryptedPassword: {
                readonly description: "Password for the export if it is encrypted.";
                readonly type: "string";
            };
            readonly appExport: {
                readonly description: "The app export to import.";
                readonly type: "string";
                readonly format: "binary";
            };
        };
        readonly required: readonly ["appExport"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly appId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["appId"];
        }];
    };
};
declare const AppPublish: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly appId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["appId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly _id: {
                            readonly description: "The ID of the app.";
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly description: "Status of the deployment, whether it succeeded or failed\n\n`SUCCESS` `FAILURE`";
                            readonly type: "string";
                            readonly enum: readonly ["SUCCESS", "FAILURE"];
                        };
                        readonly appUrl: {
                            readonly description: "The URL of the published app";
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["_id", "status", "appUrl"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AppSearch: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name to be used when searching - this will be used in a case insensitive starts with match.";
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly description: "The name of the app.";
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly description: "The URL by which the app is accessed, this must be URL encoded.";
                                readonly type: "string";
                            };
                            readonly _id: {
                                readonly description: "The ID of the app.";
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly description: "The status of the app, stating it if is the development or published version.\n\n`development` `published`";
                                readonly type: "string";
                                readonly enum: readonly ["development", "published"];
                            };
                            readonly createdAt: {
                                readonly description: "States when the app was created, will be constant. Stored in ISO format.";
                                readonly type: "string";
                            };
                            readonly updatedAt: {
                                readonly description: "States the last time the app was updated - stored in ISO format.";
                                readonly type: "string";
                            };
                            readonly version: {
                                readonly description: "States the version of the Budibase client this app is currently based on.";
                                readonly type: "string";
                            };
                            readonly tenantId: {
                                readonly description: "In a multi-tenant environment this will state the tenant this app is within.";
                                readonly type: "string";
                            };
                            readonly lockedBy: {
                                readonly description: "The user this app is currently being built by.";
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly required: readonly ["_id", "name", "url", "status", "createdAt", "updatedAt", "version"];
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AppUnpublish: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly appId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["appId"];
        }];
    };
};
declare const AppUpdate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly description: "The name of the app.";
                readonly type: "string";
            };
            readonly url: {
                readonly description: "The URL by which the app is accessed, this must be URL encoded.";
                readonly type: "string";
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly appId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["appId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly name: {
                            readonly description: "The name of the app.";
                            readonly type: "string";
                        };
                        readonly url: {
                            readonly description: "The URL by which the app is accessed, this must be URL encoded.";
                            readonly type: "string";
                        };
                        readonly _id: {
                            readonly description: "The ID of the app.";
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly description: "The status of the app, stating it if is the development or published version.\n\n`development` `published`";
                            readonly type: "string";
                            readonly enum: readonly ["development", "published"];
                        };
                        readonly createdAt: {
                            readonly description: "States when the app was created, will be constant. Stored in ISO format.";
                            readonly type: "string";
                        };
                        readonly updatedAt: {
                            readonly description: "States the last time the app was updated - stored in ISO format.";
                            readonly type: "string";
                        };
                        readonly version: {
                            readonly description: "States the version of the Budibase client this app is currently based on.";
                            readonly type: "string";
                        };
                        readonly tenantId: {
                            readonly description: "In a multi-tenant environment this will state the tenant this app is within.";
                            readonly type: "string";
                        };
                        readonly lockedBy: {
                            readonly description: "The user this app is currently being built by.";
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                    };
                    readonly required: readonly ["_id", "name", "url", "status", "createdAt", "updatedAt", "version"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const MetricsGet: {
    readonly response: {
        readonly "200": {
            readonly type: "string";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const QueryExecute: {
    readonly body: {
        readonly description: "The parameters required for executing a query.";
        readonly type: "object";
        readonly properties: {
            readonly parameters: {
                readonly type: "object";
                readonly description: "This contains the required parameters for the query, this depends on query type, setup and bindings.";
                readonly additionalProperties: true;
            };
            readonly pagination: {
                readonly type: "object";
                readonly description: "For supported query types (currently on REST) pagination can be performed using these properties.";
                readonly properties: {
                    readonly page: {
                        readonly type: "string";
                        readonly description: "The page which has been returned from a previous query.";
                    };
                    readonly limit: {
                        readonly type: "number";
                        readonly description: "The number of rows to return per page.";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly queryId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the query which this request is targeting.";
                };
            };
            readonly required: readonly ["queryId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-budibase-app-id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["x-budibase-app-id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly description: "The data response from the query.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly extra: {
                    readonly description: "Extra information that is not part of the main data, e.g. headers.";
                    readonly type: "object";
                    readonly properties: {
                        readonly headers: {
                            readonly description: "If carrying out a REST request, this will contain the response headers.";
                            readonly type: "object";
                            readonly additionalProperties: true;
                        };
                        readonly raw: {
                            readonly description: "The raw query response, as a string.";
                            readonly type: "string";
                        };
                    };
                };
                readonly pagination: {
                    readonly description: "If pagination is supported, this will contain the bookmark/anchor information for it.";
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const QuerySearch: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name to be used when searching - this will be used in a case insensitive starts with match.";
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "x-budibase-app-id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["x-budibase-app-id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly _id: {
                                readonly description: "The ID of the query.";
                                readonly type: "string";
                            };
                            readonly datasourceId: {
                                readonly description: "The ID of the datasource the query belongs to.";
                                readonly type: "string";
                            };
                            readonly parameters: {
                                readonly description: "The bindings which are required to perform this query.";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly fields: {
                                readonly description: "The fields that are used to perform this query, e.g. the sql statement";
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly queryVerb: {
                                readonly description: "The verb that describes this query.";
                                readonly enum: readonly ["create", "read", "update", "delete"];
                            };
                            readonly name: {
                                readonly description: "The name of the query.";
                                readonly type: "string";
                            };
                            readonly schema: {
                                readonly description: "The schema of the data returned when the query is executed.";
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly transformer: {
                                readonly description: "The JavaScript transformer function, applied after the query responds with data.";
                                readonly type: "string";
                            };
                            readonly readable: {
                                readonly description: "Whether the query has readable data.";
                                readonly type: "boolean";
                            };
                        };
                        readonly required: readonly ["name", "schema", "_id"];
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RoleAssign: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly appBuilder: {
                readonly type: "object";
                readonly properties: {
                    readonly appId: {
                        readonly description: "The app that the users should have app builder privileges granted for.";
                        readonly type: "string";
                    };
                };
                readonly description: "Allow setting users to builders per app.";
                readonly required: readonly ["appId"];
            };
            readonly builder: {
                readonly type: "boolean";
                readonly description: "Add/remove global builder permissions from the list of users.";
            };
            readonly admin: {
                readonly type: "boolean";
                readonly description: "Add/remove global admin permissions from the list of users.";
            };
            readonly role: {
                readonly type: "object";
                readonly properties: {
                    readonly roleId: {
                        readonly description: "The role ID, such as BASIC, ADMIN or a custom role ID.";
                        readonly type: "string";
                    };
                    readonly appId: {
                        readonly description: "The app that the role relates to.";
                        readonly type: "string";
                    };
                };
                readonly description: "Add/remove a per-app role, such as BASIC, ADMIN etc.";
                readonly required: readonly ["roleId", "appId"];
            };
            readonly userIds: {
                readonly description: "The user IDs to be updated to add/remove the specified roles.";
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly required: readonly ["userIds"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly userIds: {
                            readonly description: "The updated users' IDs";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly required: readonly ["userIds"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RoleUnAssign: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly appBuilder: {
                readonly type: "object";
                readonly properties: {
                    readonly appId: {
                        readonly description: "The app that the users should have app builder privileges granted for.";
                        readonly type: "string";
                    };
                };
                readonly description: "Allow setting users to builders per app.";
                readonly required: readonly ["appId"];
            };
            readonly builder: {
                readonly type: "boolean";
                readonly description: "Add/remove global builder permissions from the list of users.";
            };
            readonly admin: {
                readonly type: "boolean";
                readonly description: "Add/remove global admin permissions from the list of users.";
            };
            readonly role: {
                readonly type: "object";
                readonly properties: {
                    readonly roleId: {
                        readonly description: "The role ID, such as BASIC, ADMIN or a custom role ID.";
                        readonly type: "string";
                    };
                    readonly appId: {
                        readonly description: "The app that the role relates to.";
                        readonly type: "string";
                    };
                };
                readonly description: "Add/remove a per-app role, such as BASIC, ADMIN etc.";
                readonly required: readonly ["roleId", "appId"];
            };
            readonly userIds: {
                readonly description: "The user IDs to be updated to add/remove the specified roles.";
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly required: readonly ["userIds"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly userIds: {
                            readonly description: "The updated users' IDs";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly required: readonly ["userIds"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RowCreate: {
    readonly body: {
        readonly description: "The row to be created/updated, based on the table schema.";
        readonly type: "object";
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tableId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the table which this request is targeting.";
                };
            };
            readonly required: readonly ["tableId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-budibase-app-id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["x-budibase-app-id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly description: "The row to be created/updated, based on the table schema.";
                    readonly type: "object";
                    readonly additionalProperties: true;
                    readonly properties: {
                        readonly _id: {
                            readonly description: "The ID of the row.";
                            readonly type: "string";
                        };
                        readonly tableId: {
                            readonly description: "The ID of the table this row comes from.";
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["tableId", "_id"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RowDestroy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tableId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the table which this request is targeting.";
                };
                readonly rowId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the row which this request is targeting.";
                };
            };
            readonly required: readonly ["tableId", "rowId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-budibase-app-id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["x-budibase-app-id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly description: "The row to be created/updated, based on the table schema.";
                    readonly type: "object";
                    readonly additionalProperties: true;
                    readonly properties: {
                        readonly _id: {
                            readonly description: "The ID of the row.";
                            readonly type: "string";
                        };
                        readonly tableId: {
                            readonly description: "The ID of the table this row comes from.";
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["tableId", "_id"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RowGetById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tableId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the table which this request is targeting.";
                };
                readonly rowId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the row which this request is targeting.";
                };
            };
            readonly required: readonly ["tableId", "rowId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-budibase-app-id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["x-budibase-app-id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly description: "The row to be created/updated, based on the table schema.";
                    readonly type: "object";
                    readonly additionalProperties: true;
                    readonly properties: {
                        readonly _id: {
                            readonly description: "The ID of the row.";
                            readonly type: "string";
                        };
                        readonly tableId: {
                            readonly description: "The ID of the table this row comes from.";
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["tableId", "_id"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RowSearch: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly query: {
                readonly type: "object";
                readonly properties: {
                    readonly allOr: {
                        readonly type: "boolean";
                        readonly description: "Specifies that a row should be returned if it satisfies any of the specified options, rather than requiring it to fulfill all the search parameters. This defaults to false, meaning AND logic will be used.";
                    };
                    readonly string: {
                        readonly type: "object";
                        readonly description: "A map of field name to the string to search for, this will look for rows that have a value starting with the string value.";
                        readonly additionalProperties: {
                            readonly type: "string";
                            readonly description: "The value to search for in the column.";
                        };
                    };
                    readonly fuzzy: {
                        readonly type: "object";
                        readonly description: "Searches for a sub-string within a string column, e.g. searching for 'dib' will match 'Budibase'.";
                        readonly additionalProperties: true;
                    };
                    readonly range: {
                        readonly type: "object";
                        readonly description: "Searches within a range, the format of this must be in the format of an object with a \"low\" and \"high\" property.";
                        readonly additionalProperties: true;
                    };
                    readonly equal: {
                        readonly type: "object";
                        readonly description: "Searches for rows that have a column value that is exactly the value set.";
                        readonly additionalProperties: true;
                    };
                    readonly notEqual: {
                        readonly type: "object";
                        readonly description: "Searches for any row which does not contain the specified column value.";
                        readonly additionalProperties: true;
                    };
                    readonly empty: {
                        readonly type: "object";
                        readonly description: "Searches for rows which do not contain the specified column. The object should simply contain keys of the column names, these can map to any value.";
                        readonly additionalProperties: true;
                    };
                    readonly notEmpty: {
                        readonly type: "object";
                        readonly description: "Searches for rows which have the specified column.";
                        readonly additionalProperties: true;
                    };
                    readonly oneOf: {
                        readonly type: "object";
                        readonly description: "Searches for rows which have a column value that is any of the specified values. The format of this must be columnName -> [value1, value2].";
                        readonly additionalProperties: true;
                    };
                    readonly contains: {
                        readonly type: "object";
                        readonly description: "Searches for a value, or set of values in array column types (such as a multi-select). If an array of search options is provided then it must match all.";
                        readonly additionalProperties: true;
                    };
                    readonly notContains: {
                        readonly type: "object";
                        readonly description: "The logical inverse of contains. Only works on array column types. If an array of values is passed, the row must not match any of them to be returned in the response.";
                        readonly additionalProperties: true;
                    };
                    readonly containsAny: {
                        readonly type: "object";
                        readonly description: "As with the contains search, only works on array column types and searches for any of the provided values when given an array.";
                        readonly additionalProperties: true;
                    };
                };
            };
            readonly paginate: {
                readonly type: "boolean";
                readonly description: "Enables pagination, by default this is disabled.";
            };
            readonly bookmark: {
                readonly oneOf: readonly [{
                    readonly type: "string";
                }, {
                    readonly type: "integer";
                }];
                readonly description: "If retrieving another page, the bookmark from the previous request must be supplied.";
            };
            readonly limit: {
                readonly type: "integer";
                readonly description: "The maximum number of rows to return, useful when paginating, for internal tables this will be limited to 1000, for SQL tables it will be 5000.";
            };
            readonly sort: {
                readonly type: "object";
                readonly description: "A set of parameters describing the sort behaviour of the search.";
                readonly properties: {
                    readonly order: {
                        readonly type: "string";
                        readonly enum: readonly ["ascending", "descending"];
                        readonly description: "The order of the sort, by default this is ascending.";
                    };
                    readonly column: {
                        readonly type: "string";
                        readonly description: "The name of the column by which the rows will be sorted.";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly enum: readonly ["string", "number"];
                        readonly description: "Defines whether the column should be treated as a string or as numbers when sorting.";
                    };
                };
            };
        };
        readonly required: readonly ["query"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tableId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the table which this request is targeting.";
                };
            };
            readonly required: readonly ["tableId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-budibase-app-id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["x-budibase-app-id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data"];
            readonly properties: {
                readonly data: {
                    readonly description: "An array of rows, these will each contain an _id field which can be used to update or delete them.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
                readonly bookmark: {
                    readonly description: "If pagination in use, this should be provided.";
                    readonly oneOf: readonly [{
                        readonly type: "string";
                    }, {
                        readonly type: "integer";
                    }];
                };
                readonly hasNextPage: {
                    readonly description: "If pagination in use, this will determine if there is another page to fetch.";
                    readonly type: "boolean";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RowUpdate: {
    readonly body: {
        readonly description: "The row to be created/updated, based on the table schema.";
        readonly type: "object";
        readonly additionalProperties: true;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tableId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the table which this request is targeting.";
                };
                readonly rowId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the row which this request is targeting.";
                };
            };
            readonly required: readonly ["tableId", "rowId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-budibase-app-id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["x-budibase-app-id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly description: "The row to be created/updated, based on the table schema.";
                    readonly type: "object";
                    readonly additionalProperties: true;
                    readonly properties: {
                        readonly _id: {
                            readonly description: "The ID of the row.";
                            readonly type: "string";
                        };
                        readonly tableId: {
                            readonly description: "The ID of the table this row comes from.";
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["tableId", "_id"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TableCreate: {
    readonly body: {
        readonly description: "The table to be created/updated.";
        readonly type: "object";
        readonly required: readonly ["name", "schema"];
        readonly properties: {
            readonly name: {
                readonly description: "The name of the table.";
                readonly type: "string";
            };
            readonly primaryDisplay: {
                readonly type: "string";
                readonly description: "The name of the column which should be used in relationship tags when relating to this table.";
            };
            readonly schema: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly oneOf: readonly [{
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["link"];
                                readonly description: "A relationship column.";
                            };
                            readonly constraints: {
                                readonly type: "object";
                                readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: readonly ["string", "number", "object", "boolean"];
                                    };
                                    readonly presence: {
                                        readonly type: "boolean";
                                        readonly description: "Defines whether the column is required or not.";
                                    };
                                };
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the column.";
                            };
                            readonly autocolumn: {
                                readonly type: "boolean";
                                readonly description: "Defines whether the column is automatically generated.";
                            };
                            readonly fieldName: {
                                readonly type: "string";
                                readonly description: "The name of the column which a relationship column is related to in another table.";
                            };
                            readonly tableId: {
                                readonly type: "string";
                                readonly description: "The ID of the table which a relationship column is related to.";
                            };
                            readonly relationshipType: {
                                readonly type: "string";
                                readonly enum: readonly ["one-to-many", "many-to-one", "many-to-many"];
                                readonly description: "Defines the type of relationship that this column will be used for.";
                            };
                            readonly through: {
                                readonly type: "string";
                                readonly description: "When using a SQL table that contains many to many relationships this defines the table the relationships are linked through.";
                            };
                            readonly foreignKey: {
                                readonly type: "string";
                                readonly description: "When using a SQL table that contains a one to many relationship this defines the foreign key.";
                            };
                            readonly throughFrom: {
                                readonly type: "string";
                                readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for this table.";
                            };
                            readonly throughTo: {
                                readonly type: "string";
                                readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for the related table.";
                            };
                        };
                    }, {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["formula"];
                                readonly description: "A formula column.";
                            };
                            readonly constraints: {
                                readonly type: "object";
                                readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: readonly ["string", "number", "object", "boolean"];
                                    };
                                    readonly presence: {
                                        readonly type: "boolean";
                                        readonly description: "Defines whether the column is required or not.";
                                    };
                                };
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the column.";
                            };
                            readonly autocolumn: {
                                readonly type: "boolean";
                                readonly description: "Defines whether the column is automatically generated.";
                            };
                            readonly formula: {
                                readonly type: "string";
                                readonly description: "Defines a Handlebars or JavaScript formula to use, note that Javascript formulas are expected to be provided in the base64 format.";
                            };
                            readonly formulaType: {
                                readonly type: "string";
                                readonly enum: readonly ["static", "dynamic"];
                                readonly description: "Defines whether this is a static or dynamic formula.";
                            };
                        };
                    }, {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["string", "longform", "options", "number", "boolean", "array", "datetime", "attachment", "attachment_single", "link", "formula", "auto", "json", "internal", "barcodeqr", "bigint", "bb_reference"];
                                readonly description: "Defines the type of the column, most explain themselves, a link column is a relationship.";
                            };
                            readonly constraints: {
                                readonly type: "object";
                                readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: readonly ["string", "number", "object", "boolean"];
                                    };
                                    readonly presence: {
                                        readonly type: "boolean";
                                        readonly description: "Defines whether the column is required or not.";
                                    };
                                };
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the column.";
                            };
                            readonly autocolumn: {
                                readonly type: "boolean";
                                readonly description: "Defines whether the column is automatically generated.";
                            };
                        };
                    }];
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "x-budibase-app-id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["x-budibase-app-id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly description: "The table to be created/updated.";
                    readonly type: "object";
                    readonly required: readonly ["name", "schema", "_id"];
                    readonly properties: {
                        readonly name: {
                            readonly description: "The name of the table.";
                            readonly type: "string";
                        };
                        readonly primaryDisplay: {
                            readonly type: "string";
                            readonly description: "The name of the column which should be used in relationship tags when relating to this table.";
                        };
                        readonly schema: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["link"];
                                            readonly description: "A relationship column.\n\n`link`";
                                        };
                                        readonly constraints: {
                                            readonly type: "object";
                                            readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["string", "number", "object", "boolean"];
                                                    readonly description: "`string` `number` `object` `boolean`";
                                                };
                                                readonly presence: {
                                                    readonly type: "boolean";
                                                    readonly description: "Defines whether the column is required or not.";
                                                };
                                            };
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the column.";
                                        };
                                        readonly autocolumn: {
                                            readonly type: "boolean";
                                            readonly description: "Defines whether the column is automatically generated.";
                                        };
                                        readonly fieldName: {
                                            readonly type: "string";
                                            readonly description: "The name of the column which a relationship column is related to in another table.";
                                        };
                                        readonly tableId: {
                                            readonly type: "string";
                                            readonly description: "The ID of the table which a relationship column is related to.";
                                        };
                                        readonly relationshipType: {
                                            readonly type: "string";
                                            readonly enum: readonly ["one-to-many", "many-to-one", "many-to-many"];
                                            readonly description: "Defines the type of relationship that this column will be used for.\n\n`one-to-many` `many-to-one` `many-to-many`";
                                        };
                                        readonly through: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that contains many to many relationships this defines the table the relationships are linked through.";
                                        };
                                        readonly foreignKey: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that contains a one to many relationship this defines the foreign key.";
                                        };
                                        readonly throughFrom: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for this table.";
                                        };
                                        readonly throughTo: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for the related table.";
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["formula"];
                                            readonly description: "A formula column.\n\n`formula`";
                                        };
                                        readonly constraints: {
                                            readonly type: "object";
                                            readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["string", "number", "object", "boolean"];
                                                    readonly description: "`string` `number` `object` `boolean`";
                                                };
                                                readonly presence: {
                                                    readonly type: "boolean";
                                                    readonly description: "Defines whether the column is required or not.";
                                                };
                                            };
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the column.";
                                        };
                                        readonly autocolumn: {
                                            readonly type: "boolean";
                                            readonly description: "Defines whether the column is automatically generated.";
                                        };
                                        readonly formula: {
                                            readonly type: "string";
                                            readonly description: "Defines a Handlebars or JavaScript formula to use, note that Javascript formulas are expected to be provided in the base64 format.";
                                        };
                                        readonly formulaType: {
                                            readonly type: "string";
                                            readonly enum: readonly ["static", "dynamic"];
                                            readonly description: "Defines whether this is a static or dynamic formula.\n\n`static` `dynamic`";
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["string", "longform", "options", "number", "boolean", "array", "datetime", "attachment", "attachment_single", "link", "formula", "auto", "json", "internal", "barcodeqr", "bigint", "bb_reference"];
                                            readonly description: "Defines the type of the column, most explain themselves, a link column is a relationship.\n\n`string` `longform` `options` `number` `boolean` `array` `datetime` `attachment` `attachment_single` `link` `formula` `auto` `json` `internal` `barcodeqr` `bigint` `bb_reference`";
                                        };
                                        readonly constraints: {
                                            readonly type: "object";
                                            readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["string", "number", "object", "boolean"];
                                                    readonly description: "`string` `number` `object` `boolean`";
                                                };
                                                readonly presence: {
                                                    readonly type: "boolean";
                                                    readonly description: "Defines whether the column is required or not.";
                                                };
                                            };
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the column.";
                                        };
                                        readonly autocolumn: {
                                            readonly type: "boolean";
                                            readonly description: "Defines whether the column is automatically generated.";
                                        };
                                    };
                                }];
                            };
                        };
                        readonly _id: {
                            readonly description: "The ID of the table.";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TableDestroy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tableId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the table which this request is targeting.";
                };
            };
            readonly required: readonly ["tableId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-budibase-app-id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["x-budibase-app-id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly description: "The table to be created/updated.";
                    readonly type: "object";
                    readonly required: readonly ["name", "schema", "_id"];
                    readonly properties: {
                        readonly name: {
                            readonly description: "The name of the table.";
                            readonly type: "string";
                        };
                        readonly primaryDisplay: {
                            readonly type: "string";
                            readonly description: "The name of the column which should be used in relationship tags when relating to this table.";
                        };
                        readonly schema: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["link"];
                                            readonly description: "A relationship column.\n\n`link`";
                                        };
                                        readonly constraints: {
                                            readonly type: "object";
                                            readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["string", "number", "object", "boolean"];
                                                    readonly description: "`string` `number` `object` `boolean`";
                                                };
                                                readonly presence: {
                                                    readonly type: "boolean";
                                                    readonly description: "Defines whether the column is required or not.";
                                                };
                                            };
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the column.";
                                        };
                                        readonly autocolumn: {
                                            readonly type: "boolean";
                                            readonly description: "Defines whether the column is automatically generated.";
                                        };
                                        readonly fieldName: {
                                            readonly type: "string";
                                            readonly description: "The name of the column which a relationship column is related to in another table.";
                                        };
                                        readonly tableId: {
                                            readonly type: "string";
                                            readonly description: "The ID of the table which a relationship column is related to.";
                                        };
                                        readonly relationshipType: {
                                            readonly type: "string";
                                            readonly enum: readonly ["one-to-many", "many-to-one", "many-to-many"];
                                            readonly description: "Defines the type of relationship that this column will be used for.\n\n`one-to-many` `many-to-one` `many-to-many`";
                                        };
                                        readonly through: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that contains many to many relationships this defines the table the relationships are linked through.";
                                        };
                                        readonly foreignKey: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that contains a one to many relationship this defines the foreign key.";
                                        };
                                        readonly throughFrom: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for this table.";
                                        };
                                        readonly throughTo: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for the related table.";
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["formula"];
                                            readonly description: "A formula column.\n\n`formula`";
                                        };
                                        readonly constraints: {
                                            readonly type: "object";
                                            readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["string", "number", "object", "boolean"];
                                                    readonly description: "`string` `number` `object` `boolean`";
                                                };
                                                readonly presence: {
                                                    readonly type: "boolean";
                                                    readonly description: "Defines whether the column is required or not.";
                                                };
                                            };
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the column.";
                                        };
                                        readonly autocolumn: {
                                            readonly type: "boolean";
                                            readonly description: "Defines whether the column is automatically generated.";
                                        };
                                        readonly formula: {
                                            readonly type: "string";
                                            readonly description: "Defines a Handlebars or JavaScript formula to use, note that Javascript formulas are expected to be provided in the base64 format.";
                                        };
                                        readonly formulaType: {
                                            readonly type: "string";
                                            readonly enum: readonly ["static", "dynamic"];
                                            readonly description: "Defines whether this is a static or dynamic formula.\n\n`static` `dynamic`";
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["string", "longform", "options", "number", "boolean", "array", "datetime", "attachment", "attachment_single", "link", "formula", "auto", "json", "internal", "barcodeqr", "bigint", "bb_reference"];
                                            readonly description: "Defines the type of the column, most explain themselves, a link column is a relationship.\n\n`string` `longform` `options` `number` `boolean` `array` `datetime` `attachment` `attachment_single` `link` `formula` `auto` `json` `internal` `barcodeqr` `bigint` `bb_reference`";
                                        };
                                        readonly constraints: {
                                            readonly type: "object";
                                            readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["string", "number", "object", "boolean"];
                                                    readonly description: "`string` `number` `object` `boolean`";
                                                };
                                                readonly presence: {
                                                    readonly type: "boolean";
                                                    readonly description: "Defines whether the column is required or not.";
                                                };
                                            };
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the column.";
                                        };
                                        readonly autocolumn: {
                                            readonly type: "boolean";
                                            readonly description: "Defines whether the column is automatically generated.";
                                        };
                                    };
                                }];
                            };
                        };
                        readonly _id: {
                            readonly description: "The ID of the table.";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TableGetById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tableId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the table which this request is targeting.";
                };
            };
            readonly required: readonly ["tableId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-budibase-app-id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["x-budibase-app-id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly description: "The table to be created/updated.";
                    readonly type: "object";
                    readonly required: readonly ["name", "schema", "_id"];
                    readonly properties: {
                        readonly name: {
                            readonly description: "The name of the table.";
                            readonly type: "string";
                        };
                        readonly primaryDisplay: {
                            readonly type: "string";
                            readonly description: "The name of the column which should be used in relationship tags when relating to this table.";
                        };
                        readonly schema: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["link"];
                                            readonly description: "A relationship column.\n\n`link`";
                                        };
                                        readonly constraints: {
                                            readonly type: "object";
                                            readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["string", "number", "object", "boolean"];
                                                    readonly description: "`string` `number` `object` `boolean`";
                                                };
                                                readonly presence: {
                                                    readonly type: "boolean";
                                                    readonly description: "Defines whether the column is required or not.";
                                                };
                                            };
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the column.";
                                        };
                                        readonly autocolumn: {
                                            readonly type: "boolean";
                                            readonly description: "Defines whether the column is automatically generated.";
                                        };
                                        readonly fieldName: {
                                            readonly type: "string";
                                            readonly description: "The name of the column which a relationship column is related to in another table.";
                                        };
                                        readonly tableId: {
                                            readonly type: "string";
                                            readonly description: "The ID of the table which a relationship column is related to.";
                                        };
                                        readonly relationshipType: {
                                            readonly type: "string";
                                            readonly enum: readonly ["one-to-many", "many-to-one", "many-to-many"];
                                            readonly description: "Defines the type of relationship that this column will be used for.\n\n`one-to-many` `many-to-one` `many-to-many`";
                                        };
                                        readonly through: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that contains many to many relationships this defines the table the relationships are linked through.";
                                        };
                                        readonly foreignKey: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that contains a one to many relationship this defines the foreign key.";
                                        };
                                        readonly throughFrom: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for this table.";
                                        };
                                        readonly throughTo: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for the related table.";
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["formula"];
                                            readonly description: "A formula column.\n\n`formula`";
                                        };
                                        readonly constraints: {
                                            readonly type: "object";
                                            readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["string", "number", "object", "boolean"];
                                                    readonly description: "`string` `number` `object` `boolean`";
                                                };
                                                readonly presence: {
                                                    readonly type: "boolean";
                                                    readonly description: "Defines whether the column is required or not.";
                                                };
                                            };
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the column.";
                                        };
                                        readonly autocolumn: {
                                            readonly type: "boolean";
                                            readonly description: "Defines whether the column is automatically generated.";
                                        };
                                        readonly formula: {
                                            readonly type: "string";
                                            readonly description: "Defines a Handlebars or JavaScript formula to use, note that Javascript formulas are expected to be provided in the base64 format.";
                                        };
                                        readonly formulaType: {
                                            readonly type: "string";
                                            readonly enum: readonly ["static", "dynamic"];
                                            readonly description: "Defines whether this is a static or dynamic formula.\n\n`static` `dynamic`";
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["string", "longform", "options", "number", "boolean", "array", "datetime", "attachment", "attachment_single", "link", "formula", "auto", "json", "internal", "barcodeqr", "bigint", "bb_reference"];
                                            readonly description: "Defines the type of the column, most explain themselves, a link column is a relationship.\n\n`string` `longform` `options` `number` `boolean` `array` `datetime` `attachment` `attachment_single` `link` `formula` `auto` `json` `internal` `barcodeqr` `bigint` `bb_reference`";
                                        };
                                        readonly constraints: {
                                            readonly type: "object";
                                            readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["string", "number", "object", "boolean"];
                                                    readonly description: "`string` `number` `object` `boolean`";
                                                };
                                                readonly presence: {
                                                    readonly type: "boolean";
                                                    readonly description: "Defines whether the column is required or not.";
                                                };
                                            };
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the column.";
                                        };
                                        readonly autocolumn: {
                                            readonly type: "boolean";
                                            readonly description: "Defines whether the column is automatically generated.";
                                        };
                                    };
                                }];
                            };
                        };
                        readonly _id: {
                            readonly description: "The ID of the table.";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TableSearch: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name to be used when searching - this will be used in a case insensitive starts with match.";
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "x-budibase-app-id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["x-budibase-app-id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly description: "The table to be created/updated.";
                        readonly type: "object";
                        readonly required: readonly ["name", "schema", "_id"];
                        readonly properties: {
                            readonly name: {
                                readonly description: "The name of the table.";
                                readonly type: "string";
                            };
                            readonly primaryDisplay: {
                                readonly type: "string";
                                readonly description: "The name of the column which should be used in relationship tags when relating to this table.";
                            };
                            readonly schema: {
                                readonly type: "object";
                                readonly additionalProperties: {
                                    readonly oneOf: readonly [{
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: readonly ["link"];
                                                readonly description: "A relationship column.\n\n`link`";
                                            };
                                            readonly constraints: {
                                                readonly type: "object";
                                                readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                                readonly properties: {
                                                    readonly type: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["string", "number", "object", "boolean"];
                                                        readonly description: "`string` `number` `object` `boolean`";
                                                    };
                                                    readonly presence: {
                                                        readonly type: "boolean";
                                                        readonly description: "Defines whether the column is required or not.";
                                                    };
                                                };
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "The name of the column.";
                                            };
                                            readonly autocolumn: {
                                                readonly type: "boolean";
                                                readonly description: "Defines whether the column is automatically generated.";
                                            };
                                            readonly fieldName: {
                                                readonly type: "string";
                                                readonly description: "The name of the column which a relationship column is related to in another table.";
                                            };
                                            readonly tableId: {
                                                readonly type: "string";
                                                readonly description: "The ID of the table which a relationship column is related to.";
                                            };
                                            readonly relationshipType: {
                                                readonly type: "string";
                                                readonly enum: readonly ["one-to-many", "many-to-one", "many-to-many"];
                                                readonly description: "Defines the type of relationship that this column will be used for.\n\n`one-to-many` `many-to-one` `many-to-many`";
                                            };
                                            readonly through: {
                                                readonly type: "string";
                                                readonly description: "When using a SQL table that contains many to many relationships this defines the table the relationships are linked through.";
                                            };
                                            readonly foreignKey: {
                                                readonly type: "string";
                                                readonly description: "When using a SQL table that contains a one to many relationship this defines the foreign key.";
                                            };
                                            readonly throughFrom: {
                                                readonly type: "string";
                                                readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for this table.";
                                            };
                                            readonly throughTo: {
                                                readonly type: "string";
                                                readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for the related table.";
                                            };
                                        };
                                    }, {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: readonly ["formula"];
                                                readonly description: "A formula column.\n\n`formula`";
                                            };
                                            readonly constraints: {
                                                readonly type: "object";
                                                readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                                readonly properties: {
                                                    readonly type: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["string", "number", "object", "boolean"];
                                                        readonly description: "`string` `number` `object` `boolean`";
                                                    };
                                                    readonly presence: {
                                                        readonly type: "boolean";
                                                        readonly description: "Defines whether the column is required or not.";
                                                    };
                                                };
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "The name of the column.";
                                            };
                                            readonly autocolumn: {
                                                readonly type: "boolean";
                                                readonly description: "Defines whether the column is automatically generated.";
                                            };
                                            readonly formula: {
                                                readonly type: "string";
                                                readonly description: "Defines a Handlebars or JavaScript formula to use, note that Javascript formulas are expected to be provided in the base64 format.";
                                            };
                                            readonly formulaType: {
                                                readonly type: "string";
                                                readonly enum: readonly ["static", "dynamic"];
                                                readonly description: "Defines whether this is a static or dynamic formula.\n\n`static` `dynamic`";
                                            };
                                        };
                                    }, {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: readonly ["string", "longform", "options", "number", "boolean", "array", "datetime", "attachment", "attachment_single", "link", "formula", "auto", "json", "internal", "barcodeqr", "bigint", "bb_reference"];
                                                readonly description: "Defines the type of the column, most explain themselves, a link column is a relationship.\n\n`string` `longform` `options` `number` `boolean` `array` `datetime` `attachment` `attachment_single` `link` `formula` `auto` `json` `internal` `barcodeqr` `bigint` `bb_reference`";
                                            };
                                            readonly constraints: {
                                                readonly type: "object";
                                                readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                                readonly properties: {
                                                    readonly type: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["string", "number", "object", "boolean"];
                                                        readonly description: "`string` `number` `object` `boolean`";
                                                    };
                                                    readonly presence: {
                                                        readonly type: "boolean";
                                                        readonly description: "Defines whether the column is required or not.";
                                                    };
                                                };
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "The name of the column.";
                                            };
                                            readonly autocolumn: {
                                                readonly type: "boolean";
                                                readonly description: "Defines whether the column is automatically generated.";
                                            };
                                        };
                                    }];
                                };
                            };
                            readonly _id: {
                                readonly description: "The ID of the table.";
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const TableUpdate: {
    readonly body: {
        readonly description: "The table to be created/updated.";
        readonly type: "object";
        readonly required: readonly ["name", "schema"];
        readonly properties: {
            readonly name: {
                readonly description: "The name of the table.";
                readonly type: "string";
            };
            readonly primaryDisplay: {
                readonly type: "string";
                readonly description: "The name of the column which should be used in relationship tags when relating to this table.";
            };
            readonly schema: {
                readonly type: "object";
                readonly additionalProperties: {
                    readonly oneOf: readonly [{
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["link"];
                                readonly description: "A relationship column.";
                            };
                            readonly constraints: {
                                readonly type: "object";
                                readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: readonly ["string", "number", "object", "boolean"];
                                    };
                                    readonly presence: {
                                        readonly type: "boolean";
                                        readonly description: "Defines whether the column is required or not.";
                                    };
                                };
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the column.";
                            };
                            readonly autocolumn: {
                                readonly type: "boolean";
                                readonly description: "Defines whether the column is automatically generated.";
                            };
                            readonly fieldName: {
                                readonly type: "string";
                                readonly description: "The name of the column which a relationship column is related to in another table.";
                            };
                            readonly tableId: {
                                readonly type: "string";
                                readonly description: "The ID of the table which a relationship column is related to.";
                            };
                            readonly relationshipType: {
                                readonly type: "string";
                                readonly enum: readonly ["one-to-many", "many-to-one", "many-to-many"];
                                readonly description: "Defines the type of relationship that this column will be used for.";
                            };
                            readonly through: {
                                readonly type: "string";
                                readonly description: "When using a SQL table that contains many to many relationships this defines the table the relationships are linked through.";
                            };
                            readonly foreignKey: {
                                readonly type: "string";
                                readonly description: "When using a SQL table that contains a one to many relationship this defines the foreign key.";
                            };
                            readonly throughFrom: {
                                readonly type: "string";
                                readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for this table.";
                            };
                            readonly throughTo: {
                                readonly type: "string";
                                readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for the related table.";
                            };
                        };
                    }, {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["formula"];
                                readonly description: "A formula column.";
                            };
                            readonly constraints: {
                                readonly type: "object";
                                readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: readonly ["string", "number", "object", "boolean"];
                                    };
                                    readonly presence: {
                                        readonly type: "boolean";
                                        readonly description: "Defines whether the column is required or not.";
                                    };
                                };
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the column.";
                            };
                            readonly autocolumn: {
                                readonly type: "boolean";
                                readonly description: "Defines whether the column is automatically generated.";
                            };
                            readonly formula: {
                                readonly type: "string";
                                readonly description: "Defines a Handlebars or JavaScript formula to use, note that Javascript formulas are expected to be provided in the base64 format.";
                            };
                            readonly formulaType: {
                                readonly type: "string";
                                readonly enum: readonly ["static", "dynamic"];
                                readonly description: "Defines whether this is a static or dynamic formula.";
                            };
                        };
                    }, {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["string", "longform", "options", "number", "boolean", "array", "datetime", "attachment", "attachment_single", "link", "formula", "auto", "json", "internal", "barcodeqr", "bigint", "bb_reference"];
                                readonly description: "Defines the type of the column, most explain themselves, a link column is a relationship.";
                            };
                            readonly constraints: {
                                readonly type: "object";
                                readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                readonly properties: {
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: readonly ["string", "number", "object", "boolean"];
                                    };
                                    readonly presence: {
                                        readonly type: "boolean";
                                        readonly description: "Defines whether the column is required or not.";
                                    };
                                };
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the column.";
                            };
                            readonly autocolumn: {
                                readonly type: "boolean";
                                readonly description: "Defines whether the column is automatically generated.";
                            };
                        };
                    }];
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tableId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the table which this request is targeting.";
                };
            };
            readonly required: readonly ["tableId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly "x-budibase-app-id": {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the app which this request is targeting.";
                };
            };
            readonly required: readonly ["x-budibase-app-id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly description: "The table to be created/updated.";
                    readonly type: "object";
                    readonly required: readonly ["name", "schema", "_id"];
                    readonly properties: {
                        readonly name: {
                            readonly description: "The name of the table.";
                            readonly type: "string";
                        };
                        readonly primaryDisplay: {
                            readonly type: "string";
                            readonly description: "The name of the column which should be used in relationship tags when relating to this table.";
                        };
                        readonly schema: {
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["link"];
                                            readonly description: "A relationship column.\n\n`link`";
                                        };
                                        readonly constraints: {
                                            readonly type: "object";
                                            readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["string", "number", "object", "boolean"];
                                                    readonly description: "`string` `number` `object` `boolean`";
                                                };
                                                readonly presence: {
                                                    readonly type: "boolean";
                                                    readonly description: "Defines whether the column is required or not.";
                                                };
                                            };
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the column.";
                                        };
                                        readonly autocolumn: {
                                            readonly type: "boolean";
                                            readonly description: "Defines whether the column is automatically generated.";
                                        };
                                        readonly fieldName: {
                                            readonly type: "string";
                                            readonly description: "The name of the column which a relationship column is related to in another table.";
                                        };
                                        readonly tableId: {
                                            readonly type: "string";
                                            readonly description: "The ID of the table which a relationship column is related to.";
                                        };
                                        readonly relationshipType: {
                                            readonly type: "string";
                                            readonly enum: readonly ["one-to-many", "many-to-one", "many-to-many"];
                                            readonly description: "Defines the type of relationship that this column will be used for.\n\n`one-to-many` `many-to-one` `many-to-many`";
                                        };
                                        readonly through: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that contains many to many relationships this defines the table the relationships are linked through.";
                                        };
                                        readonly foreignKey: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that contains a one to many relationship this defines the foreign key.";
                                        };
                                        readonly throughFrom: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for this table.";
                                        };
                                        readonly throughTo: {
                                            readonly type: "string";
                                            readonly description: "When using a SQL table that utilises a through table, this defines the primary key in the through table for the related table.";
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["formula"];
                                            readonly description: "A formula column.\n\n`formula`";
                                        };
                                        readonly constraints: {
                                            readonly type: "object";
                                            readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["string", "number", "object", "boolean"];
                                                    readonly description: "`string` `number` `object` `boolean`";
                                                };
                                                readonly presence: {
                                                    readonly type: "boolean";
                                                    readonly description: "Defines whether the column is required or not.";
                                                };
                                            };
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the column.";
                                        };
                                        readonly autocolumn: {
                                            readonly type: "boolean";
                                            readonly description: "Defines whether the column is automatically generated.";
                                        };
                                        readonly formula: {
                                            readonly type: "string";
                                            readonly description: "Defines a Handlebars or JavaScript formula to use, note that Javascript formulas are expected to be provided in the base64 format.";
                                        };
                                        readonly formulaType: {
                                            readonly type: "string";
                                            readonly enum: readonly ["static", "dynamic"];
                                            readonly description: "Defines whether this is a static or dynamic formula.\n\n`static` `dynamic`";
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly enum: readonly ["string", "longform", "options", "number", "boolean", "array", "datetime", "attachment", "attachment_single", "link", "formula", "auto", "json", "internal", "barcodeqr", "bigint", "bb_reference"];
                                            readonly description: "Defines the type of the column, most explain themselves, a link column is a relationship.\n\n`string` `longform` `options` `number` `boolean` `array` `datetime` `attachment` `attachment_single` `link` `formula` `auto` `json` `internal` `barcodeqr` `bigint` `bb_reference`";
                                        };
                                        readonly constraints: {
                                            readonly type: "object";
                                            readonly description: "A constraint can be applied to the column which will be validated against when a row is saved.";
                                            readonly properties: {
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["string", "number", "object", "boolean"];
                                                    readonly description: "`string` `number` `object` `boolean`";
                                                };
                                                readonly presence: {
                                                    readonly type: "boolean";
                                                    readonly description: "Defines whether the column is required or not.";
                                                };
                                            };
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the column.";
                                        };
                                        readonly autocolumn: {
                                            readonly type: "boolean";
                                            readonly description: "Defines whether the column is automatically generated.";
                                        };
                                    };
                                }];
                            };
                        };
                        readonly _id: {
                            readonly description: "The ID of the table.";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UserCreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly description: "The email address of the user, this must be unique.";
                readonly type: "string";
            };
            readonly password: {
                readonly description: "The password of the user if using password based login - this will never be returned. This can be left out of subsequent requests (updates) and will be enriched back into the user structure.";
                readonly type: "string";
            };
            readonly status: {
                readonly description: "The status of the user, if they are active.";
                readonly type: "string";
                readonly enum: readonly ["active"];
            };
            readonly firstName: {
                readonly description: "The first name of the user";
                readonly type: "string";
            };
            readonly lastName: {
                readonly description: "The last name of the user";
                readonly type: "string";
            };
            readonly forceResetPassword: {
                readonly description: "If set to true forces the user to reset their password on first login.";
                readonly type: "boolean";
            };
            readonly builder: {
                readonly description: "Describes if the user is a builder user or not. This field can only be set on a business or enterprise license.";
                readonly type: "object";
                readonly properties: {
                    readonly global: {
                        readonly description: "If set to true the user will be able to build any app in the system.";
                        readonly type: "boolean";
                    };
                };
            };
            readonly admin: {
                readonly description: "Describes if the user is an admin user or not. This field can only be set on a business or enterprise license.";
                readonly type: "object";
                readonly properties: {
                    readonly global: {
                        readonly description: "If set to true the user will be able to administrate the system.";
                        readonly type: "boolean";
                    };
                };
            };
            readonly roles: {
                readonly description: "Contains the roles of the user per app (assuming they are not a builder user). This field can only be set on a business or enterprise license.";
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                    readonly description: "A map of app ID (production app ID, minus the _dev component) to a role ID, e.g. ADMIN.";
                };
            };
        };
        readonly required: readonly ["email"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly email: {
                            readonly description: "The email address of the user, this must be unique.";
                            readonly type: "string";
                        };
                        readonly password: {
                            readonly description: "The password of the user if using password based login - this will never be returned. This can be left out of subsequent requests (updates) and will be enriched back into the user structure.";
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly description: "The status of the user, if they are active.\n\n`active`";
                            readonly type: "string";
                            readonly enum: readonly ["active"];
                        };
                        readonly firstName: {
                            readonly description: "The first name of the user";
                            readonly type: "string";
                        };
                        readonly lastName: {
                            readonly description: "The last name of the user";
                            readonly type: "string";
                        };
                        readonly forceResetPassword: {
                            readonly description: "If set to true forces the user to reset their password on first login.";
                            readonly type: "boolean";
                        };
                        readonly builder: {
                            readonly description: "Describes if the user is a builder user or not. This field can only be set on a business or enterprise license.";
                            readonly type: "object";
                            readonly properties: {
                                readonly global: {
                                    readonly description: "If set to true the user will be able to build any app in the system.";
                                    readonly type: "boolean";
                                };
                            };
                        };
                        readonly admin: {
                            readonly description: "Describes if the user is an admin user or not. This field can only be set on a business or enterprise license.";
                            readonly type: "object";
                            readonly properties: {
                                readonly global: {
                                    readonly description: "If set to true the user will be able to administrate the system.";
                                    readonly type: "boolean";
                                };
                            };
                        };
                        readonly roles: {
                            readonly description: "Contains the roles of the user per app (assuming they are not a builder user). This field can only be set on a business or enterprise license.";
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly description: "A map of app ID (production app ID, minus the _dev component) to a role ID, e.g. ADMIN.";
                            };
                        };
                        readonly _id: {
                            readonly description: "The ID of the user.";
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["email", "_id"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UserDestroy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the user which this request is targeting.";
                };
            };
            readonly required: readonly ["userId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly email: {
                            readonly description: "The email address of the user, this must be unique.";
                            readonly type: "string";
                        };
                        readonly password: {
                            readonly description: "The password of the user if using password based login - this will never be returned. This can be left out of subsequent requests (updates) and will be enriched back into the user structure.";
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly description: "The status of the user, if they are active.\n\n`active`";
                            readonly type: "string";
                            readonly enum: readonly ["active"];
                        };
                        readonly firstName: {
                            readonly description: "The first name of the user";
                            readonly type: "string";
                        };
                        readonly lastName: {
                            readonly description: "The last name of the user";
                            readonly type: "string";
                        };
                        readonly forceResetPassword: {
                            readonly description: "If set to true forces the user to reset their password on first login.";
                            readonly type: "boolean";
                        };
                        readonly builder: {
                            readonly description: "Describes if the user is a builder user or not. This field can only be set on a business or enterprise license.";
                            readonly type: "object";
                            readonly properties: {
                                readonly global: {
                                    readonly description: "If set to true the user will be able to build any app in the system.";
                                    readonly type: "boolean";
                                };
                            };
                        };
                        readonly admin: {
                            readonly description: "Describes if the user is an admin user or not. This field can only be set on a business or enterprise license.";
                            readonly type: "object";
                            readonly properties: {
                                readonly global: {
                                    readonly description: "If set to true the user will be able to administrate the system.";
                                    readonly type: "boolean";
                                };
                            };
                        };
                        readonly roles: {
                            readonly description: "Contains the roles of the user per app (assuming they are not a builder user). This field can only be set on a business or enterprise license.";
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly description: "A map of app ID (production app ID, minus the _dev component) to a role ID, e.g. ADMIN.";
                            };
                        };
                        readonly _id: {
                            readonly description: "The ID of the user.";
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["email", "_id"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UserGetById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the user which this request is targeting.";
                };
            };
            readonly required: readonly ["userId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly email: {
                            readonly description: "The email address of the user, this must be unique.";
                            readonly type: "string";
                        };
                        readonly password: {
                            readonly description: "The password of the user if using password based login - this will never be returned. This can be left out of subsequent requests (updates) and will be enriched back into the user structure.";
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly description: "The status of the user, if they are active.\n\n`active`";
                            readonly type: "string";
                            readonly enum: readonly ["active"];
                        };
                        readonly firstName: {
                            readonly description: "The first name of the user";
                            readonly type: "string";
                        };
                        readonly lastName: {
                            readonly description: "The last name of the user";
                            readonly type: "string";
                        };
                        readonly forceResetPassword: {
                            readonly description: "If set to true forces the user to reset their password on first login.";
                            readonly type: "boolean";
                        };
                        readonly builder: {
                            readonly description: "Describes if the user is a builder user or not. This field can only be set on a business or enterprise license.";
                            readonly type: "object";
                            readonly properties: {
                                readonly global: {
                                    readonly description: "If set to true the user will be able to build any app in the system.";
                                    readonly type: "boolean";
                                };
                            };
                        };
                        readonly admin: {
                            readonly description: "Describes if the user is an admin user or not. This field can only be set on a business or enterprise license.";
                            readonly type: "object";
                            readonly properties: {
                                readonly global: {
                                    readonly description: "If set to true the user will be able to administrate the system.";
                                    readonly type: "boolean";
                                };
                            };
                        };
                        readonly roles: {
                            readonly description: "Contains the roles of the user per app (assuming they are not a builder user). This field can only be set on a business or enterprise license.";
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly description: "A map of app ID (production app ID, minus the _dev component) to a role ID, e.g. ADMIN.";
                            };
                        };
                        readonly _id: {
                            readonly description: "The ID of the user.";
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["email", "_id"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UserSearch: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "The name to be used when searching - this will be used in a case insensitive starts with match.";
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly email: {
                                readonly description: "The email address of the user, this must be unique.";
                                readonly type: "string";
                            };
                            readonly password: {
                                readonly description: "The password of the user if using password based login - this will never be returned. This can be left out of subsequent requests (updates) and will be enriched back into the user structure.";
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly description: "The status of the user, if they are active.\n\n`active`";
                                readonly type: "string";
                                readonly enum: readonly ["active"];
                            };
                            readonly firstName: {
                                readonly description: "The first name of the user";
                                readonly type: "string";
                            };
                            readonly lastName: {
                                readonly description: "The last name of the user";
                                readonly type: "string";
                            };
                            readonly forceResetPassword: {
                                readonly description: "If set to true forces the user to reset their password on first login.";
                                readonly type: "boolean";
                            };
                            readonly builder: {
                                readonly description: "Describes if the user is a builder user or not. This field can only be set on a business or enterprise license.";
                                readonly type: "object";
                                readonly properties: {
                                    readonly global: {
                                        readonly description: "If set to true the user will be able to build any app in the system.";
                                        readonly type: "boolean";
                                    };
                                };
                            };
                            readonly admin: {
                                readonly description: "Describes if the user is an admin user or not. This field can only be set on a business or enterprise license.";
                                readonly type: "object";
                                readonly properties: {
                                    readonly global: {
                                        readonly description: "If set to true the user will be able to administrate the system.";
                                        readonly type: "boolean";
                                    };
                                };
                            };
                            readonly roles: {
                                readonly description: "Contains the roles of the user per app (assuming they are not a builder user). This field can only be set on a business or enterprise license.";
                                readonly type: "object";
                                readonly additionalProperties: {
                                    readonly type: "string";
                                    readonly description: "A map of app ID (production app ID, minus the _dev component) to a role ID, e.g. ADMIN.";
                                };
                            };
                            readonly _id: {
                                readonly description: "The ID of the user.";
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["email", "_id"];
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UserUpdate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly description: "The email address of the user, this must be unique.";
                readonly type: "string";
            };
            readonly password: {
                readonly description: "The password of the user if using password based login - this will never be returned. This can be left out of subsequent requests (updates) and will be enriched back into the user structure.";
                readonly type: "string";
            };
            readonly status: {
                readonly description: "The status of the user, if they are active.";
                readonly type: "string";
                readonly enum: readonly ["active"];
            };
            readonly firstName: {
                readonly description: "The first name of the user";
                readonly type: "string";
            };
            readonly lastName: {
                readonly description: "The last name of the user";
                readonly type: "string";
            };
            readonly forceResetPassword: {
                readonly description: "If set to true forces the user to reset their password on first login.";
                readonly type: "boolean";
            };
            readonly builder: {
                readonly description: "Describes if the user is a builder user or not. This field can only be set on a business or enterprise license.";
                readonly type: "object";
                readonly properties: {
                    readonly global: {
                        readonly description: "If set to true the user will be able to build any app in the system.";
                        readonly type: "boolean";
                    };
                };
            };
            readonly admin: {
                readonly description: "Describes if the user is an admin user or not. This field can only be set on a business or enterprise license.";
                readonly type: "object";
                readonly properties: {
                    readonly global: {
                        readonly description: "If set to true the user will be able to administrate the system.";
                        readonly type: "boolean";
                    };
                };
            };
            readonly roles: {
                readonly description: "Contains the roles of the user per app (assuming they are not a builder user). This field can only be set on a business or enterprise license.";
                readonly type: "object";
                readonly additionalProperties: {
                    readonly type: "string";
                    readonly description: "A map of app ID (production app ID, minus the _dev component) to a role ID, e.g. ADMIN.";
                };
            };
        };
        readonly required: readonly ["email"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly userId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the user which this request is targeting.";
                };
            };
            readonly required: readonly ["userId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly email: {
                            readonly description: "The email address of the user, this must be unique.";
                            readonly type: "string";
                        };
                        readonly password: {
                            readonly description: "The password of the user if using password based login - this will never be returned. This can be left out of subsequent requests (updates) and will be enriched back into the user structure.";
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly description: "The status of the user, if they are active.\n\n`active`";
                            readonly type: "string";
                            readonly enum: readonly ["active"];
                        };
                        readonly firstName: {
                            readonly description: "The first name of the user";
                            readonly type: "string";
                        };
                        readonly lastName: {
                            readonly description: "The last name of the user";
                            readonly type: "string";
                        };
                        readonly forceResetPassword: {
                            readonly description: "If set to true forces the user to reset their password on first login.";
                            readonly type: "boolean";
                        };
                        readonly builder: {
                            readonly description: "Describes if the user is a builder user or not. This field can only be set on a business or enterprise license.";
                            readonly type: "object";
                            readonly properties: {
                                readonly global: {
                                    readonly description: "If set to true the user will be able to build any app in the system.";
                                    readonly type: "boolean";
                                };
                            };
                        };
                        readonly admin: {
                            readonly description: "Describes if the user is an admin user or not. This field can only be set on a business or enterprise license.";
                            readonly type: "object";
                            readonly properties: {
                                readonly global: {
                                    readonly description: "If set to true the user will be able to administrate the system.";
                                    readonly type: "boolean";
                                };
                            };
                        };
                        readonly roles: {
                            readonly description: "Contains the roles of the user per app (assuming they are not a builder user). This field can only be set on a business or enterprise license.";
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "string";
                                readonly description: "A map of app ID (production app ID, minus the _dev component) to a role ID, e.g. ADMIN.";
                            };
                        };
                        readonly _id: {
                            readonly description: "The ID of the user.";
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["email", "_id"];
                };
            };
            readonly required: readonly ["data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { AppCreate, AppDestroy, AppExport, AppGetById, AppImport, AppPublish, AppSearch, AppUnpublish, AppUpdate, MetricsGet, QueryExecute, QuerySearch, RoleAssign, RoleUnAssign, RowCreate, RowDestroy, RowGetById, RowSearch, RowUpdate, TableCreate, TableDestroy, TableGetById, TableSearch, TableUpdate, UserCreate, UserDestroy, UserGetById, UserSearch, UserUpdate };
