/*
 * Followeyes.js.
 * Created by Chiba.
 */

jQuery(document).ready(function() {
    // Eye initialization
    var eyeBall = $('.eye-ball'),
        eyePupil = eyeBall.find('.eye-pupil'),
        eyeCenterX = eyeBall.offset().left + 16,
        eyeCenterY = eyeBall.offset().top + 16,
        r = 12,                                      // gyration radius
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
                marginLeft: (pupilX - eyeCenterX) * 1 + 'px'
            });
            isProcessed = false;
        }
    });
});