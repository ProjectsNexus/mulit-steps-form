//select form flide
/*    const   form = document.getElementById('msform'),
            ClientFristName = document.getElementById('f_name'),
            ClientSecondName = document.getElementById('l_name'),
            ClientEmail = document.getElementById('Email'),
            ClientPhone = document.getElementById('phone'),
            Clientaddress1 = document.getElementById('ardd11'),
            Clientaddress2 = document.getElementById('ardd12'),
            ClientCountry = document.getElementById('country'),
            ClientState = document.getElementById('state'),
            ClientServiceDept = document.getElementById('department'),
            ClientService = document.getElementById('service'),
            ClientPerItemPrice = document.getElementById('per_item_price'),
            CreditCardOwner = document.getElementById('cardOwner'),
            Clientcvv = document.getElementById('cvv'),
            CreditCardNumber = document.getElementById('cardNumber'),
            printsummary = document.getElementById('summary')
    //* Form validation
    */
    (function($) {
        "use strict";  

        //* Form js
        function verificationForm(){
            //jQuery time
            var current_fs, next_fs, previous_fs; //fieldsets
            var left, opacity, scale; //fieldset properties which we will animate
            var animating; //flag to prevent quick multi-click glitches
            
            var error = false;

            //first name
            $('#f_name').keyup(function(){
                var fname = $('#f_name').val();
                if (fname = "") {
                    $(".error_fname").text( "Please insert a valid First Name.");
                    $("#f_name").addClass('invalid');
                    error = true;
                } else {
                    $(".error_fname").text( "");
                    $("#f_name").removeClass('invalid');
                    error = false;
                }
                if (fname == isNaN) {
                    $(".error_fname").text( "Numbers are not allowed.");
                    $("#f_name").addClass('invalid');
                    error = true;
                } else {
                    $(".error_fname").text( "");
                    $("#f_name").removeClass('invalid');
                    error = false;
                }
            });

            //lasts name
            $('#l_name').keyup(function(){
                var lname = $('#l_name').val();
                if (lname = "") {
                    $(".error_lname").text( "Please insert a valid Last Name.");
                    $("#l_name").addClass('invalid');
                    error = true;
                } else {
                    $(".error_lname").text( "");
                    $("#l_name").removeClass('invalid');
                    error = false;
                }
                if (lname == isNaN) {
                    $(".error_lname").text( "Numbers are not allowed.");
                    $("#l_name").addClass('invalid');
                    error = true;
                } else {
                    $(".error_lname").text( "");
                    $("#l_name").removeClass('invalid');
                    error = false;
                }
            });

            //Email
            $('#email').keyup(function(){
                var email = $('#email').val();
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                var emailext = /(@gmail.com)|(@hot.com)|(@outlook.com)|(@yohoo.com)/g;
                if (email = "") {
                    $(".error_email").text ("Please insert a valid email address.");
                    $("#email").addClass('invalid');
                    error = true;
                } else {
                    $(".error_email").text( "");
                    $("#email").removeClass('invalid');
                    error = false;
                }
                if (!emailReg.test($("#email").val())) {
                    $("#error_email").text('Please insert a valid email address.');
                    error = true;
                } else {
                    $(".error_email").text( "");
                    $("#email").removeClass('invalid');
                    error = false;
                }
                if (!emailext.test($("#email").val())) {
                    $("#error_email").text('Only gmail.com, outlook.com, yohoo.com and hot.com are allowed');
                    $("#email").removeClass('invalid');
                    error = true;
                } else {
                    $(".error_email").text( "");
                    $("#email").removeClass('invalid');
                    error = false;
                }
            });

            //phone
            $('#phone').keyup(function(){
                var phone = $('#phone').val();
                var phoneReg = (/^[0-9]+$/);
                if (phone = "") {
                    $(".error_phone").text ("Please insert a valid Phone Number");
                    $("#phone").addClass('invalid');
                    error = true;
                } else {
                    $(".error_phone").text( "");
                    $("#phone").removeClass('invalid');
                     error = false;
                }
                if (!phoneReg.test($("#phone").val())) {
                    $("#error_phone").text ("Please insert a valid Phone Number.");
                    $("#phone").addClass('invalid');
                    error = true;
                } else {
                    $(".error_phone").text( "");
                    $("#email").removeClass('invalid');
                    error = false;
                } 
                if ($('#phone').val().length > 11) {
                    $("#phone").attr ('readonly', true);
                    $("#phone").addClass('invalid');
                    error = true;
                } else {
                    $("#phone").attr ('readonly', false);
                    $("#phone").removeClass('invalid');
                    error = false;
                }
            });

            //address
            $('#ardd1').keyup(function(){
                var address = $('#ardd1').val();
                if (address = "") {
                    $(".error_address").text ("Please insert a valid Address.");
                    $("#ardd1").addClass('invalid');
                    error = true;
                } else {
                    $(".error_address").text( "");
                    $("#ardd1").removeClass('invalid');
                    error = false;
                }
            });
            // Department
            $('#department').change(function(){
                var department = $('#department').val();
                if (department = "") {
                    $(".error_dept").text ("Please Select Department.");
                    $("#department").addClass('invalid');
                    error = true;
                } else {
                    $(".error_dept").text( "");
                    $("#department").removeClass('invalid');
                    error = false;
                }
            });

            // Services
            $('#service').change(function(){
                var Service = $('#service').val();
                if (Service = "") {
                    description
                } else {
                    $(".error_service").text( "");
                    $("#service").removeClass('invalid');
                    error = false;
                }
            });

            // file 
             function filevalidation() {
                var fileinput = document.querySelector('#rough_idea');
                var filepath = fileinput.value;
                var error = document.querySelector('.error_file');
                //allowed extenstion
                var allowedEctenstion = /(\.pdf|\.jpg|\.png|\.gif|\.doc|\.docx|\.ppt|\.mp4\mov|\.html|\.css|\.js|\.php|\.xls|\.xlsx|\.txt)$/i;

                if (!allowedEctenstion.exec(filepath)) {
                    alert('yes');
                    error.innerHTML = "File is not valid for uploading";
                    fileinput.addClass('invalid');
                    error = false;
                }else{
                    error.innerHTML =  "File is not valid for uploading";
                    fileinput.removeClass('invalid');
                    error = false;
                }
             }

             // idea description
             $('#description').keyup(function () {
                var description = $('#description').val();
                if (description == "") {
                    $('.error_description').text ("Please insert your idea discription.");
                    $('#description').addClass('invalid');
                    error = true;
                }else{
                    $('.error_description').text ("");
                    $('#description').removeClass('invalid');
                    error = false;
                } 
                if (description.length > 1000 ) {
                    $('.error_description').text ("Please insert only 1000 Characters.");
                    $('#description').addClass('invalid');
                    error = true;
                }else{
                    $('.error_description').text ("");
                    $('#description').removeClass('invalid');
                    error = false;
                }
             });

        $('#rough_idea').ready(function () {
            $('#rough_idea').validate({
                rules:{
                    uploadedfile:{
                        requried: false,
                        extenstion: ".pdf|.jpg|.png|.gif|.doc|.docx|.ppt|.mp4|.mov|.html|.css|.js|.php|.xls|.xlsx|.txt",
                    }
                },
                error:{
                    uploadedfile:{
                        extenstion: "File is not valid for uploading."
                    }
                }
            })
        });

        //card owner
        $('#owner').keyup(function () {
            var cardowner = $('#owner').val();
            if (cardowner == '') {
                $('.error_owner').text ("Please insert Card Owner Name.");
                $('#owner').addClass('invalid');
                error = true;
            }else{
                $('.error_owner').text ("");
                $('#owner').removeClass('invalid');
                error = false;
            }
            if (cardowner == isNaN) {
                $('.error_owner').text ("Please insert a valid Card Owner Name.");
                $('#owner').addClass('invalid');
                error = true;
            } else {
                $('.error_owner').text ("");
                $('#owner').removeClass('invalid');
                error = false;
            }
        });

        //Cvv
        $('#cvv').keyup(function () {
            var cvv = $('#cvv').val();
            if (cvv == '') {
                $('.error_cvv').text ("Please insert card CVV Number");
                $('#cvv').addClass('invalid');
                error = true;
            }else{
                $('.error_cvv').text ("");
                $('#cvv').removeClass('invalid');
                error = false;
            }
            if (!cvv == isNaN) {
                $('.error_cvv').attr ('readOnly' , true);
                $('#cvv').addClass('invalid');
                error = true;
            } else {
                $('.error_cvv').attr ('readOnly' , false);
                $('#cvv').removeClass('invalid');
                error = false;
            }
            if (cvv.length >= 4 ) {
                $('.error_cvv').attr ('readOnly' , false);
                $('#cvv').addClass('invalid');
                error = true;
            } else {
                $('.error_cvv').attr ('readOnly' , true);
                $('#cvv').removeClass('invalid');
                error = false;
            }
        });

        //card number
        $('#cardNumber').keyup(function () {
            var carnumber = $('#cardNumber').val();
            if (carnumber == '') {
                $('.error_cardNumber').text ("Please insert card CVV Number");
                $('#cardNumber').addClass('invalid');
                error = true;
            }else{
                $('.error_cardnumber').text ("");
                $('#cardNumber').removeClass('invalid');
                error = false;
            }
            if (!carnumber == isNaN) {
                $('.error_cardnumber').attr ('readOnly' , true);
                $('#cardNumber').addClass('invalid');
                error = true;
            } else {
                $('.error_cardnumber').attr ('readOnly' , false);
                $('#cardNumber').removeClass('invalid');
                error = false;
            }
            if (carnumber.length >= 4 ) {
                $('.error_cardnumber').attr ('readOnly' , false);
                $('#cardNumber').addClass('invalid');
                error = true;
            } else {
                $('.error_cardnumber').attr ('readOnly' , true);
                $('#cardNumber').removeClass('invalid');
                error = false;
            }
        });

        //Expiration date
        $('#exp').change(function () {
            var cardowner = $('#exp').val();
            if (cardowner == '') {
                $('.error_exp').text ("Please select card Expiration date");
                $('#exp').addClass('invalid');
                error = true;
            }else{
                $('.error_exp').text ("");
                $('#exp').removeClass('invalid');
                error = false;
            }
        });

         //first step validation
       $(".next_fs").click(function () {
        //form validation
            //first name validation
                if ($('#f_name').val() == '') {
                    $(".error_fname").text( "Please insert a valid First Name.");
                    $("#f_name").addClass('invalid');
                    error = true;
                }else{
                    if ($('#f_name').val() == isNaN) {
                        $(".error_fname").text( "Numbers are not allowed.");
                        $("#f_name").addClass('invalid');
                        error = true;
                    }
                }
            //last name validation
                if ($('#l_name').val() == '') {
                    $(".error_lname").text ("Please insert a valid last Name.");
                    $("#l_name").addClass('invalid');
                    error = true;
                }else{
                    if ($('#f_name').val() == isNaN) {
                        $(".error_fname").text( "Numbers are not allowed.");
                        $("#f_name").addClass('invalid');
                        error = true;
                    }
                }
            //E-mail validation
                if ($('#email').val() == '') {
                    $(".error_email").text ("Please insert a valid email address.");
                    $("#email").addClass('invalid');
                    error = true;
                }else{
                    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    if (!emailReg.test($("#email").val())) {
                        $("#error_email").text('Please insert a valid email address.');
                        error = true;
                    }
                    var emailext = /(@gmail.com)|(@hot.com)|(@outlook.com)|(@yohoo.com)/g;
                    if (!emailext.test($("#email").val())) {
                        
                        $("#error_email").text('Only gmail.com, outlook.com, yohoo.com and hot.com are allowed');
                        error = true;
                    }
                }

            //Phone Number validation
                if ($('#phone').val() == '') {
                    $(".error_phone").text ("Please insert a valid Phone Number");
                    $("#phone").addClass('invalid');
                    error = true;
                }else{
                    var phoneReg = (/^[0-9]+$/);
                    if (!phoneReg.test($("#phone").val())) {
                        $("#error_phone").text('Please insert a valid Phone Number.');
                        error = true;
                    }if ($('#phone').val().length < 10) {
                        $(".error_phone").text ("Please insert a valid Phone Number");
                        $("#phone").addClass('invalid');
                        error = true;
                    }
                }

            //address validation
                if ($('#ardd1').val() == '') {
                    $(".error_address").text ("Please insert a valid Address.");
                    $("#ardd1").addClass('invalid');
                    error = true;
                }
          //if not any error  
        if (!error) {
                if (animating) return false;
                animating = true;
    
                current_fs = $(this).parent();
                next_fs = $(this).parent().next();
    
                //activate next step on progressbar using the index of next_fs
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
                //show the next fieldset
                next_fs.show();
                //hide the current fieldset with style
                current_fs.animate({
                    opacity: 0
                }, {
                    step: function (now, mx) {
                        //as the opacity of current_fs reduces to 0 - stored in "now"
                        //1. scale current_fs down to 80%
                        scale = 1 - (1 - now) * 0.2;
                        //2. bring next_fs from the right(50%)
                        left = (now * 50) + "%";
                        //3. increase opacity of next_fs to 1 as it moves in
                        opacity = 1 - now;
                        current_fs.css({
                            'transform': 'scale(' + scale + ')',
                            'position': 'absolute'
                        });
                        next_fs.css({
                            'left': left,
                            'opacity': opacity
                        });
                    },
                    duration: 800,
                    complete: function () {
                        current_fs.hide();
                        animating = false;
                    },
                    //this comes from the custom easing plugin
                    easing: 'easeInOutBack'
                });
                
                }
            });

    //Second Step validation
        $(".next_ss").click(function () {
            
            // Department
            if ($('#department').val() == "") {
                $(".error_dept").text ("Please Select Department.");
                $("#department").addClass('invalid');
                error = true;
            }
            // Services
            if ($('#service').val() == "") {
                $(".error_service").text ("Please Select Service.");
                $("#service").addClass('invalid');
                error = true;
            }
            // idea description
            if ($('#description').val() == "") {
                $(".error_description").text ('Please insert Your project discription.');
                $("#description").addClass('invalid');
                error = true;
            } else {
                var discription = $('#description').val();
                if (discription.length > 150) {
                    $(".error_description").text ('Please enter only 150 characters.');
                    $("#description").addClass('invalid');
                    error = true;
                }
            }

        //if not any error
        if (!error) {
            if (animating) return false;
                animating = true;
    
                current_fs = $(this).parent();
                next_fs = $(this).parent().next();
    
                //activate next step on progressbar using the index of next_fs
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
                //show the next fieldset
                next_fs.show();
                //hide the current fieldset with style
                current_fs.animate({
                    opacity: 0
                }, {
                    step: function (now, mx) {
                        //as the opacity of current_fs reduces to 0 - stored in "now"
                        //1. scale current_fs down to 80%
                        scale = 1 - (1 - now) * 0.2;
                        //2. bring next_fs from the right(50%)
                        left = (now * 50) + "%";
                        //3. increase opacity of next_fs to 1 as it moves in
                        opacity = 1 - now;
                        current_fs.css({
                            'transform': 'scale(' + scale + ')',
                            'position': 'absolute'
                        });
                        next_fs.css({
                            'left': left,
                            'opacity': opacity
                        });
                    },
                    duration: 800,
                    complete: function () {
                        current_fs.hide();
                        animating = false;
                    },
                    //this comes from the custom easing plugin
                    easing: 'easeInOutBack'
                });
        }
    });

    //Third Step validation
    $(".next_ts").click(function () {
            
        // card Owner
        if ($('#owner').val() == "") {
            $(".error_owner").text ('Please insert Card Owner Name."');
            $("#description").addClass('invalid');
            error = true;
        }
        // Cvv Number
        if ($('#cvv').val() == "") {
            $('.error_cvv').text ("Please insert card CVV Number");
            $('#cvv').addClass('invalid');
            error = true;
        }
        // Card Number
        if ($('#cardNumber').val() == "") {
            $('.error_cardnumber').text ("Please insert card CVV Number");
            $('#cardNumber').addClass('invalid');
            error = true;
        }

        // Expiration date
        if ($('#exp').val() == '') {
            $('.error_exp').text ("Please select card Expiration date");
            $('#exp').addClass('invalid');
            error = true;
        }
        
    //if not any error
    if (!error) {
        if (animating) return false;
            animating = true;

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50) + "%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')',
                        'position': 'absolute'
                    });
                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function () {
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
    }
});
            //previous button
            $(".previous").click(function () {
                if (animating) return false;
                animating = true;
    
                current_fs = $(this).parent();
                previous_fs = $(this).parent().prev();
    
                //de-activate current step on progressbar
                $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
                //show the previous fieldset
                previous_fs.show();
                //hide the current fieldset with style
                current_fs.animate({
                    opacity: 0
                }, {
                    step: function (now, mx) {
                        //as the opacity of current_fs reduces to 0 - stored in "now"
                        //1. scale previous_fs from 80% to 100%
                        scale = 0.8 + (1 - now) * 0.2;
                        //2. take current_fs to the right(50%) - from 0%
                        left = ((1 - now) * 50) + "%";
                        //3. increase opacity of previous_fs to 1 as it moves in
                        opacity = 1 - now;
                        current_fs.css({
                            'left': left
                        });
                        previous_fs.css({
                            'transform': 'scale(' + scale + ')',
                            'opacity': opacity
                        });
                    },
                    duration: 800,
                    complete: function () {
                        current_fs.hide();
                        animating = false;
                    },
                    //this comes from the custom easing plugin
                    easing: 'easeInOutBack'
                });
            });
    
            $(".submit").click(function () {
                return false;
            })
        }; 
        
        /*Function Calls*/  
        verificationForm ();
    })(jQuery);