import { NgModule } from '@angular/core';
import { PendingPipe } from './pending/pending';
import { FinishedPipe } from './finished/finished';
import { CapitalizePipe } from './capitalize/capitalize';

@NgModule({
	declarations: [
	  PendingPipe,
	  FinishedPipe,
    CapitalizePipe,
	],
	imports: [],
	exports: [
	  PendingPipe,
	  FinishedPipe,
    CapitalizePipe,
	]
})
export class PipesModule {}
