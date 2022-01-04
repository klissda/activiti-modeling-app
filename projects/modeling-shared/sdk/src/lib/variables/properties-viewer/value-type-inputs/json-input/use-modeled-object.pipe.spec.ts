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

import { CodeEditorService } from '../../../../code-editor/services/code-editor-service.service';
import { ModelingJSONSchemaService } from '../../../../services/modeling-json-schema.service';
import { UseModeledObjectPipe } from './use-modeled-object.pipe';

describe('UseModeledObjectPipe', () => {
    let pipe: UseModeledObjectPipe;
    let modelingJSONSchemaService: ModelingJSONSchemaService;

    beforeEach(() => {
        modelingJSONSchemaService = new ModelingJSONSchemaService(new CodeEditorService(), []);
        pipe = new UseModeledObjectPipe(modelingJSONSchemaService);
    });

    it('return false if not model is provided', () => {
        expect(pipe.transform(null)).toBeFalsy();
        expect(pipe.transform(undefined)).toBeFalsy();
    });

    it('return false if model has no properties', () => {
        expect(pipe.transform({})).toBeFalsy();
    });

    it('return false if model properties are empty', () => {
        expect(pipe.transform({ properties: {} })).toBeFalsy();
    });

    it('return true if model has properties', () => {
        expect(pipe.transform({ properties: { name: { type: 'string' } } })).toBeTruthy();
    });

});