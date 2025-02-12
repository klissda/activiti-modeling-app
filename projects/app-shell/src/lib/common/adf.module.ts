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

import { NgModule } from '@angular/core';

import { CoreModule, AppConfigService, DebugAppConfigService, TRANSLATION_PROVIDER } from '@alfresco/adf-core';
import { ProcessServicesCloudModule } from '@alfresco/adf-process-services-cloud';
@NgModule({
    imports: [
        CoreModule.forRoot(),
        ProcessServicesCloudModule
    ],
    exports: [ CoreModule, ProcessServicesCloudModule ],
    providers: [
        { provide: AppConfigService, useClass: DebugAppConfigService },
        { provide: TRANSLATION_PROVIDER, multi: true, useValue: { name: 'app', source: 'resources' } }
    ]
})
export class AdfModule {}
