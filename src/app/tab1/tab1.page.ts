import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Post } from '../models/Post';
import { firestore } from 'firebase';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  postToShow: Post[] = [];

  constructor(private data: DataService) {
    //load data
    this.data.getAllPosts().subscribe(res => {
      // iterate over the res to fix createdOn format
      for (let i = 0; i < res.length; i++) {
        let post = res[i];
        let co: any = post.createdOn;
        post.createdOn = new firestore.Timestamp(
          co.seconds,
          co.nanoseconds
        ).toDate();
      }

      this.postToShow = res;
    });
  }
}
