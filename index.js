// Итерационный подсчет факториала
function factIterat(num){
    let res = 1;
    while(num){
        res *= num--;
    }
    return res;
    
}

// Рекурсивный расчет факториала
function factRec(num){
    return (num != 1)?num * factRec(num - 1):1;
}
console.log(factIterat(5));