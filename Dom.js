//object literal 


// let Circle ={
//     radius:12,
//     location:{
//         x:6,
//         y:7
//     },
//    draw:function(){
//        console.log("drawing...")
//    }
// }

// Circle.draw();
// console.log(Circle.radius);


// factory function

function CreateCircle(radius) {
 return{
     radius:radius,
     draw:function(){
        console.log('drawing......')
    }
 }
}

let Circle = CreateCircle(7);
Circle.draw();
console.log(Circle.radius);


//constructor function
function Circle3(radius) {

    this.radius = radius;
    this.draw = function(){
        consol.log("drawing constructor function.....")
    }
}

let circle = Circle3(14);
circle.draw();
console.log(Circle.radius);