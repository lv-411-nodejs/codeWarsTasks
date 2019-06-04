
define(function() {
    return {
        divisibleBy: (numbers, divisor) => {
            numbers = numbers || [0];
            divisor = divisor || 1;
        
            let divisible = [];
            numbers.map((value) => {
                if(value % divisor === 0)
                divisible.push(value) 
            })
        
            return divisible;
        },

        circleArea: (circle) => circle.radius**2 * Math.PI
    }
})
