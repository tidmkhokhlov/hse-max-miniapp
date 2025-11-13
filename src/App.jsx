import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";

export default function App() {
    return (
        <BrowserRouter basename="/hse-max-miniapp">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programs/bachelor" element={<Programs />} />
                <Route path="/programs/bachelor/:name" element={<ProgramDetail />} />
                <Route path="/programs/magistracy" element={<Programs />} />
                <Route path="/programs/magistracy/:name" element={<ProgramDetail />} />
                <Route path="/programs/postgraduate" element={<Programs />} />
                <Route path="/programs/postgraduate/:name" element={<ProgramDetail />} />
            </Routes>
        </BrowserRouter>
    );
}