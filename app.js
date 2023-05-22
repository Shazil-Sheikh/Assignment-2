// /Chp 21/
var userInput = 'ABC';
allLower = userInput.toLowerCase();
var x = 'XYZ'
x = x.toLowerCase()
var y = 'string'
y = y.toUpperCase()
var z = y.toLowerCase()
var array = ['ABc', 'xYz', 'lmN']
var lower = array[0].toLowerCase()
var theString = 'aString'
alert(theString.toUpperCase())
var cityName = "kaRacHi"
var cityName = cityName.slice(0, 1).toUpperCase() + cityName.slice(1).toLowerCase()





// /Chp 22-25/
var sameWords = "captain"
console.log(sameWords.slice(1, 3))
sameWords = sameWords.length
var animal = "elephant"
var seg = animal.slice(2, 6)
var anotherVar = seg.length
var aStringVar = 'a long string'
console.log(aStringVar.length)
var anotherStringVar = aStringVar.slice(1, 10)
var text = "To be or not to be."
var indx = text.indexOf("be")
//indx  3
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
//indx  16
var myRandomString = "to go to the other side you have to go through the forest"
var indx = myRandomString.lastIndexOf('go')
var indexNum = 22
if (myRandomString.charAt(indexNum) !== '') { }
var string1 = "abcde"
console.log(string1.charAt(2))
//char at index 2 is c
var text = "A random string composed of more than 10 characters"
var cha = text.charAt(9)
var str = "a string"
var x = str.charAt(7)
var input = "abcxyz"
var cha = input.charAt(4)
if (input.charAt(2) === 'c') { }
var array = []
for (let index = 0; index < input.length; index++) {
    array.push(input.charAt(index))
}
var reply = "no no no"
var revisedReply = reply.replace('no', 'yes')
var str = "1 2 3 4"
var newStr = str.replace("1", "one");
var y = "aaaaaaaaaaaa"
var y = x.replace(/a/g, "z");


// /Chp 26/
var number = 2.46234
Math.round(number)
var origNum = 3.14159
var roundNum = Math.ceil(number)
var roundNum = Math.floor(number)
var newResult = Math.round(number)
var round = Math.floor(0.5)





// /Chp 27/
var random = Math.ceil(Math.random() * 50)
var newRandomNum = Math.random();
var dice = Math.floor(Math.random() * 6)
var toss = Math.floor(Math.random() * 2)






// /Chp 28-29/
parseInt("52")
parseInt("173")
Number("3.2131")
var int = 22
int = int.toString()
var int = 42
int = int.toString()
parseInt("3.142")





// /Chp 30/
var aNumber = 3.14159
var newNum = aNumber.toFixed(4)
var aNumber = parseFloat(aNumber.toFixed(2))
var num = 123.354
if (num.toFixed(2).length > 4) { }
var aNumber = 23.594582
alert(aNumber.toFixed(2))




// /Chp 31-34/
var dObj = new Date()
var dStr = new Date()
dStr = dStr.toDateString()
var d = new Date()
var day = d.getDay()
var d = new Date().getDay()
var dayNames = ["Sunday", "Monday", "Tuesday", "Thursay", "Friday", "Saturday"]
alert(dayNames[d])
var dateString = (new Date).toString()
var later = new Date('2020-12-31')
var newDate = new Date('1992-2-2')
var today = new Date()
alert(today - new Date('1980-1-1'))
var d = new Date()
d.setFullYear(2012)
function changeMonth(d) {
    d.setMonth(0)
}
//Can not change day of week
function changeMinutes(d) {
    d.setMinutes(prompt('Enter minutes'))
}

function addHours(d) {
    d.setHours(d.getHours() + 2)
}
function ageCalc() {
    var DOB = prompt("What is your date of birthday")
    DOB = new Date(DOB)
    var today = new Date()
    var age = Math.floor((today - DOB) / (1000 * 3600 * 24 * 365))
    alert(age)
}




// /Chp 35-37/
function displayAlert() { }
function askName() {
    var myName = prompt("Enter name")
}
function afunc() { }
function func() {
    afunc()
    displayAlert()
}
function showName() {
    var input = prompt("Enter name")
    alert(input)
}
showName()
function concat(a, b, c) { }
function concat2(a, b) {
    var newVariable = a + b
}
function clacProduct(a, b, c) {
    var product = a * b * c
}
function calcAverage(arr) {
    var sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]
    }
    average = sum / arr.length
    return average
}
var average = calcAverage([1, 2, 3, 4])
function letterCount(word) {
    return word.length
}
function setYear(y) {
    d = new Date()
    d.setFullYear(y)
}
function ageCalc(DOB) {
    DOB = new Date(DOB)
    var today = new Date()
    var diff = (today - DOB)
    var age = Math.floor(diff / (1000 * 3600 * 24 * 365))
    return age
}
function findInArr(word) {
    var array = ['muhammad', 'mustafa', 'ali', 'fatima', 'hasan', 'hussain', 'jafar']
    var found = array.indexOf(word) !== -1
    return found
}
function repeat(letter) {
    return letter.repeat(10)
}
function reverseArr() {
    var array = ['a', 'd', 'y', 'b', 'e']
    array.reverse()
    return array
}




// / chp 38/
function local() {
    var localVariable = 123;
    console.log(localVariable)
}
local()
console.log(aLocalVariable)
var globalVariable = 99;
function func2() {
    console.log(globalVariable)
}






// /Chp 39-40/
day = 0
switch (day) {
    case 0:
        alert("SUNDAY")
        break
    case 1:
        alert("MONDAY")
        break
    case 2:
        alert("TUESDAY")
        break
    case 3:
        alert("WEDNESDAY")
        break
    case 4:
        alert("THURSDAY")
        break
    case 5:
        alert("FRIDAY")
        break
    case 6:
        alert("SATURDAY")
        break
    default:
        alert("WRONG DAY")
        break;
}
var cityName = prompt("Enter City Name")
switch (cityName.toLowerCase()) {
    case "karachi":
        alert("karachi")
        break;
    case "islamabad":
        alert("islamabad")
        break;
    case "sialkot":
        alert("lahore")
        break;
    default:
        alert("City not found")
        break;}