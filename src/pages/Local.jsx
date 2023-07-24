function Local() {
  return (
    <>
      <div className="p-4 space-y-6">
        <h1 className="text-sm text-center font-bold">Localização</h1>
        <p className="text-xs text-justify">
          A fazenda fica a aproximadamente 2 horas de distância de São Paulo.
          Foi fundada em 1854 pelo Barão de São João de Rio Claro. O nome de
          Santa Gertrudes foi posto pelo Barão em homenagem à memória de sua
          mãe, D. Gertrudes Galvão de Moura Lacerda.
        </p>
        <p className="text-xs text-justify">
          Após a morte do Marquês e de sua mulher, a fazenda foi herdada por D.
          Antônia dos Santos Silva Prates e pelo Conde de Prates, atingindo o
          seu apogeu.
        </p>
        <p className="text-xs text-justify">
          Entre 1890 e 1910 , o Conde construiu uma das maiores e mais
          tecnificadas estruturas de plantação, benefício e comercialização do
          café, incluindo ferraria, selaria, máquinas, escola, cinema,
          aquedutos, igreja, mirantes, usina a vapor para fornecimento da
          energia elétrica, além de cunhar sua própria moeda.
        </p>
      </div>
      <div className="w-full h-auto p-5 flex justify-center items-center mb-6 mt-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.6532833484143!2d-35.03546842528616!3d-7.9312330920926275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab11e751308ebd%3A0x916e05cf01f2651a!2sCondom%C3%ADnio%20Terra%20Viva!5e0!3m2!1spt-BR!2sbr!4v1690234626763!5m2!1spt-BR!2sbr"></iframe>
      </div>
      <div className="flex justify-center mb-6 mt-6">
        <button className="bg-dark-green text-white text-xs font-bold py-2 px-2 rounded">
          <a
            target="_blank"
            href="https://ul.waze.com/ul?place=ChIJvY4wUecRqwcRGmXyAc8FbpE&ll=-7.93123310%2C-35.03289350&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
            rel="noreferrer"
          >
            Clique aqui para ir
          </a>
        </button>
      </div>
    </>
  );
}

export default Local;
