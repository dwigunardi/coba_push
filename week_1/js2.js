/*helloWorld();

function helloWorld() {
    console.log("Hello World");
}
*/

/*function greeting (name = 'stranger'){
    console.log(`hello, ${name}!`)
}

greeting()
greeting('syahid')
*/

/*function hitungLuas(p, l) {
    const total = p * l
   return console.log("hasil nya adalah" + total)
}
hitungLuas(4,4)
*/


/*
function hurufRapih (kata) {
    return kata.split(' ').map(kata => kata.charAt(0).toUpperCase() + kata.substr(1)).join(' ')
  }
const sample1 = "dignitas bka is the coolest academy"
const hasil = hurufRapih(sample1)
console.log(hasil)
*/

/*function reverseNum(num) {
	return (
    parseFloat(
      num.toString().split('').reverse().join('')
    )
  )
}
*/

/*
const reverseNum = num => parseFloat(num.toString().split('').reverse().join(''))
const sample1 = 9876549
const reverse = reverseNum(sample1)
console.log(reverse)
*/
/*
const konversiUang = (uangDari, Jumlah, UangKe) => {
    const data = {
        "IDR" : 14575.45, 
        "Yen" : 127.05,
        "Yuan" : 6.71,
        "Ringgit" : 4.38,
        "Dollar" : 1
    }
    let hasil = (Jumlah / data[uangDari]) * data[UangKe]
    return hasil
}

console.log( konversiUang("Dollar",1,"IDR"))
*/


