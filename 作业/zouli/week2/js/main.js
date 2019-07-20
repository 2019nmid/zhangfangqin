// JavaScript Document

window.onload=function(){
	mv.app.toTip();
};

var mv ={};

mv.tools={};

mv.ui={};
mv.ui.textChange=function(obj,str)
{
	obj.onfocus=function()
	{
		if(this.value == str){
		       this.value = '';
		   }
	};
	obj.onblur=function()
	{
		if(this.value == ''){
		       this.value = str;
		   }
	};
};

mv.app={};
mv.app.toTip=function(){
	var oText =document.getElementById('text');
	mv.ui.textChange(oText,'书籍、电影、音乐、小组、小站、成员');
};
 