import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBodyComponent } from './dialog-body.component';
import { CustomMaterialModule } from './../../custom_material_module/custom.material.module';

@NgModule({
    imports: [
        CommonModule,
        CustomMaterialModule
    ],
    declarations: [
        DialogBodyComponent
    ],
    exports: [
        DialogBodyComponent
    ],
    entryComponents: [DialogBodyComponent]
})
export class DialogBodyModule {
}
