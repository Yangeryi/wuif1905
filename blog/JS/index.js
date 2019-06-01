window.onload=function () {
    let home=document.getElementById("home");
    home.onmouseenter=function () {
        home.style.color="#00c1de";
    }
    home.onmouseleave=function () {
        home.style.color="#fff";
    }
//小标题
    /*let btnList=document.getElementsByClassName("image-btnList");
    let list=btnList[0].getElementsByTagName("li");
    let imgList=document.getElementsByClassName("image-leftI");
    let imgLists=imgList[0].getElementsByTagName("li");
    for(let i=0;i<list.length;i++){
        list[i].onclick=function () {
            list[i].style.background="#12b7de";
            imgLists[i].style="z-index: 999"
        }
        list[i].onmouseleave=function () {
            list[i].style.background="#ffffff";
            imgLists[i].style="z-index: 9"
        }
    }*/

    let title=document.getElementsByClassName("diary-left1");
    let titleList=title[0].getElementsByTagName("li");
    for(let i=0;i<titleList.length;i++){
        titleList[i].onclick=function () {
            for(let j=0;j<titleList.length;j++){
                titleList[j].style.borderBottom="none";
            }
            titleList[i].style.borderBottom="2px solid #000"
        }
    }
    //安静
    let tabList=document.querySelector(".diary-left3");
    let tabLists=document.querySelectorAll(".diary-left3 > li");
    tabLists.forEach(function (elem,index) {
        elem.onmouseenter=function () {
            for (let i=0;i<tabLists.length;i++) {
                tabLists[i].classList.remove("hot");
            }
            this.classList.add("hot");
        }
    })
    //轮播图按钮
    let btnRight=document.querySelector(".image-btnRight");
    let btnLeft=document.querySelector(".image-btnLeft");
    let img=document.querySelectorAll(".image-leftI >li")
    let btnList=document.querySelectorAll(".image-btnList > li")
    let current=0,next=0;
    let w=img[0].offsetWidth;
    let flag=true;
    btnRight.onclick=function (){
        if(!flag){
            return ;
        }
        flag=false;
        next++;
        if(next>=img.length){
            next=0;
        }
        img[next].style.left=w+"px"
        animate(img[current],{left:-w});
        animate(img[next],{left:0},function () {
            flag=true;
        });
        btnList[current].classList.remove("hot");
        btnList[next].classList.add("hot");
        current=next;
    }
    btnLeft.onclick=function (){
        if(!flag){
            return ;
        }
        flag=false;
        next--;
        if(next<0){
            next=img.length-1;
        }
        img[next].style.left=-w+"px"
        animate(img[current],{left:w});
        animate(img[next],{left:0},function () {
            flag=true;
        });
        btnList[current].classList.remove("hot");
        btnList[next].classList.add("hot");
        current=next;
    }

    /*btnRight.onclick=function () {
        index++;
        if(index==img.length){
            index=0;
        }
        img.forEach(function (ele,index) {
            ele.style.zIndex=1;
            btnList[index].classList.remove("hot")
        })
        img[index].style.zIndex=999;
        btnList[index].classList.add("hot")
    }
*/

   /* btnLeft.onclick=function () {
        index--;
        if(index<0){
            index=img.length-1;
        }
        img.forEach(function (ele,index) {
            ele.style.zIndex=1;
            btnList[index].classList.remove("hot")
        })
        img[index].style.zIndex=999;
        btnList[index].classList.add("hot")
    }*/
    //点击事件//图片对应下面的点
    for(let i=0;i<btnList.length;i++){
        btnList[i].onclick=function () {
            if(current===i){
                return;
            }
            next=i;
            if(next>current){
                img[next].style.left=w+"px"
                animate(img[current],{left:-w});
                animate(img[next],{left:0});
            }
            else if(next<current){
                img[next].style.left=-w+"px"
                animate(img[current],{left:w});
                animate(img[next],{left:0});
            }
            btnList[current].classList.remove("hot");
            btnList[next].classList.add("hot");
            current=next;
        }
    }
    /*btnList.forEach(function (ele,index1) {
        ele.onclick=function(){
            console.log(index);
            console.log(index1);
            index=index1;
            console.log(index);
            console.log(index1);
            btnList.forEach(function (ele,index1) {
                ele.classList.remove("hot")
                img[index1].style.zIndex=1;
            })
            ele.classList.add("hot")
            img[index1].style.zIndex=999;
        }
    })*/

    //轮播图播放
    let t=setInterval(btnRight.onclick,1000)
    let imageLeft=document.querySelector(".image-left")
    imageLeft.onmouseenter=function () {
        clearInterval(t);
    }
    imageLeft.onmouseleave=function () {
        t=setInterval(btnRight.onclick,1000);}




/*按需加载图片
* 页面滚动距离+窗口高度>=元素到文档的距离
* img src=img aa;
* */
    let viewH=window.innerHeight;
    let imgs=document.querySelectorAll(".lazyload");
    console.log(imgs[0].offsetWidth);
    let positionArr=[];
    imgs.forEach(function (ele) {
        let parent=ele.offsetParent;
        positionArr.push(ele.offsetTop+parent.offsetTop);
    })
    window.onscroll=function () {
        let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        for(let i=0;i<positionArr.length;i++){
            if(viewH+scrollTop>=positionArr[i]+50){
                if(!imgs[i].src){

                    imgs[i].src = imgs[i].getAttribute("aa");
                }
            }
        }
    }
}