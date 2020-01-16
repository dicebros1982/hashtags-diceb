import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatExpansionModule } from "@angular/material/expansion";

const materialModules = [
  MatButtonModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatCardModule,
  MatSelectModule,
  MatRadioModule,
  MatExpansionModule
];

@NgModule({
  imports: [materialModules],
  exports: [materialModules]
})
export class MaterialModule {}
