let myForm = document.getElementById('form');
let myTable = document.getElementById('table');
let allEmployees = [];
let total=0;
if (localStorage.getItem('Employees'))
{
  let temprory = JSON.parse(localStorage.getItem('Employees'));
  for (let i=0 ; i<temprory.length;i++)
  {
    let dataRender = new Employees(temprory[i].name,temprory[i].email,temprory[i].department,temprory[i].salary);
    dataRender.render();
  }
}


function Employees (name , email , department , salary)
{
  this.name = name;
  this.email = email;
  this.department = department;
  this.salary = salary;
  allEmployees.push(this);

  this.render = function ()
  {
    let tabelHeader2 = document.createElement('tr');
    myTable.appendChild(tabelHeader2);
    let tabelData = document.createElement('td');
    tabelHeader2.appendChild(tabelData);
    tabelData.textContent= this.name;
    let tabelData2 = document.createElement('td');
    tabelHeader2.appendChild(tabelData2);
    tabelData2.textContent= this.email;

    let tabelData3 = document.createElement('td');
    tabelHeader2.appendChild(tabelData3);
    tabelData3.textContent= this.department;

    let tabelData4 = document.createElement('td');
    tabelHeader2.appendChild(tabelData4);
    tabelData4.textContent= this.salary;
    total = total+this.salary;

    let theTotal = document.getElementById('total');
    theTotal.innerHTML=' Total =' + total;



  };
}
function getRandomNumber (min,max)
{
  return Math.floor(Math.random() * (max - min) ) + min;
}

myForm.addEventListener('submit', addNewEmployee );
function addNewEmployee(event)
{
  event.preventDefault();
  let name = event.target.name.value;
  let email = event.target.email.value;
  let department = event.target.department.value;
  let salary = getRandomNumber(100,500);

  let newEmployee = new Employees(name , email , department, salary);

  newEmployee.render();
  localStorage.setItem('Employees',JSON.stringify(allEmployees));
}
