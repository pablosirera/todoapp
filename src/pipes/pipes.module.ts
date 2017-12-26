import { NgModule } from '@angular/core';
import { PendingPipe } from './pending/pending';
import { FinishedPipe } from './finished/finished';
@NgModule({
	declarations: [
	  PendingPipe,
	  FinishedPipe
	],
	imports: [],
	exports: [
	  PendingPipe,
	  FinishedPipe
	]
})
export class PipesModule {}
