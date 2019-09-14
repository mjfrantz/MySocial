import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from 'angularfire2/firestore';
import { Friend } from '../models/Friend';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  allPosts: Observable<Post[]>;
  postCollection: AngularFirestoreCollection<Post>;

  allFriends: Observable<Friend[]>;
  friendCollection: AngularFirestoreCollection<Friend>;

  constructor(private fb: AngularFirestore) {
    this.postCollection = fb.collection<Post>('posts');
    this.friendCollection = fb.collection<Friend>('friends');

    // read all the messages from database and populate local array
    this.allPosts = this.postCollection.valueChanges();
    //read all friends
    this.allFriends = this.friendCollection.valueChanges();
  }

  public savePost(post: Post) {
    var item = Object.assign({}, post);
    this.postCollection.add(item);
  }

  public getAllPosts() {
    return this.allPosts;
  }

  public saveFriend(theNewFriendObject: Friend) {
    var item = Object.assign({}, theNewFriendObject);
    this.friendCollection.add(item);
  }

  public getAllFriends() {
    //read all friends
    this.allFriends = this.friendCollection.valueChanges();
    return this.allFriends;
  }
}
