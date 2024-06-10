function myFunction() {
    var gpa, credits, total = 0, text;
    var a, b, c, d, f, ab;

    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    f = document.getElementById("f").value;


    if (isNaN(a) || a < 0) {
        text = "A's not valid";
    } else if (isNaN(b) || b < 0) {
        text = "B's not valid";
    } else if (isNaN(c) || c < 0) {
        text = "C's not valid";
    } else if (isNaN(d) || d < 0) {
        text = "D's not valid";
    } else if (isNaN(f) || f < 0) {
        text = "F's not valid";
    } else {
        text = "Input OK<br>Good job!";

        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);
        d = parseInt(d);
        f = parseInt(f);

        total = a + b + c + d + f;
        credits = total / 2.0;

        gpa = (a * 4 + b * 3 + c * 2 + d * 1) / total;

        text = "<p>Total semester grades: " + total + "</p>";
        text += "<p>Total credits: " + credits.toFixed(1) + "</p>";
        /*
        text += "<ul>";
        text += "<li>Number of A's: " + a + "</li>";
        text += "<li>Number of B's: " + b + "</li>";
        text += "<li>Number of C's: " + c + "</li>";
        text += "<li>Number of D's: " + d + "</li>";
        text += "<li>Number of F's: " + f + "</li>";
        text += "</ul>";
        */

        text += "<p>GPA should be " + gpa.toFixed(3) + "</p>";

        text+= "<p><i>Now that you know your GPA and number of credits, try my GPA predictor by <a href =\"https://gpa-predictor.kmcdonnell2.repl.co/\" target=\"_blank\">clicking here</a></i>.</p>"
    }
    document.getElementById("demo").innerHTML = text;
}