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
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from '@alfresco/adf-core';
import { AllowedCharactersDirective } from './directives/allowed-characters.directive';
import { HeaderBreadcrumbsComponent } from './header-breadcrumbs/header-breadcrumbs.component';
import { PaletteOverlayDirective } from './directives/palette-overlay.directive';
import { EntityDialogComponent } from './components/entity-dialog/entity-dialog.component';
import { EntityDialogContentComponent } from './components/entity-dialog/dialog-content/entity-dialog-content.component';
import { ActiveClassDirective } from './directives/active-class.directive';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule,
        CoreModule.forChild(),
    ],
    declarations: [
        HeaderBreadcrumbsComponent,
        EntityDialogComponent,
        EntityDialogContentComponent,
        AllowedCharactersDirective,
        PaletteOverlayDirective,
        ActiveClassDirective
    ],
    exports: [
        HeaderBreadcrumbsComponent,
        EntityDialogComponent,
        EntityDialogContentComponent,
        AllowedCharactersDirective,
        PaletteOverlayDirective,
        ActiveClassDirective
    ]
})
export class SharedModule { }
