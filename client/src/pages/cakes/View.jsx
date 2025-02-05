import { Link, useParams, useNavigate } from "react-router-dom";
import { getCakesById, deleteCakes } from "../../models/cakes";
import { useState, useEffect } from "react";

import React from "react";

export default function View() {
  const { id } = useParams();
  const [cakes, setCakes] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCakesById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCakes(data.payload);
      setLoaded(true);
    }
  };

  const handleInput = (e) => {
    setFormData(e.target.value);
  };

  const handleButton = async (e) => {
    e.preventDefault();
    if (cakes.name === formData) {
      const data = await deleteCakes(id);
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
        <p>Cakes gone </p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Cakes loading</p>
      </>
    );
  }

  return (
    <>
      <p>{cakes.name}</p>
      <p>{cakes.temperature}</p>
      <p>{cakes.type}</p>
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
      <Link to={`/update-cakes/${id}`}>
        <button>update</button>
      </Link>
    </>
  );
}
