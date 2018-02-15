import { NgModule } from '@angular/core';
import { MainHeaderComponent } from './main-header/main-header';
import { ButtonAddComponent } from './button-add/button-add';

@NgModule({
	declarations: [MainHeaderComponent,
    ButtonAddComponent],
	imports: [],
	exports: [MainHeaderComponent,
    ButtonAddComponent]
})
export class ComponentsModule {}
