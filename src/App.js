import React, { Component } from "react";
import PokemonLogo from "./images/pokemonlogo.png";

import "./App.css";

class App extends Component {
  token = null;
  state = {
    query: "",
    pokemon: []
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value
    });
    this.search(value);
  };

  search = query => {
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
    const token = {};
    this.token = token;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (this.token === token) {
          this.setState({ pokemon: data });
        }
      });
  };

  componentDidMount() {
    this.search("");
  }

  render() {
    return (
      <div className="App">
        <img src={PokemonLogo} alt="" />
        <div className="search-form" />
      </div>
    );
  }
}

export default App;
