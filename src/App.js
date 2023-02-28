import Register from "./Pages/Register";

import React from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import OnboardingPage from "./Pages/Onboarding";
import Profiles from "./Pages/Profile";

function App() {
    return (
        <div className="app">
        <BrowserRouter>
            <Routes path="/register">
                <Route path="/register" element={<Register/>} />
                <Route path="/onboarding" element={<OnboardingPage/>}/>
                <Route path="/profile" element={<Profiles/>} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;