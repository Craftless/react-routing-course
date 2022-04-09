import MeetupList from "../components/meetups/MeetupList";
import { Meetup } from "../classes/Meetup";
import { useEffect, useState } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState<Meetup[]>();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-meetup-course-a72de-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups: Meetup[] = [];

        for (const key in data) {
          const meetup: Meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All meetups page</h1>
      { loadedMeetups !== (null || undefined) ? <MeetupList meetups={loadedMeetups as Meetup[]} /> : <p>You have no meetups. Try adding a new meetup.</p>}
    </section>
  );
}

export default AllMeetupsPage;
