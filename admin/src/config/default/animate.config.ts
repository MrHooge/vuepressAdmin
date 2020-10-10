const directS = ["left", "right"];
const direct1 = ["left", "right", "down", "up"];
const direct1B = ["downBig", "upBig", "leftBig", "rightBig"];
const direct2 = ["topLeft", "bottomRight", "topRight", "bottomLeft"];
const direct3 = ["downLeft", "upRight", "downRight", "upLeft"];

// animate.css 配置
export default {
  preset: [
    //预设动画配置
    { name: "back", alias: "渐近", directions: direct1 },
    { name: "bounce", alias: "弹跳", directions: direct1.concat("default") },
    {
      name: "fade",
      alias: "淡化",
      directions: direct1
        .concat(direct1B)
        .concat(direct2)
        .concat("default")
    },
    { name: "flip", alias: "翻转", directions: ["x", "y"] },
    { name: "lightSpeed", alias: "光速", directions: directS },
    { name: "rotate", alias: "旋转", directions: direct3.concat("default") },
    { name: "roll", alias: "翻滚", directions: ["default"] },
    { name: "zoom", alias: "缩放", directions: direct1.concat("default") },
    { name: "slide", alias: "滑动", directions: direct1 }
  ]
};
