/* L'idea è di creare una react app per vedere le caratteristiche dei paesi.

Usate il componente App per gestire la NAV e le rotte della React App.
Le rotte sono:
- "/": una home con logo del sito.
- "about": una pagina che spiega chi siete e perché fate questo sito.
- "countries": la pagina con la lista di tutti i paesi. (consiglio: 
  fare componente per la pagina Countries e il componente per il singolo country CountryCard). 
  Quando clicco su una CountryCard, vengo reindirizzato a country/:code, dove :code è il codice del paese.
- "country/:code", vi mostra la card singola del country con uno stile differente.

BONUS:
Aggiungete il selettore per la lingua, e in base alla lingua selezionata, scrivete i nomi delle proprietà che mostrate 
e il contenuto del sito, nella lingua selezionata. */

import { useState } from "react";

import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Countries from "./components/Countries";
import Country from "./components/Country";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="countries">Countries</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:code" element={<Country />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
