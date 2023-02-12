const form = document.querySelector('.info-area');
const data = document.querySelector('.data');
const result = document.querySelector('.result');

let showAlert = ()=>{
    if(!document.querySelector('.warning-alert')){
        let alertItem = document.createElement('div');
        alertItem.classList.add('alert-danger');
        alertItem.classList.add('rounded');
        alertItem.classList.add('warning-alert');
        alertItem.innerHTML = 'Por favor preencha as informações acima!'
        form.appendChild(alertItem)
    }
}

let showResult = (height, weight, imc)=>{
    if(document.querySelector('.warning-alert')){
        document.querySelector('.warning-alert').remove();
    }
    let type = '';
    let color = '#FFF';

    data.innerHTML = `Você tem ${height.toFixed(2)} de altura e ${weight}Kg`
    
    if(imc < 18.5){
        type = 'abaixo do peso';
        color = '#F9F871';
    }else if(18.5 <= imc && imc <= 24.9){
        type = 'peso normal';
        color = '#3CEDD0';
    }else if(25 <= imc && imc <= 29.9){
        type = 'sobrepeso';
        color = '#F8B052';
    }else if(30 <= imc && imc <= 34.9){
        type = 'obesidade I';
        color = '#DA6E51';
    }else if(35 <= imc && imc <= 39.9){
        type = 'obesidade II';
        color = '#A43954';
    }else if(imc >= 40){
        type = 'obesidade III';
        color = '#5E174B';
    }
    
    result.style.color = color
    result.innerHTML = `<strong>Seu IMC é de ${imc.toFixed(2)} | ${type.toUpperCase()}</stong>`;
}

let calcIMC = ()=>{
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    data.innerHTML = '';
    result.innerHTML = ''
    if(height == "" || weight == ""){
        showAlert();
    }else{
        height = height/100;

        let imc = weight/(height*height);

        showResult(height, weight, imc);
    }
}