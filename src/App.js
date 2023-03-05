import Register from "./Pages/Register";

import React from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import OnboardingPage from "./Pages/Onboarding";
import Profiles from "./Pages/Profile";
import Movie from "./Pages/Movie";

function App() {
    return (
        <div className="app">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register/>} />
                <Route path="/onboarding" element={<OnboardingPage/>}/>
                <Route path="/profile" element={<Profiles/>} />
                <Route path="/movie" element={<Movie/>} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;