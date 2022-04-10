import MeetupList from "../components/meetups/MeetupList";
import { Meetup } from "../classes/Meetup";
import { useEffect, useState } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadedMeetups, setLoadedMeetups] = useState<Meetup[]>();

  const fetchMeetups = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-meetup-course-a72de-default-rtdb.firebaseio.com/meetups.json"
      );

      if (!response.ok) throw new Error("Request Failed!");

      const data = await response.json();

      const meetups: Meetup[] = [];

      for (const key in data) {
        const meetup: Meetup = {
          id: key,
          ...data[key],
        };
        console.log(key);
        meetups.push(meetup);
      }
      setLoadedMeetups(meetups);
    } catch (error: any) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMeetups();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section>
        <p>Something went wrong.</p>
        <button
          onClick={() => {
            fetchMeetups();
          }}
        >
          Try again.
        </button>
      </section>
    );
  }

  return (
    <section>
      <h1>All meetups page</h1>
      {loadedMeetups !== (null || undefined) ? (
        <MeetupList meetups={loadedMeetups as Meetup[]} />
      ) : (
        <p>You have no meetups. Try adding a new meetup.</p>
      )}
    </section>
  );
}

export default AllMeetupsPage;
