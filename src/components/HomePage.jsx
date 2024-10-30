import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="text-white font-semibold text-center m-10">
      <h1 className="text-5xl py-10">Bienvenido al Formulario de React.js</h1>
      <div className="grid gap-y-6">
        <Link
          to="/login"
          className="text-black text-xl hover:text-blue-500 rounded-full bg-gray-200 w-60 mx-auto p-2"
        >
          Inicia con tu cuenta
        </Link>
        <Link
          to="/registro"
          className="text-black text-xl hover:text-blue-500 rounded-full bg-gray-200 w-60 mx-auto p-2"
        >
          Crea una cuenta
        </Link>
      </div>
    </div>
  );
}
