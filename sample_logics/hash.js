const employee = new Map([
    [1, {
        number: '1',
        name: 'one star',
    }],
    [2, {
        number: '2',
        name: 'two star',
    }],
    [3, {
        number: '3',
        name: 'three star',
    }],
    [4, {
        number: '4',
        name: 'four star',
    }],
    [5, {
        number: '5',
        name: 'five star',
    }],
]);

employee.forEach((v, k) => {
    console.log(v, ' = ', k);
    console.log('=================');
})