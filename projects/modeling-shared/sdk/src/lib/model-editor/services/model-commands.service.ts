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

import { Observable, zip } from 'rxjs';
import { take } from 'rxjs/operators';
import { MODEL_TYPE } from '../../api/types';
import { BasicModelCommands, ModelCommand } from '../commands/commands.interface';
import { ModelCommandCallback, ModelCommandCallbackEvent } from './model-command-callback';

interface EventMethod {
    eventName: string;
    callback: ModelCommandCallback;
}

export class ModelCommandsService {
    protected eventTarget: EventTarget;

    protected modelType: MODEL_TYPE;
    protected modelId$: Observable<string>;
    protected modelContent$: Observable<string>;
    // protected modelMetadata$: Observable<string>;

    protected commands: EventMethod[] = [];

    constructor() {
        this.eventTarget = new EventTarget();
    }

    public init(modelType: MODEL_TYPE, modelId$: Observable<string>, modelContent$: Observable<string>, modelMetadata$?: Observable<any>) {
        this.modelType = modelType;
        this.modelId$ = modelId$;
        this.modelContent$ = modelContent$;
        // this.modelMetadata$ = modelMetadata$;
    }

    public dispatchEvent(value: BasicModelCommands) {
        this.eventTarget.dispatchEvent(new ModelCommandCallbackEvent(value, this.modelType, this.modelId$, this.modelContent$));
    }

    public addEventListener(eventName: string, command: ModelCommand) {
        const callback = this.getCommandCallback(command);
        this.commands.push({ eventName, callback });
        this.eventTarget.addEventListener(eventName, callback);
    }

    public destroy() {
        this.commands.forEach(command => this.eventTarget.removeEventListener(command.eventName, command.callback));
    }

    private getCommandCallback(command: ModelCommand): ModelCommandCallback {
        return (event: ModelCommandCallbackEvent) => {
            zip(event.modelId$, event.modelContent$).pipe(take(1))
                .subscribe(([modelId, content]) => command.execute(event.modelType, modelId, content) );
        };
    }
}