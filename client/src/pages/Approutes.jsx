import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";

import CreateLightsForm from "./Lights/CreateForm";
import Created from "./Lights/Created";
import List from "./Lights/List";
import View from "./Lights/View";
import UpdateForm from "./Lights/UpdateForm";

import CreateCoffinForm from "./coffin/CreateCoffin";
import Createds from "./coffin/Createds";
import ListCells from "./coffin/ListCells";
import Lists from "./coffin/Lists";
import Views from "./coffin/Views";
import UpdateForms from "./coffin/UpdateForms";

import CreatedProgrammer from "./programmer/Createdss";
import CreateprogrammerForm from "./programmer/createProgrammer";
import ProgrammerList from "./programmer/Listss";
import UpdateProgrammer from "./programmer/UpdateFormsss";
import programmerView from "./firePlace/Viewss";

import CreatedFirePlace from "./firePlace/Createdss";
import CreateFirePlaceForm from "./firePlace/createFirePlace";
import firePlaceLists from "./firePlace/Listss";
import UpdateFirePlace from "./firePlace/UpdateFormsss";
import firePlaceView from "./firePlace/Viewss";







export default function Approutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/create-lights" element ={<CreateLightsForm />}/>
        <Route path="/created-lights/:id" element ={<Created />}/>
        <Route path="/lights" element ={<List />}/>
        <Route path="/lights/:id" element ={<View />}/>
        <Route path="/update-lights/:id" element ={<UpdateForm />}/>

        <Route path="/create-coffin/" element ={<CreateCoffinForm />}/>
        <Route path="/createds-coffin/:id" element ={<Createds />}/>
        <Route path="/coffin/" element ={<Lists />}/>
        <Route path="/update-coffin/:id" element ={<UpdateForms />}/>
        <Route path="/update-coffin/:id" element ={<Views />}/>

        <Route path="/create-programmer/" element ={<CreateprogrammerForm />}/>
        <Route path="/createds-programmer/:id" element ={<CreatedProgrammer />}/>
        <Route path="/programmer/" element ={<ProgrammerList />}/>
        <Route path="/update-programmer/:id" element ={<UpdateProgrammer />}/>
        <Route path="/update-programmer/:id" element ={<programmerView />}/>

        <Route path="/create-firePlace/" element ={<CreatedFirePlace />}/>
        <Route path="/createds-firePlace/:id" element ={<CreateFirePlaceForm />}/>
        <Route path="/firePlace/" element ={<firePlaceLists />}/>
        <Route path="/update-firePlace/:id" element ={<UpdateFirePlace />}/>
        <Route path="/update-firePlace/:id" element ={<firePlaceView />}/>

        


        


        




    </Routes>
    </BrowserRouter>

    



  )
}
