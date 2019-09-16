// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

import $ from "jquery";
import AOS from "aos";

$(document).ready(function() {
    AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true
    }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$("a.smooth-scroll")
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "")
    &&
    location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            let target = $(this.hash);
            target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $("html, body").animate({
                    scrollTop: target.offset().top,
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    const $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
        }
    });