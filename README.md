jQuery Wizardry Plugin
===============
A jQuery wizard plugin that supports HTML5.

## Getting Started

**jQuery Wizardry** is simple to use wizard UI component written for **jQuery**.

Everything you need to do is:

1. Include **jQuery** and **jQuery Wizardry** in your HTML code.
2. Then select an element represents the wizard and call the `wizardry` method.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Demo</title>
        <meta charset="utf-8">
        <script src="jquery.js"></script> 
        <script src="src/jquery-wizardry.js"></script>
        <link href="jquery.steps.css" rel="stylesheet">
    </head>
    <body>
        <div id="wizard"></div>
        
        <script>
            $("#wizard").wizardry();
        </script>
        
    </body>
</html>
```

##How to add more steps:
#####This is how your section body structure inside ```<div id="wizard"></div>``` looks like:

```html
<section class="section">
            <div class="section-header">Section 1
                <a href="#" class="edit-button">edit</a>
            </div>
            <div class="section-container">

                <div class="step">
                    Step 1 Content 
                </div>
                <div class="step">
                    Step 2 Content 
                </div>
            </div>
            <div class="actionBar">
                <button class="back">Back</button>
                <button class="next">Next</button>
            </div>
</section>
```

####If you want to add more steps insert another step into the "section-container", just like that:
```html
<div class="step">
    Content
<div>
```

###Next and Back button functionality: