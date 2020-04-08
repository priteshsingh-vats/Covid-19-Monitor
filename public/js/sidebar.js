function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var searchClick = function () {
    var text = document.getElementById("text-form").value;
    // alert(text);
    window.location.href = "www.<some-url>" + text;
}