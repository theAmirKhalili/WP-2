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
    else if(_val.length == 0 || _val.length == 1 ) {
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
    if(e.key == 8) return;
    var _val = document.getElementById(id).value;
    format =  /^\d{3}-\d{6}-\d{1}$/;

    val = _val.replace(/(\d{3})(\d{6})(\d)/, '$1-$2-$3');

    document.getElementById(id).value = val;
    _val = document.getElementById(id).value;
    if(format.test(_val)){
        return true;
    }
}

function checkSsn_error(e, id) {
    if(e.key == 8) return;
    format =  /^\d{3}-\d{6}-\d{1}$/;
    var _val = document.getElementById(id).value;
    val = _val.replace(/(\d{3})(\d{6})(\d)/, '$1-$2-$3');
    document.getElementById(id).value = val;
    _val = document.getElementById(id).value;
    if(format.test(_val)){
        document.getElementById(id+'-error').innerHTML = "";
        return true;
    }
    else if (_val.length != 0 && _val.length != 12 ){
        document.getElementById(id+'-error').innerHTML = "اطلاعات وارد شده قابل قبول نیست.";
    }
}