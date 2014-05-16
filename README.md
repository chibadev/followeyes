#Followeyes.js
This jQuery plugin allows you to easily add to your website eyes that is following your mouse.  
You can see a [demo](http://chibadev.github.io/followeyes)

##Initialization
To initialize the plugin simply paste this code inside the `<head>`:
```javascript
$(document).ready(function() {
    $().followeyes();
});
```
##Options
Currently available to you 3 options:

- **eyeBall:** set the eye's className *(`.eye-ball` default)*
- **eyePupil:** set the pupils's className *(`.eye-pupil` default)*
- **radius:** set the radius of eye's rotation *(`10` default)*
    
#####Example:
```javascript
$(document).ready(function() {
    $().followeyes({
        eyeBall: 'eye-ball',
        eyePupil: 'eye-pupil',
        radius: 12
    });
});
```


**That's it!**

*Regards, Ivan Ryabov*  
*[ChibaDev](http://chibadev.github.io)*
