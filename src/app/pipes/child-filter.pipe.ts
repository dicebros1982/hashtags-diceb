import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "childFilter",
  pure: false
})
export class ChildFilterPipe implements PipeTransform {
  transform(value: any, parent: any): any {
    if (value) {
      return value.filter(child => child.parent === parent);
    }
  }
}
