module.exports = {
    line1(title, name, dataTime, dataSource, dataText) {
        /**/
        var optionT = {
            title: {
                x: 'left',
                text: title,
                textStyle: {
                    color: '#999',
                    fontSize: '12',
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑'

                }
            },
            tooltip: {
                 trigger: 'axis',
                // trigger: 'item',
                // formatter: function (params, ticket, callback) {
                //     var res = params[1] + '<br/>' + params[0] + ':';
                //     var ds;
                //     if (!dataText) {
                //         ds = dataSource;
                //     }
                //     else {
                //         ds = dataText;
                //     }

                //     res += ds[params.dataIndex]
                //     return res

                // }

            },
            calculable: true,
            grid: {
                borderWidth: 0,
                x: 35,
                x2: 20,
                y: 30,
                y2: 45
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    scale: true,

                    splitLine: false,
                    axisLine: {
                        lineStyle: {
                            color: '#ccc',
                            width: 1
                        },
                    },
                    axisLabel: {
                        rotate: 30,
                        textStyle: {
                            color: '#777'
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    data: dataTime
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: 'false',
                    splitNumber: 4,
                    axisLine: {
                        lineStyle: {
                            color: '#ccc',
                            width: 1
                        },
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [
                {
                    name: name,
                    type: 'line',
                    data: dataSource,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#a0cdfa'
                            }
                        }
                    },

                }
            ]
        };
        return optionT;
    },
    line2(title, name, dataTime, dataSource, x) {
        /**/
        var option = {
            title: {
                x: 'left',
                text: title,
                textStyle: {
                    color: '#999',
                    fontSize: '12',
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑'

                }
            },
            tooltip: {
                trigger: 'axis',
            },
            calculable: true,
            grid: {
                borderWidth: 0,
                x: x,
                x2: 20,
                y: 30,
                y2: 45
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    scale: true,

                    splitLine: false,
                    axisLine: {
                        lineStyle: {
                            color: '#ccc',
                            width: 1
                        },
                    },
                    axisLabel: {
                        rotate: 30,
                        textStyle: {
                            color: '#777'
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    data: dataTime
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: 'false',
                    splitNumber: 4,
                    axisLine: {
                        lineStyle: {
                            color: '#ccc',
                            width: 1
                        },
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [
                {
                    name: name,
                    type: 'line',
                    data: dataSource,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#a0cdfa'
                            }
                        }
                    },

                }
            ]
        };
        return option;
    },
    line3(name, dataSource) {
        // 详情页 ，流量
        let option = {
            tooltip: {
                trigger: 'axis',
                show:false,
            },
            calculable: true,
            grid: {
                borderWidth: 0,
                x: 0,
                x2: 0,
                y: 0,
                y2: 0
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    show: false,
                    data: []
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    show: false
                }
            ],
            series: [
                {
                    name: name,
                    type: 'line',
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#6daded'
                            }
                        }
                    },
                    symbol: 'none',
                    data: dataSource

                }
            ]
        }
        return option;
    },
    line4 (name, dateTime,dataSource,dataSource2) {
       
        let option = {
            tooltip : {
                trigger: 'axis'
            },
            grid: {
                y: 15,
                y2: 5,
                x:32,
                x2:10
                
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    axisLine:{
                        show: true,
                        lineStyle: {
                            color: '#a0cdfa',
                            width: 1,
                            type: 'solid'
                        }
                        
                    },
                    axisTick: {
                        lineStyle: {
                            color: '#ccc'
                        }
                    },
                    boundaryGap : false,
                    data :dateTime
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine:{
                        show: true,
                        lineStyle: {
                            color: '#a0cdfa',
                            width: 1,
                            type: 'solid'
                        }
                        
                    },
                    axisLabel : {
                        formatter: '{value}'
                    },
                    scale:true
                }
            ],
            series : [
                {
                    name:name[0],
                    type:'line',
                    data:dataSource,      
                    symbol:'none',
                    itemStyle: {
                        
                        normal: {
                            color: "#a0cdfa",
                            lineStyle: {
                                color: '#a0cdfa'
                            }
                        },
                    },
                },
                {
                    name:name[1],
                    type:'line',
                    data: dataSource2,
                    symbol:'none',
                    itemStyle: {
                        normal: {
                            color: "#A65719",
                            lineStyle: {
                                color: '#A65719'
                            }
                        }
                    },  
                }
            ]
        }
        return option;
    }

}