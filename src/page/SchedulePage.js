import Wheel from "../util/Wheel";
import React from "react";
import Navig from "../util/Navig";
export class SchedulePage extends React.Component {
  constructor() {
    super();
    this.places = [];
    var i;
    for (i = 0; i < 30; i++) {
      this.places[i] = i + 1;
    }
  }

  render() {
    return (
      <div className="schedulePage">
        <Navig />
        <h2>ticket deadline and number shuffling time </h2>
        <h2 align="center">Wheel of fortune.</h2>
        <Wheel items={this.places} />
      </div>
    );
  }
}
