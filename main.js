function allowPersian(e) {
    var unicode = /^[\u0600-\u06FF\s]+$/;
    if (unicode.test(e.key))
        return true;
    else 
        e.preventDefault();
}

function allowEnglish(e) {
    var letters = /^[a-zA-Z\s]*$/;
    if(letters.test(e.key))
        return true;
    else
        e.preventDefault();
}

function setLimit(e , b, id) {
    var len = document.getElementById(id).value.length;
    if (len > b)
       e.preventDefault();
}

function checkFloor(e, a, id){
    var keyCode = e.keyCode || e.which;
    
    var len = document.getElementById(id).value.length;
    if(keyCode == 9) {
        if(len < a && len !=0 ){
            //e.preventDefault();
            document.getElementById(id+'-error').innerHTML = "اطلاعات وارد شده قابل قبول نیست."
        }else{
            document.getElementById(id+'-error').innerHTML = ""
        }
    }
    
}

function checkEmail(e, id) {
    var unicode = /^[\u0600-\u06FF\s]+$/;
    if (unicode.test(e.key))
        e.preventDefault();
    if (mail.test(_val))
        return (true);
}

function checkEmail_error(e, id) {
    var _val = document.getElementById(id).value;
    var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!mail.test(_val))
        document.getElementById(id+'-error').innerHTML = "اطلاعات وارد شده قابل قبول نیست."
    else
        document.getElementById(id+'-error').innerHTML = ""
}


function checkPhoneNum(e, id) {
    var _val = document.getElementById(id).value;
    var pattern_numbers = /^(0|[1-9][0-9]*)$/;
    var keyTab = e.keyCode || e.which;
    

   

    if (!pattern_numbers.test(e.key) && keyTab != 9 && keyTab != 8) {
        e.preventDefault();
    }
    else if(_val[0] == "0" && _val[1] == "1" ) {
        document.getElementById(id).value = "09";
    }
    else if (_val.length > 10)
       e.preventDefault();

    else if(_val.length == 11){
        return true;
    }
}
function checkPhoneNum_error(e, id) {
    var _val = document.getElementById(id).value;
    var pattern_numbers = /^(0|[1-9][0-9]*)$/;
    var keyTab = e.keyCode || e.which;

    if (!pattern_numbers.test(e.key) && keyTab != 9 && keyTab != 8) {
        e.preventDefault();
    }
    else if(_val.length == 0 || _val.length == 1 ) {
        document.getElementById(id).value = "09";
    }
    else if (_val.length > 10 && keyTab != 9 && keyTab != 8)
       e.preventDefault();

    else if(_val.length == 11 || keyTab == 9 || keyTab == 8){
        if (_val.length == 11){
            document.getElementById(id+'-error').innerHTML = "";
            return true;
        }
    }
    document.getElementById(id+'-error').innerHTML = "اطلاعات وارد شده قابل قبول نیست.";
}


function checkSsn(e, id) {
    var _val = document.getElementById(id).value;
    var pattern_numbers = /^(0|[1-9][0-9]*)$/;
    var keyTab = e.keyCode || e.which;

    if (!pattern_numbers.test(e.key) && keyTab != 9 && keyTab != 8 && _val.length >=12) {
        e.preventDefault();
    }
    
    var _bd = document.getElementById(id);
    var bod = document.getElementById(id).value;
    var x1 = bod.slice(0, 3);
    if (x1.length == 3 && bod[3] != '-') {
        _bd.value = bod + "-";
        document.getElementById(id).value = _bd.value;
    }
    var x2 = bod.slice(4, 10);
    if (x2.length == 6 && bod[10] != '-') {
        _bd.value = bod + "-";
        document.getElementById(id).value = _bd.value;

    }
    var x3 = bod.slice(11, 12);
    document.getElementById(id).value = _bd.value;
    if (x3.length == 1) {
        e.preventDefault();
    }
}

function checkSsn_error(e, id) {
    if(e.key == 8) return;
    format =  /^\d{3}-\d{6}-\d{1}$/;
    var _val = document.getElementById(id).value;

    _val = document.getElementById(id).value;
    if(format.test(_val)){
        document.getElementById(id+'-error').innerHTML = "";
        return true;
    }
    else if (_val.length != 0 && _val.length != 12 ){
        document.getElementById(id+'-error').innerHTML = "اطلاعات وارد شده قابل قبول نیست.";
    }
}

function checkPass(e, id) {
    _val = document.getElementById(id).value;
    var pass = /^[a-zA-Z0-9-+!#$*=]{8,24}$/;
    var unicode = /^[\u0600-\u06FF\s]+$/;
    if (unicode.test(e.key))
        e.preventDefault();

    if (pass.test(_val))return true;
    else
        return false;
    
}

function checkPass_error(e, id) {
    if(!checkPass(e, id)) document.getElementById(id+'-error').innerHTML = "پسورد شما باید بین 8و 24 حرف باشد. میتواند دارای حروف انگلیسی و \"-+!#$*=\" باشد.";
    else document.getElementById(id+'-error').innerHTML = "";
}

function checkConfirmPass(e, id) {
    var passVal = document.getElementById('pass').value;
    if(document.getElementById(id).value == passVal)
        return true;
    return false;
}

function checkConfirmPass_error(e, id) {
    if (!checkConfirmPass(e, id)) document.getElementById(id+'-error').innerHTML = "با پسورد شما مطابقت ندارد.";
    else document.getElementById(id+'-error').innerHTML = "";
}


var y = "1378";
var m = "06";
var d = "08";

function checkDob(e, id) {
    var _val = document.getElementById(id).value;
    var pattern_numbers = /^(0|[1-9][0-9]*)$/;
    var keyTab = e.keyCode || e.which;

    if (!pattern_numbers.test(e.key) && keyTab != 9 && keyTab != 8 && _val.length >=10) {
        e.preventDefault();
    }
    
    var _bd = document.getElementById(id);
    var bod = document.getElementById(id).value;
    y = bod.slice(0, 4);
    if (y.length == 4 && bod[4] != '/') {
        _bd.value = bod + "/";
        document.getElementById('dob').value = _bd.value;
    }
    m = bod.slice(5, 7);
    if (m.length == 2 && bod[7] != '/') {
        _bd.value = bod + "/";
        document.getElementById('dob').value = _bd.value;

    }
    d = bod.slice(8, 10);
    document.getElementById('dob').value = _bd.value;
    if (d.length == 2) {
        e.preventDefault();
    }

}

