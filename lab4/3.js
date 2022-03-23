/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let res='';
    for (let i=0;i<str.length;i++){
        let elem=str[i];
        let count=1;
        res=res+elem;
        for (i++;(i<str.length) && (elem==str[i]);i++){
            count++;
        }
        i--;
        if (count>1){
            res=res+count;
        }
    }
    return res;
}

module.exports = rle;
