import React from "react";
import Sabrina from "./assets/Sabrina Carpenter.jpg";
import Jade from "./assets/162282133460ba49d6b8467_1622821334_3x2_xl.jpg";
import New from "./assets/newjeans-supernatural-capa.jpg";
import Dinossauro from "./assets/descoberto-dinossauro-com-bracos-menores-que-do-tiranossauro.jpg";
import Justin from "./assets/Captura-de-Tela-2017-03-30-às-09.45.03-e1490878539701.png";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="flex justify-around bg-red-600 p-2">
        <h1 className="text-white font-extrabold text-xl">SenaiNews</h1>
        <nav className="flex gap-5">
          <a className="text-white font-semibold" href="#">Home</a>
          <a className="text-white font-semibold" href="#">Sobre</a>
          <a className="text-white font-semibold" href="#">Contato</a>
        </nav>
      </header>
      <main className="mx-6 flex-1">
        <h2 className="mt-4">Principais notícias</h2>
        <div className="flex justify-around flex-wrap">
         <div className="p-2 flex flex-col justify-center w-80 items-center border-gray-700 border-2">
            <img src="https://via.placeholder.com/300x200" alt="Imagem de uma notícia"/>
            <h3 className="font-bold mt-2">O aluno Breno do SESI SENAI se diz loiro e mata todos que dizem o contrário a seu respeito</h3>
            <p>Mais de 5 pessoas foram vitímas do indivíduo</p>
            <a className="bg-red-600 p-2 w-full text-center rounded" href="#">Ver mais</a>
         </div>
         <div className="p-2 flex flex-col justify-center w-80 items-center border-gray-700 border-2">
            <img src="https://portaljfonte.com.br/wp-content/uploads/2018/10/visita-sesi-2.jpg" alt="Imagem de uma notícia"/>
            <h3 className="font-bold mt-2">Diretora Mônica e Cordenadora Silvana acabam de ser demitidas da rede SESI!</h3>
            <p>A notícia deixa alunos desolados!</p>
            <a className="bg-red-600 p-2 w-full text-center rounded" href="#">Ver mais</a>
         </div>
         <div className="p-2 flex flex-col justify-center w-80 items-center border-gray-700 border-2">
            <img src={Justin}/>
            <h3 className="font-bold mt-2">Justin Bieber acaba de ser confirmado como filho de Luiz Inácio Lula da Silva</h3>
            <p></p>
            <a className="bg-red-600 p-2 w-full text-center rounded" href="#">Ver mais</a>
         </div>
         <div className="p-2 flex flex-col justify-center w-80 items-center border-gray-700 border-2">
            <img src="https://static.dw.com/image/67712960_906.png" alt="Imagem de uma notícia"/>
            <h3 className="font-bold mt-2">Jovem americana processa seus pais por nascer sem o seu consetimento.</h3>
            <p>A garota pede 5.000 dólares (mais de R$ 24.000) por mês de indenização por danos!</p>
            <a className="bg-red-600 p-2 w-full text-center rounded" href="#">Ver mais</a>
         </div>
         <div className="p-2 flex flex-col justify-center w-80 items-center border-gray-700 border-2">
            <img src={Dinossauro}/>
            <h3 className="font-bold mt-2">Um dinossauro acaba de ser encontrado nos arredores de Jaboticabal</h3>
            <p>O animal trouxe danos a moradores da região</p>
            <a className="bg-red-600 p-2 w-full text-center rounded" href="#">Ver mais</a>
         </div>
         <div className="p-2 flex flex-col justify-center w-80 items-center border-gray-700 border-2">
            <img src={Sabrina} alt="Imagem de uma notícia"/>
            <h3 className="font-bold mt-2">Sabrina Carpinter surpreende a todos ao beijar Camilla Cabelo na frente de Shawn Mendes.</h3>
            <p>Veja essas e mais notícias do que aconteceu no VMA de 11/09/2024</p>
            <a className="bg-red-600 p-2 w-full text-center rounded" href="#">Ver mais</a>
         </div>
         <div className="p-2 flex flex-col justify-center w-80 items-center border-gray-700 border-2">
            <img src={New} alt="Imagem de uma notícia"/>
            <h3 className="font-bold mt-2">Confira todas as categorias que o grupo de Kpop NewJeans venceu na noite de ontem.</h3>
            <p>Isso tudo aconteceu antes mesmo delas serem assasinadas pela empresa que agenciava as cantoras</p>
            <a className="bg-red-600 p-2 w-full text-center rounded" href="#">Ver mais</a>
         </div>
         <div className="p-2 flex flex-col justify-center w-80 items-center border-gray-700 border-2">
            <img src={Jade}/>
            <h3 className="font-bold mt-2">Fã interrompe casamento da ginasta Jade Barbosa.</h3>
            <p>A mesma se dizia ser o grande amor da vida da atleta!</p>
            <a className="bg-red-600 p-2 w-full text-center rounded" href="#">Ver mais</a>
         </div>
        </div>
      </main>
      <footer className="bg-red-600 p-2 text-white text-center">
        <h4>Todos os direitos reservados - 2024</h4>
      </footer>
    </div>
  );
}

export default App;
