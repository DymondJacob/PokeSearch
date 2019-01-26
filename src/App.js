import React, { Component } from "react";
import PokemonLogo from "./images/pokemonlogo.png";
import Modal from "./modal";
import "./App.css";

class App extends Component {
  state = {
    show: false,
    query: "",
    pokemon: {
      xp: 0,
      type: "",
      move: "",
      height: 0,
      weight: 0,
      img: ""
    }
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    document.querySelector("input").value = "";
  };

  getPokemon = () => {
    let lower = this.state.query.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${lower}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pokemon: {
            xp: data["base_experience"],
            type: data.types[0].type.name,
            move: data.abilities[0].ability.name,
            height: data.height,
            weight: data.weight,
            img: data.sprites["front_shiny"]
          },
          show: true
        });
      });
  };

  handleInput = e => {
    e.preventDefault();
    this.setState(
      {
        query: this.search.value,
        show: true
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          this.getPokemon();
        }
      }
    );
  };

  render() {
    return (
      <div className="App">
        <img src={PokemonLogo} alt="" />
        <form onSubmit={this.handleInput}>
          <input
            type="text"
            placeholder="Search for Pokemon..."
            ref={input => (this.search = input)}
          />
        </form>
        <Modal
          xp={this.state.pokemon.xp}
          type={this.state.pokemon.type}
          move={this.state.pokemon.move}
          height={this.state.pokemon.height}
          weight={this.state.pokemon.weight}
          img={this.state.pokemon.img}
          show={this.state.show}
          handleClose={this.hideModal}
          name={this.state.query}
        />
      </div>
    );
  }
}

export default App;
