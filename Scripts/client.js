console.log('JS Sourced!');

function submitForm(event) {
    event.preventDefault();
    console.log('test');
    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let employeeID = document.querySelector('#employeeID').value;
    let title = document.querySelector('#title').value;
    let salary =  Number(document.querySelector('#salary').value);

    console.log(firstName, lastName, employeeID, title, salary);
}