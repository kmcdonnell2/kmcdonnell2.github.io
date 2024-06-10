function myFunction() {
    var gpa, credits, total, remain, text;
    var a, b, c, d, f, ab;

    gpa = document.getElementById("gpa").value;
    credits = document.getElementById("credits").value;
    total = document.getElementById("totalcredits").value;

    if (isNaN(gpa) || gpa < 0 || gpa > 4) {
        text = "GPA not valid";
    } else if (isNaN(credits) || credits < 4 || credits > 30) {
        text = "Credits not valid";
    } else if (isNaN(total) || total < 24 || total > 35) {
        text = "Total Credits not valid";
    } else {
        text = "Input OK<br>Good job!";

        remain = total - credits;

        a = ((gpa * credits + 4 * remain) / total).toFixed(2);
        ab = ((gpa * credits + 3.5 * remain) / total).toFixed(2);
        b = ((gpa * credits + 3 * remain) / total).toFixed(2);
        c = ((gpa * credits + 2 * remain) / total).toFixed(2);
        d = ((gpa * credits + 1 * remain) / total).toFixed(2);
        f = ((gpa * credits + 0 * remain) / total).toFixed(2);

        text = "<p>With your current gpa, your GPA will be:</p><ul>";


        text += "<li>" + a + " if you have a 4.0 pga from here on out (you would need to get all A's)</li>";

        text += "<li>" + ab + " if you have a 3.5 gpa from here on out (approximately half A's and half B's)</li>";

        text += "<li>" + b + " if you get all B's</li>";

        text += "<li>" + c + " if you get all C's</li>";

        text += "<li>" + d + " if you get all D's</li>";

        text += "<li>" + f + " if you get all F's</li>";

        //text += "</ul><p>If you get a <b>zero</b> on the final, you will get a <b>" + z + " %</b> in the class</p>"
    }
    document.getElementById("demo").innerHTML = text;
}