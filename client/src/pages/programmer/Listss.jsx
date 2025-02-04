import { getAllprogrammer } from "../../models/programmer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ListCell from "./ListCell";

export default function ProgrammerList() {
  const [programmer, setprogrammer] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllprogrammer();
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setLoaded(true);
      setprogrammer(data.payload);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>programmer not found</p>
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
      <h1>programmer:</h1>
      {programmer.map((light, index) => (
        <ListCell key={index} {...light}/>
      ))}
      <Link to={"/"}>
        <button>Go back</button>
      </Link>
    </>
  );
}
