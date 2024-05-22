import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Homepage";
import Autolocated from "./Autolocated";
import LocationDisplay from "./Location_display";
import Login from "./Login";
import SignUp from "./SignUp";
import 'bootstrap/dist/css/bootstrap.min.css'
import Gym_Page_new from "./Gym_Page_new";

function App(){
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/" element={<SignUp />}/>
                <Route path="/home" element={<Homepage />}/>
                <Route path="/locate" element={<Autolocated />}/>
                <Route path="/Location_display" element={<LocationDisplay />}/>
                <Route path="/gympage" element={<Gym_Page_new />}/>               
            </Routes>
        </BrowserRouter>
    </div>
}

export default App;