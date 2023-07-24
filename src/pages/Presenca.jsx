import { useForm } from "react-hook-form";

function Presenca() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="p-4">
        <h1 className="text-sm text-center font-bold">Confirmar Presença</h1>
      </div>
      <div className="w-full p-4">
        <form
          className="flex flex-col space-y-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome Completo"
            className={`rounded-lg p-2 w-full text-sm ${
              errors.nome && "outline outline-2 outline-red-600"
            }`}
            id="nome"
            {...register("nome", {
              required: "Campo obrigatório",
            })}
          />
          {errors.nome && (
            <span className="text-red-600 text-sm">{errors.nome.message}</span>
          )}
          <div className="flex flex-row w-full items-center justify-between">
            <label className="text-sm w-1/2" htmlFor="">
              Você irá ao evento?
            </label>
            <div className="text-sm items-center space-x-2">
              <label htmlFor="Sim">Sim</label>
              <input type="radio" name="presenca" id="Sim" value="Sim"/>
              <label htmlFor="Não">Não</label>
              <input type="radio" name="presenca" id="Não" value="Não"/>
            </div>
            {errors.presenca && (
              <span className="text-red-600 text-sm">
                {errors.presenca.message}
              </span>
            )}
          </div>
          <div className="flex flex-row w-full items-center justify-between">
            <label className="text-sm w-1/2" htmlFor="">
              Quantidade de Adultos:
            </label>
            <select
              className={`rounded-lg p-2 w-1/5 text-sm text-center ${
                errors.adultos && "outline outline-2 outline-red-600"
              }`}
              id="adultos"
              {...register("adultos", { required: "Campo obrigatório" })}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.adultos && (
              <span className="text-red-600 text-sm">
                {errors.adultos.message}
              </span>
            )}
          </div>
          <div className="flex flex-row w-full items-center justify-between">
            <label className="text-sm w-1/2" htmlFor="">
              Quantidade de Crianças:
            </label>
            <select
              className={`rounded-lg p-2 w-1/5 text-sm text-center ${
                errors.adultos && "outline outline-2 outline-red-600"
              }`}
              id="criancas"
              {...register("criancas", { required: "Campo obrigatório" })}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            {errors.criancas && (
              <span className="text-red-600 text-sm">
                {errors.criancas.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-dark-green text-white text-xs font-bold py-2 px-2 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Presenca;
