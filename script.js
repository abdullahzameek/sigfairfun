function obfuscate(){
    str = document.getElementById("password").value
    console.log("The str is "+ str)
    return (str+'').replace(/[a-zA-Z]/gi,function(s){
        return String.fromCharCode(s.charCodeAt(0)+(s.toLowerCase()<'n'?13:-13))
    })
}

function transform(){
    var passwordStr = obfuscate()
    console.log(passwordStr)
    if((passwordStr == "jrypbzrgbploreunfu") || (passwordStr == "AbgNobhgGurFvmrBsGurCnffjbeqNobhgGurHfntr")){
        document.getElementById("footer").style.display = "block"
    }
    else{
        document.getElementById("footer").innerHTML= "Not quite there. I wonder what Julius <i>Caesar</i> would do..."
        document.getElementById("footer").style.display = "block"
    }
}