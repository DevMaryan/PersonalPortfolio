var myApp = new function () {
    this.printTable = function () {
        var tab = document.getElementById('Exp');
        var win = window.open('', '', 'height=200,width=700');
        win.document.write(tab.outerHTML);
        win.document.close();
        win.print();
    }
}
