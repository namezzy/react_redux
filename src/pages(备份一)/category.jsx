import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchHomeMultiDataAction } from "../store/actionCreators";

export class Category extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidata();
  }
  render() {
    return (
      <div className="category">
        <h2>Category Page: {this.props.counter}</h2>
      </div>
    );
  }
}

const mapStateToPros = (state) => ({
  counter: state.counter,
});
const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidata() {
    dispatch(fetchHomeMultiDataAction());
  },
});
export default connect(mapStateToPros, mapDispatchToProps)(Category);
