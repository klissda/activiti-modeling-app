/*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
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

import { AmaState, GenericSaveModelCommand, ModelContentSerializer } from '@alfresco-dbp/modeling-shared/sdk';
import { TranslationService } from '@alfresco/adf-core';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UpdateProcessAttemptAction, ValidateProcessAttemptAction } from '../../store/process-editor.actions';

@Injectable()
export class SaveProcessCommand extends GenericSaveModelCommand {
    constructor(
        protected store: Store<AmaState>,
        protected serializer: ModelContentSerializer<string>,
        protected translationService: TranslationService
    ) {
        super(store, serializer, translationService);
    }

    protected ValidateAction = ValidateProcessAttemptAction;
    protected UpdateAction = UpdateProcessAttemptAction;
}