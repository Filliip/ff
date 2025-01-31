import { Link, useParams, useNavigate } from "react-router-dom";
import { getCoffinById, deleteCoffin } from "../../models/coffin";
import { useState, useEffect } from "react";

import React from "react";

export default function View() {
  const { id } = useParams();
  const [coffin, setCoffin] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCoffinById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCoffin(data.payload);
      setLoaded(true);
    }
  };

  const handleInput = (e) => {
    setFormData(e.target.value);
  };

  const handleButton = async (e) => {
    e.preventDefault();
    if (coffin.name === formData) {
      const data = await deleteCoffin(id);
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
        <p>Coffin gone </p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Coffins loading</p>
      </>
    );
  }

  return (
    <>
      <p>{coffin.name}</p>
      <p>{coffin.material}</p>
      <p>{coffin.type}</p>
      <form>
        <input
          type="text"
          placeholder="Enter coffins name"
          onChange={handleInput}
        />
        <button onClick={handleButton}>Delete</button>
        <p>{info}</p>
      </form>
      <Link to={"/"}>
        <button>Go home</button>
      </Link>
      <Link to={`/update-coffin/${id}`}>
        <button>update</button>
      </Link>
    </>
  );
}
