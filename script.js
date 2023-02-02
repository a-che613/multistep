
let nextButton1 = document.querySelector('.next-btn1');
let stepTwo = document.querySelector('.steptwo');
let stepOne = document.querySelector('.stepone');
let backtofirst = document.querySelector('.bck2first');
let nexttothird = document.querySelector('.next2third')
let stepThreeM = document.querySelector('.sec3-monthly');
let stepThreeY = document.querySelector('.sec3-yearly');
let backtosecond = document.querySelector('.back2second');
let nexttofourth = document.querySelector('.next2fourth');
let sectionfour = document.querySelector('.secfour')
let backtothird = document.querySelector('.back2third');
let monthsec = document.querySelector('.check-month');
let yearsec = document.querySelector('.check-year');




function firstStep() {
  nextButton1.addEventListener("click", () => {
    stepTwo.style.display = 'initial';
    stepOne.style.display = 'none';
  });
}
firstStep()


function secondStep() {
  backtofirst.addEventListener("click", () => {
    stepTwo.style.display = 'none';
    stepOne.style.display = 'initial';
  })
  // nexttothird.addEventListener("click", () => {
    // stepTwo.style.display = 'none';
    // stepThree.style.display = 'initial';
      nexttothird.addEventListener("click", () => {
        if(monthsec.checked) {
          // alert('you have chosen the monthly offer');
          stepTwo.style.display = 'none';
          stepThreeM.style.display = 'initial';
        }
        else if(yearsec.checked) {
          stepTwo.style.display = 'none';
          stepThreeY.style.display = 'initial';
        }
        else {
          alert('please select an offer')
        }
      })
//   });
};
secondStep()


function thirdStep() {
  backtosecond.addEventListener("click", () => {
    stepThree.style.display = 'none';
    stepTwo.style.display = 'initial';
  })
  nexttofourth.addEventListener("click", () => {
    stepThree.style.display = 'none';
    sectionfour.style.display = 'initial';
  });
}
thirdStep()

function fourthStep() {
 
  backtothird.addEventListener("click", () => {
    stepThree.style.display = 'initial';
    sectionfour.style.display = 'none';
  })
}
fourthStep()