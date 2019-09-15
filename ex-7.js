function urutkanAbjad(str) {
    // you can only write your code here!
    //return str.split('').sort().join('');
    var alpha = 'abcdefghijklmnopqrstuvwxyz', res = '';

    for(var i=0; i<alpha.length; i++){
        for(var j=0; j<str.length; j++)
            if(alpha[i] === str[j])
                res += alpha[i];
    } 
    return res;  
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'