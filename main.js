
//// Function to create towWay data binding between the input range and input number
twoWay = function (e) {
    let elem = document.getElementsByClassName(e.target.className);
    console.log(elem)
    for (var key in elem) {
        elem[key].value = e.currentTarget.value;
    }
}

/// Function to change to the next card the card will get the .current class wich will bring it
///forword
const nextSlide = () => {
    const current = document.querySelector('.current')
    current.classList.remove('current')

    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current')
        console.log('test1')
    } else {
        cards[0].classList.add('current')
        console.log('test2')
    }
}



const cards = document.querySelectorAll('.card')
const next = document.querySelectorAll('#next')
const prv = document.querySelector('#prev')

///
const ageSlide = document.querySelector('#ageSlide')
let ageValue = document.querySelector('#ageValue')
ageValue.value = ageSlide.value

/////

const weightSlide = document.querySelector('#weightSlide')
let weightValue = document.querySelector('#weightValue')
weightValue.value = weightSlide.value

//////

const heightSlide = document.querySelector('#heightSlide')
let heightValue = document.querySelector('#heightValue')
heightValue.value = heightSlide.value




next.forEach(element => {
    console.log(element)
    element.addEventListener('click', nextSlide);
});

ageSlide.addEventListener('input', twoWay)
ageValue.addEventListener('input', twoWay)

weightSlide.addEventListener('input', twoWay)
weightValue.addEventListener('input', twoWay)

heightSlide.addEventListener('input', twoWay)
heightValue.addEventListener('input', twoWay)