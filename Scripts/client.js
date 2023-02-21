console.log('JS Sourced!');

//Global Variables

let employeeDatabase = [];

/**
 * 
 * @param {onSubmit} event Gathers and assigns user input to variables, then calls saveEmployee and
 * addEmployee functions and uses reset() to clear input fields.
 */
function submitForm(event) {
    event.preventDefault();
    console.log('test');
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let employeeID = document.querySelector('#employeeID').value;
    let title = document.querySelector('#title').value;
    let salary =  Number(document.querySelector('#salary').value);

    console.log(firstName, lastName, employeeID, title, salary);
    saveEmployee(firstName, lastName, employeeID, title, salary);
    addEmployee();
    event.target.reset();
}

/**
 * Pushes information submitted to a global array of objects
 * @param {string} first Employee First Name from form
 * @param {string} last Employee surname from form
 * @param {number} ID Employee ID from form
 * @param {string} title Employee title from form
 * @param {number} salary Employee annual salary from form
 */
function saveEmployee (first, last, ID, title, salary) {
    employeeDatabase.push({
        FirstName: first,
        LastName: last,
        ID: ID,
        Title: title,
        AnnualSalary: salary
    });
    console.log(employeeDatabase);
}

/**
 * Loops over employeeDatabase and appends to DOM for each object in array, 
 * clearing the table first each time. Also calls addSalary function.
 */
function addEmployee () {
    let displayEmployee = document.querySelector('#employeesTableBody');
    displayEmployee.innerHTML = '';
    for (let employee of employeeDatabase) {
        displayEmployee.innerHTML += `
        <tr>
            <td>${employee.FirstName}</td>
            <td>${employee.LastName}</td>
            <td>${employee.ID}</td>
            <td>${employee.Title}</td>
            <td>$${employee.AnnualSalary}</td>
            <td>
                <button onClick="deleteEmployee(event)">Delete</button>
            </td>
        </tr>
        `;
    };
    addSalary();
}

/**
 * 
 * @param {onClick} event Deletes employee information from the table and grabs ID to pass to
 * deleteFromEmployeeDatabase function. 
 * Calls addEmployee after employee has been deleted which will ensure monthly total is accurate.
 * * NOTE: Functionality breaks if more than one employee has the same employee ID!
 */
function deleteEmployee(event) {
    let employeeID = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    console.log(employeeID);
    event.target.parentElement.parentElement.remove();
    deleteFromEmployeeDatabase(employeeID);
    addEmployee();
}

/**
 * 
 * @param {string} employeeID Loops over employeeDatabase and splices the array at the index of the employeeID
 * match, removing it permanently from the array. Logged what was deleted and the new employeeDatabase
 * to ensure it was functioning correctly. 
 */
function deleteFromEmployeeDatabase(employeeID) {
    for (let toDelete of employeeDatabase) {
        if (employeeID === toDelete.ID) {
            console.log(employeeDatabase.splice(employeeDatabase.indexOf(toDelete), 1));
        }
    }
    console.log(employeeDatabase);
}

/**
 * Loops over employeeDatabse and adds annual salary total and 
 * creates monthly total (/12 and limited to two decimal points) which it appends to DOM. 
 * Background color is red if monthly total > 20,000 and white (default) 
 * which flips it back if it was ever made red.
 */
function addSalary() {
    let displaySalaryTotal = document.querySelector("#salaryTotal");
    let salaryTotal = 0;
    let monthlyTotal = 0;
    for (let salary of employeeDatabase) {
        salaryTotal += salary.AnnualSalary;
    }
    monthlyTotal = (salaryTotal / 12).toFixed(2);
    // interesting (for me) to note, 20,000 seems to be a string but 20000 works?
    if (monthlyTotal > 20000) {
        displaySalaryTotal.style.backgroundColor = 'red';
        displaySalaryTotal.innerHTML = `
        Monthly Total: $${monthlyTotal}
        `;
    } else {
        displaySalaryTotal.style.backgroundColor = 'white';
        displaySalaryTotal.innerHTML = `
        Monthly Total: $${monthlyTotal}
        `;
    }
}