//alert("Hoi maailma!");
x = 100;
console.log("Tulostus konsoliin");
console.log("Muuttujan  arvo", x);
console.info("Info viesti konsoliiin");

document.write("Eka kirjoitus ja arvo on ", x);
//tagien tulostus

document.write("<h1>Eka otsikko </h1>");
document.write("<h2>Toka otsikko </h2>");
document.write("<img src='https://picsum.photos/200/300' width='200px'>");

document.write("<table border='1'><tr><td>Eka</td></tr></table>");

document.write("<strong>Lihavoitu </strong>");

//backticks
html = `<table>
<tr>
    <td>i</td>
    <td>i</td>
    <td>i</td>
</tr>
<tr>
    <td>i</td>
    <td>i</td>
    <td>i</td>
</tr>
<tr>
    <td>i</td>
    <td>i</td>
    <td>i</td>
</tr>
</table>`;
document.write(html);

// fname = "Mika";
/*lname = "stanber";
var fullname = fname+lname;
console.log(fullname)


x =10; y=5;
sum =""+x+y;
console.log(sum)
*/
function nappeja() {
    for (var i = 0; i< 10; i++) { 
        document.write("<input type='button' value='Paina'></button>");
 }
}
nappeja();