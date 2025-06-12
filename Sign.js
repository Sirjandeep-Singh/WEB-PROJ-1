function data1(){
    var a = document.getElementById("Aname").value;
    var b = document.getElementById("Pword").value;
    var c = document.getElementById("Roles").value;
    if(a === "" && b === ""){
        document.getElementById("e1").innerHTML = "^Mandatory Field";
        document.getElementById("e1").style.display = "inline";
        document.getElementById("e2").innerHTML = "^Mandatory Field";
        document.getElementById("e2").style.display = "inline";
        return false
    }
    if(a === ""){
        document.getElementById("e1").innerHTML = "^Mandatory Field";
        document.getElementById("e1").style.display = "inline";
        return false;
    }else if(b ===""){
        document.getElementById("e2").innerHTML = "^Mandatory Field";
        document.getElementById("e2").style.display = "inline";
        return false
    }
    return true
}
function data2(){
    var a = document.getElementById("Aname").value;
    var b = document.getElementById("dob").value;
    var c = document.getElementById("doe").value;
    var d = document.getElementById("fname").value;
    var flag = 0;
    if(a === ""){
        document.getElementById("e1").innerHTML = "^Mandatory Field";
        document.getElementById("e1").style.display = "inline";
        flag = 1;
    }
    if(b === ""){
        document.getElementById("e2").innerHTML = "^Mandatory Field";
        document.getElementById("e2").style.display = "inline";
        flag = 1;
    }
    if(c ===""){
        document.getElementById("e3").innerHTML = "^Mandatory Field";
        document.getElementById("e3").style.display = "inline";
        flag = 1;
    }
    if(d ===""){
         document.getElementById("e4").innerHTML = "^Mandatory Field";
        document.getElementById("e4").style.display = "inline";
        flag = 1;
    }
    if(flag === 1){
        return false;
    }
    return true
}