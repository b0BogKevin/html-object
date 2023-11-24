let fizetes = {
    Anna : 2100,
    Cecil : 1890,
    Emil : 2050,
    Gerald : 2920
    }

function osszegzes(obj) {
    let sum = 0
    for (let i = 0; i < Object.keys(obj).length; i++) {
       sum +=Object.values(obj)[i];
    }
    return sum
}
console.log(osszegzes(fizetes));

document.getElementById("div").innerHTML = osszegzes(fizetes);