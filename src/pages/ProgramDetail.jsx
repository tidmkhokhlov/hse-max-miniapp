import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { bachelorPrograms } from "../data/bachelor";

export default function ProgramDetail() {
    const { name } = useParams();
    const program = bachelorPrograms.find((p) => p.name === decodeURIComponent(name));

    if (!program) return <div className="p-4">Программа не найдена</div>;

    return (
        <div className="p-4">
            <BackButton />
            <h2 className="text-xl font-semibold mb-2">{program.name}</h2>
            <div className="text-sm text-gray-700 space-y-1 mb-4">
                <p><b>Форма обучения:</b> {program.form}</p>
                <p><b>Бюджетные места:</b> {program.budget}</p>
                <p><b>Платные места:</b> {program.paid}</p>
                <p><b>Предметы ЕГЭ:</b> {program.subjects}</p>
                <a href={program.link} target="_blank" rel="noreferrer" className="text-blue-600 underline">Ссылка на сайт</a>
            </div>
            <p className="whitespace-pre-line text-gray-800 leading-relaxed">{program.description}</p>
        </div>
    );
}
