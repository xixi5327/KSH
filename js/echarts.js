window.onload = function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('right'));

    var categories = [{ name: "信仰" }, { name: "语言" }, { name: "饮食" }, { name: "艺术" }, { name: "科学" }, { name: "节日" }, { name: "民族" }];
    option = {
        // 图的标题
        // title: {
        //     text: 'ECharts 图谱可视化'
        // },
        // 提示框的配置
        tooltip: {
            formatter: function (x) {
                return x.data.des;
            }
        },
        // 工具箱
        toolbox: {
            // 显示工具箱
            show: true,
            feature: {
                mark: {
                    show: true
                },
                // 还原
                restore: {
                    show: true
                },
                // 保存为图片
                saveAsImage: {
                    show: true
                }
            }
        },
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        series: [{
            type: 'graph', // 类型:关系图
            layout: 'force', //图的布局，类型为力导图
            symbolSize: 40, // 调整节点的大小
            roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            force: {
                repulsion: 2500,
                edgeLength: [10, 500]
            },
            draggable: true,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#4b565b',
                }
            },
            edgeLabel: {
                normal: {
                    show: true,
                    formatter: function (x) {
                        return x.data.name;
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {}
                }
            },
            // 数据
            data: [
                { "name": '维吾尔族', "symbolSize": 100, "category": '民族', },
                { "name": '哈萨克族', "symbolSize": 100, "category": '民族', },
                {
                    "name": '蒙古族', "symbolSize": 100, "category": '民族',
                },
                {
                    "name": '回族', "symbolSize": 100, "category": '民族',
                },
                {
                    "name": '柯尔克孜族', "symbolSize": 100, "category": '民族',
                },
                {
                    "name": '满族', "symbolSize": 100, "category": '民族',
                },
                {
                    "name": '锡伯族', "symbolSize": 100, "category": '民族',
                },
                {
                    "name": '塔吉克族', "symbolSize": 100, "category": '民族',
                },
                {
                    "name": '达斡尔族', "symbolSize": 100, "category": '民族',
                },
                {
                    "name": '乌孜别克族', "symbolSize": 100, "category": '民族',
                },
                {
                    "name": '塔塔尔族', "symbolSize": 100, "category": '民族',
                },
                {
                    "name": '俄罗斯族', "symbolSize": 100, "category": '民族',
                },
                {
                    name: '11774538', symbolSize: 50, category: '民族',
                },
                {
                    name: '维吾尔语', symbolSize: 50, category: '语言',
                },
                {
                    name: '方言', symbolSize: 50, category: '语言',
                },
                {
                    name: '中心', symbolSize: 50, category: '语言',
                },
                {
                    name: '和田', symbolSize: 50, category: '语言',
                },
                {
                    name: '罗布', symbolSize: 50, category: '语言',
                },
                {
                    name: '发展历史', symbolSize: 50, category: '语言',
                },
                {
                    name: '7-13世纪', symbolSize: 50, category: '语言', des: '1.古突厥阶段',
                },
                {
                    name: '14-18世纪', symbolSize: 50, category: '语言', des: '2.察合台语阶段'
                },
                {
                    name: '19世纪至今', symbolSize: 50, category: '语言', des: '3.近代和现代维吾尔语阶段'
                },
                {
                    name: '烤肉', symbolSize: 50, category: '饮食',
                },
                {
                    name: '烤全羊', symbolSize: 50, category: '饮食',
                },
                {
                    name: '纳仁', symbolSize: 50, category: '饮食',
                },
                {
                    name: '拉面', symbolSize: 50, category: '饮食',
                },
                {
                    name: '烤包子', symbolSize: 50, category: '饮食',
                },
                {
                    name: '馕', symbolSize: 50, category: '饮食',
                },
                {
                    name: '《真理的入门》', symbolSize: 50, category: '艺术', des: '《真理的入门》是喀喇汗王朝时期维吾尔族盲人诗人阿合买提·玉克乃克(1110～1180)用回鹘文写成的一部劝诫性的长诗',
                },
                {
                    name: '《乌古斯可汗传》', symbolSize: 50, category: '艺术', des: '乌古斯传又称《乌古斯汗传说》。维吾尔族民间英雄史诗',
                },
                {
                    name: '《福乐智慧》', symbolSize: 50, category: '艺术', des: '《福乐智慧》是北宋时期维吾尔族人玉素甫·哈斯·哈吉甫在1069～1070年创作的民族文学。'
                },
                {
                    name: '《突厥语大辞典》', symbolSize: 50, category: '艺术', des: '《突厥语大词典》是一部用阿拉伯语注释突厥语词的词典'
                },
                {
                    name: '《五部长诗集》', symbolSize: 50, category: '艺术',
                },
                {
                    name: '佛教', symbolSize: 50, category: '信仰',
                },
                {
                    name: '景教', symbolSize: 50, category: '信仰',
                },
                {
                    name: '祆教', symbolSize: 50, category: '信仰',
                },
                {
                    name: '摩尼教', symbolSize: 50, category: '信仰',
                },
                {
                    name: '萨满教', symbolSize: 50, category: '信仰',
                },
                {
                    name: '医学', symbolSize: 50, category: '科学',
                },
                {
                    name: '内科', symbolSize: 50, category: '科学',
                },
                {
                    name: '维医', symbolSize: 50, category: '科学',
                },
                {
                    name: '四大物质学说', symbolSize: 50, des: '四大物质学说是维吾尔医学的基本理论之一,维吾尔族医学称其为“艾尔康”学说。', category: '科学',
                },
                {
                    name: '外科', symbolSize: 50, category: '科学',
                },
                {
                    name: '著作', symbolSize: 50, category: '科学',
                },
                {
                    name: '黑胆津', symbolSize: 50, category: '科学',
                },
                {
                    name: '胆津', symbolSize: 50, category: '科学',
                },
                {
                    name: '痰津', symbolSize: 50, category: '科学',
                },
                {
                    name: '血津', symbolSize: 50, category: '科学',
                },
                {
                    name: '温泉浴', symbolSize: 50, category: '科学',
                },
                {
                    name: '日光浴', symbolSize: 50, category: '科学',
                },
                {
                    name: '放血', symbolSize: 50, category: '科学',
                },
                {
                    name: '冷热敷', symbolSize: 50, category: '科学',
                },
                {
                    name: '《论自然界》', symbolSize: 50, category: '科学',
                },
                {
                    name: '《伤寒解义》', symbolSize: 50, category: '科学',
                },
                {
                    name: '《医学宝鉴》', symbolSize: 50, category: '科学',
                },
                {
                    name: '按摩', symbolSize: 50, category: '科学',
                },
                {
                    name: '披兽皮', symbolSize: 50, category: '科学',
                },
                {
                    name: '肉孜节', symbolSize: 50, category: '节日',
                },
                {
                    name: '古尔邦节', symbolSize: 50, category: '节日',
                },
                {
                    name: '诺鲁孜节', symbolSize: 50, category: '节日',
                },
                {
                    name: '1286311334', symbolSize: 50, category: '民族',
                },
                {
                    name: '汉族', symbolSize: 100, category: '民族',
                },
                {
                    name: '汉语', symbolSize: 50, category: '语言',
                },
                {
                    name: '米饭', symbolSize: 50, category: '饮食',
                },
                {
                    name: '粥', symbolSize: 50, category: '饮食',
                },
                {
                    name: '面条', symbolSize: 50, category: '饮食',
                },
                {
                    name: '饺子', symbolSize: 50, category: '饮食',
                },
                {
                    name: '乐律', symbolSize: 50, category: '艺术',
                },
                {
                    name: '五度相生律', symbolSize: 50, category: '艺术',
                },
                {
                    name: '纯律', symbolSize: 50, category: '艺术',
                },
                {
                    name: '平均律', symbolSize: 50, category: '艺术',
                },
                {
                    name: '茶艺', symbolSize: 50, category: '艺术',
                },
                {
                    name: '中医', symbolSize: 50, category: '科学',
                },
                {
                    name: '阴阳五行', symbolSize: 50, category: '科学',
                },
                {
                    name: '望、闻、问、切', symbolSize: 50, category: '科学',
                },
                {
                    name: '汉方', symbolSize: 50, category: '科学',
                },
                {
                    name: '针灸', symbolSize: 50, category: '科学',
                },
                {
                    name: '推拿', symbolSize: 50, category: '科学',
                },
                {
                    name: '春节', symbolSize: 50, category: '节日',
                },
                {
                    name: '清明节', symbolSize: 50, category: '节日',
                },
                {
                    name: '端午节', symbolSize: 50, category: '节日',
                },
                {
                    name: '元宵节', symbolSize: 50, category: '节日',
                },
                {
                    name: '中秋节', symbolSize: 50, category: '节日',
                },
                {
                    name: '正月初一', symbolSize: 50, category: '节日',
                },
                {
                    name: '拜年', symbolSize: 50, category: '节日',
                },
                {
                    name: '守岁', symbolSize: 50, category: '节日',
                },
                {
                    name: '忠孝节', symbolSize: 50, category: '节日',
                },
                {
                    name: '伊斯兰教历每年九月', symbolSize: 50, category: '节日',
                },
                {
                    name: '开斋节', symbolSize: 50, category: '节日',
                },
                {
                    name: '1562518', symbolSize: 50, category: '民族',
                },
                {
                    name: '哈萨克语', symbolSize: 50, category: '语言',
                },
                {
                    name: '阿尔泰语系突厥语族', symbolSize: 50, category: '语言',
                },
            ],


            //inner


            links: [
                { source: '维吾尔族', target: '11774538', name: '人口', },
                {
                    source: '语言', target: '维吾尔语', name: '包含',
                },
                {
                    source: '维吾尔语', target: '方言', name: '包含',
                },
                {
                    source: '维吾尔族', target: '维吾尔语', name: '民族语言',
                },
                {
                    source: '方言', target: '中心', name: '包含',
                },
                {
                    source: '方言', target: '和田', name: '包含',
                },
                {
                    source: '方言', target: '罗布', name: '包含',
                },
                {
                    source: '维吾尔语', target: '发展历史', name: '包含',
                },
                {
                    source: '发展历史', target: '7-13世纪', name: '包含',
                },
                {
                    source: '发展历史', target: '14-18世纪', name: '包含',
                },
                {
                    source: '发展历史', target: '19世纪至今', name: '包含',
                },
                {
                    source: '维吾尔族', target: '烤肉', name: '饮食习惯',
                },
                {
                    source: '维吾尔族', target: '烤全羊', name: '饮食习惯',
                },
                {
                    source: '维吾尔族', target: '纳仁', name: '饮食习惯',
                },
                {
                    source: '维吾尔族', target: '拉面', name: '饮食习惯',
                },
                {
                    source: '维吾尔族', target: '烤包子', name: '饮食习惯',
                },
                {
                    source: '维吾尔族', target: '馕', name: '饮食习惯',
                },
                {
                    source: '维吾尔族', target: '《真理的入门》', name: '古典文学',
                },
                {
                    source: '维吾尔族', target: '《乌古斯可汗传》', name: '古典文学',
                },
                {
                    source: '维吾尔族', target: '《福乐智慧》', name: '古典文学',
                },
                {
                    source: '维吾尔族', target: '《突厥语大辞典》', name: '古典文学',
                },
                {
                    source: '维吾尔族', target: '《五部长诗集》', name: '古典文学',
                },
                {
                    source: '维吾尔族', target: '佛教', name: '信仰',
                },
                {
                    source: '维吾尔族', target: '景教', name: '信仰',
                },
                {
                    source: '维吾尔族', target: '祆教', name: '信仰',
                },
                {
                    source: '维吾尔族', target: '摩尼教', name: '信仰',
                },
                {
                    source: '维吾尔族', target: '萨满教', name: '信仰',
                },
                {
                    source: '维吾尔族', target: '医学', name: '科学',
                },
                {
                    source: '医学', target: '维医', name: '简称',
                },
                {
                    source: '医学', target: '内科', name: '包含',
                },
                {
                    source: '医学', target: '外科', name: '包含',
                },
                {
                    source: '医学', target: '四大物质学说', name: '理论基础',
                },
                {
                    source: '医学', target: '著作', name: '拥有',
                },
                {
                    source: '四大物质学说', target: '黑胆津', name: '拥有',
                },
                {
                    source: '四大物质学说', target: '胆津', name: '拥有',
                },
                {
                    source: '四大物质学说', target: '痰津', name: '拥有',
                },
                {
                    source: '四大物质学说', target: '血津', name: '拥有',
                },
                {
                    source: '内科', target: '温泉浴', name: '拥有',
                },
                {
                    source: '内科', target: '日光浴', name: '拥有',
                },
                {
                    source: '内科', target: '放血', name: '拥有',
                },
                {
                    source: '内科', target: '冷热敷', name: '拥有',
                },
                {
                    source: '著作', target: '《论自然界》', name: '包含',
                },
                {
                    source: '著作', target: '《伤寒解义》', name: '包含',
                },
                {
                    source: '著作', target: '《医学宝鉴》', name: '包含',
                },
                {
                    source: '外科', target: '按摩', name: '包含',
                },
                {
                    source: '外科', target: '披兽皮', name: '包含',
                },
                {
                    source: '维吾尔族', target: '肉孜节', name: '节日',
                },
                {
                    source: '维吾尔族', target: '古尔邦节', name: '节日',
                },
                {
                    source: '维吾尔族', target: '诺鲁孜节', name: '节日',
                },
                {
                    source: '汉族', target: '1286311334', name: '人口',
                },
                {
                    source: '汉族', target: '米饭', name: '饮食习惯',
                },
                {
                    source: '汉族', target: '粥', name: '饮食习惯',
                },
                {
                    source: '汉族', target: '面条', name: '饮食习惯',
                },
                {
                    source: '汉族', target: '饺子', name: '饮食习惯',
                },
                {
                    source: '汉族', target: '汉语', name: '语言',
                },
                {
                    source: '汉族', target: '乐律', name: '艺术',
                },
                {
                    source: '乐律', target: '五度相生律', name: '艺术',
                },
                {
                    source: '乐律', target: '平均律', name: '艺术',
                },
                {
                    source: '乐律', target: '纯律', name: '艺术',
                },
                {
                    source: '汉族', target: '茶艺', name: '艺术',
                },
                {
                    source: '汉族', target: '中医', name: '医学',
                },
                {
                    source: '中医', target: '阴阳五行', name: '理论基础',
                },
                {
                    source: '中医', target: '望、闻、问、切', name: '四诊合参',
                },
                {
                    source: '中医', target: '针灸', name: '治疗手段',
                },
                {
                    source: '中医', target: '推拿', name: '治疗手段',
                },
                {
                    source: '中医', target: '按摩', name: '治疗手段',
                },
                {
                    source: '中医', target: '汉方', name: '治疗手段',
                },
                {
                    source: '汉族', target: '春节', name: '节日',
                },
                {
                    source: '汉族', target: '清明节', name: '节日',
                },
                {
                    source: '汉族', target: '端午节', name: '节日',
                },
                {
                    source: '汉族', target: '元宵节', name: '节日',
                },
                {
                    source: '汉族', target: '中秋节', name: '节日',
                },
                {
                    source: '春节', target: '正月初一', name: '节日时间',
                },
                {
                    source: '春节', target: '拜年', name: '节日活动',
                },
                {
                    source: '春节', target: '守岁', name: '节日活动',
                },
                {
                    source: '古尔邦节', target: '忠孝节', name: '别称',
                },
                {
                    source: '肉孜节', target: '伊斯兰教历每年九月', name: '时间',
                },
                {
                    source: '肉孜节', target: '开斋节', name: '别称',
                },
                {
                    source: '哈萨克族', target: '1562518', name: '人口',
                },
                {
                    source: '哈萨克族', target: '哈萨克语', name: '民族语言',
                },
                {
                    source: '哈萨克族', target: '阿尔泰语系突厥语族', name: '语族',
                },
            ],
            categories: categories,
        }]
    };
    myChart.setOption(option);
}