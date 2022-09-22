import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { GameContextProvider } from "./contexts/GameContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DebugPage from "./components/pages/debug/DebugPage";
import WelcomePage from "./components/pages/welcome/WelcomePage";
import RoundPage from "./components/pages/game/round/RoundPage";
import PlayersPage from "./components/pages/players/PlayersPage";
import MobileScrollerTest from "./components/pages/tests/MobileScrollerTest";
import ResultsPage from "./components/pages/game/results/ResultsPage";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <GameContextProvider>
            <div id="master-container">
            <Routes>
                <Route path="/debug" element={<DebugPage />} />
                <Route path="/" element={<WelcomePage />} />
                <Route path="/test" element={<MobileScrollerTest />} />
                <Route path="/players" element={<PlayersPage />} />
                <Route path='/game' element={<RoundPage />} />
                <Route path='/game/results' element={<ResultsPage />} />
            </Routes>
            </div>
        </GameContextProvider>
    </BrowserRouter>
);
