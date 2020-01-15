import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  NgForm,
  FormControl
} from "@angular/forms";
import { TagsService } from "../../../services/tags.service";

@Component({
  selector: "app-tag-admin-create-form",
  templateUrl: "./tag-admin-create-form.component.html",
  styleUrls: ["./tag-admin-create-form.component.css"]
})
export class TagAdminCreateFormComponent implements OnInit {
  tagForm: FormGroup;

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
}
