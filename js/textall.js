// 全部大众使用渲染
var quanbu_=document.getElementById('quanbu');
var shenpingzhong_=document.getElementById('shenpingzhong');
var shiyongzhong_=document.getElementById('shiyongzhong');
var yijieshu_=document.getElementById('yijieshu');


function applyColoursDrawing(){
    var drawing_center=document.getElementsByClassName('drawing_center')[0];
    axios({
        method:'get',
        url:'http://192.168.31.5:3000/play/hot'
    }).then(response=>{
        // console.log(response);
        // let str1=JSON.stringify(response)
        // console.log(str1);
        var str = "";
        for(let k=0;k<=1;k++){
        for (let i = 0; i <response.data[k].length; i++){
            str += `<li>
                <img src="${response.data[k][i].img}">
                <p>${response.data[k][i].text}</p>
                <div class="drawing_center_center">
                    <span>${response.data[k][i].price}</span>
                    <span>20台</span>
                </div>
                <div class="drawing_center_button">
                    <span>1392</span>
                    申请
                </div>
                <p class="drawing_center_foot">
                    报告数量：8
                </p>
            </li>`
        }}
        drawing_center.innerHTML=str;
    })
}
applyColoursDrawing()

function quanbu(){
    var drawing_center=document.getElementsByClassName('drawing_center')[0];
    axios({
        method:'get',
        url:'http://192.168.31.5:3000/play/hot'
    }).then(response=>{
        // console.log(response);
        // let str1=JSON.stringify(response)
        // console.log(str1);
        var str = "";
        for(let k=0;k<=1;k++){
        for (let i = 0; i <response.data[k].length; i++){
            str += `<li>
                <img src="${response.data[k][i].img}">
                <p>${response.data[k][i].text}</p>
                <div class="drawing_center_center">
                    <span>${response.data[k][i].price}</span>
                    <span>20台</span>
                </div>
                <div class="drawing_center_button">
                    <span>1392</span>
                    申请
                </div>
                <p class="drawing_center_foot">
                    报告数量：8
                </p>
            </li>`
        }}
        drawing_center.innerHTML=str;
    })
    quanbu_.style.color='red';
    shenpingzhong_.style.color='rgb(184, 181, 181)';
    shiyongzhong_.style.color='rgb(184, 181, 181)';
    yijieshu_.style.color='rgb(184, 181, 181)';
}


function shenqingzhong(){
    var drawing_center=document.getElementsByClassName('drawing_center')[0];
    axios({
        method:'get',
        url:'http://192.168.31.5:3000/play/hot'
    }).then(response=>{
        // console.log(response);
        // let str1=JSON.stringify(response)
        // console.log(str1);
        var str = "";
        for(let k=2;k<=3;k++){
        for (let i = 0; i <response.data[k].length; i++){
            str += `<li>
                <img src="${response.data[k][i].img}">
                <p>${response.data[k][i].text}</p>
                <div class="drawing_center_center">
                    <span>${response.data[k][i].price}</span>
                    <span>20台</span>
                </div>
                <div class="drawing_center_button">
                    <span>1392</span>
                    申请
                </div>
                <p class="drawing_center_foot">
                    报告数量：8
                </p>
            </li>`
        }}
        drawing_center.innerHTML=str;
    })
    quanbu_.style.color='rgb(184, 181, 181)';
    shenpingzhong_.style.color='red';
    shiyongzhong_.style.color='rgb(184, 181, 181)';
    yijieshu_.style.color='rgb(184, 181, 181)';
}


function shiyongzhong(){
    var drawing_center=document.getElementsByClassName('drawing_center')[0];
    axios({
        method:'get',
        url:'http://192.168.31.5:3000/play/hot'
    }).then(response=>{
        // console.log(response);
        // let str1=JSON.stringify(response)
        // console.log(str1);
        var str = "";
        for(let k=1;k<=2;k++){
        for (let i = 0; i <response.data[k].length; i++){
            str += `<li>
                <img src="${response.data[k][i].img}">
                <p>${response.data[k][i].text}</p>
                <div class="drawing_center_center">
                    <span>${response.data[k][i].price}</span>
                    <span>20台</span>
                </div>
                <div class="drawing_center_button">
                    <span>1392</span>
                    申请
                </div>
                <p class="drawing_center_foot">
                    报告数量：8
                </p>
            </li>`
        }}
        drawing_center.innerHTML=str;
    })
    quanbu_.style.color='rgb(184, 181, 181)';
    shenpingzhong_.style.color='rgb(184, 181, 181)';
    shiyongzhong_.style.color='red';
    yijieshu_.style.color='rgb(184, 181, 181)';
}


function yijieshu(){
    var drawing_center=document.getElementsByClassName('drawing_center')[0];
    axios({
        method:'get',
        url:'http://192.168.31.5:3000/play/hot'
    }).then(response=>{
        // console.log(response);
        // let str1=JSON.stringify(response)
        // console.log(str1);
        var str = "";
        for(let k=2;k<=3;k++){
        for (let i = 0; i <response.data[k].length; i++){
            str += `<li>
                <img src="${response.data[k][i].img}">
                <p>${response.data[k][i].text}</p>
                <div class="drawing_center_center">
                    <span>${response.data[k][i].price}</span>
                    <span>20台</span>
                </div>
                <div class="drawing_center_button">
                    <span>1392</span>
                    申请
                </div>
                <p class="drawing_center_foot">
                    报告数量：8
                </p>
            </li>`
        }}
        drawing_center.innerHTML=str;
    })
    quanbu_.style.color='rgb(184, 181, 181)';
    shenpingzhong_.style.color='rgb(184, 181, 181)';
    shiyongzhong_.style.color='rgb(184, 181, 181)';
    yijieshu_.style.color='red';
}