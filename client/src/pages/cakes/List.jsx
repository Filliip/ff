import { getAllCakes } from "../../models/cakes";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ListCell from "./ListCell";

export default function List() {
  const [cakes, setCakes] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllCakes();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setLoaded(true);
      setCakes(data.payload);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Cakes not found</p>
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
      <h1>Cakes:</h1>
      {cakes.map((light, index) => (
        <ListCell key={index} {...light}/>
      ))}
      <Link to={"/"}>
        <button>Go back</button>
      </Link>
    </>
  );
}
