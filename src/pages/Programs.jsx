import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import { bachelorPrograms } from "../data/bachelor";

export default function Programs() {
    const navigate = useNavigate();

    return (
        <div className="p-4">
            <BackButton />
            <Header title="Программы бакалавриата" />
            <div className="grid gap-3">
                {bachelorPrograms.map((prog) => (
                    <Card
                        key={prog.name}
                        title={prog.name}
                        onClick={() => navigate(`/program/${encodeURIComponent(prog.name)}`)}
                    />
                ))}
            </div>
        </div>
    );
}
