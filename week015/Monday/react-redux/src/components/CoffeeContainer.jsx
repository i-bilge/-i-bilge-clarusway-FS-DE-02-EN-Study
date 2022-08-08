import React from "react";
import { connect } from "react-redux";
import { buyCoffee } from "../redux/coffee/coffeeAction";

const CoffeeContainer = (props) => {

  return (
    <div>
      <h2>Number of Coffee - {props.numberOfCoffee}</h2>
      <button onClick={props.buyCoffee}>Buy Coffee</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCoffee: state.numberOfCoffee,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCoffee: () => dispatch(buyCoffee(1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeContainer);
