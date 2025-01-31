import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCoffinById, updateCoffin } from "../../models/coffin";

export default function Update() {
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

  const postForm = async () => {
    const data = await updateCoffin(id, formData);
    if (data.status === 200) return navigate(`/coffin/${data.payload._id}`);
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
        <p>coffins gone </p>
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
      <h1>Create new Coffins</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
          defaultValue={coffin.name}
        />
        <input
          type="text"
          name="material"
          placeholder="Enter material"
          required
          onChange={handleInput}
          defaultValue={coffin.material}
        />
        <input
          type="text"
          name="type"
          placeholder="Enter type"
          required
          onChange={handleInput}
          defaultValue={coffin.type}
        />
        <button onClick={handleButton}>Update coffins</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
