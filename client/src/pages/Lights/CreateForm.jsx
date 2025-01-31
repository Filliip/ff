import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createLights } from "../../models/lights";

export default function CreateLightsForm() {
  const [formData, setFormData] = useState();
  const [info, setinfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const data = await createLights(formData);
    if (data.status === 201) return navigate(`/created-lights/${data.payload._id}`);
    setinfo(data.message);
  };

  const handleInput = (e) => {

    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleButton = (e) => {
    e.preventDefault(); 
    postForm();
  };

  return (
    <>
      <h1>Create new Lights</h1>
      <form>
        <input type ="text" name="name" placeholder="Enter name" required onChange={handleInput}/>
        <input type ="number" name="temperature" placeholder="Enter temperature" required onChange={handleInput}/>
        <input type ="text" name="type" placeholder="Enter type" required onChange={handleInput}/>
        <button onClick={handleButton}>Create new lights</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
