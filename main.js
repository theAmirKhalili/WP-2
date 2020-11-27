function allowPersian(e) {
    var unicode = /^[\u0600-\u06FF\s]+$/;
    if (unicode.test(e.key))
        return true;
    else 
        e.preventDefault();
}