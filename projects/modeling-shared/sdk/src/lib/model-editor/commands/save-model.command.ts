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

import { Store } from '@ngrx/store';
import { MODEL_TYPE } from '../../api/types';
import { AmaState } from '../../store/app.state';
import { ModelCommand, UpdateActionLike, ValidateActionLike } from './commands.interface';

export abstract class GenericSaveModelCommand implements ModelCommand {
    constructor(protected store: Store<AmaState>, protected translationService: any) {}

    protected abstract ValidateAction: ValidateActionLike;
    protected abstract UpdateAction: UpdateActionLike;

    execute(modelType: MODEL_TYPE, modelId: string, content: string, metadata?: any) {
        const ValidateAction = this.ValidateAction;
        const UpdateAction = this.UpdateAction;

        this.store.dispatch(new ValidateAction({
            title: this.translationService.instant('SDK.MODEL_EDITOR.DIALOG.CONFIRM_INVALID_MODEL_SAVE', { modelType }),
            modelId: modelId,
            modelContent: JSON.parse(content),
            action: new UpdateAction(JSON.parse(content))
        }));
    }
}