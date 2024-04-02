
// create interface


const objectNumbersABsingCalculation  = {   
     numberA:  '0',
     oranges: '',
     numberB:  '',
};

function createResultA(number, orange) {
    let resultHTMLAsign = 
    `
    <span class="resultA delete">${number}</span>
    <span class="resultOrange delete">${orange}</span>    
    `
    document.querySelector('.inputAnswer').insertAdjacentHTML('afterbegin', resultHTMLAsign)
}
createResultB(objectNumbersABsingCalculation.numberB)


function createResultB(number) {
    let resultHTMLB = 
    `
    <span class="resultB delete">${number}</span>
    
    `
    document.querySelector('.inputAnswer').insertAdjacentHTML('afterbegin', resultHTMLB)
}
createResultA(objectNumbersABsingCalculation.numberA, objectNumbersABsingCalculation.oranges)

function createResult() {
    let resultAnswerHTML = 
    `
    <span class="resultSpan">=</span>
    
    `
    document.querySelector('.inputAnswerAct').insertAdjacentHTML('afterbegin', resultAnswerHTML)
}

createResult()

function createDeleteAllPlusMinusProcent() {
    let createHTML = `
        <div class="delteAll right" data-deleteAll="delAll">AC</div>
        <div class="plusMinus right">
            +/-
        </div>
        <div class="procent right">%</div>
    `;
    document.querySelector('.calculateDeltesAllPlusMinusProcent').insertAdjacentHTML('afterbegin', createHTML)
}

createDeleteAllPlusMinusProcent()

function createNum() {
    for(let i = 1; i <= 9; i++) {
       let createElHTML = 
       `
       <div class="num" data-numbers="${i}">${i}</div>
       
       `;
       document.querySelector('.calculateNumbers').insertAdjacentHTML('afterbegin', createElHTML)
    }
}
createNum()

function createNullDotDelete() {
        // const divNumBottomZero = document.createElement('div');
        // divNumBottomZero.classList.add('num');
        // divNumBottomZero.classList.add('null');
        // divNumBottomZero.innerHTML = zero;
        // document.querySelector('.calculateAct-bottom').appendChild(divNumBottomZero)
        let createHTML = 
        `
        <div class="num dot" data-numbers=".">.</div>
        <div class="num" data-numbers='0'>0</div>
        <div class="num delete" data-delete='delete'>
        <img data-delete='delete' src="./img/deleteIcon.png" alt="Images">
        </div>
        `
        document.querySelector('.calculateNumbers').insertAdjacentHTML('beforeend', createHTML)
}
createNullDotDelete()

function createNumRight() {
    let createHTML = 
    `
    <div class=" right" data-orange="/">/</div>
    <div class=" right" data-orange="x">x</div>
    <div class=" right" data-orange="-">-</div>
    <div class=" right" data-orange="+">+</div>
    <div class=" right" data-answer="=">=</div>
    `
    document.querySelector('.calculateAct-right').insertAdjacentHTML('afterbegin', createHTML)
}
createNumRight()



const objectBeloonComand = {
     addA: true,
     sign:  true,
     addB:  true,
}


window.addEventListener('click', addNumbersA);
window.addEventListener('click', signs);
window.addEventListener('click', addNumbersB);

function addNumbersA(e) {
    // dot
    
    if((event.target.dataset.delete === 'delete')) {
        if(document.querySelector('.resultSpan').classList.contains('changeLocation')) {
            return
        }
        if(document.querySelector('.resultA').textContent.includes('.')) {
            document.querySelector('.dot').setAttribute('style', 'pointer-events: auto')
        } 
    }

    // delete
    if(event.target.dataset.delete === 'delete') {
        if(document.querySelector('.resultA').textContent === '0' || objectBeloonComand.addA === false) {
            return;
        }
        let deletes =  document.querySelector('.resultA').textContent = document.querySelector('.resultA').textContent.slice('0', '-1');
    }

    // dot
    if(this.event.target.dataset.numbers === ".") {
        if(document.querySelector('.resultA').textContent.includes('.')) {
            document.querySelector('.dot').setAttribute('style', 'pointer-events: auto')
            return
        } else {
            document.querySelector('.dot').setAttribute('style', 'pointer-events: auto')
        }
    }
    // numbers
    if(this.event.target.dataset.numbers) {
    
   
        
        let meaningNum = this.event.target.dataset.numbers;
        numberA = meaningNum;
    
        if(objectBeloonComand.addA) {
            objectBeloonComand.addB = false;
            document.querySelector('.resultA').textContent += numberA
        } else {
            objectBeloonComand.addB = true;
            return;
        }
      
    }
}

function signs(e) {
    if(event.target.dataset.delete === 'delete') {
       if(objectBeloonComand.sign) {
           let deletes =  document.querySelector('.resultOrange').textContent = document.querySelector('.resultOrange').textContent.slice('0', '-1');
           objectBeloonComand.addA = true
       } else { return }
  

        
    }

    if(this.event.target.dataset.orange) {
        objectBeloonComand.addA = false;
            let meaningOrange = this.event.target.dataset.orange;
            oranges = meaningOrange;
            document.querySelector('.resultOrange').textContent = oranges;
    }
}

function addNumbersB(e) {
    // dot
    if(!objectBeloonComand.addA) {
        if(document.querySelector('.resultSpan').classList.contains('changeLocation')) {
            return
        }
        if(document.querySelector('.resultB').textContent.includes('.')) {
            document.querySelector('.dot').setAttribute('style', 'pointer-events: auto')
        } 
         if (event.target.dataset.delete === 'delete') {
            if(document.querySelector('.resultB').textContent.includes('.')) {
            document.querySelector('.dot').setAttribute('style', 'pointer-events: auto')
            }
        }
    }
        
    // delete
    if(event.target.dataset.delete === 'delete') {


        if(document.querySelector('.resultB').textContent === '') {
            objectBeloonComand.sign = true;
        }
        if(objectBeloonComand.addB) {
            let deletes =  document.querySelector('.resultB').textContent = document.querySelector('.resultB').textContent.slice('0', '-1');
        } else { return }
    }

    // dot
  
    // number
    if(!objectBeloonComand.addA) {

        if(this.event.target.dataset.numbers === ".") {
            if(document.querySelector('.resultB').textContent.includes('.')) {
                document.querySelector('.dot').setAttribute('style', 'pointer-events: none')
                return
            } else {
                document.querySelector('.dot').setAttribute('style', 'pointer-events: auto')
            }
        }
        
    }

    if(this.event.target.dataset.numbers) {
        if(!objectBeloonComand.addA) {
            objectBeloonComand.sign = false;
            if(objectBeloonComand.addB) {
                let meaningNum = this.event.target.dataset.numbers;
                numberB = meaningNum;
                document.querySelector('.resultB').textContent += numberB
            }
        }
    }
}