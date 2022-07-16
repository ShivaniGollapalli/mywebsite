function validity()
{
    if(fn() &&  ln() && mob() && submit() && reset())
    {
        return true;
    }
    else
    {
        return false;
    }
}

function showpass()
{
    var show=document.getElementById("check1").checked;
    if(show)
    {
        document.getElementById("pass").type="text";
    }
    else
    {
        document.getElementById("pass").type="password";
    }
} 

function confirmpass()
{
    var show=document.getElementById("check2").checked;
    if(show)
    {
        document.getElementById("cpass").type="text";
    }
    else
    {
        document.getElementById("cpass").type="password";
    }
} 

function fn()
{
    var fname=document.getElementById("first").value 
    var reg1=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var reg2=/[0-9]/;
    if(fname.length<=4)
    {
        document.getElementById("lab1").innerHTML="Morethan 5 Characters";
        document.getElementById("first").style.border="2px solid red";
        document.getElementById("lab1").style.visibility="visible";
        return false;
    }
    else if(reg1.test(fname))
    {
        document.getElementById("lab1").innerHTML="Remove Special Characters";
        document.getElementById("first").style.border="2px solid red";
        document.getElementById("lab1").style.visibility="visible";
        return false;
    }
    else if(reg2.test(fname))
    {
        document.getElementById("lab1").innerHTML="Remove Digits";
        document.getElementById("first").style.border="2px solid red";
        document.getElementById("lab1").style.visibility="visible";
        return false;
    }
    return true;
}

function ln()
{
    var lname=document.getElementById("last").value
    var reg1=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(lname.length<=4)
    {
        document.getElementById("lab2").innerHTML="Morethan 5 Characters";
        document.getElementById("last").style.border="2px solid red";
        document.getElementById("lab2").style.visibility="visible";
        return false;
    }
    else if(reg1.test(lname))
    {
        document.getElementById("lab2").innerHTML="Remove Special Characters";
        document.getElementById("last").style.border="2px solid red";
        document.getElementById("lab2").style.visibility="visible";
        return false;
    }
    return true;
}

function submit()
{
   var sub=confirm("Do You Want to Submit");
   if(sub){
    return true;
   }
   else{
    return false;
   }
}
function reset()
{
    var res=alert("Do you Want to Reset...?");
    if(res)
    {
        return true;
    }
    else
    {
        return false;
    }
}


function mob()
{
    var num=document.getElementById("mob").value
    reg1=/^\d{10}/
    if(reg1.test(num))
    {
        if(num.length==10)
        {
            return true;
        }
        else(num.length!=10)
        {
            return false;
        }
    }
    else
    {
        document.getElementById("lab4").innerHTML="Enter Valid Mobile Number";
        document.getElementById("mob").style.border="2px solid red";
        document.getElementById("lab4").style.visibility="visible";
        return false;
    }
}