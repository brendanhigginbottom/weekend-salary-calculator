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
    addEmployee(firstName, lastName, employeeID, title, salary);
    event.target.reset();
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
 * @param {onClick} event Deletes employee information from the table
 */
function deleteEmployee(event) {
    event.target.parentElement.parentElement.remove();
}

/**
 * Loops over employeeDatabse and adds annual salary total and 
 * creates monthly total (/12) which it appends to DOM. Background color is red if
 * monthly total > 20,000.
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
        displaySalaryTotal.innerHTML = `
        Monthly Total: $${monthlyTotal}
        `;
    }
}