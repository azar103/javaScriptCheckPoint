function filter_list(l) {
    return JSON.stringify(l.filter((el) => typeof(el) === 'number'))
}

console.log(filter_list([1,2,'aasf','1','123',123]))