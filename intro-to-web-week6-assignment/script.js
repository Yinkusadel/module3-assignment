// for omnblur 


function validatewindName(){
  var x=document.querySelector("#wind").value;
  if(x.length<3 || x.length>10){
      document.querySelector("#feedbwindname").innerHTML=" Invalid value provided ";
      return false;
  }else{

      document.querySelector("#feedbwindname").innerHTML=" Valid ";
      return true;
  }
}

function validatestoneName(){
  var x=document.querySelector("#stone").value;
  if(x.length<3 || x.length>10){
      document.querySelector("#feedbstonename").innerHTML=" Invalid value provided ";
      return false;
  }else{

      document.querySelector("#feedbstonename").innerHTML=" Valid ";
      return true;
  }
}

function validatewaterName(){
  var x=document.querySelector("#water").value;
  if(x.length<3 || x.length>10){
      document.querySelector("#feedbwatername").innerHTML=" Invalid value provided ";
      return false;
  }else{

      document.querySelector("#feedbwatername").innerHTML=" Valid ";
      return true;
  }
}

function validateinsectName(){
  var x=document.querySelector("#insect").value;
  if(x.length<3 || x.length>10){
      document.querySelector("#feedbinsectname").innerHTML=" Invalid value provided ";
      return false;
  }else{

      document.querySelector("#feedbinsectname").innerHTML=" Valid ";
      return true;
  }
}

function validateloveName(){
  var x=document.querySelector("#love").value;
  if(x.length<3 || x.length>10){
      document.querySelector("#feedblovename").innerHTML=" Invalid value provided ";
      return false;
  }else{

      document.querySelector("#feedblovename").innerHTML=" Valid ";
      return true;
  }
}

function validateserpentName(){
  var x=document.querySelector("#serpent").value;
  if(x.length<3 || x.length>10){
      document.querySelector("#feedbserpentname").innerHTML=" Invalid value provided ";
      return false;
  }else{

      document.querySelector("#feedbserpentname").innerHTML=" Valid ";
      return true;
  }
}

function validateflameName(){
  var x=document.querySelector("#flame").value;
  if(x.length<3 || x.length>10){
      document.querySelector("#feedbflamename").innerHTML=" Invalid value provided ";
      return false;
  }else{

      document.querySelector("#feedbflamename").innerHTML=" Valid ";
      return true;
  }
}

//                          on blur ends here 

function areAllValid(){
  return validatewindName() && validatestoneName() && validatewaterName() &&  validateinsectName() && validateloveName() && validateserpentName() && validateflameName();
}

var previewbtn=document.querySelector("#display");


previewbtn.onclick=function(){
    if(areAllValid()){
        var data="";
        var elem=document.getElementById('myform').elements;

        for( var i=0;i<6;i++){
            data+="<b>Type : </b>"+elem[i].type +"&nbsp&nbsp";
            data+="<b>Field Name : </b>"+elem[i].id +"&nbsp&nbsp";
            data+="<b>Value : </b>"+elem[i].value +"&nbsp&nbsp";
            data+="<br><br>"
        }
        document.querySelector("#previewFormData").innerHTML=data;

    }else{
        document.querySelector("#previewFormData").innerHTML="<h4>Please Insert Valid Details</h4>";
    }
}