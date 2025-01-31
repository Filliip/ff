import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCakesById, updateCakes } from "../../models/cakes";

export default function Update() {
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

  const postForm = async () => {
    const data = await updateCakes(id, formData);
    if (data.status === 200) return navigate(`/cakes/${data.payload._id}`);
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
      <h1>Create new Cakes</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
          defaultValue={cakes.name}
        />
        <input
          type="number"
          name="temperature"
          placeholder="Enter temperature"
          required
          onChange={handleInput}
          defaultValue={cakes.temperature}

        />
        <input
          type="text"
          name="type"
          placeholder="Enter type"
          required
          onChange={handleInput}
          defaultValue={cakes.type}

        />
        <button onClick={handleButton}>Update Cakes</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
