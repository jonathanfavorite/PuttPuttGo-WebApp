import RGBModel from "../models/RGBModel";

function isColorDark(rgb: RGBModel) {
    // Variables for red, green, blue values
    var r, g, b, hsp;

    r = rgb.r;
    g = rgb.g;
    b = rgb.b;

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
        return true;
    } else {
        return false;
    }
}

export {isColorDark};
