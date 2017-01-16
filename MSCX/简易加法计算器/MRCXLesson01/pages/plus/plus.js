var a
var b

Page({
    // 页面数据
    data: {
        result: ""
    },
    // 加法运算，绑定到按钮点击事件
    plus: function(){
        // 将字符串转换为数值
        var c = parseInt(a) + parseInt(b);
        console.log("a + b = " + c);
        // 赋值
        this.setData({
            result: c
        })
    },
    // 获取a的值值，存到全局变量中
    getA: function(event){
        a = event.detail.value;
        console.log("a = " + a);
    },
    getB: function(event){
        b = event.detail.value;
    }
})