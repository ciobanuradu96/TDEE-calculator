const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prv = document.querySelector('#prev')

///
const ageSlide = document.querySelector('#ageSlide')
let ageValue = document.querySelector('#ageValue')
ageValue.value = ageSlide.value

/////

const weightSlide = document.querySelector('#weightSlide')
let weightValue = document.querySelector('#weightValue')
weightValue.value = weightSlide.value

// function ageSlide() {
//     ageValue.innerHTML = slider.value;
// }

twoWay = function (e) {
    let elem = document.getElementsByClassName(e.target.className);
    console.log(elem)
    for (var key in elem) {
        elem[key].value = e.currentTarget.value;
    }
}

// const nextSlide = () => {
//     const current = document.querySelector('.current')
//     current.classList.remove('current')

//     if (current.nextElementSibling) {
//         current.nextElementSibling.classList.add('current')
//         console.log(current.nextElementSibling)
//     } else {
//         slides[0].classList.add('current')
//     }
// }

// next.addEventListener('click', nextSlide);
// slider.addEventListener('input', ageSlide)
ageSlide.addEventListener('input', twoWay)
ageValue.addEventListener('input', twoWay)

weightSlide.addEventListener('input', twoWay)
weightValue.addEventListener('input', twoWay)