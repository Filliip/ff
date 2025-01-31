import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCakes } from "../../models/cakes";

export default function CreateCakesForm() {
  const [formData, setFormData] = useState();
  const [info, setinfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const data = await createCakes(formData);
    if (data.status === 201) return navigate(`/created-cakes/${data.payload._id}`);
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
      <h1>Create new Cakes</h1>
      <form>
        <input type ="text" name="name" placeholder="Enter name" required onChange={handleInput}/>
        <input type ="number" name="temperature" placeholder="Enter temperature" required onChange={handleInput}/>
        <input type ="text" name="type" placeholder="Enter type" required onChange={handleInput}/>
        <button onClick={handleButton}>Create new cakes</button>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
