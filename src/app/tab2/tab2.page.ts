import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { DataService } from '../service/data.service';
import { Friend } from '../models/Friend';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  model: Post = new Post();
  allFriends: Friend[] = [];
  friendsToDisplay: any;

  constructor(private data: DataService, private shared: SharedService) {
    data.getAllFriends().subscribe(list => {
      //clear the array of friends
      this.friendsToDisplay = [];
      //filter
      for (let i = 0; i < list.length; i++) {
        let friend = list[i];
        if (friend.belongsTo == shared.userName) {
          this.friendsToDisplay.push(friend);
        }
      }
      //sort
      this.friendsToDisplay = this.friendsToDisplay.sort((left, right) => {
        if (left.name.toLowerCase() < right.name.toLowerCase()) return -1;
        else return 1;
      });
    });
  }

  post() {
    console.log('Save btn pressed');
    console.log(this.model);

    //assign default FROM
    this.model.from = this.shared.userName;

    //save the post data
    this.data.savePost(this.model);

    // clear the form
    this.model = new Post();
  }
}
