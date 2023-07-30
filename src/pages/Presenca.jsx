function Presenca() {
  return (
    <>
      <div className="p-4">
        <h1 className="lg:text-4xl text-2xl text-center font-thin font-extrabold text-dark-green">
          Confirmar Presença
        </h1>
      </div>
      <div className="w-full p-4 lg:justify-center lg:flex">
        <form id="contact" onSubmit="return postToGoogle()" className="flex flex-col space-y-8 lg:w-1/2" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdGLBSNZwymVh1GOi9qTH2sIOv2A-2AFuXrP5QKWhLuVjypkA/formResponse">
          <input
            placeholder="Nome Completo"
            className="rounded-lg p-2 font-thin w-full text-xs lg:text-lg"
            id="nome"
            name="entry.122718158"
            type="text"
            required
          />
          <div className="flex flex-row w-full items-center justify-between">
            <label
              className="lg:text-lg text-xs w-1/2 font-thin text-dark-green"
              htmlFor=""
            >
              Você irá ao evento?
            </label>
            <div className="lg:text-lg text-xs items-center space-x-2 font-thin text-dark-green">
              <label htmlFor="Sim">Sim</label>
              <input type="radio" name="entry.313144753" id="Sim" value="Sim" />
              <label htmlFor="Não">Não</label>
              <input type="radio" name="entry.313144753" id="Não" value="Não" />
            </div>
          </div>
          <div className="flex flex-row w-full items-center justify-between">
            <label
              className="lg:text-lg text-xs w-1/2 font-thin text-dark-green"
              htmlFor=""
            >
              Quantidade de Adultos:
            </label>
            <select
              className="lg:text-lg rounded-lg p-2 w-1/5 text-xs text-center lg:w-1/12"
              id="adultos"
              name="entry.133908691"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="flex flex-row w-full items-center justify-between">
            <label
              className="lg:text-lg text-xs w-1/2 font-thin text-dark-green"
              htmlFor=""
            >
              Quantidade de Crianças:
            </label>
            <select
              className="lg:text-lg rounded-lg p-2 w-1/5 text-xs text-center lg:w-1/12"
              id="criancas"
              name="entry.1715051757"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-dark-green text-white text-xs font-bold py-2 px-2 rounded font-thin lg:text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Presenca;
