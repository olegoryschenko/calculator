
const objectFunctionAct = {
    addition: function(a, b) {
        return a + b;
    },
    subtraction: function(a, b) {
        return a - b;
    },
    multiplication: function(a, b) {
        return a * b;
    },
    division: function(a, b) {
        if(b === 0) {
            return 'Невозможно!'
        }  
        return a / b;
    }
}


window.addEventListener('click', actWhichSign);


function actWhichSign(e) {


    if(event.target.dataset.delete === 'delete') {
        if(document.querySelector('.resultSpan').classList.contains('changeLocation')) {
            document.querySelector('.resultSpan').classList.remove('changeLocation');
            document.querySelector('.inputAnswer').classList.remove('changeLocation');
            document.querySelector('.resultSpan').classList.remove('tracking-in-expand');

        } else { return }
    } 

    if(event.target.closest('.delteAll')) {
        if(document.querySelector('.resultSpan').classList.contains('changeLocation')) {
            document.querySelector('.resultSpan').classList.remove('changeLocation');
            document.querySelector('.inputAnswer').classList.remove('changeLocation');
            document.querySelector('.resultSpan').classList.remove('tracking-in-expand');

        } 
        objectBeloonComand.addA = true;
        document.querySelector('.resultA ').innerHTML = '0'
        document.querySelector('.resultOrange  ').innerHTML = ''
        document.querySelector('.resultB ').innerHTML = ''
    } 


    if(this.event.target.dataset.answer) {
                document.querySelector('.resultSpan').classList.add('changeLocation');
                document.querySelector('.inputAnswer').classList.add('changeLocation');
                // animation
                document.querySelector('.resultSpan').classList.add('tracking-in-expand');
           
     




        switch (document.querySelector('.resultOrange').innerHTML) {
            case '+':
               document.querySelector('.resultSpan').textContent = objectFunctionAct.addition(Number(document.querySelector('.resultA').innerHTML), Number(document.querySelector('.resultB').innerHTML));
            // document.querySelector('.resultSpan').innerHTML = objectFunctionAct.addition(parseIntFromInnerA, parseIntFromInnerB);
            break;
            case '-':
                document.querySelector('.resultSpan').textContent = objectFunctionAct.subtraction(Number(document.querySelector('.resultA').innerHTML), Number(document.querySelector('.resultB').innerHTML));
            break;   
            case 'x':
                document.querySelector('.resultSpan').textContent = objectFunctionAct.multiplication(Number(document.querySelector('.resultA').innerHTML), Number(document.querySelector('.resultB').innerHTML));        
               break;  
           case '/':
                document.querySelector('.resultSpan').textContent = objectFunctionAct.division(Number(document.querySelector('.resultA').innerHTML), Number(document.querySelector('.resultB').innerHTML)); 
               break; 

               default:
                document.querySelector('.resultSpan').textContent = document.querySelector('.resultA').textContent
    }
}
 }