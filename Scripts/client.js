console.log('JS Sourced!');

//Global Variables

let employeeDatabase = [];

/**
 * 
 * @param {onSubmit} event Gathers and assigns user input to variables
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
    //addEmployee(firstName, lastName, employeeID, title, salary);
}

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

// function addEmployee (first, last, ID, title, salary) {
//     let newEmployee = document.querySelector('#employeeTable');
    
// }