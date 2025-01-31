import { Link, useParams, useNavigate } from "react-router-dom";
import { getfirePlaceById, deletefirePlace } from "../../models/firePlace";
import { useState, useEffect } from "react";

import React from "react";

export default function firePlaceView() {
  const { id } = useParams();
  const [firePlace, setfirePlace] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getfirePlaceById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setfirePlace(data.payload);
      setLoaded(true);
    }
  };

  const handleInput = (e) => {
    setFormData(e.target.value);
  };

  const handleButton = async (e) => {
    e.preventDefault();
    if (firePlace.name === formData) {
      const data = await deletefirePlace(id);
      if (data.status === 200) return navigate("/");
      return setInfo(data.message);
    }
    setInfo("Špatny vstup");
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded == null) {
    return (
      <>
        <p>firePlace gone </p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>firePlace loading</p>
      </>
    );
  }

  return (
    <>
      <p>{firePlace.name}</p>
      <p>{firePlace.temperature}</p>
      <p>{firePlace.type}</p>
      <form>
        <input
          type="text"
          placeholder="Enter light name"
          onChange={handleInput}
        />
        <button onClick={handleButton}>Delete</button>
        <p>{info}</p>
      </form>
      <Link to={"/"}>
        <button>Go home</button>
      </Link>
      <Link to={`/update-firePlace/${id}`}>
        <button>update</button>
      </Link>
    </>
  );
}
