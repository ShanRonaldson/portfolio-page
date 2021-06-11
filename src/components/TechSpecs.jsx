import React from "react";
import Rating from "react-rating";

class TechSpecs extends React.Component {
  render() {
    return (
      <div className="spec__rating">
        <h4 className="spec__heading--language">{this.props.language}</h4>
        <Rating initialRating={this.props.rating} readonly />
      </div>
    );
  }
}

export default TechSpecs;
