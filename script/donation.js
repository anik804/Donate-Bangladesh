// alert();
document.getElementById('add-money').addEventListener('click', function(event) {
    event.preventDefault();
    const Amount1 = document.getElementById('amount-1').value;
    const con_amount1 = parseInt(Amount1); // convert

    const taka_1 = document.getElementById("taka-1").innerText;
    const taka_1_int = parseInt(taka_1);
    const total = con_amount1 + taka_1_int;
    document.getElementById("taka-1").innerText = total;
    document.getElementById('amount-1').value = '';

    const top_amount = document.getElementById('total-amount').innerText;
    const top_amount_int = parseInt(top_amount);
    const new_total = top_amount_int + con_amount1;
    document.getElementById('total-amount').innerText = new_total;

    const activity = document.getElementById("activity");
    const p = document.createElement("p");
    p.innerText = `${Amount1} TAKA is donated for noakhali at ${new Date().toLocaleTimeString()}`;
    activity.appendChild(p);
});
document.getElementById('add-money2').addEventListener('click', function(event) {
    event.preventDefault();
    const Amount2 = document.getElementById('amount-2').value;
    const con_amount2 = parseInt(Amount2); // convert

    const taka_2 = document.getElementById("taka-2").innerText;
    const taka_2_int = parseInt(taka_2);
    const total2 = con_amount2 + taka_2_int;
    document.getElementById("taka-2").innerText = total2;
    document.getElementById('amount-2').value = '';

    
    const top_amount = document.getElementById('total-amount').innerText;
    const top_amount_int = parseInt(top_amount);
    const new_total = top_amount_int + con_amount2;
    document.getElementById('total-amount').innerText = new_total;

    const activity = document.getElementById("activity");
    const p = document.createElement("p");
    p.innerText = `${Amount2} TAKA is donated for feni at ${new Date().toLocaleTimeString()}`;
    activity.appendChild(p);
});
document.getElementById('add-money3').addEventListener('click', function(event) {
    event.preventDefault();
    const Amount3 = document.getElementById('amount-3').value;
    const con_amount3 = parseInt(Amount3); // convert

    const taka_3 = document.getElementById("taka-3").innerText;
    const taka_3_int = parseInt(taka_3);
    const total3 = con_amount3 + taka_3_int;
    document.getElementById("taka-3").innerText = total3;
    document.getElementById('amount-3').value = '';

    
    const top_amount = document.getElementById('total-amount').innerText;
    const top_amount_int = parseInt(top_amount);
    const new_total = top_amount_int + con_amount3;
    document.getElementById('total-amount').innerText = new_total;

    const activity = document.getElementById("activity");
    const p = document.createElement("p");
    p.innerText = `${Amount3} TAKA is donated for quota movement at ${new Date().toLocaleTimeString()}`;
    activity.appendChild(p);
});
