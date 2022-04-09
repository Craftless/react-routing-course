import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";
import { Meetup } from "../../classes/Meetup";

function MeetupList({ meetups }: { meetups: Meetup[] }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup: any) => {
        return <MeetupItem key={meetup.id} meetup={meetup} />;
      })}
    </ul>
  );
}

export default MeetupList;
