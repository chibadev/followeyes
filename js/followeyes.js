/*
 * Followeyes.js.
 * Created by Chiba.
 */

jQuery(document).ready(function() {
    // Eye initialization
    var eyeBall = $('.eye-ball'),
        eyePupil = eyeBall.find('.eye-pupil'),
        eyeCenterX = eyeBall.offset().left + 50,
        eyeCenterY = eyeBall.offset().top + 50,
        r = 15,                                      // gyration radius
        pupilX, pupilY,                             // pupil coordinates
        cursorX, cursorY,                           // cursor coordinates
        isProcessed = false;

    $('html,body').mousemove(function(event) {
        if (!isProcessed) {
            isProcessed = true;

            cursorX = event.pageX
            cursorY = event.pageY;

            pupilY = ((r * (cursorY - eyeCenterY)) / Math.sqrt((cursorX - eyeCenterX) * (cursorX - eyeCenterX) + (cursorY - eyeCenterY) * (cursorY - eyeCenterY))) + eyeCenterY;
            pupilX = (((pupilY - eyeCenterY) * (cursorX - eyeCenterX)) / (cursorY - eyeCenterY)) + eyeCenterX;

            eyePupil.css({
                marginTop: (pupilY - eyeCenterY) + 'px',
                marginLeft: (pupilX - eyeCenterX) * 2 + 'px'
            });
            isProcessed = false;
        }
    });
});