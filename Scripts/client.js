console.log('JS Sourced!');

//Global Variables

let employeeDatabase = [];

/**
 * 
 * @param {onSubmit} event Gathers and assigns user input to variables, then calls saveEmployee and
 * addEmployee functions
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
    addEmployee(firstName, lastName, employeeID, title, salary);
}

/**
 * 
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
 * clearing the table first each time 
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
                <td>${employee.AnnualSalary}</td>
                <td>
                    <button onClick="deleteEmployee(event)">Delete</button>
                </td>
            </tr>
        `;
    };
}

function deleteEmployee(event) {
    event.target.parentElement.parentElement.remove();
}