import React, { PureComponent } from "react";
import { connect } from "react-redux";

export class About extends PureComponent {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>About Page: {counter}</h2>
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

const mapStateToProps = (state) => ({
  counter: state.counter,
});


export default connect(mapStateToProps)(About);
