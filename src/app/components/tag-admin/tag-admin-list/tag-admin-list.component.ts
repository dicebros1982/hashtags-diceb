import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { TagsService } from "../../../services/tags.service";

import { ParentModel } from "../../../models/parent-model";
import { ChildModel } from "../../../models/child-model";

@Component({
  selector: "app-tag-admin-list",
  templateUrl: "./tag-admin-list.component.html",
  styleUrls: ["./tag-admin-list.component.css"]
})
export class TagAdminListComponent implements OnInit {
  private parents: Observable<ParentModel[]>;
  private children: Observable<ChildModel[]>;
  constructor(private tagsService: TagsService) {}

  ngOnInit() {
    this.parents = this.tagsService.getParents();
    this.children = this.tagsService.getChildren();
  }
}
