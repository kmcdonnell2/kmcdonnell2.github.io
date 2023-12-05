function myFunction() {
    var grade, percent, text;
    var a, b, c, d, z, x;

    grade = document.getElementById("grade").value;
    percent = document.getElementById("percent").value;

    if (isNaN(grade) || grade < 1 || grade > 105) {
        text = "Grade not valid";
    } else if (isNaN(percent) || percent < 1 || percent > 30) {
        text = "Percent not valid";
    } else {
        text = "Input OK<br>Good job!";
        
        a = Math.ceil((90 - grade * (100 - percent) / 100) / (percent) * 100);
        b = Math.ceil((80 - grade * (100 - percent) / 100) / (percent) * 100);
        c = Math.ceil((70 - grade * (100 - percent) / 100) / (percent) * 100);
        d = Math.ceil((60 - grade * (100 - percent) / 100) / (percent) * 100);
        z = Math.floor(0.8 * grade);
        x = Math.floor(0.8 * grade + 0.2 * 50);
        
       text="<p>With a grade percent, you will need:</p><ul>";
       
       if (a > 0)
       		text += "<li>"+a+" % to get an A</li>";
       if (b > 0)
            text += "<li>"+b+" % to get a B</li>";
       if (c > 0)
            text += "<li>"+c+" % to get a C</li>";
       if (d > 0)
            text += "<li>"+d+" % to get a D</li>";
       
       text += "</ul><p>If you get a <b>zero</b> on the final, you will get a <b>"+z+" %</b> in the class</p>"

       text += "<p>If you get a <b>50%</b> on the final, you will get a <b>"+x+" %</b> in the class</p>"
    }
    document.getElementById("demo").innerHTML = text;
}