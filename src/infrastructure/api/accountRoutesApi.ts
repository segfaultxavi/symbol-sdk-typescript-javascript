/*
 * Copyright 2019 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Catapult REST Endpoints
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.16
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { AccountIds } from '../model/accountIds';
import { AccountInfoDTO } from '../model/accountInfoDTO';
import { AccountNamesDTO } from '../model/accountNamesDTO';
import { AccountRestrictionsInfoDTO } from '../model/accountRestrictionsInfoDTO';
import { MultisigAccountGraphInfoDTO } from '../model/multisigAccountGraphInfoDTO';
import { MultisigAccountInfoDTO } from '../model/multisigAccountInfoDTO';
import { TransactionInfoDTO } from '../model/transactionInfoDTO';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';

let defaultBasePath = 'http://localhost:3000';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AccountRoutesApiApiKeys {
}

export class AccountRoutesApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: AccountRoutesApiApiKeys, value: string) {
        (this.authentications as any)[AccountRoutesApiApiKeys[key]].apiKey = value;
    }

    /**
     * Returns the account information.
     * @summary Get account information
     * @param accountId The public key or address of the account.
     */
    public async getAccountInfo (accountId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: AccountInfoDTO;  }> {
        const localVarPath = this.basePath + '/account/{accountId}'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getAccountInfo.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: AccountInfoDTO;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "AccountInfoDTO");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Returns the multisig account information.
     * @summary Get multisig account information
     * @param accountId The public key or address of the account.
     */
    public async getAccountMultisig (accountId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: MultisigAccountInfoDTO;  }> {
        const localVarPath = this.basePath + '/account/{accountId}/multisig'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getAccountMultisig.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: MultisigAccountInfoDTO;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "MultisigAccountInfoDTO");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Returns the multisig account graph.
     * @summary Get multisig account graph information
     * @param accountId The public key or address of the account.
     */
    public async getAccountMultisigGraph (accountId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<MultisigAccountGraphInfoDTO>;  }> {
        const localVarPath = this.basePath + '/account/{accountId}/multisig/graph'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getAccountMultisigGraph.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<MultisigAccountGraphInfoDTO>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<MultisigAccountGraphInfoDTO>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Returns the account restrictions for a given account.
     * @summary Get the account restrictions
     * @param accountId The public key or address of the account.
     */
    public async getAccountRestrictions (accountId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: AccountRestrictionsInfoDTO;  }> {
        const localVarPath = this.basePath + '/account/{accountId}/restrictions/'
            .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'accountId' is not null or undefined
        if (accountId === null || accountId === undefined) {
            throw new Error('Required parameter accountId was null or undefined when calling getAccountRestrictions.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: AccountRestrictionsInfoDTO;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "AccountRestrictionsInfoDTO");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Returns the account restrictions for a given array of addresses.
     * @summary Get account restrictions for given array of addresses
     * @param accountIds 
     */
    public async getAccountRestrictionsFromAccounts (accountIds: AccountIds, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<AccountRestrictionsInfoDTO>;  }> {
        const localVarPath = this.basePath + '/account/restrictions';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'accountIds' is not null or undefined
        if (accountIds === null || accountIds === undefined) {
            throw new Error('Required parameter accountIds was null or undefined when calling getAccountRestrictionsFromAccounts.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(accountIds, "AccountIds")
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<AccountRestrictionsInfoDTO>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<AccountRestrictionsInfoDTO>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Returns the account information for an array of accounts.
     * @summary Get accounts information
     * @param accountIds 
     */
    public async getAccountsInfo (accountIds: AccountIds, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<AccountInfoDTO>;  }> {
        const localVarPath = this.basePath + '/account';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'accountIds' is not null or undefined
        if (accountIds === null || accountIds === undefined) {
            throw new Error('Required parameter accountIds was null or undefined when calling getAccountsInfo.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(accountIds, "AccountIds")
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<AccountInfoDTO>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<AccountInfoDTO>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Returns friendly names for accounts.
     * @summary Get readable names for a set of accountIds.
     * @param accountIds 
     */
    public async getAccountsNames (accountIds: AccountIds, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<AccountNamesDTO>;  }> {
        const localVarPath = this.basePath + '/account/names';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'accountIds' is not null or undefined
        if (accountIds === null || accountIds === undefined) {
            throw new Error('Required parameter accountIds was null or undefined when calling getAccountsNames.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(accountIds, "AccountIds")
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<AccountNamesDTO>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<AccountNamesDTO>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Gets an array of incoming transactions. A transaction is said to be incoming with respect to an account if the account is the recipient of the transaction. 
     * @summary Get incoming transactions
     * @param publicKey The public key of the account.
     * @param pageSize The number of transactions to return for each request.
     * @param id The transaction id up to which transactions are returned. 
     * @param ordering The ordering criteria: * -id - Descending order by id. * id - Ascending order by id. 
     */
    public async incomingTransactions (publicKey: string, pageSize?: number, id?: string, ordering?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<TransactionInfoDTO>;  }> {
        const localVarPath = this.basePath + '/account/{publicKey}/transactions/incoming'
            .replace('{' + 'publicKey' + '}', encodeURIComponent(String(publicKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'publicKey' is not null or undefined
        if (publicKey === null || publicKey === undefined) {
            throw new Error('Required parameter publicKey was null or undefined when calling incomingTransactions.');
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "string");
        }

        if (ordering !== undefined) {
            localVarQueryParameters['ordering'] = ObjectSerializer.serialize(ordering, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<TransactionInfoDTO>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<TransactionInfoDTO>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Gets an array of outgoing transactions. A transaction is said to be outgoing with respect to an account if the account is the sender of the transaction.
     * @summary Get outgoing transactions
     * @param publicKey The public key of the account.
     * @param pageSize The number of transactions to return for each request.
     * @param id The transaction id up to which transactions are returned. 
     * @param ordering The ordering criteria: * -id - Descending order by id. * id - Ascending order by id. 
     */
    public async outgoingTransactions (publicKey: string, pageSize?: number, id?: string, ordering?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<TransactionInfoDTO>;  }> {
        const localVarPath = this.basePath + '/account/{publicKey}/transactions/outgoing'
            .replace('{' + 'publicKey' + '}', encodeURIComponent(String(publicKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'publicKey' is not null or undefined
        if (publicKey === null || publicKey === undefined) {
            throw new Error('Required parameter publicKey was null or undefined when calling outgoingTransactions.');
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "string");
        }

        if (ordering !== undefined) {
            localVarQueryParameters['ordering'] = ObjectSerializer.serialize(ordering, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<TransactionInfoDTO>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<TransactionInfoDTO>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Gets an array of aggregate bonded transactions where the account is the sender or requires to cosign the transaction. 
     * @summary Get aggregate bonded transactions information
     * @param publicKey The public key of the account.
     * @param pageSize The number of transactions to return for each request.
     * @param id The transaction id up to which transactions are returned. 
     * @param ordering The ordering criteria. * -id - Descending order by id. * id - Ascending order by id. 
     */
    public async partialTransactions (publicKey: string, pageSize?: number, id?: string, ordering?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<TransactionInfoDTO>;  }> {
        const localVarPath = this.basePath + '/account/{publicKey}/transactions/partial'
            .replace('{' + 'publicKey' + '}', encodeURIComponent(String(publicKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'publicKey' is not null or undefined
        if (publicKey === null || publicKey === undefined) {
            throw new Error('Required parameter publicKey was null or undefined when calling partialTransactions.');
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "string");
        }

        if (ordering !== undefined) {
            localVarQueryParameters['ordering'] = ObjectSerializer.serialize(ordering, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<TransactionInfoDTO>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<TransactionInfoDTO>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Gets an array of transactions for which an account is the sender or receiver.
     * @summary Get confirmed transactions
     * @param publicKey The public key of the account.
     * @param pageSize The number of transactions to return for each request.
     * @param id The transaction id up to which transactions are returned. 
     * @param ordering The ordering criteria: * -id - Descending order by id. * id - Ascending order by id. 
     */
    public async transactions (publicKey: string, pageSize?: number, id?: string, ordering?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<TransactionInfoDTO>;  }> {
        const localVarPath = this.basePath + '/account/{publicKey}/transactions'
            .replace('{' + 'publicKey' + '}', encodeURIComponent(String(publicKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'publicKey' is not null or undefined
        if (publicKey === null || publicKey === undefined) {
            throw new Error('Required parameter publicKey was null or undefined when calling transactions.');
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "string");
        }

        if (ordering !== undefined) {
            localVarQueryParameters['ordering'] = ObjectSerializer.serialize(ordering, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<TransactionInfoDTO>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<TransactionInfoDTO>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
    /**
     * Gets the array of transactions not included in a block where an account is the sender or receiver. 
     * @summary Get unconfirmed transactions
     * @param publicKey The public key of the account.
     * @param pageSize The number of transactions to return for each request.
     * @param id The transaction id up to which transactions are returned. 
     * @param ordering The ordering criteria. * -id - Descending order by id. * id - Ascending order by id. 
     */
    public async unconfirmedTransactions (publicKey: string, pageSize?: number, id?: string, ordering?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<TransactionInfoDTO>;  }> {
        const localVarPath = this.basePath + '/account/{publicKey}/transactions/unconfirmed'
            .replace('{' + 'publicKey' + '}', encodeURIComponent(String(publicKey)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'publicKey' is not null or undefined
        if (publicKey === null || publicKey === undefined) {
            throw new Error('Required parameter publicKey was null or undefined when calling unconfirmedTransactions.');
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "number");
        }

        if (id !== undefined) {
            localVarQueryParameters['id'] = ObjectSerializer.serialize(id, "string");
        }

        if (ordering !== undefined) {
            localVarQueryParameters['ordering'] = ObjectSerializer.serialize(ordering, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<TransactionInfoDTO>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<TransactionInfoDTO>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve(body);
                    } else {
                        reject({
                            statusCode: response.statusCode,
                            statusMessage: response.statusMessage
                        });
                    }
                }
            });
        });
    }
}
