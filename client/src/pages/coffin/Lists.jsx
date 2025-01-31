import { getAllCoffin } from "../../models/coffin";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ListCells from "./ListCells";

export default function Lists() {
  const [coffin, setCoffin] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllCoffin();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setLoaded(true);
      setCoffin(data.payload);
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
      <h1>Coffins:</h1>
      {lights.map((coffin, index) => (
        <ListCells key={index} {...coffin}/>
      ))}
      <Link to={"/"}>
        <button>Go back</button>
      </Link>
    </>
  );
}
