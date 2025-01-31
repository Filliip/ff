import { getAllLights } from "../../models/lights";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ListCell from "./ListCell";

export default function List() {
  const [lights, setLights] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllLights();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setLoaded(true);
      setLights(data.payload);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Lights not found</p>
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
      <h1>Lights:</h1>
      {lights.map((light, index) => (
        <ListCell key={index} {...light}/>
      ))}
      <Link to={"/"}>
        <button>Go back</button>
      </Link>
    </>
  );
}
