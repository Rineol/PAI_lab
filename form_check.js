/* exported validate */ 

//function isEmpty(inputtx) 
//   {
//     if (inputtx.length == 0)
//      { 
//      //alert("Podaj imię!");
//          return true;
//        
//      }  	
//      return false; 
//    } 


function isWhiteSpaceOrEmpty(str) {
 return /^[\s\t\r\n]*$/.test(str);
}

function checkString(input, msg)
{
    if (input.length == 0)
        {
            alert(msg);
            return false;
        }
    if (/^[\s\t\r\n]*$/.test(input) == true)
        {
            alert(msg);
            return false;
        }
    return true;
}


//function checkEmail(str) {
// let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/
// if (email.test(str)){
// return true;}
// else {
// alert("Podaj właściwy e-mail");
// return false;
// }
//}


//function checkStringAndFocus(obj, msg) {
// let str = obj.value;
// let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
// if (isWhiteSpaceOrEmpty(str)) {
// document.getElementById(errorFieldName).innerHTML = msg;
// obj.focus();
// return false;
// }
// else {
// return true;
// }
//}
//
//function checkEmailAndFocus(obj, msg) {
// let str = obj.value;
// let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
// let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/
// 
// 
// if (email.test(str)) {
//     document.getElementById(errorFieldName).innerHTML = "";
//     return true;
// }
//else {  document.getElementById(errorFieldName).innerHTML = msg;
// obj.focus();
// return false;   }
//    
//    
// if (isWhiteSpaceOrEmpty(str)) {
// document.getElementById(errorFieldName).innerHTML = msg;
// obj.focus();
// return false;
// }
// else {
// document.getElementById(errorFieldName).innerHTML = "";
// return true;
// }
//}




function checkStringAndFocus(obj, msg, type) {
 let str = obj.value;
 let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    
if (type == 0) { 
 if (isWhiteSpaceOrEmpty(str)) {
 document.getElementById(errorFieldName).innerHTML = msg;
 obj.focus();
 return false;
 }
 else {
 document.getElementById(errorFieldName).innerHTML = "";     
 return true;
 }
}
    
if (type == 1) {

if (isWhiteSpaceOrEmpty(str)) {
 document.getElementById(errorFieldName).innerHTML = msg;
 obj.focus();
 return false;
 }
    
 let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/
if (email.test(str)) {
     document.getElementById(errorFieldName).innerHTML = "";
     return true;
 }
else {  document.getElementById(errorFieldName).innerHTML = msg;
 obj.focus();
 return false;     
      }
    
                }
}




function validate(form)
{
    if ( checkStringAndFocus(form.elements["f_imie"], "Imie nieprawidłowe", 0) == true &&
         checkStringAndFocus(form.elements["f_nazwisko"], "Nazwisko nieprawidłowe", 0) == true &&
         checkStringAndFocus(form.elements["f_kod"], "Kod nieprawidłowy", 0) == true &&
         checkStringAndFocus(form.elements["f_ulica"], "Ulica nieprawidłowa", 0) == true &&
         checkStringAndFocus(form.elements["f_miasto"], "Miasto nieprawidłowe", 0) == true &&
         checkStringAndFocus(form.elements["f_email"], "Email nieprawidłowy", 1) == true )
    
    {    return true; }
    
    return false;
}


function showElement(e) {
 document.getElementById(e).style.visibility = 'visible';
}
function hideElement(e) {
 document.getElementById(e).style.visibility = 'hidden';
}


function alterRows(i, e) {
 if (e) {
 if (i % 2 == 1) {
 e.setAttribute("style", "background-color: Aqua;");
 }
 e = e.nextSibling;
 while (e && e.nodeType != 1) {
 e = e.nextSibling;
 }
 alterRows(++i, e);
 }
}

function nextNode(e) {
 while (e && e.nodeType != 1) {
 e = e.nextSibling;
 }
 return e;
}
function prevNode(e) {
 while (e && e.nodeType != 1) {
 e = e.previousSibling;
 }
 return e;
}
function swapRows(b) {
 let tab = prevNode(b.previousSibling);
 let tBody = nextNode(tab.firstChild);
 let lastNode = prevNode(tBody.lastChild);
 tBody.removeChild(lastNode);
 let firstNode = nextNode(tBody.firstChild);
 tBody.insertBefore(lastNode, firstNode);
}

function cnt(form, msg, maxSize) {
 if (form.value.length > maxSize)
 form.value = form.value.substring(0, maxSize);
 else
 msg.innerHTML = maxSize - form.value.length;
}



//
//function validate(form)
//{
//    if ( checkString(form.elements["f_imie"].value, "Imie nieprawidłowe") == true &&
//         checkString(form.elements["f_nazwisko"].value, "Nazwisko nieprawidłowe") == true &&
//         checkString(form.elements["f_kod"].value, "Kod nieprawidłowy") == true &&
//         checkString(form.elements["f_ulica"].value, "Ulica nieprawidłowa") == true &&
//         checkString(form.elements["f_miasto"].value, "Miasto nieprawidłowe") == true &&
//        checkEmail(form.elements["f_email"].value) == true )
//    
//    {    return true; }
//    
//    return false;
//    
//    
//}



//  function validate(form) 
//{
//    var empty = isEmpty(form.elements["f_imie"].value); 
//    var whiteSpace = isWhiteSpaceOrEmpty(form.elements["f_imie"].value);
//    if (empty == true)
//        {
//     
//            alert("Podaj imię!");
//            return false;
//        }
//    if (whiteSpace == true){
//        alert("Imię musi się składać z liter!");
//        return false;
//    }
//    
//       
//    return true;  
// 
//    }