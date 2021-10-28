import React, { useMemo, useState, createContext, useEffect } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestuarantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(`aakash`, restaurants);

  const retrieveRestaurants = () => {
    setLoading(true);

    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((result) => {
          setLoading(false);
          setRestaurants(result);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
          console.log(`error`, err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
