<!Doctype html>
<html>
<body>
<button type= "button" onclick = "myfunction()">Click Mee!</button>
<p id= "demo0"></p>
<p id= "demo1"> </p>
<p id = "demo2"></p>
<script>
//Normal Function
function myfunction(){
document.getElementById("demo0").innerHTML = "Hello Wolrd!!";
}
//Anonymous Function
const ayushi= function(a,b) {return a*b};

document.getElementById("demo1").innerHTML = ayushi(30,29);

//Arrow Function
const A= (a,b) => a/b;
document.getElementById("demo2").innerHTML = A(10,5);

</script>
</body>
</html>
