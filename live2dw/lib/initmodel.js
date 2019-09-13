L2Dwidget.init({
    "pluginRootPath":"live2dw/",
    "pluginJsPath":"lib/",
    "pluginModelPath":"assets/",
    "tagMode":false,
    "debug":false,
    "model": {
        //jsonpath控制显示那个小萝莉模型，下面这个就是我觉得最可爱的小萝莉模型
        jsonPath: "live2dw/assets/shizuku.model.json",
        "scale": 1
    },
    "display": {
        "position": "right",
        "width": 130,  //小萝莉的宽度
        "height": 260, //小萝莉的高度
        "hOffset": 0,
        "vOffset": 50
    },
    "dialog":{
        "enable":true,
        "hitokoto":true
    },
    "mobile": {
        "show": true,
        "scale": 1
    },
    "react": {
        "opacityDefault": 0.7,
        "opacityOnHover": 0.2
    },
    "log":false,
});
