// сам глаз и "зрачок":
var eyeParentLeft = $('.dude_eye-left_parent'),
    eyeParentRight = $('.dude_eye-right_parent'),

    eyeLeft = eyeParentLeft.find('.dude_eye-left'),
    eyeRight = eyeParentRight.find('.dude_eye-right');
// координаты центра глаза:
var cx_l = eyeParentLeft.offset().left + 50,
    cy_l = eyeParentLeft.offset().top + 526 + 50,

    cx_r = eyeParentRight.offset().left + 50,
    cy_r = eyeParentRight.offset().top + 526 + 50;
// радиус окружности вращения и др. переменные:
var r = 4,
    x_l, y_l,
    x_r, y_r,
    x2, y2,
    isEyeProcessed = false;
// вешаем обработчик события на передвежение мыши:
$('html,body').mousemove(function(e) {
    if (!isEyeProcessed) {
        isEyeProcessed = true;
// координаты курсора:
        var x2 = e.pageX, y2 = e.pageY;
// используем полученные формулы и рассчитываем координаты зрачка:
        y_l = ((r * (y2 - cy_l)) / Math.sqrt((x2 - cx_l) * (x2 - cx_l) + (y2 - cy_l) * (y2 - cy_l))) + cy_l;
        x_l = (((y_l - cy_l) * (x2 - cx_l)) / (y2 - cy_l)) + cx_l;

        y_r = ((r * (y2 - cy_r)) / Math.sqrt((x2 - cx_r) * (x2 - cx_r) + (y2 - cy_r) * (y2 - cy_r))) + cy_r;
        x_r = (((y_r - cy_r) * (x2 - cx_r)) / (y2 - cy_r)) + cx_r;
// применяем координаты:
        eyeLeft.css({
            marginTop: (y_l - cy_l) + 'px',
            marginLeft: (x_l - cx_l) * 2 + 'px'
        });
        eyeRight.css({
            marginTop: (y_r - cy_r) + 'px',
            marginLeft: (x_r - cx_r) * 2 + 'px'
        });
        isEyeProcessed = false;
    }
});