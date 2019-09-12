import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  allPosts: Observable<Post[]>;
  postCollection: AngularFirestoreCollection<Post>;

  constructor(private fb: AngularFirestore) {
    this.postCollection = fb.collection<Post>('posts');

    // read all the messages from database and populate local array
    this.allPosts = this.postCollection.valueChanges();
  }

  public savePost(post: Post) {
    var item = Object.assign({}, post);
    this.postCollection.add(item);
  }

  public getAllPosts() {
    return this.allPosts;
  }
}
