

const entrada = require("readline-sync");

let conta : number = parseFloat(entrada.question("digite o numero da sua conta: "));
let senha : number = entrada.question("digite sua senha: ");
let saldo = 1000;

    if(senha == 43632158878 && conta == 1234){

        console.log(saldo);

        console.log("saque")
        
        console.log("deposito")

    let escolha = entrada.question("deseja fazer saque ou deposito: ");

    if(escolha == "saque"){

     let valor : number = parseFloat(entrada.question("digite o valor que deseja sacar: "));

     let senha2 = entrada.question("digite sua senha: ");

     if(valor > 0 && valor <= saldo && senha2 == 43632158878){

        console.log("o seu novo saldo: " + (saldo - valor));
        
    }
    
    else if(valor>saldo){

        console.log("valor invalido");

    }

    else if(senha2 != 43632158878){
        
        console.log("senha invalida");
    
    }

  }
    if(escolha == "deposito"){

    let valor2 : number = parseFloat(entrada.question("digite o valor que deseja depositar: "));

    let senha3 = entrada.question("digite sua senha: "); 
    
    if(senha3 == 43632158878){
    
       console.log("novo saldo: " + (saldo + valor2));
    
     }

    else if(senha3 != 43632158878){

        console.log("senha incorreta");

    }

    }
    let sair2 = entrada.question("deseja sair:")
    
    
    if(sair2 == "sim"){

        console.log("Tchau");

    }

}

    else{

        console.log("senha ou numero da conta incorreta");

    }