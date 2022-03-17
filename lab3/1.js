/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let str2 = '';
    for (let v of str.split(' ')) {
        str2 =  str2 + String(v.replace(v[0], v[0].toUpperCase()))+' ';
    }
    str2 = str2.substr(0, str2.length - 1);
    return str2;
}

module.exports = capitalize;
