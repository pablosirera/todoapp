import { NgModule } from '@angular/core';
import { FinishedPipe } from './finished/finished';
import { CapitalizePipe } from './capitalize/capitalize';

@NgModule({
	declarations: [
	  FinishedPipe,
    CapitalizePipe,
	],
	imports: [],
	exports: [
	  FinishedPipe,
    CapitalizePipe,
	]
})
export class PipesModule {}
