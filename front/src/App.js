import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import HeroPage from "./pages/HeroPage";
import EditHeroForm from "./pages/EditHeroForm";
import AddNewHeroForm from "./pages/AddNewHeroForm";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:id" element={<HeroPage />} />
            <Route path="/create-hero/" element={<AddNewHeroForm />} />
            <Route path="/edit-hero/:id" element={<EditHeroForm />} />
        </Routes>
    );

}

export default App;
