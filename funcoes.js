var num = document.querySelectorAll('.botao');

//Array para armazenar cada digito clicado
var calculo = [];

//Cada digito agrupado em um Index do array
var valores = [];

//Todos os valores salvos com seus simbolos de matematicos
var conta = [];

var quantClick = 0;

function calculadora(){
    
    function cores_Animacoes(){
        if(power === 0){
            document.querySelectorAll(".tela .traco")[0].innerHTML = "";
            clearInterval(loop);
            document.getElementsByClassName('tela')[0].style.backgroundColor = "#6e4e2e";
            let decoracao = document.getElementsByClassName('detalhe');
            decoracao[0].style.backgroundColor = "#745312";
            decoracao[1].style.backgroundColor = "#745312";
            num.forEach((value, index) => {
                num[index].style.backgroundColor = '#D9D9D9';
                num[index].style.color = '#000000';
            });
            return;
        }
            function adicionarCor(){
                num.forEach((value, index)=>{
                    if(num[index].classList.contains('numero')){
                        num[index].style.backgroundColor = '#E3B664';
                        num[index].style.color = '#FFE2AE';
                    }
                })
                document.getElementsByClassName('tela')[0].style.backgroundColor = "#E3A464"
                let decoracao = document.getElementsByClassName('detalhe');
                decoracao[0].style.backgroundColor = "#eba00c"
                decoracao[1].style.backgroundColor = "#eba00c"
            
            }
            
                function animacaoTelaSemNumero() {
                        let textoTela = document.querySelectorAll(".tela .traco")[0];
                        textoTela.innerHTML = "_";
                        loop = setInterval(()=>{
                            setTimeout(()=>{
                                textoTela.style.color = "#E3A464";
                            },150);
                            setTimeout(()=>{
                                textoTela.style.color = "#f0e446";
                            },400);
                        },830);
                }
            
                function corBotoes(){
                        num.forEach((value,index)=>{
                            num[index].addEventListener('click', ()=>{
                                if(power === 0 ){
                                    return
                                }
                                if(num[index].classList.contains('numero')){
                                    //Mudar a cor do botão quando apertado
                                    num[index].style.backgroundColor = '#D39522'
                                    num[index].style.color = '#FFF0D3';
                                    
                                    
                                    //Voltar a cor padrao do botão
                                    setTimeout(()=>{
                                        num[index].style.backgroundColor = '#E3B664';
                                        num[index].style.color = '#FFE2AE';
                                    },500);
                                }
                                else{
                                    num[index].addEventListener('click', ()=>{
        
                                        num[index].style.backgroundColor = '#505050'
                                        num[index].style.color = '#FFFFFF';
                                        
                                        setTimeout(()=>{
                                            num[index].style.backgroundColor = '#D9D9D9';
                                            num[index].style.color = '#000000';
                                        },500);
                                    })
                                }
                            })
                        })
                }
                adicionarCor();
                corBotoes();
                animacaoTelaSemNumero();
        
    }
    const retirarAnimacaoTela = () => clearInterval(loop);

    var power = 0;
    let loop;
    function botaoOn_OFF() {
       
        let ligar = document.getElementById("ligar");
        ligar.addEventListener("click",()=>{
            power = 1;
            quantClick = 0;
            click_Botao();
            cores_Animacoes();
        })
        
            
        let desligar = document.getElementById("desligar");
        desligar.addEventListener("click",()=>{
            retirarAnimacaoTela();

            power = 0;
            quantClick = 0;

            let textoTela = document.querySelectorAll(".tela .traco")[0];
            let numeroTela = document.querySelectorAll(".tela .numeros")[0];
            textoTela.innerHTML = " ";
            numeroTela.innerHTML = " ";
            
            document.getElementsByClassName('tela')[0].style.backgroundColor = "#6e4e2e"
            let decoracao = document.getElementsByClassName('detalhe');
            decoracao[0].style.backgroundColor = "#745312"
            decoracao[1].style.backgroundColor = "#745312"

            num.forEach((value, index)=>{
                num[index].style.backgroundColor = '#D9D9D9';
                num[index].style.color = '#000000';
            })

            calculo = [];
            conta = [];
            valores = [];
            order = [];

        })
        
    }
    
    
    //Classe que armazena o Simbolo matemático e seu index
    class simboloCalculo{
        constructor(simbolo,index){
            this.simbolo = simbolo;
            this.index = index;
        }
    }
    
    
    function botoesNumericos(index){
        let tela = document.getElementsByClassName('numeros')[0];
        if(num[index].classList.contains('numero')){
            
            if(power === 1){
                if(power === 0){
                    return
                }

                //Adicionar o número selecionado na tela
                calculo.push(num[index].innerHTML.trim());
                
                
                //Codigo caso o primeiro numero seja negativo
                if(calculo[0] == '-'){
                    var total = "-" + calculo[1].trim();
                    for(var i = 2; i<calculo.length;i++){
                        total = total + calculo[i].trim();
                    }
                }
                else{
                    var total = calculo[0].trim();
                    console.log(total);
                    for(var i = 1; i<calculo.length;i++){
                        total = total + calculo[i].trim();
                    }
                }
                
                //Converter o valor de String para Number
                total = parseFloat(total.trim());
                
                valores[quantClick] = total;
                console.log(calculo);
                if(valores.length >=2){
                    tela.innerHTML +=  num[index].innerHTML.trim();
                }
                else{
                    tela.innerHTML = valores[quantClick];
                }
                
            }
        }
    }
    num.forEach((value,index)=>{
        if(num[index].classList.contains('numero')){
            num[index].addEventListener('click', ()=>{
                if(power === 1){
                    botoesNumericos(index);
                }
            })
        }
    })
    function click_Botao(index){
        let tela = document.getElementsByClassName('numeros')[0];

        //Função para resetar a tela e apagar os números

        function deletar(){
            let apagar = document.getElementById("apagar");

            apagar.addEventListener("click", ()=>{
                if(power === 0){
                    return
                }
                if(valores != undefined ){
                    let tela = document.getElementsByClassName("numeros")[0].innerHTML; 
                    let valorNaTela = tela.slice(0,tela.length - 1);
                    if(tela != String){
                        console.log("Vazio")
                    }
                    document.getElementsByClassName("numeros")[0].innerHTML = valorNaTela;
                    if(tela.slice(tela.length - 1,tela.length) >=0 ||tela.slice(tela.length - 1,tela.length) <=0 ){
                        if(isNaN(valores[quantClick])){
                            conta.pop();
                        }
                        else{
                            valores[quantClick] = valores[quantClick].toString();
                            valores[quantClick] = valores[quantClick].slice(0,valores[quantClick].length - 1);
                            valores[quantClick] = parseFloat(valores[quantClick]);
                            calculo.pop();
                        }
                    }
                    else{
                        conta.pop();
                        conta.pop();
                        console.log("valores na conta: "  + conta)
                        quantClick--;
                        
                        if(calculo.length == 0){
                            valores[quantClick] = valores[quantClick].toString();
                            for (let i = 0; i< valores[quantClick].length ; i++){
                                calculo.push(valores[quantClick].charAt(i))
                            }
                            valores[quantClick] = parseFloat(valores[quantClick]);
                        }
                        
                    }
                }
            })
        }


        function resetar(){
            let reset = document.getElementById('resetar');

            reset.addEventListener('click',()=>{
                if(power === 0){
                    return
                }
                calculo.splice(0,calculo.length);
                conta.splice(0,conta.length);
                document.getElementsByClassName('numeros')[0].innerHTML = ""
            })
        }

        //Função para adicionar o ponto ao calculo  

        function ponto(){
            let botaoPonto = document.getElementById('ponto');
            botaoPonto.addEventListener('click',(e)=>{
                if(power === 0){
                    return
                }
                tela.innerHTML +=  '.';
                calculo.push('.')
                
            })

        }
            
        //Função que vai calcular os valores

        function calcular(){
        
            function dividir(valor1,valor2){
                let botaoDividir = document.getElementById('dividir');
                botaoDividir.addEventListener('click',()=>{
                    if(power === 0){
                        return
                    }
                    if(valores[0] != undefined){
                        if(quantClick == 0){
                            conta.push(valores[quantClick]);
                            quantClick++;
                            conta.push("%");
                            tela.innerHTML = tela.innerHTML + "%";
                            calculo.splice(0,calculo.length); 
                        }
                        else{
                            if(tela.innerHTML.charAt(tela.innerHTML.length - 1) >= 0){
                                conta.push(valores[quantClick]);
                                quantClick++;
                                conta.push("%");
                                tela.innerHTML = tela.innerHTML + "%";
                                calculo.splice(0,calculo.length); 
                            }
                        }
                    }
                })
                return valor1 / valor2;
            }
        
            function mutiplicar(valor1,valor2){
                let botaoMutiplicar = document.getElementById("mutiplicar");
                botaoMutiplicar.addEventListener('click',()=>{
                    if(power === 0){
                        return
                    }
                    if(valores[0] != undefined){
                        if(quantClick == 0){
                            conta.push(valores[quantClick]);
                            quantClick++;
                            conta.push("x");
                            tela.innerHTML = tela.innerHTML + "x";
                            calculo.splice(0,calculo.length); 
                        }
                        else{
                            if(tela.innerHTML.charAt(tela.innerHTML.length - 1) >= 0){
                                conta.push(valores[quantClick]);
                                quantClick++;
                                conta.push("x");
                                tela.innerHTML = tela.innerHTML + "x";
                                calculo.splice(0,calculo.length); 
                            }
                        }
                    }
                })
                return valor1 * valor2;
            }
        
            function somar(valor1,valor2){
                let botaoSomar = document.getElementById('somar');
                botaoSomar.addEventListener('click',()=>{
                    if(power === 0){
                        return
                    }
                    if(valores[0] != undefined){
                        if(quantClick == 0){
                            conta.push(valores[quantClick]);
                            quantClick++;
                            conta.push("+");
                            tela.innerHTML = tela.innerHTML + "+";
                            calculo.splice(0,calculo.length); 
                        }
                        else{
                            if(tela.innerHTML.charAt(tela.innerHTML.length - 1) >= 0){
                                conta.push(valores[quantClick]);
                                quantClick++;
                                conta.push("+");
                                tela.innerHTML = tela.innerHTML + "+";
                                calculo.splice(0,calculo.length); 
                                console.log(valores)
                                console.log(conta)
                            }
                        }
                    }
                })
                return valor1 + valor2;
            }

            function subtrair(valor1,valor2){
                let botaoSubitrair = document.getElementById('subtrair');
                let numNegativo = 0;
                botaoSubitrair.addEventListener('click',()=>{
                    if(power === 0){
                        return
                    }
                    if(valores.length == 0 && numNegativo == 0){
                        numNegativo+=1;
                        calculo.push("-");
                        tela.innerHTML = '-';
                        
                    }   
                    else if(valores[0] != undefined){
                            if(tela.innerHTML.charAt(tela.innerHTML.length - 1) >= 0){
                                conta.push(valores[quantClick]);
                                quantClick++;
                                conta.push("-");
                                tela.innerHTML = tela.innerHTML + "-";
                                calculo.splice(0,calculo.length); 
                            }
                        }
                })
                return parseFloat(valor1) - parseFloat(valor2);
            }

            //Função que ira calcular o resultado
            function resultado(){
                let botaoResultado = document.getElementById('resultado');
                var order = []

                //Função para ordenar o calculo com as regras da matématica
                function ordemDoCalculo(){
                    
                    conta.forEach((value,index)=>{
                        switch(value){
                            case "%":
                                order.push(new simboloCalculo("%",index));
                                break;
                                
                            case "x":
                                order.push(new simboloCalculo("x",index));
                                break;

                            case "+":
                                order.push(new simboloCalculo("+",index));
                                break;
                                
                            case "-":
                                order.push(new simboloCalculo("-",index));
                                break;
                        }
                    })

                    //Função para ordenar o Array "order" para resepeitar as regras de operações matemáticas
                    function ordenarLista(lista,quant){
                    

                        const ordenarSimbolos = ()=>{
                            let backup;
                            for(let i = 0; i <= quant; i++){
                                for(let j = 0; j < quant; j++){
                                    if(lista[j + 1] != undefined){
                                        if(lista[j].simbolo == "+" || lista[j].simbolo == "-"){
                                            backup = lista[j + 1];
                                            lista[j + 1] = lista[j];
                                            lista[j] = backup;  
                                        }
    
                                    }
                                }
                            }
                        }

                        const ordenarIndex = ()=>{
                            let backup;
                        for(let i = 0; i <= quant; i++){
                                for(let j = 0; j < quant; j++){
                                    if(lista[j + 1] != undefined){
                                        if(lista[j].simbolo == "+" || lista[j].simbolo == "-"){
                                            if(lista[j + 1].simbolo != "x" && lista[j + 1].simbolo != "%"){
                                                if(lista[j].index > lista[j + 1].index){
                                                    backup = lista[j + 1];
                                                    lista[j + 1] = lista[j];
                                                    lista[j] = backup;  
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        ordenarSimbolos();
                        ordenarIndex();
                    }
                    ordenarLista(order,order.length);
                }
                
                function calcularValores(){
                    
                    function diminuirIndexdoObjeto(){
                        for(let i = 0; i < order.length; i++){
                            if(order[i].index > 1){
                                order[i].index = order[i].index - 2 ;
                            }
                        }
                    }

                        for(let i = 0; i< order.length; i++){
                            if(order[i].simbolo == "x"){
                                conta[order[i].index - 1] = mutiplicar(conta[order[i].index - 1],conta[order[i].index + 1]);
                                conta.splice(order[i].index,2);
                                diminuirIndexdoObjeto();
                            }        
                            else if(order[i].simbolo == "%"){
                                conta[order[i].index - 1] = dividir(conta[order[i].index - 1],conta[order[i].index + 1]);
                                conta.splice(order[i].index,2);
                                diminuirIndexdoObjeto();
                            }
                            else if(order[i].simbolo == "+"){
                                conta[order[i].index - 1] = somar(conta[order[i].index - 1],conta[order[i].index + 1]);
                                conta.splice(order[i].index,2);
                                diminuirIndexdoObjeto();
                            }
                            else {
                                conta[order[i].index - 1] = subtrair(conta[order[i].index - 1],conta[order[i].index + 1]);
                                conta.splice(order[i].index,2);
                                diminuirIndexdoObjeto();
                            }
                        }
                }

                botaoResultado.addEventListener('click',()=>{
                    if(power === 0){
                        return
                    }

                    //Adicionar ultimo valor digitado a lista da conta
                    conta.push(valores[quantClick]);
                    
                    // Verificar se o ultimo valor é um NaN
                    if(isNaN(conta[conta.length - 1])){
                        conta.pop();
                        conta.pop();
                    }

                    calculo.splice(0,calculo.length);
                    quantClick = 0;
                    valores.splice(0,valores.length);

                    ordemDoCalculo();
                    calcularValores();
                    
                    order = [];

                    valores.unshift(conta[0]);
                    tela.innerHTML = conta[0];

                    conta.splice(0,conta.length);
                    })
    
            }
            // Chamada das funções dos botões de calculos //
                dividir();
                mutiplicar();
                somar();
                subtrair();
                resultado();
            //-------------------------------------------//
        }

        // Chamada das funções dos botões de ações //
                deletar();
                ponto();
                resetar();
                calcular();
        //----------------------------------------//
            
    }

    botaoOn_OFF();

    
}
//Chamada da função da Calculadora
calculadora();
