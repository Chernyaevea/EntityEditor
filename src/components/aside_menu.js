import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDepartment, fetchEmployee } from '../actions/index';

class AsideMenu extends Component {
  componentWillMount() {
    this.props.fetchDepartment();
    this.props.fetchEmployee();
  }
  // renderMenu() {
  //   return
  //       return this.props.departments.
  // }

  render() {
    return (
      <div className="aside-menu">
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { employees: state.employees, departments: state.departments};
}

export default connect(mapStateToProps, { fetchEmployee, fetchDepartment })(AsideMenu);
