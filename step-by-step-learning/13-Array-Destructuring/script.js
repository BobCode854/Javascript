//In normal scenarios

let arr  = [1,2,3,4,5];

let x = arr[0],  y = arr[1], z=arr[2],p = arr[3] , q= arr[4]

console.log(x,y,z,p,q);

//with array destructuring

let [a,b,c,d,e]=arr;

console.log(a,b,c,d,e)

let hotel={
    "room" : 1,
    "countries":["china","India","USA"]
}

let [c1,c2]=hotel.countries;
console.log(c1,c2);
