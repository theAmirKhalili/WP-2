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

function checkEmail_error2(id) {
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
    return false;
}

function checkPhoneNum_error2(id) {
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
    return false;
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

function checkSsn_error2(id) {
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

function checkPass_error2(id) {
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

function checkConfirmPass_error2(id) {
    if (!checkConfirmPass(e, id)) document.getElementById(id+'-error').innerHTML = "با پسورد شما مطابقت ندارد.";
    else document.getElementById(id+'-error').innerHTML = "";
}



var y = "";
var m = "";
var d = "";

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

function formValid() {
    
    var firstName = document.getElementById('uiName').value;
    var firstNameError = document.getElementById('uiName-error');

    var lastName = document.getElementById('uiLastName').value;
    var lastNameError = document.getElementById('uiLastName-error');

    var enName = document.getElementById('uiNameEn').value;
    var enNameError = document.getElementById('uiNameEn-error');

    var email = document.getElementById('uiEmail').value;
    var emailError = document.getElementById('uiEmail-error');

    var phone = document.getElementById('phoneNum').value;
    var phoneError = document.getElementById('phoneNum-error');

    var ssn = document.getElementById('ssn').value;
    var ssnError = document.getElementById('ssn-error');

    var pass = document.getElementById('pass').value;
    var passError = document.getElementById('pass-error');

    var confirmPass = document.getElementById('confirmPass').value;
    var confirmPassError = document.getElementById('confirmPass-error');

    var address = document.getElementById('address').value;
    var addressError = document.getElementById('address-error');

    var dob = document.getElementById('dob').value;
    var dobError = document.getElementById('dob-error');


    if (firstName.length == 0)
        firstNameError.innerHTML ="لطفا نام خود را وارد کنید.";
    else if (firstName.length < 3)
        firstNameError.innerHTML ="حداقل تعداد حرف 3 است!";
    // preventDefault when greater than 50 and persian allow

    if (lastName.length == 0)
        lastNameError.innerHTML = "لطفا نام خانوادگی خود را وارد کنید.";
    else if (firstName.length < 3)
        lasrtNameError.innerHTML ="حداقل تعداد حرف 3 است!";
    // preventDefault when greater than 100 and persian allow

    if (enName.length == 0)
        enNameError.innerHTML = "لطفا نام خانوادگی خود را وارد کنید.";
    // preventDefault when greater than 150 and english allow

    if (email.length == 0)
        emailError.innerHTML = "لطفا ایمیل خود را وارد کنید.";
    else checkEmail_error2('email');//own set

    if (phone.length == 0 || phone.length == 2)
        phoneError.innerHTML = "لطفا تلفن همراه خود را وارد کنید.";
    else checkPhoneNum_error2('phoneNum'); //own set

    if (ssn.length == 0)
        ssnError.innerHTML = "لطفا کد ملی خود را وارد کنید.";
    else checkSsn_error2('ssn'); //own set

    if (pass.length == 0){
        console.log(pass.length)
        passError.innerHTML = "لطفا رمز خود را وارد کنید.";
    }
    else checkPass_error2('pass'); //own set

    if (confirmPass.length == 0)
        confirmPassError.innerHTML = "لطفا رمز خود را دوباره وارد کنید.";
    else checkConfirmPass_error2('confirmPass'); //own set

    if (address.length == 0)
        addressError.innerHTML = "لطفا آدرس خود را وارد کنید.";
    //when greater than 250: preventDefault

    if (dob.length == 0)
        dobError.innerHTML = "لطفا تاریخ تولد خود را وارد کنید.";
    else {
        var year = parseInt(y);
        var month = parseInt(m);
        var day = parseInt(d);

        if(year < 1310 || year > 1390)
            dobError.innerHTML = "سال وارد شده باید بین ۱۳۱۰ تا ۱۳۹۰ باشد.";
        if (month > 12 || month <= 0) 
            dobError.innerHTML = "ماه وارد شده باید بین 1 تا 12 باشد.";
        if (day > 31 || day <= 0) 
            dobError.innerHTML = "روز وارد شده باید بین 1 تا 31 باشد.";
    }
    
    return false;
}