import React from 'react';
import {Node} from '../components';

// Change this value for the number of nodes (value) in the LL.
const NUMBER_OF_NODES = 5;

//main color of the LL nodes.
const PRIMARY_COLOR = 'turquoise';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_NODES; i++) {
      array.push(randomIntFromInterval(1, 99));
    }
    this.setState({ array });
  }


  render() {
    const { array } = this.state;

    return (
      <div>
        {array.map((value, idx) => (
            <Node
              key = {idx}
              value = {value}
              size = {40}
              color = {PRIMARY_COLOR}
             ></Node>
        ))}
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
