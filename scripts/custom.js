$(document).ready(function(){
    var birthday = new Date("1996-04-14");
    var age = new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970;
    $("#age").html(age);
});