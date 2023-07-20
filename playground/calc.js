let calculation = '';

function display() {
    let display = document.querySelector('.display');
    display.innerHTML = calculation;
}

const numberButton = document.querySelectorAll('.numberButton');

numberButton.forEach(
    function(button){
        button.addEventListener('click',
        function(){
            const number = button.textContent;
            calculation += number;
            console.log(calculation);
            display();
        });
    }
)
// Addition, Subtraction
const symbolButton = document.querySelectorAll('.symbolButton');
symbolButton.forEach(function(button){
    button.addEventListener('click',
        function(){
            const symbol = button.textContent;
            calculation += symbol;
            console.log(calculation);
            display()
        });
});

// Multiplication to display x isntead of * on the UI
const multiplyButton = document.querySelector('.multiplyButton');
multiplyButton.addEventListener('click',
    function(){
        const multiply = '*';
        calculation += multiply;
        console.log(calculation);
        display();
    });

// Division Button
const divideButton = document.querySelector('.divideButton');
divideButton.addEventListener('click', function(){
    calculation += '/';
    console.log(calculation);
    display();
})
// Equal by eval() the variable calculation
const equalButton = document.querySelector('.equalButton');
equalButton.addEventListener('click', function() {
        eval(calculation);
        console.log(eval(calculation));
        calculation = eval(calculation);
        display();
    }
);

const clearButton = document.querySelector('#buttonClear');

clearButton.addEventListener('click', function(){
    calculation = '';
    console.log('Calculation Cleared.')
    display();
}
)