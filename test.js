let data = 'ADASDAD'
let temp = [];
let characher = '';
for (let i = 0; i < data.length; i++) {
    let characher = data[i]
    for (let j = 0; j < data.length; j++) {
        if (characher === data[j]) {
            console.log(j, data[j])
            break;
        } else {

        }
    }
    console.log('Iteration' + i)
}