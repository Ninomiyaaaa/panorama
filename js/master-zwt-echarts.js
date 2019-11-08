(function () {

        //违反纪律类型柱状图
        let barOption1 = {
            title: {
                text: '违反纪律类型',
                x: 'center',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} 个"
            },
            grid: {
                left: '2%',
                right: '2%',
                top: '14%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['政治纪律', '组织纪律', '廉洁纪律', '群众纪律', '工作纪律', '生活纪律', '其他'],
                axisLabel: {
                    show: true,
                    color: '#6695d3',
                    fontSize: 12,
                },
                axisLine: {
                    lineStyle: {
                        color: '#5c94ff',
                        width: .5
                    },
                },
                splitArea: {   //分割的区域
                    show: true,
                    areaStyle: {
                        color: ['#071a42', '#112651'],
                        opacity: 0.5
                    }
                },
                axisTick: {show: false},
            }],
            yAxis: [{
                type: 'value',
                name: '单位:个      ',
                nameTextStyle: {
                    color: '#b1cefc',
                    fontSize: 14
                },
                axisLine: {
                    lineStyle: {
                        color: '#5c94ff',
                        width: .5
                    }
                },
                axisLabel: {
                    show: true,
                    color: '#b1cefc',
                    fontSize: 12,
                },
                max: 100,
                interval: 10,
                splitLine: {
                    lineStyle: {
                        type: 'dashed', color: '#5c94ff', opacity: .1
                    }
                },
                axisTick: {show: false},
            }],
            series: [{
                type: 'bar',
                data: [42, 56, 48, 56, 34, 30, 28],
                barWidth: 16,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                            [{offset: 0, color: '#08dfff'},
                                {offset: 1, color: '#438bfb'}]),
                        label: {
                            show: true, position: 'top', textStyle: {
                                color: '#fff', fontSize: 16, fontWeight: 'normal'
                            }
                        }
                    }
                },
            }]
        };

        //处理结果环形图
        let pieOption1 = {
            title: {
                text: '处理结果',
                x: 'center',
                y: '4%',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: [{
                orient: 'vertical',
                x: '70%',
                y: '18%',
                data: ['政治建设', '思想建设', '组织建设', '作风建设', '纪律建设', '夺取反腐败斗争压倒性胜利', '上轮整改'],
                icon: 'circle',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 15,
                textStyle: {
                    fontSize: 12,
                    color: '#7eb8ff',
                },
                backgroundColor: 'rgba(7,34,87,.4)',
                borderWidth: 1,
                borderColor: '#0e2964',
                padding: [10, 10, 10, 15],
                formatter: function (d) {
                    if (d.length > 7) {
                        return d.substr(0, 7) + '\n' + d.substr(7, d.length - 7);
                    }
                    return d;
                },
            },{
                x: '9.5%',
                y: '19%',
                data: ['政治建设'],
                icon: 'circle',
                itemWidth: 12,
                itemHeight: 12,
                formatter: function () {
                  return ''
                },
            },{
                x: '4.5%',
                y: '47%',
                data: ['思想建设'],
                icon: 'circle',
                itemWidth: 12,
                itemHeight: 12,
                formatter: function () {
                    return ''
                },
            },{
                x: '9.5%',
                y: '75%',
                data: ['组织建设'],
                icon: 'circle',
                itemWidth: 12,
                itemHeight: 12,
                formatter: function () {
                    return ''
                },
            },{
                x: '28%',
                y: '85%',
                data: ['作风建设'],
                icon: 'circle',
                itemWidth: 12,
                itemHeight: 12,
                formatter: function () {
                    return ''
                },
            },{
                x: '48%',
                y: '75%',
                data: ['纪律建设'],
                icon: 'circle',
                itemWidth: 12,
                itemHeight: 12,
                formatter: function () {
                    return ''
                },
            },{
                x: '53%',
                y: '47%',
                data: ['夺取反腐败斗争压倒性胜利'],
                icon: 'circle',
                itemWidth: 12,
                itemHeight: 12,
                formatter: function () {
                    return ''
                },
            },{
                x: '48%',
                y: '19%',
                data: ['上轮整改'],
                icon: 'circle',
                itemWidth: 12,
                itemHeight: 12,
                formatter: function () {
                    return ''
                },
            },],
            color: ['#ffad00', '#ee152e', '#1fd17f', '#7ca5ff', '#1146ba', '#d21b8c', '#009bd1'],
            series: [{
                name: '处理结果',
                type: 'pie',
                center: ['35%', '55%'],
                radius: ['20%', '45%'],
                data: [
                    {value: 40, name: '政治建设'},
                    {value: 50, name: '思想建设'},
                    {value: 25, name: '组织建设'},
                    {value: 8, name: '作风建设'},
                    {value: 15, name: '纪律建设'},
                    {value: 28, name: '夺取反腐败斗争压倒性胜利'},
                    {value: 35, name: '上轮整改'},
                ],
                itemStyle: {
                    normal: {
                        labelLine: {
                            show: false,
                        },
                        label: {
                            show:false,
                            /*formatter: function (p) {
                                return `{white|${p.value}} {blue|个}`;
                            },
                            textStyle: {
                                rich: {
                                    'white': {
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        fontSize: 16,
                                    },
                                    'blue': {
                                        color: '#6899d7',
                                        fontWeight: 'normal',
                                        fontSize: 14,
                                    }
                                }
                            },*/
                        }
                    }

                },
            }]
        };

        //被巡单位性质环形图
        let pieOption2 = {
            title: {
                text: '被巡单位性质',
                x: 'center',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                x: '50%',
                y: '30%',
                data: ['党政机关', '市属单位', '群团组织', '功能园区', '事业单位', '其他'],
                icon: 'circle',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 20,
                textStyle: {
                    fontSize: 12,
                    color: '#7eb8ff',
                },
                backgroundColor: '#072257',
                padding: [10, 10, 10, 10],
                formatter: function (d) {
                    if (d.length > 7) {
                        return d.substr(0, 7) + '\n' + d.substr(7, d.length - 7);
                    }
                    return d;
                },
            },
            color: ['#ffad00', '#18b3fe', '#db6707', '#5ada61', '#fc4134', '#5751f8'],
            series: [{
                name: '被巡单位性质',
                type: 'pie',
                center: ['27%', '55%'],
                radius: ['45%', '67%'],
                data: [
                    {value: 4, name: '党政机关'},
                    {value: 5, name: '市属单位'},
                    {value: 3, name: '群团组织'},
                    {value: 2, name: '功能园区'},
                    {value: 4, name: '事业单位'},
                    {value: 6, name: '其他'},
                ],
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: '#12286b',
                        labelLine: {
                            show: false
                        },
                        label: {
                            formatter: '{c}',
                            textStyle: {
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 12,
                            },
                            position: 'inside'
                        }
                    }
                },
            }]
        };

        //巡查方式环形图
        let pieOption3 = {
            title: {
                text: '巡查方式',
                x: 'center',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: '46%',
                y: '18%',
                data: ['常规巡查', '专项巡查', '提级巡查', '联动巡查', '巡查"回头看"', '常规联动巡查', '提级联动巡查', '提级"回头看"', '其他'],
                icon: 'circle',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 15,
                textStyle: {
                    fontSize: 12,
                    color: '#7eb8ff',
                },
                width: 220,
                backgroundColor: '#072257',
                padding: [10, 10, 10, 10],
                formatter: function (d) {
                    if (d.length > 7) {
                        return d.substr(0, 7) + '\n' + d.substr(7, d.length - 7);
                    }
                    return d;
                },

            },
            color: ['#e04dfe', '#ffad00', '#1ab1f5', '#fc6001', '#5dda60', '#0cd9fa', '#fb4335', '#f63576', '#5252f8'],
            series: [{
                name: '巡查方式',
                type: 'pie',
                center: ['25%', '55%'],
                radius: ['45%', '67%'],
                data: [
                    {value: 3, name: '常规巡查'},
                    {value: 4, name: '专项巡查'},
                    {value: 5, name: '提级巡查'},
                    {value: 3, name: '联动巡查'},
                    {value: 2, name: '巡查"回头看"'},
                    {value: 2, name: '常规联动巡查'},
                    {value: 3, name: '提级联动巡查'},
                    {value: 1, name: '提级"回头看"'},
                    {value: 2, name: '其他'},
                ],
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: '#12286b',
                        labelLine: {
                            show: false
                        },
                        label: {
                            formatter: '{c}',
                            textStyle: {
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 12,
                            },
                            position: 'inside'
                        }
                    }
                },
            }]
        };

        //题整改完成率对比柱状图
        let barOption2 = {
            title: {
                text: '题整改完成率对比 (单位：%)',
                x: 'center',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} %"
            },
            grid: {
                left: '2%',
                right: '2%',
                top: '17%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['第一轮', '第二轮', '第三轮', '第四轮', '第五轮', '第六轮', '第七轮', '第八轮'],
                axisLabel: {
                    show: true,
                    color: '#6695d3',
                    fontSize: 12,
                },
                axisLine: {
                    lineStyle: {
                        color: '#5c94ff',
                        width: .5
                    },
                },
                splitArea: {   //分割的区域
                    show: true,
                    areaStyle: {
                        color: ['transparent', '#1f3562'],
                        opacity: 0.5
                    }
                },
                axisTick: {show: false},
            }],
            yAxis: [{
                type: 'value',
                name: '单位：% ',
                nameTextStyle: {
                    color: '#b1cefc',
                    fontSize: 14
                },
                axisLine: {
                    lineStyle: {
                        color: '#5c94ff',
                        width: .5
                    }
                },
                axisLabel: {
                    show: true,
                    color: '#b1cefc',
                    fontSize: 12,
                },
                max: 100,
                interval: 20,
                splitLine: {
                    lineStyle: {
                        type: 'dashed', color: '#5c94ff', opacity: .1
                    }
                },
                axisTick: {show: false},
            }],
            series: [{
                type: 'bar',
                data: [42, 56, 48, 56, 34, 30, 28, 28],
                barWidth: 16,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                            [{offset: 0, color: '#08dfff'},
                                {offset: 1, color: '#438bfb'}]),
                        label: {
                            show: true, position: 'top', textStyle: {
                                color: '#fff', fontSize: 20, fontWeight: 'normal'
                            }
                        }
                    }
                },
            }]
        };

        //线索处置-涉案人员级别环形图
        let pieOption4 = {
            title: {
                text: '涉案人员级别',
                x: 'center',
                y: '2%',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                },
                subtext: '                            单位：人',
                subtextStyle: {
                    fontSize: 12,
                    color: '#6c9edd',
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} :<br/>{c} ({d}%)"
            },
            /*graphic:[
                {
                    type:'image',
                    style:{
                        image:'../images/zwt/light-circle.png',
                        width:'210',
                        height:'170',

                    },
                    left:'10.8%',
                    top :'11.8%'
                },
            ],*/
            legend: {
                orient: 'horizontal',
                x: '5%',
                y: '75%',
                data: ['局级干部', '处级干部', '科级及其他'],
                icon: 'circle',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    fontSize: 12,
                    color: '#7eb8ff',
                },
                backgroundColor: 'rgba(41, 49, 82, .4)',
                borderWidth: 1,
                borderColor: '#0e2964',
                padding: [10, 10, 10, 15],
            },
            color: ['#ffad00', '#ee152e', '#1146ba'],
            series: [{
                name: '涉案人员级别',
                type: 'pie',
                center: ['45%', '46%'],
                radius: ['20%', '45%'],
                data: [
                    {value: 112, name: '局级干部'},
                    {value: 35, name: '处级干部'},
                    {value: 75, name: '科级及其他'},
                ],
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#0d0c21',
                        labelLine: {
                            show: false
                        },
                        label: {
                            formatter: '{c}',
                            textStyle: {
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 12,
                            },
                            position: 'inside'
                        }
                    }
                },
            }]
        };

        //线索处置-处理情况环形图
        let pieOption5 = {
            title: {
                text: '处理情况',
                x: 'center',
                y: '2%',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                },
                subtext: '                            单位：件',
                subtextStyle: {
                    fontSize: 12,
                    color: '#6c9edd',
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} :<br/>{c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                x: '4%',
                y: '75%',
                data: ['初核', '立案', '了解', '谈话函询', '其他(外国摸排)', '暂存', '移送省纪委'],
                icon: 'circle',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    fontSize: 12,
                    color: '#7eb8ff',
                },
                backgroundColor: 'rgba(41, 49, 82, .4)',
                borderWidth: 1,
                borderColor: '#0e2964',
                padding: [10, 5, 10, 5],
            },
            color: ['#f7017b', '#ffad00', '#ee152e', '#28d284', '#7ca5ff', '#1146ba', '#009dd6'],
            series: [{
                name: '涉案人员级别',
                type: 'pie',
                center: ['48%', '46%'],
                radius: ['20%', '45%'],
                data: [
                    {value: 30, name: '初核'},
                    {value: 45, name: '立案'},
                    {value: 50, name: '了解'},
                    {value: 25, name: '谈话函询'},
                    {value: 18, name: '其他(外国摸排)'},
                    {value: 20, name: '暂存'},
                    {value: 40, name: '移送省纪委'},
                ],
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#0d0c21',
                        labelLine: {
                            show: false
                        },
                        label: {
                            formatter: '{c}',
                            textStyle: {
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 12,
                            },
                            position: 'inside'
                        }
                    }
                },
            }]
        };

        //线索处置-处理结果环形图
        let pieOption6 = {
            title: {
                text: '处理结果',
                x: 'center',
                y: '2%',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                },
                subtext: '                            单位：件',
                subtextStyle: {
                    fontSize: 12,
                    color: '#6c9edd',
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} :<br/>{c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: '5%',
                y: '75%',
                data: ['了解', '"第一种形态"了结', '党纪政务处分', '移送司法'],
                icon: 'circle',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    fontSize: 12,
                    color: '#7eb8ff',
                },
                backgroundColor: 'rgba(41, 49, 82, .4)',
                borderWidth: 1,
                borderColor: '#0e2964',
                padding: [10, 10, 10, 15],
            },
            color: ['#f7017b', '#ffad00', '#ee152e', '#28d284', '#7ca5ff', '#1146ba', '#009dd6'],
            series: [{
                name: '涉案人员级别',
                type: 'pie',
                center: ['48%', '46%'],
                radius: ['20%', '45%'],
                data: [
                    {value: 45, name: '了解'},
                    {value: 50, name: '"第一种形态"了结'},
                    {value: 25, name: '党纪政务处分'},
                    {value: 20, name: '移送司法'},
                ],
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#0d0c21',
                        labelLine: {
                            show: false
                        },
                        label: {
                            formatter: '{c}',
                            textStyle: {
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 12,
                            },
                            position: 'inside'
                        }
                    }
                },
            }]
        };

        //巡察干部情况柱状图
        let barOption3 = {
            grid: {
                left: '2%',
                right: '3%',
                top: '2%',
                bottom: '4%',
                containLabel: true
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} 人"
            },
            xAxis: [{
                type: 'category',
                data: ['第一轮', '第二轮', '第三轮', '第四轮', '第五轮', '第六轮', '第七轮', '第八轮'],
                axisLabel: {
                    show: true,
                    color: '#6695d3',
                    fontSize: 12,
                },
                axisLine: {
                    lineStyle: {
                        color: '#5c94ff',
                        width: .5
                    },
                },
                splitArea: {   //分割的区域
                    show: true,
                    areaStyle: {
                        color: ['transparent', '#112651'],
                        opacity: 0.5
                    }
                },
                axisTick: {show: false},
            }],
            yAxis: [{
                type: 'value',
                nameTextStyle: {
                    color: '#b1cefc',
                    fontSize: 14
                },
                axisLine: {
                    lineStyle: {
                        color: '#5c94ff',
                        width: .5
                    }
                },
                axisLabel: {
                    show: true,
                    color: '#b1cefc',
                    fontSize: 12,
                },
                max: 100,
                interval: 20,
                splitLine: {
                    lineStyle: {
                        type: 'dashed', color: '#5c94ff', opacity: .1
                    }
                },
                axisTick: {show: false},
            }],
            series: [{
                type: 'bar',
                data: [42, 56, 48, 56, 34, 30, 28, 28],
                barWidth: 16,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                            [{offset: 0, color: '#08dfff'},
                                {offset: 1, color: '#438bfb'}]),
                        label: {
                            show: true, position: 'top', textStyle: {
                                color: '#fff', fontSize: 20, fontWeight: 'normal'
                            }
                        }
                    }
                },
            }]
        };

        //巡察干部情况2柱状图
        let barOption4 = {
            grid: {
                left: '5%',
                right: '5%',
                top: '15%',
                bottom: '6%',
                containLabel: true
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} : {c} 人"
            },
            legend: {
                orient: 'horizontal',
                x: 'center',
                y: '1%',
                data: ['正处职', '正处级', '副处职', '副处级', '科级及以下'],
                itemWidth: 12,
                itemHeight: 12,
                itemGap: 20,
                textStyle: {
                    fontSize: 14,
                    color: '#7eb8ff',
                },
            },
            xAxis: [{
                type: 'category',
                data: ['巡查一组', '巡查二组', '巡查三组', '巡查四组', '巡查五组', '巡查六组'],
                axisLabel: {
                    show: true,
                    color: '#6695d3',
                    fontSize: 12,
                },
                axisLine: {
                    lineStyle: {
                        color: '#5c94ff',
                        width: .4
                    },
                },
                splitArea: {   //分割的区域
                    show: true,
                    areaStyle: {
                        color: ['transparent', '#031436'],
                        opacity: 0.5
                    }
                },
                axisTick: {show: false},
            }],
            yAxis: [{
                type: 'value',
                nameTextStyle: {
                    color: '#b1cefc',
                    fontSize: 14
                },
                axisLine: {
                    lineStyle: {
                        color: '#5c94ff',
                        width: .2
                    }
                },
                axisLabel: {
                    show: true,
                    color: '#b1cefc',
                    fontSize: 12,
                },
                max: 8,
                interval: 1,
                splitLine: {
                    lineStyle: {
                        type: 'dashed', color: '#5c94ff', opacity: .3
                    }
                },
                axisTick: {show: false},
            }],
            series: [
                {
                    name: '正处职',
                    type: 'bar',
                    data: [1, 1, 1, 1, 1, 1],
                    barWidth: 16,
                    itemStyle: {
                        normal: {
                            color: '#DD6B66',
                            label: {
                                show: true, position: 'inside', textStyle: {
                                    color: '#fff', fontSize: 16, fontWeight: 'normal'
                                }
                            },
                        }
                    },
                    stack: '正处职',
                }, {
                    name: '正处级',
                    type: 'bar',
                    data: [1, 1, 2, 3, 2, 1],
                    barWidth: 16,
                    itemStyle: {
                        normal: {
                            color: '#4cd006',
                            label: {
                                show: true, position: 'inside', textStyle: {
                                    color: '#fff', fontSize: 16, fontWeight: 'normal'
                                }
                            },
                        }
                    },
                    stack: '正处职',
                }, {
                    name: '副处职',
                    type: 'bar',
                    data: [1, 1, 2, 1, 2, 1],
                    barWidth: 16,
                    itemStyle: {
                        normal: {
                            color: '#dfb419',
                            label: {
                                show: true, position: 'inside', textStyle: {
                                    color: '#fff', fontSize: 16, fontWeight: 'normal'
                                }
                            },
                        }
                    },
                    stack: '正处职',
                }, {
                    name: '副处级',
                    type: 'bar',
                    data: [2, 2, 1, 1, 1, 1],
                    barWidth: 16,
                    itemStyle: {
                        normal: {
                            color: '#e44036',
                            label: {
                                show: true, position: 'inside', textStyle: {
                                    color: '#fff', fontSize: 16, fontWeight: 'normal'
                                }
                            },
                        }
                    },
                    stack: '正处职',
                }, {
                    name: '科级及以下',
                    type: 'bar',
                    data: [, 2, , 1, ,],
                    barWidth: 16,
                    itemStyle: {
                        normal: {
                            color: '#0244ac',
                            label: {
                                show: true, position: 'inside', textStyle: {
                                    color: '#fff', fontSize: 16, fontWeight: 'normal'
                                }
                            },
                        }
                    },
                    stack: '正处职',
                }]
        };

        //第八轮-线索处置-涉案人员级别环形图
        let pieOption7 = {
            title: {
                text: '涉案人员级别',
                x: 'center',
                y: '2%',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                },
                subtext: '                     单位：人',
                subtextStyle: {
                    fontSize: 12,
                    color: '#6c9edd',
                }
            },
            tooltip: {
                show:false,
            },
            legend: {
                orient: 'vertical',
                x: '18%',
                y: '65%',
                data: ['局级干部', '处级干部', '科级及其他'],
                icon: 'circle',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    fontSize: 12,
                    color: '#7eb8ff',
                },
                width: '200px',
                backgroundColor: 'rgba(41, 49, 82, .4)',
                borderWidth: 1,
                borderColor: '#0e2964',
                padding: [10, 20, 10, 15],
            },
            color: ['#ffad00', '#ee152e', '#1146ba'],
            series: [{
                name: '涉案人员级别',
                type: 'pie',
                center: ['51%', '40%'],
                radius: ['30%', '68%'],
                data: [
                    {value: 112, name: '局级干部'},
                    {value: 35, name: '处级干部'},
                    {value: 75, name: '科级及其他'},
                ],
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#0d0c21',
                        labelLine: {
                            show: false
                        },
                        label: {
                            formatter: '{c}',
                            textStyle: {
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 12,
                            },
                            position: 'inside'
                        }
                    }
                },
            }]
        };

        //第八轮-线索处置-处理情况环形图
        let pieOption8 = {
            title: {
                text: '处理情况',
                x: 'center',
                y: '2%',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                },
                subtext: '                      单位：件',
                subtextStyle: {
                    fontSize: 12,
                    color: '#6c9edd',
                }
            },
            tooltip: {
                show:false,
            },
            legend: {
                orient: 'horizontal',
                x: '10%',
                y: '65%',
                data: ['初核', '立案', '了解', '谈话函询', '其他(外国摸排)', '暂存', '移送省纪委'],
                icon: 'circle',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    fontSize: 12,
                    color: '#7eb8ff',
                },
                backgroundColor: 'rgba(41, 49, 82, .4)',
                borderWidth: 1,
                borderColor: '#0e2964',
                padding: [10, 5, 10, 5],
            },
            color: ['#f7017b', '#ffad00', '#ee152e', '#28d284', '#7ca5ff', '#1146ba', '#009dd6'],
            series: [{
                name: '处理情况',
                type: 'pie',
                center: ['51%', '40%'],
                radius: ['30%', '68%'],
                data: [
                    {value: 30, name: '初核'},
                    {value: 45, name: '立案'},
                    {value: 50, name: '了解'},
                    {value: 25, name: '谈话函询'},
                    {value: 18, name: '其他(外国摸排)'},
                    {value: 20, name: '暂存'},
                    {value: 40, name: '移送省纪委'},
                ],
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#0d0c21',
                        labelLine: {
                            show: false
                        },
                        label: {
                            formatter: '{c}',
                            textStyle: {
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 12,
                            },
                            position: 'inside'
                        }
                    }
                },
            }]
        };

        //第八轮-线索处置-处理结果环形图
        let pieOption9 = {
            title: {
                text: '处理结果',
                x: 'center',
                y: '2%',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                },
                subtext: '                      单位：件',
                subtextStyle: {
                    fontSize: 12,
                    color: '#6c9edd',
                }
            },
            tooltip: {
                show:false,
            },
            legend: {
                orient: 'vertical',
                x: '10%',
                y: '65%',
                data: ['了解', '"第一种形态"了结', '党纪政务处分', '移送司法'],
                icon: 'circle',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    fontSize: 12,
                    color: '#7eb8ff',
                },
                backgroundColor: 'rgba(41, 49, 82, .4)',
                borderWidth: 1,
                borderColor: '#0e2964',
                padding: [10, 10, 10, 15],
            },
            color: ['#f7017b', '#ffad00', '#ee152e', '#28d284', '#7ca5ff', '#1146ba', '#009dd6'],
            series: [{
                name: '处理结果',
                type: 'pie',
                center: ['51%', '40%'],
                radius: ['30%', '68%'],
                data: [
                    {value: 45, name: '了解'},
                    {value: 50, name: '"第一种形态"了结'},
                    {value: 25, name: '党纪政务处分'},
                    {value: 20, name: '移送司法'},
                ],
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#0d0c21',
                        labelLine: {
                            show: false
                        },
                        label: {
                            formatter: '{c}',
                            textStyle: {
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 12,
                            },
                            position: 'inside'
                        }
                    }
                },
            }]
        };

        //第八轮-驻点期间情况-干部谈话性质饼图
        let pieOption10 = {
            title: {
                text: '干部谈话性质',
                x: 'center',
                y: '2%',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color: ['#ee152e', '#004ec4', '#ffd83c'],

            legend: [{
                x: '8%',
                y: '15%',
                data: [
                    {name: '科级及其他'},
                ],
                icon: 'circle',
                itemWidth: 8,
                itemHeight: 8,
                textStyle: {
                    color: '#7eb8ff',
                    fontSize: 14,
                },
            }, {
                x: '75%',
                y: '15%',
                data: [
                    {name: '局级干部'},
                ],
                icon: 'circle',
                itemWidth: 8,
                itemHeight: 8,
                textStyle: {
                    color: '#7eb8ff',
                    fontSize: 14,
                },
            }, {
                x: '75%',
                y: '75%',
                data: [
                    {name: '处级干部'},
                ],
                icon: 'circle',
                itemWidth: 8,
                itemHeight: 8,
                textStyle: {
                    color: '#7eb8ff',
                    fontSize: 14,
                },
            }],
            series: [{
                name: '干部谈话性质',
                type: 'pie',
                center: ['50%', '55%'],
                radius: '45%',
                data: [
                    {value: 20, name: '局级干部'},
                    {value: 30, name: '处级干部'},
                    {value: 50, name: '科级及其他'},
                ],
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#0d0c21',
                        labelLine: {
                            show: false,
                        },
                        label: {
                            show: false
                        }
                    },
                },
            }]
        };

        //第八轮-问题整改督查-违反纪律类型环形图
        let pieOption11 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color: ['#ffad00', '#ee152e', '#1fd17f', '#7ca5ff', '#1146ba', '#d21b8c', '#009bd1'],
            legend: [{
                orient: 'vertical',
                x: '3%',
                y: '5%',
                data: [
                    {value: 40, name: '政治纪律'},
                    {value: 50, name: '群众纪律'},
                ],
                icon: 'circle',
                itemWidth: 12,
                itemHeight: 12,
                itemGap: 75,
                textStyle: {
                    fontSize: 12,
                    color: '#7eb8ff',
                },
                formatter: function (d) {
                    if (d.length > 7) {
                        return d.substr(0, 7) + '\n' + d.substr(7, d.length - 7);
                    }
                    return d;
                },

            }, {
                orient: 'vertical',
                x: '75%',
                y: '5%',
                data: [
                    {value: 15, name: '组织纪律'},
                    {value: 28, name: '廉洁纪律'},
                ],
                icon: 'circle',
                itemWidth: 12,
                itemHeight: 12,
                itemGap: 75,
                textStyle: {
                    fontSize: 12,
                    color: '#7eb8ff',
                },
                formatter: function (d) {
                    if (d.length > 7) {
                        return d.substr(0, 7) + '\n' + d.substr(7, d.length - 7);
                    }
                    return d;
                },

            }, {
                x: '3%',
                y: '72%',
                data: [
                    {value: 25, name: '工作纪律'},
                    {value: 8, name: '生活纪律'},
                    {value: 35, name: '其他'},
                ],
                icon: 'circle',
                itemWidth: 12,
                itemHeight: 12,
                itemGap: 62,
                textStyle: {
                    fontSize: 12,
                    color: '#7eb8ff',
                },
                formatter: function (d) {
                    if (d.length > 7) {
                        return d.substr(0, 7) + '\n' + d.substr(7, d.length - 7);
                    }
                    return d;
                },

            }],
            series: [{
                name: '违反纪律类型',
                type: 'pie',
                center: ['51%', '40%'],
                radius: ['20%', '45%'],
                data: [
                    {value: 40, name: '政治纪律'},
                    {value: 50, name: '群众纪律'},
                    {value: 25, name: '工作纪律'},
                    {value: 8, name: '生活纪律'},
                    {value: 15, name: '组织纪律'},
                    {value: 28, name: '廉洁纪律'},
                    {value: 35, name: '其他'},
                ],
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#0d0c21',
                        labelLine: {
                            show: false
                        },
                        label: {
                            show: false,
                            formatter: '{c}',
                            textStyle: {
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 12,
                            },
                            position: 'inside'
                        }
                    }
                },
            }]
        };

        //第八轮-驻点期间情况-政治生态评价雷达图
        let radarOption1 = {
            title: {
                text: '政治生态评价',
                x: 'center',
                y: '6%',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                },
                subtext: '                                                                                            单位：分',
                subtextStyle: {
                    fontSize: 12,
                    color: '#6c9edd',
                }
            },
            radar: {
                name: {
                    textStyle: {
                        color: '#7eb8fe',
                        fontSize: 14,
                    }
                },
                center: ['50%', '60%'],
                radius: '60%',
                indicator: [
                    {name: '执行政治纪律情况', max: 100},
                    {name: '履行"两个责任"情况', max: 100},
                    {name: '工作作风情况', max: 100},
                    {name: '执行组织生活制度情况', max: 100},
                    {name: '选人用人情况', max: 100},
                    {name: '发挥领导作用情况', max: 100},
                ],
                splitArea: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(80, 120, 210, .6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(80, 120, 210, .6)'
                    },

                },
            },
            series: [{
                name: '政治生态评价',
                type: 'radar',
                data: [
                    {
                        value: [50, 32, 38, 57, 78, 95],
                        label: {
                            normal: {
                                show: true,
                                formatter(p) {
                                    return p.value;
                                },

                            }
                        }
                    },
                ],
                itemStyle: {
                    normal: {
                        color: '#7eb8fe',
                        fontSize: 12,
                        lineStyle: {
                            width: 2.5,
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 1,
                                [{offset: 0, color: 'rgba(239,178,22,1)'},
                                    {offset: .52, color: 'rgba(91,243,250,1)'},
                                    {offset: 1, color: 'rgba(1,131,252,1)'}]),
                        },
                    },

                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 1,
                            [{offset: 0, color: 'rgba(239,178,22,.5)'},
                                {offset: 1, color: 'rgba(1,131,252,.5)'}]),
                    }
                }
            }]
        };

        //驻点期间情况雷达图
        let radarOption2 = {
            title: {
                text: '政治生态评价',
                x: 'center',
                y: '1%',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#fff'
                },
                subtext: '                                                                                            单位：分',
                subtextStyle: {
                    fontSize: 12,
                    color: '#6c9edd',
                }
            },
            tooltip: {
                show: false
            },
            radar: {
                name: {
                    textStyle: {
                        color: '#7eb8fe',
                        fontSize: 14,
                    }
                },
                center: ['50%', '54%'],
                radius: '55%',
                indicator: [
                    {name: '执行政治纪律情况', max: 100},
                    {name: '履行"两个责任"情况', max: 100},
                    {name: '工作作风情况', max: 100},
                    {name: '执行组织生活制度情况', max: 100},
                    {name: '选人用人情况', max: 100},
                    {name: '发挥领导作用情况', max: 100},
                ],
                splitArea: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(80, 120, 210, .6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(80, 120, 210, .6)'
                    },

                },
            },
            series: [{
                name: '政治生态评价',
                type: 'radar',
                data: [
                    {
                        value: [50, 32, 38, 57, 78, 95],
                        label: {
                            normal: {
                                show: true,
                                formatter(p) {
                                    return p.value;
                                },

                            }
                        }
                    },
                ],
                itemStyle: {
                    normal: {
                        color: '#7eb8fe',
                        fontSize: 12,
                        lineStyle: {
                            width: 2.5,
                            color: new echarts.graphic.LinearGradient(1, 0, 0, 1,
                                [{offset: 0, color: 'rgba(239,178,22,1)'},
                                    {offset: .52, color: 'rgba(91,243,250,1)'},
                                    {offset: 1, color: 'rgba(1,131,252,1)'}]),
                        },
                    },

                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 1,
                            [{offset: 0, color: 'rgba(239,178,22,.5)'},
                                {offset: 1, color: 'rgba(1,131,252,.5)'}]),
                    }
                }
            }]
        };


        function drawChart(option, target) {
            let chart = echarts.init(target);
            chart.setOption(option);
        }

        if (document.querySelector('#chart-against-type')) {
            drawChart(barOption1, document.querySelector('#chart-against-type'));
        }

        if (document.querySelector('#chart-handle-result')) {
            if (document.body.clientWidth == 1600) {
                pieOption1.series[0].center = ['36%', '55%'];
                pieOption1.series[0].radius = ['16%', '41%'];
            }
            drawChart(pieOption1, document.querySelector('#chart-handle-result'));
        }

        if (document.querySelector('#chart-patrol-nature')) {
            if (document.body.clientWidth == 1600) {
                pieOption2.legend.x='45%';
                pieOption2.legend.y='25%';
                pieOption2.series[0].center = ['23%', '55%'];
                pieOption2.series[0].radius = ['40%', '62%'];
            }
            drawChart(pieOption2, document.querySelector('#chart-patrol-nature'));
        }

        if (document.querySelector('#chart-patrol-way')) {
            if (document.body.clientWidth == 1600) {
                pieOption3.legend.x='43%';
                pieOption3.legend.y='23%';
                pieOption3.legend.itemGap=13;
                pieOption3.legend.padding=[10, 5, 10, 5];
                pieOption3.series[0].center = ['21%', '55%'];
                pieOption3.series[0].radius = ['40%', '62%'];
            }
            drawChart(pieOption3, document.querySelector('#chart-patrol-way'));
        }

        if (document.querySelector('#chart-complete-rate')) {
            drawChart(barOption2, document.querySelector('#chart-complete-rate'));
        }

        if (document.querySelector('#chart-people-level')) {
            drawChart(pieOption4, document.querySelector('#chart-people-level'));
        }

        if (document.querySelector('#chart-handle-situation')) {
            drawChart(pieOption5, document.querySelector('#chart-handle-situation'));
        }

        if (document.querySelector('#chart-handle-result2')) {
            drawChart(pieOption6, document.querySelector('#chart-handle-result2'));
        }

        if (document.querySelector('#chart-cadre-situation')) {
            drawChart(barOption3, document.querySelector('#chart-cadre-situation'));
        }

        if (document.querySelector('#chart-cadre-situation2')) {
            if (document.body.clientWidth == 1600) {
                barOption4.legend.itemGap = 15;
            }
            drawChart(barOption4, document.querySelector('#chart-cadre-situation2'));
        }

        if (document.querySelector('#chart-8th-clue1')) {
            if (document.body.clientWidth == 1600) {
                pieOption7.legend.x = '10%';
                pieOption7.legend.y = '61%';
            }
            drawChart(pieOption7, document.querySelector('#chart-8th-clue1'));
        }

        if (document.querySelector('#chart-8th-clue2')) {
            if (document.body.clientWidth == 1600) {
                pieOption8.legend.x = '6%';
                pieOption8.legend.y = '61%';
            }
            drawChart(pieOption8, document.querySelector('#chart-8th-clue2'));
        }

        if (document.querySelector('#chart-8th-clue3')) {
            if (document.body.clientWidth == 1600) {
                pieOption9.legend.x = '3%';
                pieOption9.legend.y = '61%';
            }
            drawChart(pieOption9, document.querySelector('#chart-8th-clue3'));
        }

        if (document.querySelector('#chart-cadre-talk')) {
            if (document.body.clientWidth == 1600) {
                pieOption10.legend[0].x = '6.8%';
                pieOption10.legend[1].x = '73.8%';
                pieOption10.legend[2].x = '73.8%';
            }
            drawChart(pieOption10, document.querySelector('#chart-cadre-talk'));
        }

        if (document.querySelector('#chart-against-rule')) {
            if (document.body.clientWidth == 1600) {
                pieOption11.legend[0].x = '1.5%';
                pieOption11.legend[1].x = '73%';
                pieOption11.legend[2].x = '1.5%';
                pieOption11.legend[2].itemGap = 39;
                pieOption11.series[0].radius = ['16%', '38%'];
            }
            drawChart(pieOption11, document.querySelector('#chart-against-rule'));
        }

        if (document.querySelector('#chart-government')) {
            if (document.body.clientWidth == 1600) {
                radarOption1.radar.radius = '50%';
                radarOption1.radar.name.textStyle.fontSize = 12;
            }
            drawChart(radarOption1, document.querySelector('#chart-government'));
        }

        if (document.querySelector('#chart-point-radar')) {
            if (document.body.clientWidth == 1600) {
                radarOption2.radar.radius = '50%';
                radarOption2.radar.name.textStyle.fontSize = 12;
            }
            drawChart(radarOption2, document.querySelector('#chart-point-radar'));
        }




        //地图
        initChinaMap();

        function initChinaMap() {
            var myChart = echarts.init($('#chart-map')[0]);

            var geoCoordMap = {
                '山东': [118.857527, 35.983864],
                '江苏': [119.859923, 32.319501],
                '浙江': [119.859923, 28.919501],
                '安徽': [117.159923, 31.219501],
                '河南': [114.059923, 33.819501],
                '河北': [115.059923, 38.819501],
                '辽宁': [123.059923, 40.819501],
                '湖北': [113.059923, 30.819501],
                '湖北': [113.059923, 30.819501],
                '湖南': [112.059923, 28.219501],
                '四川': [102.559923, 30.819501],
            };
            var data = [
                {
                    name: '山东',
                    value: 221
                }, {
                    name: '江苏',
                    value: 192
                }, {
                    name: '浙江',
                    value: 180
                }, {
                    name: '安徽',
                    value: 206
                }, {
                    name: '河南',
                    value: 231
                }, {
                    name: '河北',
                    value: 260
                }, {
                    name: '辽宁',
                    value: 233
                }, {
                    name: '湖北',
                    value: 204
                }, {
                    name: '湖南',
                    value: 235
                }, {
                    name: '四川',
                    value: 251
                }];

            let clickFlag = false;
            myChart.on('click', function (params) {
                clickFlag = !clickFlag;
                window.setTimeout(function () {
                    clickFlag = false;
                }, 200);

                if (clickFlag) {
                    return;
                }
                if (params.name == '山东') {
                    let myChart = echarts.init($('#chart-map')[0]);
                    let geoCoordMap = {
                        '青岛市': [120.297527, 36.583864],
                        '潍坊市': [119.059923, 36.583864],
                        '东营市': [118.559923, 37.583864],
                        '日照市': [119.059923, 35.583864],
                        '济南': [117.009923, 36.583864],
                        '威海市': [121.959923, 37.083864],
                        '省局': [117.309923, 36.783864],
                    };
                    let data1 = [{
                        name: '青岛市',
                        value: 31
                    }, {
                        name: '潍坊市',
                        value: 32
                    }, {
                        name: '济南',
                        value: 39
                    }, {
                        name: '日照市',
                        value: 26
                    }, {
                        name: '东营市',
                        value: 29
                    }, {
                        name: '省局',
                        value: 34
                    }, {
                        name: '威海市',
                        value: 30
                    }, {
                        name: '济南市',
                        value: 30
                    }];
                    drawMap(myChart, 'shandong', getShandongJson(), geoCoordMap, data1, {zoom: 1.1, x: '15%'});

                    $('#button-return').show();
                }

            });

            drawMap(myChart, 'china', getChinaJson(), geoCoordMap, data, {zoom: 1.1, x: '15%'});
        }

        $('#button-return').on('click', function () {
            initChinaMap();
            $('#button-return').hide();
        });

        function drawMap(myChart, mapName, geoJson, geoCoordMap, data, options) {
            myChart.showLoading();
            echarts.registerMap(mapName, geoJson);
            myChart.hideLoading();

            var convertData = function (data) {
                let res = [];
                let num = Number.parseInt(data.length / 3);
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                //排序
                for (let i = 0; i < res.length - 1; i++) {
                    for (let j = 0; j < res.length - 1 - i; j++) {
                        if (res[j].value[2] > res[j + 1].value[2]) {
                            let temp = res[j].value[2];
                            res[j].value[2] = res[j + 1].value[2];
                            res[j + 1].value[2] = temp;
                        }
                    }
                }

                return {
                    total: res,
                    top: res.slice(0, num),
                    middle: res.slice(num, this.length - num),
                    last: res.slice(this.length - num)
                };
            };


            mapOption = {
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        if (params.value.length > 0) {
                            return params.name + ' : ' + params.value[2] + ' tce';
                        } else if (isNaN(params.value)) {
                            return params.name + ' : ' + 0;
                        } else if (typeof(params.value)[2] == "undefined") {
                            return params.name + ' : ' + params.value + ' tce';
                        } else {
                            return params.name + ' : ' + params.value[2] + ' tce';
                        }
                    }
                },
                geo: {
                    show: true,
                    map: mapName,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                        }
                    },
                    zoom: options.zoom,
                    x: options.x,
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#002b7f',
                            borderColor: '#00f0ff',
                            width: 3
                        },
                        emphasis: {
                            areaColor: '#00fffc',
                        }
                    }
                },
                series: [{
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data).total,
                    symbolSize: 5,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fff'
                        }
                    }
                }, {
                    type: 'map',
                    // map: 'shandong',
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#3B5077',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                }, {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin',
                    symbolSize: [50, 50],
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: 14,
                            },
                            formatter(value) {
                                return value.data.value[2]
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'green', //标志颜色
                        }
                    },
                    zlevel: 6,
                    data: convertData(data).top,
                }, {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin',
                    symbolSize: [50, 50],
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: 14,
                            },
                            formatter(value) {
                                return value.data.value[2]
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'orange', //标志颜色
                        }
                    },
                    zlevel: 6,
                    data: convertData(data).middle,
                }, {
                    name: '点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'pin',
                    symbolSize: [50, 50],
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: 14,
                            },
                            formatter(value) {
                                return value.data.value[2]
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'red', //标志颜色
                        }
                    },
                    zlevel: 6,
                    data: convertData(data).last,
                }
                ]
            };

            myChart.setOption(mapOption);
        }

    }

)();