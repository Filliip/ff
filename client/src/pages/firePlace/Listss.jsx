import { getAllfirePlace } from "../../models/firePlace";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ListCell from "./ListCell";

export default function firePlaceLists() {
  const [firePlace, setfirePlace] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllfirePlace();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setLoaded(true);
      setfirePlace(data.payload);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>firePlace not found</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Light are loading...</p>
      </>
    );
  }

  return (
    <>
      <h1>firePlace:</h1>
      {firePlace.map((light, index) => (
        <ListCell key={index} {...light}/>
      ))}
      <Link to={"/"}>
        <button>Go back</button>
      </Link>
    </>
  );
}
