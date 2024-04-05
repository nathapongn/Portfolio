// Get new dates and create new "today" object to access from
let today = new Date();

// Access from object today
let todayDate = today.getDate();
let todayMonth = today.getMonth();

// Define Month
let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 
'July', 'August', 'September', 'October', 'November', 'December'];

console.log(todayDate);

// Let month be in the index of month list
console.log(monthList[todayMonth]);


// Declare HTML elements as JS variables
const currentDate = document.querySelector('.js-current-date');
const currentMonth = document.querySelector('.js-current-month');

const inputName = document.querySelector('.js-input-name');
const inputDate = document.querySelector('.js-input-date');
const inputColor = document.querySelector('.js-input-color');

const buttonAdd = document.querySelector('.js-button-add');

const toDoList = document.querySelector('.js-todo-list')

// Display Date and Month in DOM
currentDate.innerHTML = todayDate;
currentMonth.innerHTML = monthList[todayMonth];

// Fetch toDo JSON from local Storage
window.addEventListener('load', () => renderToDoList());

// Let ToDo be an empty array.
let toDo = JSON.parse(localStorage.getItem('toDo')) || [];


// Function that adds new objects [name, date] to an array.
function addToList (){

    // name is the input value if the input value is not empty, else name is -
    let name = inputName.value !== '' ? inputName.value : '-';

    // date is the input value if the input value is not empty, else date is -
    let date = inputDate.value !== '' ? inputDate.value : '-';

    toDo.push({
        color: inputColor.value,
        name: name,
        date: date
    });

    saveToStorage();

    renderToDoList();

    console.log(toDo);

    inputName.value = '';
    inputDate.value = '';
}

// Save to toDo to Local Storage
function saveToStorage(){
    localStorage.setItem('toDo', JSON.stringify(toDo));
};

// Add Button Trigger
buttonAdd.addEventListener('click', () => addToList());

// Create Table Header



function createHeader(){
    if (toDo != '') {
        const toDoHeader = document.createElement('div');
        toDoHeader.classList.add('toDoHeader');
        toDoHeader.innerHTML = '<p>Name</p> <p>Due Date</p>';
        toDoList.appendChild(toDoHeader);
    }
}

// Function that adds new HTML elements and updates the DOM.
function renderToDoList (){

    // Set to Blank before rerendering new array
    toDoList.innerHTML = '';

    // Create Header if toDo is not Empty
    createHeader();

    // Render each value in toDo Array as HTML elements
    for(let i = 0; i < toDo.length; i++){

        
        // Create New Record Container
        const toDoRecord = document.createElement('div');
        toDoRecord.classList.add('toDoRecord');
        toDoList.appendChild(toDoRecord);

        // Create Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');

        checkbox.addEventListener('click', () => complete(i));

        // Create div for Color Swatch
        const toDoSwatch = document.createElement('div');
        toDoSwatch.classList.add('toDoSwatch');
        toDoSwatch.style.backgroundColor = toDo[i].color;
        toDoSwatch.style.width = '10px';
        toDoSwatch.style.height = '10px';
        toDoSwatch.style.borderRadius = '4px';

        // Create Text for ToDo Name
        const toDoName = document.createElement('p');
        toDoName.classList.add('toDoName');
        toDoName.innerHTML = toDo[i].name;

        // Create Text for toDo Date
        const toDoDate = document.createElement('p');
        toDoDate.classList.add('toDoDate');
        toDoDate.innerHTML = toDo[i].date;
        
        // Crete Delete Button
        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('buttonDelete');
        buttonDelete.innerHTML = '<img src="asset/icon-delete.svg" alt="Delete Record">'
        buttonDelete.addEventListener('click', () => deleteRecord(i))

        // Add new element to Record Container
        toDoRecord.appendChild(checkbox);
        toDoRecord.appendChild(toDoSwatch);
        toDoRecord.appendChild(toDoName);
        toDoRecord.appendChild(toDoDate);
        toDoRecord.appendChild(buttonDelete)
    }

    // Declare Checkbox Function
    function complete(index){

        toDoList.children[index].classList.add('completed');

        setTimeout(() => {
            toDo.splice(index, 1);
            renderToDoList();
            saveToStorage();
        }
        , 1500)

    };

    // Declare Delete Record Function
    function deleteRecord (index){
        toDo.splice(index, 1);
        renderToDoList();
        saveToStorage();
    };
}
