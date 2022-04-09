import { useNavigate } from 'react-router-dom';
import { MeetupData } from "../classes/Meetup";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  const navigate = useNavigate();

  async function addMeetupHandler(meetup: MeetupData) {
    await fetch('https://react-meetup-course-a72de-default-rtdb.firebaseio.com/meetups.json', {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': "application/json"
      }
    });
    navigate('/');
    
  }

    
  return <section>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </section>
}

export default NewMeetupPage;