var subtruction = (a,b) =>{
   return a === b ? 'even'
        :a > b? a - b : b - a;
}

console.log(subtruction(2,3))