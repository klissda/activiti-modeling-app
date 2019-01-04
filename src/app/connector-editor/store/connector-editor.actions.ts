 /*!
 * @license
 * Copyright 2018 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import {
    EntityDialogForm,
    GetConnectorAttemptAction,
    UploadFileAttemptPayload,
    Connector,
    ConnectorContent
} from 'ama-sdk';

export interface ValidateConnectorPayload {
    connectorId: string;
    connectorContent: ConnectorContent;
    action: Action;
}

export const VALIDATE_CONNECTOR_ATTEMPT = '[Connector] Validate attempt';
export class ValidateConnectorAttemptAction implements Action {
    readonly type = VALIDATE_CONNECTOR_ATTEMPT;
    constructor(public payload: ValidateConnectorPayload) {}
}

export const CHANGE_CONNECTOR_CONTENT = '[Connector] Content change';
export class ChangeConnectorContent implements Action {
    readonly type = CHANGE_CONNECTOR_CONTENT;
    constructor() {}
}

export interface UpdateConnectorPayload {
    connectorId: string;
    applicationId: string;
    form: Partial<EntityDialogForm>;
}

export interface ConnectorDialogPayload {
    applicationId: string;
    connector?: Connector;
}

export const SHOW_CONNECTORS = '[Conectors] Show the list';
export class ShowConnectorsAction implements Action {
    readonly type = SHOW_CONNECTORS;
    constructor(public applicationId: string) {}
}

export const GET_CONNECTORS_ATTEMPT = '[Conectors] Get attempt';
export class GetConnectorsAttemptAction implements Action {
    readonly type = GET_CONNECTORS_ATTEMPT;
    constructor(public applicationId: string) {}
}

export const GET_CONNECTORS_SUCCESS = '[Conectors] Get success';
export class GetConnectorsSuccessAction implements Action {
    readonly type = GET_CONNECTORS_SUCCESS;
    constructor(public connectors: Connector[]) {}
}

export const GET_CONNECTOR_SUCCESS = '[Conector] Get success';
export class GetConnectorSuccessAction implements Action {
    readonly type = GET_CONNECTOR_SUCCESS;
    constructor(public connector: Connector, public connectorContent: ConnectorContent) {}
}

export const CREATE_CONNECTOR_ATTEMPT = '[Connector] Create attempt';
export class CreateConnectorAttemptAction implements Action {
    readonly type = CREATE_CONNECTOR_ATTEMPT;
    constructor(public payload: Partial<EntityDialogForm>) {}
}

export const CREATE_CONNECTOR_SUCCESS = '[Connector] Create success';
export class CreateConnectorSuccessAction implements Action {
    readonly type = CREATE_CONNECTOR_SUCCESS;
    constructor(public connector: Connector) {}
}

export const UPDATE_CONNECTOR_CONTENT_ATTEMPT = '[Connector] Update content attempt';
export class UpdateConnectorContentAttemptAction implements Action {
    readonly type = UPDATE_CONNECTOR_CONTENT_ATTEMPT;
    constructor(public payload: ConnectorContent) {}
}

export const UPDATE_CONNECTOR_SUCCESS = '[Connector] Update success';
export class UpdateConnectorSuccessAction implements Action {
    readonly type = UPDATE_CONNECTOR_SUCCESS;
    constructor(public connector: Update<Partial<Connector>>) {}
}

export const DELETE_CONNECTOR_ATTEMPT = '[Connector] Delete attempt';
export class DeleteConnectorAttemptAction implements Action {
    readonly type = DELETE_CONNECTOR_ATTEMPT;
    constructor(public connectorId: string) {}
}

export const DELETE_CONNECTOR_SUCCESS = '[Connector] Delete success';
export class DeleteConnectorSuccessAction implements Action {
    readonly type = DELETE_CONNECTOR_SUCCESS;
    constructor(public connectorId: string) {}
}

export const UPLOAD_CONNECTOR_ATTEMPT = '[Connector] Upload file';
export class UploadConnectorAttemptAction implements Action {
    readonly type = UPLOAD_CONNECTOR_ATTEMPT;
    constructor(public payload: UploadFileAttemptPayload) {}
}

export const DOWNLOAD_CONNECTOR = '[Connector] Download connector';
export class DownloadConnectorAction implements Action {
    readonly type = DOWNLOAD_CONNECTOR;
    constructor() {}
}

export type ConnectorActions =
    | ShowConnectorsAction
    | UploadConnectorAttemptAction
    | GetConnectorsAttemptAction
    | GetConnectorsSuccessAction
    | GetConnectorAttemptAction
    | GetConnectorSuccessAction
    | CreateConnectorAttemptAction
    | CreateConnectorSuccessAction
    | UpdateConnectorContentAttemptAction
    | UpdateConnectorSuccessAction
    | DeleteConnectorAttemptAction
    | DeleteConnectorSuccessAction;