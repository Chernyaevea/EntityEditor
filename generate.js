module.exports = function(){
  var faker = require("faker");
  var _ = require("lodash");

  return {
    department: _.times(20, (n) => {
      return {
        id: n,
        name: faker.company.companyName()
      }
    } ),
    employee: _.times(20, (n) => {
      return {
        id: n,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        departmentId: n
      }
    })
    // name: string),
    // employee:firstName: string, lastName: string, departmentId: number)
  }
}
