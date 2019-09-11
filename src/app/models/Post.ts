export class Post {
  // class attributes
  public message: string;
  public to: string;
  public from: string;
  public createdOn: Date;
  public imageUrl: string;

  //constructor
  constructor() {
    this.from = 'Mike';
    this.to = 'Everyone';
    this.createdOn = new Date(); //current date/time
  }

  //methods
}
