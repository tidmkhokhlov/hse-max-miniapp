import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programs/bachelor" element={<Programs />} />
                <Route path="/program/:name" element={<ProgramDetail />} />
            </Routes>
        </BrowserRouter>
    );
}
