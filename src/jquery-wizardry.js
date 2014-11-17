/*
 * jQuery Wizardry
 * https://github.com/magnifito/wizardry
 *
 * Authors: Daniel Dudin and Kiril Kirov
 * Licensed under the MIT license.
 */
 
(function($, window, document, undefined) {

    var pluginName = "wizardry",
        defaults = {
            //assign empty callbacks if none are setup while calling the plugin
            onNextStep: function(){},
            onNextSection: function(){},
            onWizardEnd: function(){}
        };

    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init(element);
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function(element) {
            
            var $plugin = this;
            var $section = $(".section");
            
            $($section).find(".section-header").first().addClass("active");
            $($section).find(".section-container").first().addClass("active");
            $($section).find(".step").first().addClass("active");
            $($section).find(".actionBar").first().addClass("active");
            
            $(element).find(".next").click(function() {
                /**  
                 * @desc function is called when the next button is clicked
                 * then we set the current activeStep, activeSection and nextStep to keep track of the steps
                 * if there is no next step in the current section, we move to the next section
                 * finally, if we get to the last section and step, we make the next button disabled.
                 */
                // setting variables
                var activeStep = $(".step.active"); // active step
                var nextStep = activeStep.next(".step"); // next active step
                var activeSection = $($section).find(".section-container.active");
                var activeHeader = $($section).find(".section-header.active");

                // check if last step has been reached
                if (nextStep.get(0) === undefined) {
                    
                    //look for next section
                    var nextActiveHeader = activeSection.parent().next().find(".section-header");
                    var nextSection = activeSection.parent().next().find(".section-container");
                    
                    $plugin.settings.onNextSection.call(this);
                    
                    //check if this is last section
                    if(nextSection.get(0) === undefined) {
                        
                        $plugin.settings.onWizardEnd.call(this);
                    }
                    else { //there are more sections -> select the next one following
                        
                        activeStep.removeClass("active"); // remove current step active class
                        activeSection.removeClass("active"); // remove current section active class
                        activeHeader.removeClass("active"); // remove current section-header active class
                        
                        nextActiveHeader.addClass("active"); // add active class to next section-header
                        nextSection.addClass("active"); // add active class to next section-header
                        nextStep = $(".step:first", nextSection).addClass("active"); // find the first step of the next section and make it visible

                    }
                }
                else {
                    //there are more steps in this section, go to next step
                    activeStep.removeClass('active');
                    nextStep.addClass('active');
                    
                    
                    // call the callback and apply the scope:
                    $plugin.settings.onNextStep.call(this);
                }

            });

            $(element).find(".back").click(function() {

                /**  
                 * @desc function is called when the back button is clicked
                 * then we set the current activeStep, prevStep and activeSection to keep track of the steps
                 * if there is no previous step in the current section, we move to the previous one
                 * finally, if we get to the first section and step, we make the back button disabled.
                 */

                // setting variables to get the active step and container

                var activeStep = $(".step.active"); // active step
                var prevStep = activeStep.prev(".step"); // previous active step
                var activeSection = $($section).find(".section-container.active"); // current active section
                var activeHeader = $($section).find(".section-header.active"); // current active header

                //check if we have a previous step,if true we are on last previous step and must check for previous section

                if (prevStep.get(0) === undefined) {
                    
                    var prevSection = activeSection.parent().prev().find(".section-container");
                    var prevHeader = activeSection.parent().prev().find(".section-header");
                    //if no previous step then go to previous container
                    if (prevSection.get(0) === undefined) {
                        
                    }
                    else { // there are more previous sections, go to the previous one

                        activeStep.removeClass("active"); //remove active step
                        activeSection.removeClass("active"); //remove active section
                        activeHeader.removeClass("active"); // remove active section-header


                        prevSection.addClass("active");
                        prevHeader.addClass("active");
                        prevStep = $(".step:last", prevSection).addClass("active");

                    }
                }
                else { // there are more steps in this section, go to previous step
                    activeStep.removeClass("active");
                    prevStep.addClass("active");
                }
            });

            //edit-button to move trough sections and edit previous information
            $(element).find(".edit-button").click(function() {

            });

        },
        yourOtherFunction: function() {
            // some logic
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn["wizardry"] = function(options) {
        this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });

        // chain jQuery functions
        return this;
    };

})(jQuery, window, document);