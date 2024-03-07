const guestList = [
    "Angela", "Jack", "Pam", "James", "Lara", "Jason"
];

function cadeneros (){
    var nombreInvitado = prompt ("¿Con quién tenemos el gusto?");
    if (nombreInvitado = guestList.includes(nombreInvitado)){
        alert ("¡Bienvenido! Siéntete como en casa.")
    } else {
        alert ("No sabemos quién eres, ew.")
    }
}

cadeneros();
