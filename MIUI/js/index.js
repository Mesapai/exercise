// JavaScript Document
/*var bn=document.getElementById("banner");
var jt=document.getElementsByClassName("banner_jt");
bn.onmouseover=function()
{
	jt.item(0).style.display="block";
	
	},onmouseout=function()
	
	{
		jt.item(0).style.display="none";
		}*/
var doudian=document.getElementsByClassName("banner_dot").item(0).getElementsByTagName("li");
var tupian=document.getElementsByClassName("bannerLb").item(0).getElementsByTagName("li");
function show(val)
{
	//clearInterval(jg);
	now=val;
	for(var i=0;i<5;i++)
	{
		if(val==i)
		{
			doudian.item(i).style.backgroundColor="#F0F0F0";
			tupian.item(i).style.display="block";
			}
			else{
				doudian.item(i).style.backgroundColor="";
				tupian.item(i).style.display="none";
				
				}
		}
		
}		
var now=0;
var next;

function lunbo(val)
{
	
	next=now+1;
	if(now==4)
	{
		next=0;
		}
	
	tupian.item(now).style.display="none";
	tupian.item(next).style.display="block";
	doudian.item(now).style.backgroundColor="";
	doudian.item(next).style.backgroundColor="#F0F0F0";
	now++;
	if(now==5)
	{
		now=0;
		}
	//jg=window.setTimeout("lunbo("+now+")",3000);
}
var jg=window.setInterval("lunbo("+now+")",3000);