const body = document.body
body.append("Hello Wold!", " I mean..");

// create element
const div = document.createElement('div')
const anotherDiv = document.createElement('div')
body.append(div, anotherDiv);

// add a text inside a div
// one way
div.innerText = "what the hell?!"

//or another
anotherDiv.textContent = "why are you shitting on us?!"

// use soma html and make this baby bold, cause dis is a hursh wold!
anotherDiv.innerHTML = "<strong>Yeah lets see some strength!</strong>"

// also we can get the same result from the code bellow this comment
const strong = document.createElement('strong')
strong.innerText = "ladies and rats meet a bold's brother from another mother"
body.append(strong)


// REMOVE ELEMENTS 
const box = document.querySelector("div")
const hi = document.querySelector("#hi")
const bye = document.querySelector("#bye")

// is possible to competely remove an element
bye.remove()

// and then append it again
box.append(bye)

// its also possible to remove an element using parent 
box.removeChild(hi)

// i add the space before 'hi' cause it is appended after 'bye'
box.append(" ", hi)


// MODIFY ELEMENT ATTRIBUTES
// one way
console.log(hi.getAttribute('id'));

// other way
console.log(hi.title)

// set attribute
// one way
console.log(bye.id)
console.log(bye.setAttribute('id', 'ineverwannaseeyouagain!'))
console.log(bye.id)

// or another
bye.title = 'brah'
console.log(bye.title)

// remove attribute
bye.removeAttribute('title')



// MODIFY DATA ATTRIBUTES
console.log(bye.dataset)

// print it
console.log(bye.dataset.test)
console.log(bye.dataset.longerName)

// new data attribute
hi.dataset.newData = "helloo"


// CLASSLISTS
// add a new class
hi.classList.add('new-class')

// remove class
hi.classList.remove('hi1')

// add a class if an element doesn't have it, and remove a class if an element has it
hi.classList.toggle('hi2')

// add a boolian
hi.classList.toggle('hi3', false)


// ACCESS CSS
// variableName.style.css property = ''
hi.style.color = "red"
bye.style.backgroundColor = "pink"