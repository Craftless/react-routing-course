import { useState, createContext, ReactNode } from "react";
import { Meetup } from "../classes/Meetup";

// interface Favourites {
//   favourites: Meetup[],
//   totalFavourites: string,
// }

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
});

function FavouritesContextProvider({ children }: { children: ReactNode }) {
  const [userFavourites, setUserFavourites] = useState<Meetup[]>([]);

  function addFavouriteHandler(favourite: Meetup) {
    setUserFavourites((current) => {
      return [...current, favourite];
    });
  }

  function removeFavouriteHandler(meetupId: string) {
    setUserFavourites((current) => {
      return current.filter((item) => {
        return item.id !== meetupId;
      });
    });
  }

  function itemIsFavouriteHandler(meetupId: string) {
    return userFavourites.some((meetup) => {
      meetup.id === meetupId;
    });
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {" "}
      {children}
    </FavouritesContext.Provider>
  );
}
