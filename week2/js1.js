// NOMOR 3
// let reject = (arr,callback) => {

//     let newArray = []
//     arr.map(rijek =>{
//         if(!callback(rijek)){
//             newArray.push(rijek)
//         }
//     }) 
//     return newArray;
// }
// console.log(reject([1,2,3,4], (val) => val > 2))

// NOMOR 2
// let editArray = (arr,action,index,value) =>{

//     if(action == "add"){
//         arr.splice(index,0,value)
//     } else if(action == "delete"){
//         arr.splice(index,1)
//     } else{
//         console.log("salah input mohon ulangi")
//     }    
//     return arr
// }

// console.log(editArray([1,2,3,4],"add",0,5))
// console.log(editArray([1,2,3,4], "delete",0,3))

// NOMOR 1

// let each = (arr,cb) =>{
//     arr.map(element =>{
//         cb(element)
//     })
// }

// each([1,2,3,4],val=> console.log(val))


// let editArray = (arr,action,index,value) => {
//     if(action == "add"){
//         let first[0]   = index
//         let second[1] = index
//         let third[2] = index
//         let fourth[3] = index
//         let lat[4] = index
//         arr.splice(0,value)
//     } else if(action == "delete"){
//         arr.splice(1)
//     } else{
//         console.log("salah input mohon ulangi")
//     }    
//     return arr
// }
// console.log editArray(editArray([1,2,3,4],"add",first,5))

// class shape {
//     constructor(sideLength, type){
//         this.sideLenght = sideLength
//         this.type = type
//     }
    
//     calcPerimeter(){
//         if (this.type === "square") {
//         return this.sideLenght * 4
//         }else if (this.type === "triangle"){
//             return this.sideLenght *3
//         }else {
//             return "type tidak cocok"
//         }
       
//     }
// }
// let square = new shape(5,"square")
// let triangle = new shape(5, "triangle")
// console.log("Luas Keliling dari Square adalah",square.calcPerimeter())


// function as parameter
// const kelilingPersegi = (sisi) => {
//     return sisi *4
// }
// const sisiPersegi = () => {
//     return 2 + 3
// }
// console.log(kelilingPersegi(sisiPersegi()))

// const myArr = ['dwi','nabil','faisal','galuh']
// myArr.forEach(arr => {
//     console.log(arr)
// })

// const myArr = ['dwi','nabil','faisal','galuh']
// myArr.map(arr => {
//     if (arr === 'faisal') {
//         console.log(arr)
//     }else{
//         return "entah siapa"
//     }
// })

// reduce 
// const num = [1,2,3,4]
// const hasil = num.reduce((accumulator,currentvalue) => {
//     return accumulator + currentvalue
// },50)
// console.log(hasil)

// const myArr = ['dwi','aril','galuh']
// const arr = myArr.filter(name =>{
//     return name.length > 3
// })
// console.log(arr)

// no 1 week 2.3
// let each = (arr,cb) =>{
//     arr.map(element =>{
//         cb(element)
//     })
// }

// each([1,2,3,4],val=> console.log(val*2))

// function map(arr, callback) {
//    arr.filter(element => {
//        callback(element)
//    })
//    return arr
   
// }
// map([1,2,3,4],val=> console.log(val*2))

// function map(arr, callback) {
//     let arrayKu = []
//    for (let i = 0; i < arr.length; i++) {
//     arrayKu.push(callback(arr[i])) 
//    }
//    return arrayKu
// }
// console.log(map([1,2,3,4], val => val*2))

// function map(arr, callback) {
//     let arrayKu = []
//    for (let i = 0; i < arr.length; i++) {
//     arrayKu.push(
//         if (arr === i) {
            
//         }
//         callback(arr[i])) 
//    }
//    return arrayKu
// }
// console.log(map([1,2,3,4], val => val*2))



// function map(array, callBack){
//     //declaring new array
//     let arrayBaru = [];
//    for (let index = 0; index < array.length; index++) {
//       //push all element after calling the callback
//       arrayBaru.push(callBack(array[index]))
//    }
//    return arrayBaru;
// }

// console.log(map([1,2,3,4], val => val*2)
// );