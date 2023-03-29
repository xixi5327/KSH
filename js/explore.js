window.onload = function () {

    let nations = [
        {
            name: '维吾尔族',
            url: 'url("./images/1.png") no-repeat top center'
        },
        {
            name: '汉族',
            url: 'url("./images/2.png") no-repeat top center'
        },
        {
            name: '哈萨克族',
            url: 'url("./images/3.png") no-repeat top center'
        },
        {
            name: '蒙古族',
            url: 'url("./images/4.png") no-repeat top center'
        },
        {
            name: '回族',
            url: 'url("./images/5.png") no-repeat top center'
        },
        {
            name: '柯尔克孜族',
            url: 'url("./images/6.png") no-repeat top center'
        },
        {
            name: '满族',
            url: 'url("./images/7.png") no-repeat top center'
        },
        {
            name: '锡伯族',
            url: 'url("./images/8.png") no-repeat top center'
        },
        {
            name: '塔吉克族',
            url: 'url("./images/9.png") no-repeat top center'
        },
        {
            name: '达斡尔族',
            url: 'url("./images/10.png") no-repeat top center'
        },
        {
            name: '乌孜别克族',
            url: 'url("./images/11.png") no-repeat top center'
        },
        {
            name: '塔塔尔族',
            url: 'url("./images/12.png") no-repeat top center'
        },
        {
            name: '俄罗斯族',
            url: 'url("./images/13.png") no-repeat top center'
        },

    ]

    let container = document.querySelector('.right');

    let index = 1;
    //1.循环遍历nations数组
    nations.forEach(function (item) {

        //为每个对象生成一个div对象
        let div = document.createElement('div');

        //生成一个a标签
        if (index == 10) { index = 'a'; console.log(index); }
        else if (index == 'a1') { index = 'b' }
        else if (index == 'b1') { index = 'c' }
        else if (index == 'c1') { index = 'd' }

        let a = document.createElement('a');
        a.href = './details/detail-' + index + '.html';
        // a.target = "_blank";
        a.style.background = item.url;
        a.style.backgroundSize = "auto 100%";

        //生成一个div,蒙版
        let meng = document.createElement('div');
        meng.className = 'meng';
        meng.innerHTML = item.name;

        a.append(meng);
        div.appendChild(a);
        container.appendChild(div);

        index = index + 1;
    })

};
