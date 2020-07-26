const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69
let rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
console.log ("Rata-rata = " + rataRata)

if(rataRata > 89 ){
    console.log("Grade = A")
} else if (rataRata > 79 ){
    console.log("Grade = B")
} else if (rataRata > 69 ){
    console.log("Grade = C")
} else if (rataRata > 59 ){
    console.log("Grade = D")
} else {
    console.log("Grade = E")
}