/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
    let v = str.split(/[\ :!&?;,\]]/);
    let max=Number(v[0]);
    let min=Number(v[0]);
    for (let i=0;i<v.length;i++) {
        if (!isNaN(v[i])){
            if(Number(v[i])>max){
            max=Number(v[i]);}
            if (Number(v[i])<min){
            min=Number(v[i]);}
            
        }
    }
    return {min, max};
}

module.exports = getMinMax;
