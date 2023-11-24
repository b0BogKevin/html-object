let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"} ]

function kiiras(obj) {
    let ki = "";

    ki +=`<div id="cont">`

    for (let i = 0; i < obj.length; i++) {
        ki +=`<div id="card">`;
        for (let j = 0; j < Object.values(obj[i]).length; j++) {
            ki +=`<div> ${Object.values(obj[i])[j]} </div>`;      
        }
        ki +=`</div>`;
        
    }

    ki +=`</div>`
    document.getElementById("div").innerHTML = ki;
}

kiiras(heroes)
heroes.push({firstName: "Kyle",lastName:"Smith",job:"Alcoholic"});
kiiras(heroes)