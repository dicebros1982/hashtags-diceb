import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "parentFilter"
})
export class ParentFilterPipe implements PipeTransform {
  transform(value: any, section: string): any {
    if (value) {
      return value.filter(parent => parent.section === section);
    }
  }
}
