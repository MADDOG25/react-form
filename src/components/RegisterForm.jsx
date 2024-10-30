import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-white grid grid-cols-1 p-10 font-semibold"
    >
      <div className="grid gap-y-4">
        <input
          className="mx-auto px-4 py-2 rounded-xl text-center text-black focus:outline-none w-72"
          type="text"
          name="username"
          placeholder="nombre de usuario"
          {...register("username", { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors.username && (
          <span className="text-red-500 mx-auto">
            Nombre de usuario incorrecto
          </span>
        )}
        <input
          className="mx-auto px-4 py-2 rounded-xl text-center text-black focus:outline-none w-72"
          type="email"
          name="email"
          placeholder="correo"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500 mx-auto">Este campo es requerido</span>
        )}
        <input
          className="mx-auto px-4 py-2 rounded-xl text-center text-black focus:outline-none w-72"
          type="password"
          name="password"
          placeholder="contraseña"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500 mx-auto">Este campo no es valido</span>
        )}
      </div>
      <button
        className="rounded-lg px-4 py-2 mx-auto m-4 bg-slate-200 text-black w-fit hover:bg-cyan-400"
        value="Registrate"
      >
        Registrate
      </button>
      <p className="mx-auto">
        ¿Ya tienes una cuenta?
        <Link to="/login" className="hover:text-cyan-400 hover:underline">
          Inicia sesion
        </Link>
        <br />
        ¿Olvidaste tu contraseña?
        <a href="#" className="hover:text-cyan-400 hover:underline">
          Recuperar contraseña
        </a>
      </p>
    </form>
  );
}
