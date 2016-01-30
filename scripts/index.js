window.onload=function(){
	// 在控制台中输出10行*
	// var fn=function(){
	// 	for(var i=0;i<10;i++){
	// 		console.log("*");	
	// 	}
	// };
	
	// var fn1=function(){
	// 	for(var i=0;i<=4;i++){
	// 		var s="";
	// 		for(var j=0;j<=i;j++){
	// 			s=s+"*";
				
	// 		}
 //            console.log(s);
 //            console.log("");
	// 	}
	// }
 //   fn1();
   // document.write("*");
   // document.write("<br/>")
   // document.write("*");
   // var f2=function(){
	  //  	for(var i=0;i<5;i++){
	  //  		for(var k=0;k<4-i;k++){
	  //  			document.write("-");
	  //  		}
	  //  		for(var j=0;j<i*2+1;j++){
	  //  		document.write("*");
	  //  	    }  
	  //  		document.write("<br/>");
	  //  	}
   // }
   // f2();
   // 写一个函数，在页面中用定位创建28个元素，放到一个div中
       // 28个元素都用定位
       var dakuai=document.getElementById("dakuai");
       var leftSet=document.getElementById("left-set");
       var moveRight=document.getElementById("move-to-right");
       var moveLeft=document.getElementById("move-to-left");
       var rightSet=document.getElementById("right-set");
       var xiaokuai;
   
    // 时间委托
    
    var ss=null;
    var isFree=function(el){
        var id=el.getAttribute("id");
        var x=Number(id.split("-")[0]);
        var y=Number(id.split("-")[1]);
        var nx=document.getElementById((x+1)+"-"+y);
        var ny=document.getElementById((x+1)+"-"+(y+1));

        if(nx||ny) return false;
          return true;
    }
    dakuai.onclick=function(e){
    	if(e.target==this||e.target==moveLeft||e.target==moveRight||e.target.hasAttribute('id') && !isFree(e.target)){
        return;
      }    
        
    	if(ss==null){
        	e.target.style.border="2px solid black";
          if(panduan(e.target)==1){        	     
                  e.target.parentElement.removeChild(e.target);              
           }else{
             ss=e.target;
           }   
      }else{
      
             ss.style.border="none";
           	e.target.style.border="2px solid black";
            if(panduan(e.target,ss)==2){
               e.target.parentElement.removeChild(ss);
            }
            if(panduan(e.target,ss)){
                    e.target.parentElement.removeChild(e.target);
                    ss.parentElement.removeChild(ss);
            }else{
           	ss=e.target;
            }
         }

    }
    var panduan=function(mm,nn){

      
          if(mm.innerHTML=="K"&&nn==undefined){
            return 1;
          };
         
          if(mm.innerHTML!="K"&&nn==undefined){
            return false;
          }
          if(mm.innerHTML=="Q"&&nn.innerHTML=="A"||mm.innerHTML=="A"&&nn.innerHTML=="Q"
           ||mm.innerHTML=="J"&&nn.innerHTML=="2"||mm.innerHTML=="2"&&nn.innerHTML=="J" ){
            return true;
        
          }
           if(mm.innerHTML!=undefined&&nn.innerHTML=="K"){          
            return 2;
          }

          if(Number(mm.innerHTML)+Number(nn.innerHTML)==13){
          
            return true;
          }
    }
    moveRight.onclick=function(){
       if( !leftSet.children.length) {return;}
    rightSet.appendChild(leftSet.lastElementChild);
  };
    

    moveLeft.onclick = (function(){
    var count = 0;
    return function(){
      if( count == 3 || leftSet.children.length != 0) return;
      while(rightSet.children.length){
        leftSet.appendChild(rightSet.lastElementChild);
      }
      count++;
    };
  })();
   var 	dict={1:"A",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"J",12:"Q",13:"K"};
  var fn5=function(){
    var poker=[];
    var shuzu=["22.jpg","2.jpg","3.jpg","4.jpg"];
    var zidian={};
    while(poker.length!=52){
      shu1=dict[1+Math.floor(Math.random()*13)];
      shu2=shuzu[Math.floor(Math.random()*4)];
        var pai={huase:shu2,number:shu1};
         if(!zidian[shu1+shu2]){
         	 poker.push(pai);
         	 zidian[shu1+shu2]=true;
         }     
      }
        return  poker;

   }
    poker=fn5();
   	
      var fn=function(){
        var index=0;
        for(var i=0;i<7;i++){
        
        for(var j=0;j<=i;j++){
           xiaokuai=document.createElement("div");
           xiaokuai.setAttribute("class","kuai");
            xiaokuai.setAttribute("id",i+"-"+j);
           xiaokuai.style.left=55*(6-i)+j*110+"px";
           // xiaokuai.innerHTML=poker[index].number;      
            xiaokuai.style.top=30*i+30;
              xiaokuai.style.backgroundImage="url(./img/52.jpg)";

            dakuai.appendChild(xiaokuai);
              index++;
          }  
         
        }
        for(var k=0;k<24;k++){
          xiaokuai=document.createElement("div");
          xiaokuai.setAttribute("class","kuai dibu");
          xiaokuai.innerHTML=poker[k].number;  
          xiaokuai.style.backgroundImage="url(./img/"+poker[k].huase+")"
         leftSet.appendChild(xiaokuai);
        
        }
      
    }
    fn();
    var n=24;
      var xiaokuai=document.getElementsByClassName("kuai");
     tt=setInterval(function(){
        xiaokuai[n].style.webkitTransform="rotateY(360deg)";
        xiaokuai[n].innerHTML=poker[n].number;
         xiaokuai[n].style.backgroundImage="url(./img/"+poker[n].huase+")";
        n++;
        console.log(n);
        if(n==52){
          clearInterval(tt);
        }
      },100)
   	// poker.length=28;
  
   	
   	// for(var i=0;i<el.length;i++){
   	// 	el[i].innerHTML=(poker[i][number]);
      // el[i].style.backgroundImage="url(./img/"+poker[i].huase+")"
   	// }
    // for(i;i<52;i++){
      
    // }
   
}