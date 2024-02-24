/*
 * Tank Coming Soon Template Js Settings
 * Finished by Ded Sec 05.03.2016
 */

/* ************************************************ */
/*   Table Of Content                               **
 /*                                                  **
 /*   1. Countdown                                   **
 /*   2. Bootstrap Tooltip                           **
 /*   3. Mail Subscription Form                      **
 /*   4. Contact Form                                **
 /*   5. Loading Animations                          **
 /*   6. Link Transitions                            **
 /*   7. Full Screen Background                      **
 /*                                                  **
 /* ************************************************ */

$(function() {
    "use strict";

    /* *****************
     1. Countdown
     ***************** */

    $('.countdown').downCount({
        date: '12/17/2016 16:00:00' , // Change this time
     
    }, function () {
       
    });


    /* *****************
     2. Bootstrap Tooltip
     ***************** */

    $("[data-toggle='tooltip']").tooltip();

    /* *****************
     3. Mail Subscription Form
     ***************** */

    var $form = $('#mc-form');

    $('#mc-subscribe').on('click', function(event) {
        if (event)
            event.preventDefault();
        register($form);
    });

    function register($form) {
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            cache: false,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            error: function(err) {
                $('#mc-notification').hide().html('<span class="alert wow bounceInUp">Could not connect to server. Please try again later.</span>');

            },
            success: function(data) {

                if (data.result != "success") {
                    var message = data.msg.substring(4);
                    $('#mc-notification').html('<span class="alert wow bounceInUp"><i class="fa fa-exclamation-triangle"></i>' + message + '</span>');

                } else {
                    var message = data.msg.substring(4);
                    $('#mc-notification').html('<span class="success wow bounceInUp"><i class="fa fa-envelope"></i>' + 'Awesome! We sent you a confirmation email.' + '</span>').fadeIn("slow");

                }
            }
        });
    }

    /* *****************
     4. Contact Form
     ***************** */

    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },

            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: "<i class='fa fa-exclamation-triangle'></i>Please specify your name.",
            email: {
                required: "<i class='fa fa-exclamation-triangle'></i>We need your email address to contact you.",
                email: "<i class='fa fa-exclamation-triangle'></i>Please enter a valid email address."
            },
            message: "<i class='fa fa-exclamation-triangle'></i>Please enter your message."
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "php/contact-me.php",
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor', 'default');
                        $('.successForm').fadeIn();
                    });
                },
                error: function() {
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $('.errorForm').fadeIn();
                    });
                }
            });
        }
    });

    /* *****************
     5. Loading Animations
     ***************** */

    $( window ).load(function() {
        $(".spinner").fadeOut;
        $("#preloader").delay(100).fadeOut("slow");
    });

    /* *****************
     6. Link Transitions
     ***************** */

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1100);
        return false;
    });

    /* *****************
     7. Full Screen Background
     ***************** */

$.backstretch('img/background.html'); // Change this image.

});