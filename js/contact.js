function toggle(ele) {
    var cont = document.getElementById('cntc');
    if (cont.style.display == 'block') {
        cont.style.display = 'none';
        document.getElementById(ele.id).value = 'Show DIV';

    }
    else {
        cont.style.display = 'block';
        document.getElementById(ele.id).value = 'Hide DIV';

    }
}