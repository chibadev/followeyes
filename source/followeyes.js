/*
 * Followeyes.js.
 * Created by Ivan "Chiba" Ryabov.
 *
 */


(function($) {
    $.fn.followeyes = function(params) {
        // Define
        var eyeBall,
            eyePupil,
            eyeCenterX,
            eyeCenterY,
            eyeType,
            a_EyeTypes = ['circle', 'ellipse'],
            pupilX, pupilY,
            cursorX, cursorY,
            r, isProcessed,
            $eyes = {},
            i = 0, n = 0;

        // Eyes initialization
        if (!params['eyeBall'])
            eyeBall = $('.eye-ball');
        else
            eyeBall = $('.' + params['eyeBall']);

        if (!params['eyePupil'])
            eyePupil = eyeBall.find('.eye-pupil');
        else
            eyePupil = eyeBall.find('.' + params['eyePupil']);

        if (!params['eyeType'] || !jQuery.inArray(params['eyeType'], a_EyeTypes))
            eyeType = 1
        else {
            switch (params['eyeType']) {
                case 'circle':
                    eyeType = 1;
                    break;
                case 'ellipse':
                    eyeType = 2;
                    break;
            }
        }

        if (!params['radius'])
            r = 10;
        else
            r = params['radius'];

        isProcessed = false;

        // Obtain the coordinates of the centers of all eyes
        eyeBall.each(function() {
            i++;
            eyeCenterX = $(this).offset().left + ($(this).width() / 2);
            eyeCenterY = $(this).offset().top + ($(this).height() / 2);
            $eyes[i] = {
                eyeCenterX: eyeCenterX,
                eyeCenterY: eyeCenterY,
            }
        });

        // Rolling eyes when moving the mouse
        $(document).on('mousemove', 'html,body', function(event) {
            if (!isProcessed) {
                isProcessed = true;
                
                n = 1;
                eyePupil.each(function() {
                    cursorX = event.pageX
                    cursorY = event.pageY;

                    pupilY = ((r * (cursorY - $eyes[n].eyeCenterY)) / Math.sqrt((cursorX - $eyes[n].eyeCenterX) * (cursorX - $eyes[n].eyeCenterX) + (cursorY - $eyes[n].eyeCenterY) * (cursorY - $eyes[n].eyeCenterY))) + $eyes[n].eyeCenterY;
                    pupilX = (((pupilY - $eyes[n].eyeCenterY) * (cursorX - $eyes[n].eyeCenterX)) / (cursorY - $eyes[n].eyeCenterY)) + $eyes[n].eyeCenterX;

                    $(this).css({
                        marginTop: (pupilY - $eyes[n].eyeCenterY) + 'px',
                        marginLeft: (pupilX - $eyes[n].eyeCenterX) * eyeType + 'px'
                    });
                    n++;
                }); 

                isProcessed = false;
            }
        });
    };
}) (jQuery);