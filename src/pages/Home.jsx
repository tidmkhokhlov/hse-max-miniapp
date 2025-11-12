import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="p-4">
            <Header title="Выберите уровень образования" />
            <div className="grid gap-4">
                <Card title="Бакалавриат" onClick={() => navigate("/programs/bachelor")} />
                <Card title="Магистратура" onClick={() => alert('Пока недоступно')} />
                <Card title="Аспирантура" onClick={() => alert('Пока недоступно')} />
            </div>
        </div>
    );
}
