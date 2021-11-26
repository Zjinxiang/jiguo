function timer(){
    var z_time=document.getElementsByClassName("z_time")[0]
    setInterval(function(){
    var a=new Date();
    var b=new Date(2021,12,1);
    var chaju=b-a;
    var day=Math.floor(chaju/1000/60/60/24);
    var h=Math.floor(chaju/1000/60/60%24);
    var m=Math.floor(chaju/1000/60%60);
    var s=Math.floor(chaju/1000%60);
    var div_= document.getElementsByTagName('div')[0];
    var time=day+'天'+h+'小时'+m+'分钟'+s+'秒'
    z_time.innerHTML='申请时间剩余：'+time;
    },1000)
}
timer()


//点击增加人数
function clickUpNumber(){
    var now_apply=document.getElementsByClassName("now_apply")[0];
    var number_people=document.getElementById('number_people');
    var number_quantity=document.getElementById('number_quantity');
    var number=250;
    var quantity=50;
    now_apply.onclick=function(){
        if(quantity<=0){
            quantity=1;
            alert('不好意思，商品太火爆，已经被抢空啦！')
        }
        number++;
        quantity--;
        number_people.innerHTML=number+'人申请';
        number_quantity.innerHTML=quantity+'台'
        
    }
}
clickUpNumber()


