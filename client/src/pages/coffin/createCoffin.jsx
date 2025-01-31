import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCoffin } from "../../models/coffin";

export default function CreateCoffinForm() {
  const [formData, setFormData] = useState();
  const [info, setinfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const data = await createCoffin(formData);
    if (data.status === 201)
      return navigate(`/created-coffin/${data.payload._id}`);
    setinfo(data.message);
  };

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButton = (e) => {
    e.preventDefault();
    postForm();
  };

  return (
    <>
      <h1>Create new Coffin</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          onChange={handleInput}
        />
        <input
          type="number"
          name="material"
          placeholder="Enter material"
          required
          onChange={handleInput}
        />
        <input
          type="text"
          name="type"
          placeholder="Enter type"
          required
          onChange={handleInput}
        />
        <button onClick={handleButton}>Create new coffin</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
