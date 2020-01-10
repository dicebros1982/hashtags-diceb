import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";

const coreModules = [MaterialModule];

@NgModule({
  imports: [coreModules],
  exports: [coreModules]
})
export class CoreModule {}
