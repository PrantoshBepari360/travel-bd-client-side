import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Travel from '../Travel/Travel';

const BdTravel = () => {
  const [travels, setTravel] = useState([]);
  console.log(travels);

  useEffect(() => {
      fetch("https://creepy-alien-88782.herokuapp.com/Travels")
          .then((res) => res.json())
          .then((travel) => setTravel(travel));
  }, []);

  return (
      <div>
          <h2 className="py-5">BdTravel</h2>
          <div className="row mt-3">
              {travels.map((travel) => (
                  <Travel key={travel._id} travel={travel}></Travel>
              ))}
          </div>
      </div>
  );
};

export default BdTravel;