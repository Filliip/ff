import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getfirePlaceById, updatefirePlace } from "../../models/firePlace";

export default function UpdateFirePlace() {
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

  const postForm = async () => {
    const data = await updatefirePlace(id, formData);
    if (data.status === 200) return navigate(`/firePlace/${data.payload._id}`);
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
      <h1>Create new firePlace</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
          defaultValue={firePlace.name}
        />
        <input
          type="number"
          name="temperature"
          placeholder="Enter temperature"
          required
          onChange={handleInput}
          defaultValue={firePlace.temperature}

        />
        <input
          type="text"
          name="type"
          placeholder="Enter type"
          required
          onChange={handleInput}
          defaultValue={firePlace.type}

        />
        <button onClick={handleButton}>Update firePlace</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
