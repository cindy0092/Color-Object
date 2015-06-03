function rgb(red, green, blue){ //convert RGB to hex
    var hex;
    if(red >= 0 && red <= 255){
        hex = (Math.floor(red/16)).toString(16) + (red%16).toString(16)
    }
    if(green >= 0 && green <= 255){
        hex += (Math.floor(green/16)).toString(16) + (green%16).toString(16)
    }
    if(blue >= 0 && blue <= 255){
        hex += (Math.floor(blue/16)).toString(16) + (blue%16).toString(16)
    }
    return "#"+hex.toUpperCase();
}
function hex(str){
    var rgb = {};
    str = str.toString().split("");
    if(str.length === 6){
        rgb.red = parseInt(str[0]+str[1], 16);
        rgb.green = parseInt(str[2] + str[3], 16);
        rgb.blue = parseInt(str[4] + str[5], 16);
        return rgb;
    }
}















