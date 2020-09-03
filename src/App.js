import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from "react";
import Imprimir from "./Imprimir";
import Componente01 from "./Componente01";


import './App.css';

function App() {

  const usuarios = [
    { id: 1, nome: 'amilton', email: 'amilton@gmail.com' },
    { id: 2, nome: 'maria', email: 'maria@gmail.com' },
    { id: 3, nome: 'pedro', email: 'pedro@gmail.com' },
    { id: 5, nome: 'joaquim', email: 'joaquim@gmail.com' },
    { id: 6, nome: 'antonia', email: 'antonia@gmail.com' },
    { id: 7, nome: 'elis', email: 'elis@gmail.com' },
    { id: 8, nome: 'madona', email: 'madona@gmail.com' },
    { id: 1, nome: 'amilton', email: 'amilton@gmail.com' },
    { id: 2, nome: 'maria', email: 'maria@gmail.com' },
    { id: 3, nome: 'pedro', email: 'pedro@gmail.com' },
    { id: 5, nome: 'joaquim', email: 'joaquim@gmail.com' },
    { id: 6, nome: 'antonia', email: 'antonia@gmail.com' },
    { id: 7, nome: 'elis', email: 'elis@gmail.com' },
    { id: 8, nome: 'madona', email: 'madona@gmail.com' },
    { id: 1, nome: 'amilton', email: 'amilton@gmail.com' },
    { id: 2, nome: 'maria', email: 'maria@gmail.com' },
    { id: 3, nome: 'pedro', email: 'pedro@gmail.com' },
    { id: 5, nome: 'joaquim', email: 'joaquim@gmail.com' },
    { id: 6, nome: 'antonia', email: 'antonia@gmail.com' },
    { id: 7, nome: 'elis', email: 'elis@gmail.com' },
    { id: 8, nome: 'madona', email: 'madona@gmail.com' },
    { id: 1, nome: 'amilton', email: 'amilton@gmail.com' },
    { id: 2, nome: 'maria', email: 'maria@gmail.com' },
    { id: 3, nome: 'pedro', email: 'pedro@gmail.com' },
    { id: 5, nome: 'joaquim', email: 'joaquim@gmail.com' },
    { id: 6, nome: 'antonia', email: 'antonia@gmail.com' },
    { id: 7, nome: 'elis', email: 'elis@gmail.com' },
    { id: 8, nome: 'madona', email: 'madona@gmail.com' },
    { id: 1, nome: 'amilton', email: 'amilton@gmail.com' },
    { id: 2, nome: 'maria', email: 'maria@gmail.com' },
    { id: 3, nome: 'pedro', email: 'pedro@gmail.com' },
    { id: 5, nome: 'joaquim', email: 'joaquim@gmail.com' },
    { id: 6, nome: 'antonia', email: 'antonia@gmail.com' },
    { id: 7, nome: 'elis', email: 'elis@gmail.com' },
    { id: 8, nome: 'madona', email: 'madona@gmail.com' },
    { id: 1, nome: 'amilton', email: 'amilton@gmail.com' },
    { id: 2, nome: 'maria', email: 'maria@gmail.com' },
    { id: 3, nome: 'pedro', email: 'pedro@gmail.com' },
    { id: 5, nome: 'joaquim', email: 'joaquim@gmail.com' },
    { id: 6, nome: 'antonia', email: 'antonia@gmail.com' },
    { id: 7, nome: 'elis', email: 'elis@gmail.com' },
    { id: 8, nome: 'madona', email: 'madona@gmail.com' },
    { id: 1, nome: 'amilton', email: 'amilton@gmail.com' },
    { id: 2, nome: 'maria', email: 'maria@gmail.com' },
    { id: 3, nome: 'pedro', email: 'pedro@gmail.com' },
    { id: 5, nome: 'joaquim', email: 'joaquim@gmail.com' },
    { id: 6, nome: 'antonia', email: 'antonia@gmail.com' },
    { id: 7, nome: 'elis', email: 'elis@gmail.com' },
    { id: 8, nome: 'madona', email: 'madona@gmail.com' },
    { id: 1, nome: 'amilton', email: 'amilton@gmail.com' },
    { id: 2, nome: 'maria', email: 'maria@gmail.com' },
    { id: 3, nome: 'pedro', email: 'pedro@gmail.com' },
    { id: 5, nome: 'joaquim', email: 'joaquim@gmail.com' },
    { id: 6, nome: 'antonia', email: 'antonia@gmail.com' },
    { id: 7, nome: 'elis', email: 'elis@gmail.com' },
    { id: 8, nome: 'madona', email: 'madona@gmail.com' },
    { id: 1, nome: 'amilton', email: 'amilton@gmail.com' },
    { id: 2, nome: 'maria', email: 'maria@gmail.com' },
    { id: 3, nome: 'pedro', email: 'pedro@gmail.com' },
    { id: 5, nome: 'joaquim', email: 'joaquim@gmail.com' },
    { id: 6, nome: 'antonia', email: 'antonia@gmail.com' },
    { id: 7, nome: 'elis', email: 'elis@gmail.com' },
    { id: 8, nome: 'madona', email: 'madona@gmail.com' },
    { id: 1, nome: 'amilton', email: 'amilton@gmail.com' },
    { id: 2, nome: 'maria', email: 'maria@gmail.com' },
    { id: 3, nome: 'pedro', email: 'pedro@gmail.com' },
    { id: 5, nome: 'joaquim', email: 'joaquim@gmail.com' },
    { id: 6, nome: 'antonia', email: 'antonia@gmail.com' },
    { id: 7, nome: 'elis', email: 'elis@gmail.com' },
    { id: 8, nome: 'madona', email: 'madona@gmail.com' },
  ]


  return (
    <div className="container">
      <Componente01  usuarios = {usuarios} />
    </div>
  );
}

export default App;
