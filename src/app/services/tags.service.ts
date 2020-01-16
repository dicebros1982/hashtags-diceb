import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

import { ParentModel } from "../models/parent-model";
import { ChildModel } from "../models/child-model";

import { map } from "rxjs/operators";

@Injectable()
export class TagsService {
  private parentCollection: AngularFirestoreCollection<ParentModel>;
  private childrenCollection: AngularFirestoreCollection<ChildModel>;
  private parentsPerSectionCollection: AngularFirestoreCollection<ParentModel>;

  constructor(readonly afs: AngularFirestore) {
    this.parentCollection = this.afs.collection("parents");
    this.childrenCollection = this.afs.collection("children");
  }

  getParents() {
    return this.parentCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data() as ParentModel;
          return { id, ...data };
        })
      )
    );
  }
  getChildren() {
    return this.childrenCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data() as ChildModel;
          return { id, ...data };
        })
      )
    );
  }
  getParentsPerSection(section: string) {
    this.parentsPerSectionCollection = this.afs.collection("parents", ref =>
      ref.where("section", "==", section)
    );
    return this.parentsPerSectionCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data() as ParentModel;
          return { id, ...data };
        })
      )
    );
  }
  createParent(pushVal: Object) {
    console.log(pushVal);
  }

  createChild() {}
}
