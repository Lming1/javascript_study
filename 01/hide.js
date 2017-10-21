/**
 * Created by iminhyeok on 2017. 10. 21..
 */

function hide(e, reflow) {
    if (reflow) {
        e.style.display = "none"
    }
    else {
        e.style.visibility = "hidden";
    }

}



function highlight(e) {
    if(!e.className) e.className = "hilite";
    else e.className += " hilite";
}