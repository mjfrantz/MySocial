import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Post } from '../models/Post';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  postToShow: Post[] = [];

  constructor(private data: DataService) {
    //load data
    this.postToShow = this.data.getAllPosts();
  }
}
