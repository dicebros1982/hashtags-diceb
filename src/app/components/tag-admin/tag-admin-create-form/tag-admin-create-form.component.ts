import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  NgForm,
  FormControl
} from "@angular/forms";
import { Observable } from "rxjs";
import { TagsService } from "../../../services/tags.service";
import { ParentModel } from "../../../models/parent-model";

@Component({
  selector: "app-tag-admin-create-form",
  templateUrl: "./tag-admin-create-form.component.html",
  styleUrls: ["./tag-admin-create-form.component.css"]
})
export class TagAdminCreateFormComponent implements OnInit {
  private tagForm: FormGroup;
  private parents: Observable<ParentModel[]>;

  private sections = {
    general: "general tags",
    trending: "trending tags",
    language: "language specific tags"
  };

  @ViewChild("formDirective", { static: false }) private formDirective: NgForm;

  constructor(private fb: FormBuilder, private tagService: TagsService) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.tagForm = this.fb.group({
      relation: ["parent"],
      name: [""],
      description: [""],
      section: [""],
      parentTag: [""]
    });
  }

  getParentsPerSection(section: string) {
    this.parents = this.tagService.getParentsPerSection(section);
  }
}
