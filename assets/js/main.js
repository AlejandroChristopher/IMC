function meuEscopo(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoa = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        const conta = (peso.value / altura.value) / altura.value

        if (conta < 18.5){
            resultado.innerHTML = `Seu IMC é ${conta.toFixed(2)} (Abaixo do peso) `
        }else if(conta >= 18.5 && conta <= 24.9){
            resultado.innerHTML = `Seu IMC é ${conta.toFixed(2)} (Peso normal)`
        }else if(conta >= 25 && conta <= 29.9){
            resultado.innerHTML = `Seu IMC é ${conta.toFixed(2)} (Sobrepeso)`
        }else if(conta >= 30 && conta <= 34.9){
            resultado.innerHTML = `Seu IMC é ${conta.toFixed(2)} (Obesidade grau 1)`
        }else if(conta >= 35 && conta <= 40){
            resultado.innerHTML = `Seu IMC é ${conta.toFixed(2)} (Obesidade grau 2)`
        }else if (conta > 40){
            resultado.innerHTML = `Seu IMC é ${conta.toFixed(2)} (Obesidade grau 3)`
        };

        pessoa.push({
            peso: peso.value,
            altura: altura.value,
            conta
        }); 
        
        console.log(pessoa);
    }
    form.addEventListener('submit', recebeEventoForm);


}
meuEscopo();