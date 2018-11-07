import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                Dashboard will be here
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({});
  
  const mapDispatchToProps = {};
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard);
