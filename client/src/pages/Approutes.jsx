import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

import CreateCakesForm from "./cakes/CreateForm";
import Created from "./cakes/Created";
import List from "./cakes/List";
import View from "./cakes/View";
import UpdateForm from "./cakes/UpdateForm";

export default function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-cakes" element={<CreateCakesForm />} />
        <Route path="/created-cakes/:id" element={<Created />} />
        <Route path="/cakes" element={<List />} />
        <Route path="/cakes/:id" element={<View />} />
        <Route path="/update-cakes/:id" element={<UpdateForm />} />
      </Routes>
    </BrowserRouter>
  );
}
