const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("1 dollar should be 106.58 Yen",function(){
    
    const { fromDollarToYen } = require('./app.js')
    
    expect(fromDollarToYen(1)).toBe(127.9/1.2); 
}) 

test("10 Yen should be 0.62 Pound",function(){
    
    const { fromYenToPound } = require('./app.js')

    expect(fromYenToPound(10)).toBe(10 * (0.8/127.9)); 
}) 