import { Component } from '@angular/core';
import { Friend } from './../models/Friend';
import { DataService } from '../service/data.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  model: Friend = new Friend();
  friendsToDisplay: Friend[] = [];

  constructor(private data: DataService, private shared: SharedService) {
    data.getAllFriends().subscribe(list => {
      //clear the array of friends
      this.friendsToDisplay = [];

      //filter to see only friends
      for (let i = 0; i < list.length; i++) {
        let friend = list[i];
        if (friend.belongsTo == shared.userName) {
          this.friendsToDisplay.push(friend);
        }
      }

      //sort the array of friends
      this.friendsToDisplay = this.friendsToDisplay.sort((left, right) => {
        if (left.name.toLowerCase() < right.name.toLowerCase()) return -1;
        else return 1;
      });
    });
  }

  register() {
    //set the belongsTo to the models
    this.model.belongsTo = this.shared.userName;

    //send the object to data DataService
    this.data.saveFriend(this.model);
    // clear the form data
    this.model = new Friend();
  }

  unfriend(friendtoRemove: Friend) {
    // console.log('remove', friendtoRemove);
    this.data.removeFriend(friendtoRemove.fbId);
  }
}
