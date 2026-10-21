let name = prompt("ismingizni kiriting")
let savol = +prompt("salom " + name + " siz ismingizni kichik yoki kotta kilmokchisiz 1)kichik 2)kotta")

if (savol === 1) {
    alert(name.toLowerCase());
} else if (savol === 2) {
    alert(name.toUpperCase())
} else {
    alert("Notogri rakamni kirittingiz")
    alert(savol)
}

let number = confirm("ismingizda kanch harif borligini bilmokchimisiz?")
if (number === true) {
    alert(name + " ismingiz " + name.length + "-ta xiriftan mavjut etadi");
 } else (number === false)
    alert("Rahmat");
