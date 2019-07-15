window.onload = function () { mv.app.toTip(); };
var mv = {};//命名空间
mv.tools = {};
mv.ui = {};
mv.ui.textchange = function (obj, str) {

    obj.onfocus = function () {
        if (this.value == str) {
            this.value == ' ';
        }
    };
    obj.onblur = function () {
        if (this.value == ' ') {
            this.value == str;
        }
    };
};
mv.app = {};
mv.app.toTip = function () {
    var oText1 = document.getElementById('text1');
    var oText2 = document.getElementById('text2');

    mv.ui.textchange(oText1, 'Search website');
    mv.ui.textchange(oText2, 'Search website');
};

mv.app.Tobanner=function(){
    var oDd=document.getElementById(id);
    var aLi=oDd.getElementsByTagName('li');

    setInterval(auto,3000);

    function auto()
}