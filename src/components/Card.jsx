export default function Card({ title, onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full p-6 text-lg font-semibold bg-white rounded-2xl shadow hover:shadow-md transition text-left"
        >
            {title}
        </button>
    );
}
