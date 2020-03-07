b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .
let p=(b+c+h)/2;
let P=Math.sqrt(p*(p-b)*(p-c)*(p-h));
let Pole = () => `Pole trójkąta o bokach ${b}, ${c} oraz ${h} wynosi ${P}`;

console.log( Pole() );
