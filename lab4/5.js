/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Для прохождения тестов на эту задачу их необходимо раскоментить в файле tests/lab4.test.js
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str){
    let left=str[0];
    for (i=0;i<str.length;i++)
    {
        let rigth = str[i+1];
        if ((left== "(") && ((rigth == "]") || (rigth == ">"))) return false;
        if ((left == "[") && ((rigth == ")") || (rigth == ">"))) return false;
        if ((left== "<") && ((rigth == ")") || (rigth == "]"))) return false;
        left=rigth;
    }
    return true;
}

module.exports = checkBrackets;
