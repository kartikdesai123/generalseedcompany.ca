var Login = function () {
    var handleSignup = function () {

        var form = $('.signup-form');
        var rules = {
            fname: { required: true },
            lname: { required: true },
            username: { required: true },
            email: { email: true, required: true },
            password: { required: true },
            repassword: { required: true, equalTo: "#register_password" },
            phone: { required: true, number: true, maxlength: 10 },
            dob: { required: true },
            address: { required: true },
            tnc: { required: true }
        };
        handleFormValidate(form, rules, function (form) {
            handleAjaxFormSubmit(form);
            return false;
        });
        $('.signup-form').keypress(function (e) {
            e.stopImmediatePropagation();
            if (e.which == 13) {
                if ($('.signup-form').validate().form()) {
                    $('.signup-form').submit();
                }
                return false;
            }
        });
    }


    var handleLogin = function () {

        $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                username: { required: true },
                password: { required: true },
                remember: { required: false }
            },
            messages: {
                username: {
                    required: "Username is required."
                },
                password: {
                    required: "Password is required."
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit   
                $('.alert-danger', $('.login-form')).show();
            },
            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },
            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },
            submitHandler: function (form) {
                var username = $("#user").val();
                var password = $("#pass").val();
                var remember = $('#remember').is(':checked');
                var data = $(form).serialize();
                $.ajax({
                    type: "post",
                    url: baseurl + "account/login",
                    data: { username: username, password: password, remember: remember },
                    success: function (response) {
                        output = JSON.parse(response);
                        if (output.status == 'success') {
                            $('.alert-danger', $('.login-form')).hide();
                            $('.alert-success').children('span').html(output.message);
                            $('.alert-success', $('.login-form')).show();
                            location.href = output.redirect;
                        } else if (output.status == 'error') {
                            $('.alert-success').children('span').html(output.message);
                            $('.alert-danger', $('.login-form')).show();
                            $('.alert-success', $('.login-form')).hide();
                        } 
                    }
                });
            }
        });

        $('.login-form').keypress(function (e) {
            e.stopImmediatePropagation();
            if (e.which == 13) {
                if ($('.login-form').validate().form()) {
                    $('.login-form').submit();
                }
                return false;
            }
        });
    }

    var handleForgetPassword = function () {
        $('.forget-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                email: {
                    required: "Email is required."
                }
            },
            invalidHandler: function (event, validator) { //display error alert on form submit   

            },
            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label.closest('.form-group').removeClass('has-error');
                label.remove();
            },
            errorPlacement: function (error, element) {
                error.insertAfter(element.closest('.input-icon'));
            },
            submitHandler: function () {
                var forgetemail = $('#forgetemail').val();
                $.ajax({
                    type: "POST",
                    url: baseurl + "account/forgot_password",
                    data: { "forgetemail": forgetemail },
                    success: function (response) {
                        if (response == 'success') {
                            $('.alert-danger', $('.forget-form')).hide();
                            $('.alert-success').children('span').html('Password Sent To your Email.');
                            $('.alert-success', $('.forget-form')).show();
                            $('.login-form').show();
//                            location.href = baseurl;
                        }
                        else {
                            $('.alert-danger').children('span').html('Invalid Email address.');
                            $('.alert-danger', $('.forget-form')).show();
                            $('.alert-success', $('.forget-form')).hide();
                        }
                    }
                });
            }
        });

        $('.forget-form input').keypress(function (e) {
            e.stopImmediatePropagation();
            if (e.which == 13) {
                if ($('.forget-form').validate().form()) {
                    $('.forget-form').submit();
                }
                return false;
            }
        });

        jQuery('#forget-password').click(function () {
            jQuery('.login-form').hide();
            jQuery('.forget-form').show();
        });

        jQuery('#back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.forget-form').hide();
        });

    }

    var handleResetPassword = function () {

        var form = $('#resetpwd_form');
        var rules = {
            password: {
                required: true
            },
            repassword: {
                required: true,
                equalTo: "#pwd"
            }
        };
        handleFormValidate(form, rules, function (form) {
            handleAjaxFormSubmit(form);
            return false;
        });
    }

    return {
        //main function to initiate the module
        init: function () {
            handleLogin();
            handleForgetPassword();
            handleResetPassword();
        },
        signup_init: function () {
            handleSignup();
        }
    };

} ();