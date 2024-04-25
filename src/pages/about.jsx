import React, { PureComponent } from "react";
import { connect, Provider } from "react-redux";
import { addNumberAction, subNumberAction } from "../store/actionCreators";
export class About extends PureComponent {
  calcNumber(num, isAdd) {
    if (isAdd) {
      console.log("加", num);
      this.props.addNumber(num);
    } else {
      console.log("减", num);
      this.props.subNumber(num);
    }
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>About Page: {counter}</h2>
        <div>
          <button onClick={(e) => this.calcNumber(6, true)}>+6</button>
          <button onClick={(e) => this.calcNumber(88, true)}>+88</button>
          <button onClick={(e) => this.calcNumber(6, false)}>-6</button>
          <button onClick={(e) => this.calcNumber(88, false)}>-88</button>
        </div>
      </div>
    );
  }
}

// connect() 返回值是一个高阶组件

// function mapStateToProps(state) {
//   return {
//     counter: state.counter,
//   };
// }

// function fn2(dispatch) {
//   return {
//     addNumber(num) {
//       dispatch(addNumberAction(num))
//     },
//     subNumber(num) {
//       dispatch(subNumberAction(num))
//     }
//   }
// }
const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(addNumberAction(num)),
  subNumber: function(num) {
    dispatch(subNumberAction(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
