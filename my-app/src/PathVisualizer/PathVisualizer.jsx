import React, { Component } from 'react';
import Node from './Node/Node';
// styles
import './PathVisualizer.css';

export default class PathVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        Foo
        <Node></Node>
      </div>
    );
  }
}
