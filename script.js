console.log("      TASK1      ")

while (number == "" ||isNaN(number)){
    var number = (Number(prompt("Įveskite prekės kainą")))  
}
console.log("Prekės kaina: " + number.toFixed(2) + "€")


 var pristatymas = confirm("Ar reikalingas pristatymas į namus?")

 if(pristatymas == false){

    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
 }
 else{
    var salygos = prompt("Į kurį miestą reiks pristatyti?")
    var kaina = 20
    bendras = Number((number + kaina)).toFixed(2)

    console.log("Pristatymas: " + kaina + "€")
    console.log("Iš viso: " + bendras + "€")
    console.log("Prekę pristatysime į: " + salygos + " per 1-3 dienas.")
 }

 console.log("      TASK2      ")


var salys = [
    {name: "Kipras", plotas: 9.251, persons: 1.189265},
    {name: "Sicilija", plotas: 25.711, persons: 5.050001},
    {name: "Lenkija", plotas: 312.696, persons: 39.100400},
    {name: "Graikija", plotas: 131.957, persons: 10.678632},
    {name: "Ispanija", plotas: 505.990, persons: 47.450795}
]
console.log(salys)
var metrai = 10000

for(var i = 0; i < salys.length; i++){
    var name = salys[i].name
    var plotas = salys[i].plotas
    var persons = (salys[i].persons).toFixed(2)
    var metras = (metrai * plotas)
    var gyventojui = (metras / persons).toFixed(2)


    console.log("Šalis: " + name + ", joje gyvena " + persons + " mln. gyventojų.")
    console.log("Valstybės plotas: " + plotas + " km²" + ", plotas tenkantis vienam gyventojui: " + gyventojui + " m².")
    console.log("            ")
  }

