function Lista() {
  return (
    <>
      <div className="p-4 space-y-6">
        <h1 className="text-2xl text-center font-thin font-extrabold text-dark-green">
          Lista de Presentes
        </h1>
        <p className="text-xs text-center text-dark-green font-thin">
          Escolhemos a Ferreira Costa para realizarmos a nossa lista de
          casamento. Clique na imagem abaixo para ser redirecionado a nossa
          lista.
        </p>
      </div>
      <div className="w-full mt-6 mb-6">
        <a
          className="flex justify-center"
          href="https://www.ferreiracosta.com/lista-de-casamento/presentes/lauraepaulinho"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-1/2"
            src="https://d3gcmglegmnvz8.cloudfront.net/logo/logo_fc.svg"
            alt=""
          />
        </a>
      </div>
      <div className="p-4 space-y-6">
        <h1 className="text-sm text-center font-bold text-dark-green font-thin">
          Caso prefira nos presentar com itens fora da nossa lista
        </h1>
      </div>
      <div className="mb-4 w-full ml-2 mr-2 flex flex-row space-x-2 justify-center">
        <div className="shadow-md w-32 h-48 p-4 text-center space-y-1 bg-dark-gray rounded">
          <div className="flex justify-center w-full">
            <img className="w-full" src="../../images/rancho luar.jpg" />
          </div>
          <h1 className="font-bold text-xs text-dark-green font-thin">
            Diária na Pousada Rancho Luar
          </h1>
          <p className="text-xs text-dark-green font-thin">R$400,00</p>
          <button className="bg-dark-green text-white text-xs font-thin py-2 px-2 rounded">
            <a href="https://nubank.com.br/pagar/9okb/fV2U6ADFlA">Presentear</a>
          </button>
        </div>
        <div className="shadow-md w-32 h-48 p-4 text-center space-y-1 bg-dark-gray rounded">
          <div className="flex justify-center w-full">
            <img
              className="w-full"
              src="../../images/pousada tatua.jpg"
            />
          </div>
          <h1 className="font-bold text-xs text-dark-green font-thin">
            Diária na Pousada Tatuá
          </h1>
          <p className="text-xs text-dark-green font-thin">R$1250,00</p>
          <button className="bg-dark-green text-white text-xs font-thin py-2 px-2 rounded">
            <a href="https://nubank.com.br/pagar/9okb/YvP1uVI9X0">Presentear</a>
          </button>
        </div>
      </div>
      <div className="w-full mb-4 ml-2 mr-2 flex flex-row space-x-2 justify-center">
        <div className="shadow-md w-32 h-48 p-4 text-center space-y-1 bg-dark-gray rounded">
          <div className="flex justify-center w-full">
            <img
              className="w-full"
              src="../../images/Jantar-romantico.jpg"
            />
          </div>
          <h1 className="font-bold text-xs text-dark-green font-thin">
            Jantar Especial na Lua de Mel
          </h1>
          <p className="text-xs text-dark-green font-thin">R$150,00</p>
          <button className="bg-dark-green text-white text-xs font-thin py-2 px-2 rounded">
            <a href="https://nubank.com.br/pagar/9okb/79FRLNdldh">Presentear</a>
          </button>
        </div>
        <div className="shadow-md w-32 h-48 p-4 text-center space-y-1 bg-dark-gray rounded">
          <div className="flex justify-center w-full">
            <img className="w-full" src="../../images/barco.jpeg" />
          </div>
          <h1 className="font-bold text-xs text-dark-green font-thin">
            Passeio de barco Praia do Patacho
          </h1>
          <p className="text-xs text-dark-green font-thin">R$250,00</p>
          <button className="bg-dark-green text-white text-xs font-thin py-2 px-2 rounded">
            <a href="https://nubank.com.br/pagar/9okb/tQ0imrdekX">Presentear</a>
          </button>
        </div>
      </div>
      <div className="w-full ml-2 mr-2 flex flex-row space-x-2 justify-center">
        <div className="shadow-md w-32 h-48 p-4 text-center space-y-1 bg-dark-gray rounded">
          <div className="flex justify-center w-full">
            <img
              className="w-full"
              src="../../images/buggy.jpg"
            />
          </div>
          <h1 className="font-bold text-xs text-dark-green font-thin">
            Passeio de buggy em Patacho
          </h1>
          <p className="text-xs text-dark-green font-thin">R$250,00</p>
          <button className="bg-dark-green text-white text-xs font-thin py-2 px-2 rounded">
            <a href="https://nubank.com.br/pagar/9okb/tQ0imrdekX">Presentear</a>
          </button>
        </div>
        <div className="shadow-md w-32 h-48 p-4 text-center space-y-1 bg-dark-gray rounded">
          <div className="flex justify-center w-full">
            <img className="w-full" src="../../images/beach club.jpg" />
          </div>
          <h1 className="font-bold text-xs text-dark-green font-thin">
            Beach Club em Patacho
          </h1>
          <p className="text-xs text-dark-green font-thin">R$200,00</p>
          <button className="bg-dark-green text-white text-xs font-thin py-2 px-2 rounded">
            <a href="https://nubank.com.br/pagar/9okb/H43G2ExfGw">Presentear</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Lista;
