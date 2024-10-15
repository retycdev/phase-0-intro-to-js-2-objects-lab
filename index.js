// helpers.js

// Non-destructive update (returns a new object with the new key-value pair)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Use the spread operator to clone the employee object and add the new key-value pair
    return { ...employee, [key]: value };
  }
  
  // Destructive update (modifies the original employee)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Modify the original employee object directly
    employee[key] = value;
    return employee; // Return the modified employee object
  }
  
  // Non-destructive delete (returns a new object without the key)
  function deleteFromEmployeeByKey(employee, key) {
    // Clone the employee object
    let newEmployee = { ...employee };
    // Delete the specified key from the clone
    delete newEmployee[key];
    return newEmployee; // Return the new object
  }
  
  // Destructive delete (modifies the original employee)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the original employee object
    delete employee[key];
    return employee; // Return the modified employee object
  }
  
  // Export the functions so they can be required in the test file
  module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey,
  };
  