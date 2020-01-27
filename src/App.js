import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import Navigation from "./components/Navigation"
import WelcomePage from "./components/WelcomePage"
import { Route } from "react-router-dom"
import "./App.css"


export default function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <Route exact path = "/" component={WelcomePage} />
      <Route path = "/characters" component= {CharacterList} />
    </main>
  );
}
