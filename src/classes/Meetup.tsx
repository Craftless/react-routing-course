export class Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;

  constructor(
    title: string,
    image: string,
    address: string,
    description: string,
    id: string
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.address = address;
    this.description = description;
  }
}

export class MeetupData {
  title: string;
  image: string;
  address: string;
  description: string;

  constructor(
    title: string,
    image: string,
    address: string,
    description: string,
  ) {
    this.title = title;
    this.image = image;
    this.address = address;
    this.description = description;
  }
}
