// HTML Progress Bar
function moveHTML() {
    var elem = document.getElementById("progressBarHTML");
    var width = 1;
    var id = setInterval(frame, 15);

    // The value of "width >= ___" is what defines how far the progress bar extends across the page, ranging from 0 to 100.
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

// CSS Progress Bar
function moveCSS() {
    var elem = document.getElementById("progressBarCSS");
    var width = 1;
    var id = setInterval(frame, 15);

    // The value of "width >= ___" is what defines how far the progress bar extends across the page, ranging from 0 to 100.
    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

// Java Progress Bar
function moveJava() {
    var elem = document.getElementById("progressBarJava");
    var width = 1;
    var id = setInterval(frame, 15);

    // The value of "width >= ___" is what defines how far the progress bar extends across the page, ranging from 0 to 100.
    function frame() {
        if (width >= 50) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

// JavaScript Progress Bar
function moveJS() {
    var elem = document.getElementById("progressBarJS");
    var width = 1;
    var id = setInterval(frame, 15);

    // The value of "width >= ___" is what defines how far the progress bar extends across the page, ranging from 0 to 100.
    function frame() {
        if (width >= 10) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}

// C# Progress Bar
function moveCSharp() {
    var elem = document.getElementById("progressBarCSharp");
    var width = 1;
    var id = setInterval(frame, 15);

    // The value of "width >= ___" is what defines how far the progress bar extends across the page, ranging from 0 to 100.
    function frame() {
        if (width >= 5) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}