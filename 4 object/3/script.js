let fizetes = {
    Anna : 2100,
    Cecil : 1890,
    Emil : 2050,
    Gerald : 2920
    }
let ki = "";
function osszegzes(obj) {
    let sum = 0
    for (let i = 0; i < Object.keys(obj).length; i++) {
       sum +=Object.values(obj)[i];
       ki+=(Object.keys(obj)[i] + ": ")
       ki+=(Object.values(obj)[i])
        ki+="<br>"
    }
    ki+="Össz: "+ sum;
    return ki
    
}
ki = osszegzes(fizetes)
console.log(ki);

document.getElementById("div").innerHTML = ki;