import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getprogrammerById, updateprogrammer } from "../../models/programmer";

export default function UpdateProgrammer() {
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

  const postForm = async () => {
    const data = await updateprogrammer(id, formData);
    if (data.status === 200) return navigate(`/programmer/${data.payload._id}`);
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
      <h1>Create new programmer</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
          defaultValue={programmer.name}
        />
        <input
          type="number"
          name="temperature"
          placeholder="Enter temperature"
          required
          onChange={handleInput}
          defaultValue={programmer.temperature}

        />
        <input
          type="text"
          name="type"
          placeholder="Enter type"
          required
          onChange={handleInput}
          defaultValue={programmer.type}

        />
        <button onClick={handleButton}>Update programmer</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
