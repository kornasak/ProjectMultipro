function active() {
    var width = screen.width;
    if (width <= 425) {
        document.getElementById("s-nav").style.width = "100%";
    } else {
        document.getElementById("s-nav").style.width = "25%";
    }

}

function deactive() {
    document.getElementById("s-nav").style.width = "0%";
}