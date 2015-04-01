$(document).ready(function ()
{
    $(".chicken").children(".label").html("Chicken");
    $(".carnitas").children(".label").html("Carnitas");
    $(".steak").children(".label").html("Steak");
    $(".barbacoa").children(".label").html("Barbacoa");

    //$(".chicken").children("input").click(function () { alert("Chicken: " + $(this).is(':checked')); });
    //$(".carnitas").children("input").click(function () { alert("Carnitas: " + $(this).is(':checked')); });
    //$(".steak").children("input").click(function () { alert("Steak: " + $(this).is(':checked')); });
    //$(".barbacoa").children("input").click(function () { alert("Barbacoa: " + $(this).is(':checked')); });
});