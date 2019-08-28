import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeValue, clearInput } from "./actions";

class Field extends Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <input
          type="text"
          onClick={this.props.clearInput}
          onChange={this.props.changeValue}
          value={this.props.text}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.field.text
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeValue, clearInput }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Field);
