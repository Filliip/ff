import { Link, useParams, useNavigate } from "react-router-dom";
import { getLightsById, deleteLights } from "../../models/lights";
import { useState, useEffect } from "react";

import React from "react";

export default function View() {
  const { id } = useParams();
  const [lights, setLights] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getLightsById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setLights(data.payload);
      setLoaded(true);
    }
  };

  const handleInput = (e) => {
    setFormData(e.target.value);
  };

  const handleButton = async (e) => {
    e.preventDefault();
    if (lights.name === formData) {
      const data = await deleteLights(id);
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
        <p>Lights gone </p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Lights loading</p>
      </>
    );
  }

  return (
    <>
      <p>{lights.name}</p>
      <p>{lights.temperature}</p>
      <p>{lights.type}</p>
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
      <Link to={`/update-lights/${id}`}>
        <button>update</button>
      </Link>
    </>
  );
}
