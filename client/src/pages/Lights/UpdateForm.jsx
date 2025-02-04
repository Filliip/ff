import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getLightsById, updateLights } from "../../models/lights";

export default function Update() {
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

  const postForm = async () => {
    const data = await updateLights(id, formData);
    if (data.status === 200) return navigate(`/lights/${data.payload._id}`);
    setInfo(data.message);
  };

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButton = (e) => {
    e.preventDefault();
    postForm();
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
      <h1>Create new Lights</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
          defaultValue={lights.name}
        />
        <input
          type="number"
          name="temperature"
          placeholder="Enter temperature"
          required
          onChange={handleInput}
          defaultValue={lights.temperature}

        />
        <input
          type="text"
          name="type"
          placeholder="Enter type"
          required
          onChange={handleInput}
          defaultValue={lights.type}

        />
        <button onClick={handleButton}>Update Lights</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
