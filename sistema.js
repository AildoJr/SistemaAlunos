let numeroDeAlunos = 10;

for(let contador = 0; contador <= numeroDeAlunos; contador++)
{
    if(contador == 0)
        console.log("O número atual é 0 ");
    else
    {
        if(contador % 2 == 0)
            console.log("O número "+ contador +" é par");
        else
            console.log(`O número ${contador} é ímpar`);
    }
}

let nomeDeAlunos = ["João","Maria","José","Joana","Mariana","Marcos"];

for (let nome of nomeDeAlunos) 
{
    console.log("Este(a) é nosso(a) aluno(a) "+ nome);    
}