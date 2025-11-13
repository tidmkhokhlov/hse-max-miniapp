import { useNavigate, useLocation } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import { bachelorPrograms } from "../data/bachelor";
import { magistracyPrograms } from "../data/magistracy.js";
import { postgraduatePrograms } from "../data/postgraduate.js";

export default function Programs() {
    const navigate = useNavigate();
    const location = useLocation();

    let title;
    let programs;
    let programType;

    if (location.pathname.includes("/bachelor")) {
        title = "Программы бакалавриата";
        programs = bachelorPrograms;
        programType = "bachelor";
    } else if (location.pathname.includes("/magistracy")) {
        title = "Программы магистратуры";
        programs = magistracyPrograms;
        programType = "magistracy";
    } else {
        title = "Программы аспирантуры";
        programs = postgraduatePrograms;
        programType = "postgraduate";
    }

    return (
        <div className="p-4">
            <BackButton />
            <Header title={title} />
            <div className="grid gap-3">
                {programs.map((prog) => (
                    <Card
                        key={`${programType}-${prog.name}`}
                        title={prog.name}
                        onClick={() => navigate(`/programs/${programType}/${encodeURIComponent(prog.name)}`)}
                    />
                ))}
            </div>
        </div>
    );
}
