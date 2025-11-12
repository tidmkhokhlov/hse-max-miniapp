import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { bachelorPrograms } from "../data/bachelor";

export default function ProgramDetail() {
    const { name } = useParams();
    const program = bachelorPrograms.find((p) => p.name === decodeURIComponent(name));

    if (!program) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
                    <div className="text-6xl mb-4">😕</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Программа не найдена</h2>
                    <p className="text-gray-600 mb-6">К сожалению, мы не смогли найти информацию о данной программе</p>
                    <BackButton />
                </div>
            </div>
        );
    }

    const getDurationText = (duration) => {
        const years = Math.floor(duration);
        const months = duration % 1;
        if (years >= 5) {
            return `${years} лет`;
        } else if (months > 0) {
            return `${years} года ${months * 10} месяцев`;
        }
        return `${years} года`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <BackButton />
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Образовательная программа</h1>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
                    {/* Program Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{program.name}</h2>
                        <div className="flex flex-wrap gap-3 text-white/90">
                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                                {program.form}
                            </span>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                                {getDurationText(program.duration)}
                            </span>
                        </div>
                    </div>

                    {/* Program Details */}
                    <div className="p-6 md:p-8">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-blue-50 rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-blue-700 mb-1">{program.budget}</div>
                                <div className="text-sm text-blue-600 font-medium">Бюджетные места</div>
                            </div>
                            <div className="bg-green-50 rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-green-700 mb-1">{program.paid}</div>
                                <div className="text-sm text-green-600 font-medium">Платные места</div>
                            </div>
                            <div className="bg-purple-50 rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-purple-700 mb-1">{program.quota}</div>
                                <div className="text-sm text-purple-600 font-medium">Платные места для иностранцев</div>
                            </div>
                        </div>

                        {/* Subjects */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Вступительные испытания</h3>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-gray-700 font-medium">{program.subjects}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">О программе</h3>
                            <div className="prose max-w-none">
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {program.description}
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex justify-center">
                            <a
                                href={program.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <span>Подробнее на сайте</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Формат обучения
                        </h3>
                        <p className="text-gray-700">{program.form === "Очная" ? "Дневная форма обучения с полным погружением в учебный процесс" : "Смешанный формат с возможностью совмещения работы и учебы"}</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Доступные места
                        </h3>
                        <p className="text-gray-700">
                            {program.budget > 0 && program.paid > 0
                                ? `Доступны как бюджетные (${program.budget}), так и платные (${program.paid}) места`
                                : program.budget > 0
                                    ? `Программа доступна только на бюджетной основе (${program.budget} мест)`
                                    : `Программа доступна на платной основе (${program.paid} мест)`
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}