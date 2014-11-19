jQuery Wizardry Plugin
===============
A simple jQuery wizard plugin.

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

##Example use:
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

##If you want to add more steps insert another step into the "section-container", just like that:
```html
<div class="step">
    Content
<div>
```

##Next and Back button functionality:
#####Functions are called when the buttons are clicked, before that ,we assign the first section and step to active, if there is no next step in the current section, we move to the next section.

##Additional options:
```html
$("#wizard").wizardry({
    onNextStep: function() {Do something on each step},
    onNextSection: function() {Do something on next section},
    onWizardEnd: function() {Do something on wizard end},
});
```



     
