import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

interface MeetupProps {
  image: string;
  title: string;
  address: string;
  description: string;
}

interface Props {
  meetup: MeetupProps;
  id: string;
}

function MeetupItem({ meetup, id }: Props) {
  const { image, title, address, description }: MeetupProps = meetup;
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favourites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
