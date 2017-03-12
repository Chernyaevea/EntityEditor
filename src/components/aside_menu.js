import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDepartment, fetchEmployee } from '../actions/index';

class AsideMenu extends Component {
  componentWillMount() {
    this.props.fetchDepartment();
    this.props.fetchEmployee();
  }
  renderMenu() {
    var department;
    if (this.props.departments != null){
      return (
        <div>
          <ul className="list-group">
            <h4> Departments </h4>
            {this.props.departments.map((department) => {
              return (
                <li className="list-group-item">
                  {department.name}
                </li>
                )}
            )}
            <h4> Employees </h4>
            {this.props.employees.map((employee) => {
              return (
                <li className="list-group-item">
                  {employee.firstName}
                  {employee.lastName}
                </li>
                )}
            )}
            </ul>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="aside-menu">
        {this.renderMenu()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { employees: state.employees, departments: state.departments};
}

export default connect(mapStateToProps, { fetchEmployee, fetchDepartment })(AsideMenu);
