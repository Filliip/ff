import { Link, useParams, useNavigate } from "react-router-dom";
import { getprogrammerById, deleteprogrammer } from "../../models/programmer";
import { useState, useEffect } from "react";

import React from "react";

export default function programmerViewView() {
  const { id } = useParams();
  const [programmer, setprogrammer] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getprogrammerById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setprogrammer(data.payload);
      setLoaded(true);
    }
  };

  const handleInput = (e) => {
    setFormData(e.target.value);
  };

  const handleButton = async (e) => {
    e.preventDefault();
    if (programmer.name === formData) {
      const data = await deleteprogrammer(id);
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
        <p>programmer gone </p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>programmer loading</p>
      </>
    );
  }

  return (
    <>
      <p>{programmer.name}</p>
      <p>{programmer.temperature}</p>
      <p>{programmer.type}</p>
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
      <Link to={`/update-programmer/${id}`}>
        <button>update</button>
      </Link>
    </>
  );
}
