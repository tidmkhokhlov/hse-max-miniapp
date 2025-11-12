import { useNavigate } from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate(-1)}
            className="mb-4 px-4 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200"
        >
            ← Назад
        </button>
    );
}
