import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import tiles from "./tiles.json";
import TileCard from "./components/TileCard";
import './App.css';

class App extends Component {
  state = {
    tiles,
    score : 0,
    wins : 0
  };

  handleClicked = id => {
    if (!this.clicked) {
      this.clicked = true;
      this.setState({ wins : this.state.wins+1})
    } else {
      //you lose, reset score
    }
  }
  render() {
    return (
      <Wrapper>
        <Title>Memory Game</Title>
        <h1>Click every image only once to win, clicking an image twice resets your score.</h1>
        {this.state.tiles.map(tile => (
          <TileCard onClick={this.handleClicked(this.props.id)}
            id={tile.id}
            key={tile.id}
            image={tile.image}
            clicked={tile.clicked}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
