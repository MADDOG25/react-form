import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginForm() {
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
          type="email"
          name="email"
          placeholder="correo"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500 mx-auto">
            Correo incorrecto coloca uno valido
          </span>
        )}
        <input
          className="mx-auto px-4 py-2 rounded-xl text-center text-black focus:outline-none w-72"
          type="password"
          name="password"
          placeholder="contraseña"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500 mx-auto">Contraseña invalida</span>
        )}
      </div>
      <button
        className="rounded-lg px-4 py-2 mx-auto m-4 bg-slate-200 text-black w-fit hover:bg-cyan-400"
        value="Iniciar sesion"
      >
        Iniciar sesion
      </button>
      <p className="mx-auto">
        ¿No tienes una cuenta?
        <Link to="/registro" className="hover:text-cyan-400 hover:underline">
          Crear una cuenta
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
