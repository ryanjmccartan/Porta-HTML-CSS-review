$(document).ready(onReady);

function onReady() {
    console.log('hello from jquery');
    $('#pizzaPrices').remove(); // remove element with id "pizzaPrices"

$('ul').children().addClass('bold'); // add new class "bold" to children of unordered list

let val = $('#pizzeriaName').text(); // gets text information from pizzeriaName and assigns it to val
console.log("this is val:", val);

$('#pizzeriaName').text(`Ryan's Place`); // changing name of pizzeria

// function to execute event when clicking order button
$('#orderBtn').on('click', function(){
    handleClick();
})

// targeted header because element needs to be loaded before secret button works. 
// then targeted #secretBtn so only clicking button would show secret message
$('header').on('click', '#secretBtn', function(){
    secretFunction();
})

}

function handleClick(){
  console.log('button clicked');
  $('#orderBtn').toggleClass('updateOrderBtn'); // changing class selector
  $('header').append(`<button id="secretBtn">secret button</button>`) // adding a button to the header element
}

function secretFunction(){
    alert('shhhhhhh');
    $('#secretBtn').remove();
}