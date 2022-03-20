/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    let map = new Map();
    
    for (let i=0;i<arr.length;i++) {
        let sort = arr[i].toLowerCase().split('').sort().join('');
        if (map.has(sort) === true){
            let buff = map.get(sort);
            map.set(sort,buff+' '+arr[i]);
        } else map.set(sort,arr[i]);
        }
    let res = [];
    let sub = Array.from(map.values());
    for (let i = 0; i < sub.length; i++) {
        res.push(sub[i].split(' '))
    }
    return res;
}

module.exports = getAnagramms;
