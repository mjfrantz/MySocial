export class Friend {
  public name: string = ' '; // <- the actual name of the friend
  public belongsTo: string = ' '; // <- to specify that it belongs to my group

  constructor() {
    this.belongsTo = 'Mike';
  }
}
