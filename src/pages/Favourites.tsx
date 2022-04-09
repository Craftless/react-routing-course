import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";

function FavouritesPage() {
  const favouritesCtx = useContext(FavouritesContext);

  return (
    <section>
      {favouritesCtx.totalFavourites > 0 ? (
        <MeetupList meetups={favouritesCtx.favourites} />
      ) : (
        <p>You have no favourites.</p>
      )}
    </section>
  );
}

export default FavouritesPage;
