const resultado = document.getElementById("resultado");

class Parquimetro {
    constructor() {
        this.valor = parseFloat(document.getElementById("valor").value);
        this.calcularTempo();

    }

    calcularTempo() {
        let tempo;
        let troco = 0;
        const resultado = document.getElementById("resultado");
        if (this.valor < 1) {
            resultado.innerHTML = `<p>Valor insuficiente</p>`;
            
        
        } else if (this.valor >= 1 && this.valor < 1.75 ) {
            troco = (this.valor - 1).toFixed(2);
            resultado.innerHTML = `<p>Tempo permitido: Até 30 minutos</p>`;
            if (troco > 0) {
                resultado.innerHTML = `<p>Tempo permitido: Até 30 minutos</p> seu troco é de ${troco}</p>`;
            }
        
        } else if (this.valor >= 1.75 && this.valor < 3 ) {
            troco = (this.valor - 1.75).toFixed(2);
            resultado.innerHTML = `<p>Tempo permitido: Até 60 minutos</p>`;
            if (troco > 0) {
                resultado.innerHTML = `<p>Tempo permitido: Até 60 minutos</p> seu troco é de ${troco}`;
            }
        
        } else if (this.valor === 3) {
            resultado.innerHTML = `<p>Tempo permitido: Até 120 minutos</p>`;
            
        
        } else if (this.valor > 3) {
            troco = (this.valor - 3).toFixed(2);
            resultado.innerHTML = `<p>Tempo permitido: Até 120 minutos</p> seu troco é de ${troco}`
        
        } else {
            tempo = "Valor inválido!";
        
        }

        
    }

}

document.getElementById("calcular").addEventListener("click", function() {
    new Parquimetro(valor);
});
