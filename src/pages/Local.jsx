import { Icon } from "@iconify/react";

function Local() {
  return (
    <>
      <div className="p-4 space-y-6">
        <h1 className="text-2xl text-center font-thin font-extrabold text-dark-green">Local e Data</h1>
        <p className="text-sm text-justify font-thin text-dark-green">
          A fazenda fica a aproximadamente 2 horas de distância de São Paulo.
          Foi fundada em 1854 pelo Barão de São João de Rio Claro. O nome de
          Santa Gertrudes foi posto pelo Barão em homenagem à memória de sua
          mãe, D. Gertrudes Galvão de Moura Lacerda.
        </p>
        <p className="text-sm text-justify font-thin text-dark-green">
          Após a morte do Marquês e de sua mulher, a fazenda foi herdada por D.
          Antônia dos Santos Silva Prates e pelo Conde de Prates, atingindo o
          seu apogeu.
        </p>
        <p className="text-sm text-justify font-thin text-dark-green">
          Entre 1890 e 1910 , o Conde construiu uma das maiores e mais
          tecnificadas estruturas de plantação, benefício e comercialização do
          café, incluindo ferraria, selaria, máquinas, escola, cinema,
          aquedutos, igreja, mirantes, usina a vapor para fornecimento da
          energia elétrica, além de cunhar sua própria moeda.
        </p>
      </div>
      <div className="flex justify-center p-4">
        <img className="w-1/2" src="../../images/teste.png" alt="" />
      </div>
      <div className="p-4">
        <h1 className="text-sm text-center font-extrabold font-thin uppercase text-dark-green">
          Condomínio Terra Viva
        </h1>
        <h1 className="text-sm text-center font-thin text-dark-green">
          Av. Indaiá de Aldeia, Paudalho - PE, 55825-000
        </h1>
      </div>
      <div className="mr-4 ml-4 mt-6">
        <a
          target="_blank"
          href="https://www.google.com/search?q=condominio+terra+viva&tbm=isch&ved=2ahUKEwjG27LB6qiAAxV7CbkGHUCQA14Q2-cCegQIABAA&oq=condominio+terra+viva&gs_lcp=CgNpbWcQDFAAWABgAGgAcAB4AIABAIgBAJIBAJgBAKoBC2d3cy13aXotaW1n&sclient=img&ei=KTa_ZIajBvuS5OUPwKCO8AU&bih=722&biw=1536"
          rel="noreferrer"
        >
          <img src="../../images/cond.jpg" alt="" />
        </a>
      </div>
      <div className="w-full h-auto p-5 flex justify-center items-center mb-6 mt-6">
        <iframe
          width={"380px"}
          height={"300px"}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.6532833484143!2d-35.03546842528616!3d-7.9312330920926275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab11e751308ebd%3A0x916e05cf01f2651a!2sCondom%C3%ADnio%20Terra%20Viva!5e0!3m2!1spt-BR!2sbr!4v1690234626763!5m2!1spt-BR!2sbr"
        ></iframe>
      </div>
      <div className="flex justify-around mb-6 mt-6">
        <button className="bg-dark-green text-white text-sm font-bold font-thin py-2 px-2 rounded flex flex-row items-center space-x-1">
          <a
            target="_blank"
            href="https://ul.waze.com/ul?place=ChIJvY4wUecRqwcRGmXyAc8FbpE&ll=-7.93123310%2C-35.03289350&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
            rel="noreferrer"
          >
            Abrir no Waze
          </a>
          <Icon icon="mdi:waze" width="24" height="24" />
        </button>
        <button className="bg-dark-green text-white text-sm font-bold font-thin py-2 px-2 rounded flex flex-row items-center space-x-1">
          <a
            target="_blank"
            href="https://www.google.com/maps/dir//Condom%C3%ADnio+Terra+Viva+-+Av.+Indai%C3%A1+de+Aldeia,+Paudalho+-+PE,+55825-000/@-7.9312331,-35.0328935,17z/data=!4m6!4m5!1m0!1m2!1m1!1s0x7ab11e751308ebd:0x916e05cf01f2651a!3e0"
            rel="noreferrer"
          >
            Abrir no Maps
          </a>
          <Icon icon="gg:pin" width="24" height="24" />
        </button>
      </div>
      <div className="p-4 space-y-6">
        <h1 className="text-sm text-center font-extrabold uppercase font-thin text-dark-green">
          Ainda ficou com dúvida sobre o local?
        </h1>
      </div>
      <div className="flex justify-center">
        <button className="bg-dark-green text-white text-sm font-bold font-thin py-2 px-2 rounded flex flex-row items-center space-x-1">
          <a
            target="_blank"
            href="https://wa.me/+5581979146178"
            rel="noreferrer"
          >
            Falar com os noivos
          </a>
          <Icon icon="ic:baseline-whatsapp" width="24" height="24" />
        </button>
      </div>
    </>
  );
}

export default Local;
