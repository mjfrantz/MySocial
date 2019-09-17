import { SharedService } from '../service/shared.service';

export class Friend {
  public name: string = ' '; // <- the actual name of the friend
  public belongsTo: string = ' '; // <- to specify that it belongs to my group

  // Firebase id used to remove the object from db
  public fbId: string = '';

  constructor() {}
}
