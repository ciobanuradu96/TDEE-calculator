
//// Function to create towWay data binding between the input range and input number
twoWay = function (e) {
    let elem = document.getElementsByClassName(e.target.className);
    for (var key in elem) {
        elem[key].value = e.currentTarget.value;
    }
}

/// Function to change to the next card the card will get the .current class wich will bring it
///forword
// const nextSlide = () => {
//     const current = document.querySelector('.current')
//     current.classList.remove('current')

//     if (current.nextElementSibling) {
//         current.nextElementSibling.classList.add('current')
       
//     } else {
//         cards[0].classList.add('current')
   
//     }
// }


results=  ()=>{

    let gender= document.querySelector('#genderSlide').value
    let bodyFat= document.querySelector('#bodyFat')
    ageValue.value = ageSlide.value
    let weight=weightValue.value = weightSlide.value
    let height=heightValue.value = heightSlide.value
    let bmr= document.querySelector('#bmr')
    let bmi=document.querySelector('#bmi')
    let activityLvl=document.querySelector('#activityLvl')
    let tdee=document.querySelector('#tdee')

    bmi.innerHTML = (weight/Math.pow(height/100,2))
    
    if (bodyFat.value!=""){
        //Katch
        let lbm= weight-(weight*bodyFat.value*0.001)
         bmr.innerHTML=370+21.6*lbm
    }else{
        //Mifflin
        let s=0;
        gender=="1"? s=5: s=-151;
        bmr.innerHTML=(((10*weight)+(6.25*height)-(5*ageValue.value))+s)
        
    }
    // activity level based on the option selected 
    switch(activityLvl.value){
        case "sedentary":
             tdee.innerHTML=bmr.innerHTML*1.2
            break;
        case "light":
            tdee.innerHTML=bmr.innerHTML*1.37
            break;
        case "moderate":
            tdee.innerHTML=bmr.innerHTML*1.55    
            break;
        case "heavy":
            tdee.innerHTML=bmr.innerHTML*1.725    
            break; 
        case "athlete":
            tdee.innerHTML=bmr.innerHTML*1.9    
            break; 
    }
    

    }

const ageSlide = document.querySelector('#ageSlide')
const ageValue = document.querySelector('#ageValue')
const weightSlide = document.querySelector('#weightSlide')
const weightValue = document.querySelector('#weightValue')
const heightSlide = document.querySelector('#heightSlide')
const heightValue = document.querySelector('#heightValue')
const cards = document.querySelectorAll('.card')
const next = document.querySelectorAll('#next')
const prv = document.querySelector('#prev')
let gender= document.querySelector('#genderSlide')
let bodyFat= document.querySelector('#bodyFat')
let activityLvl=document.querySelector('#activityLvl')


results()
////// Setting up 2 way data binding for each input 

inputTowWays=[ageSlide,weightSlide,heightSlide,ageValue,weightValue,heightValue]
inputTowWays.forEach(input => input.addEventListener('input',twoWay))

inputs=[ageSlide,weightSlide,heightSlide,ageValue,weightValue,heightValue,gender,bodyFat,activityLvl]
inputs.forEach(input=>input.addEventListener('input',results))


// next.forEach(element => {
//     element.addEventListener('click', nextSlide);
// });







