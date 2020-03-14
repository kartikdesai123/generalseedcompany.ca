var Login = function () {

    var handleLogin = function () {

        $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                username: {
                    email: true,
                    required: true
                },
                password: {
                    required: true
                },
                remember: {
                    required: false
                }
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
                    data: {username: username, password: password, remember: remember},
                    success: function (response) {
                        output = JSON.parse(response);
                        alert(output.redirect)
                        if (output.status == 'success') {
                            $('.alert-danger', $('.login-form')).hide();
                            $('.alert-success').children('span').html(output.message);
                            $('.alert-success', $('.login-form')).show();
                            location.href = output.redirect;
                        }else if(output.status == 'error'){
                            $('.alert-success').children('span').html(output.message);
                            $('.alert-danger', $('.login-form')).show();
                            $('.alert-success', $('.login-form')).hide();
                        }
//                        if (response == 'success')
//                        {
//                            $('.alert-danger', $('.login-form')).hide();
//                            $('.alert-success').children('span').html('Well done Login Successfully Done..');
//                            $('.alert-success', $('.login-form')).show();
//                            location.href = baseurl + 'admin/dashboard';
//                        }
//                        else if (response == 'error')
//                        {
//                            $('.alert-danger').children('span').html('Email address and password dont match');
//                            $('.alert-danger', $('.login-form')).show();
//                            $('.alert-success', $('.login-form')).hide();
//                        }
                    }
                });
            }
//            submitHandler: function (form) {
//                form.submit(); // form validation success, call ajax form submit
//            }
        });

        // $('.login-form input').keypress(function (e) {
//            if (e.which == 13) {
//                if ($('.login-form').validate().form()) {
//                    $('.login-form').submit(); //form validation success, call ajax form submit
//                }
//                return false;
//            }
        // });
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
                    data: {"forgetemail": forgetemail},
                    success: function (response) {
                        if (response == 'success')
                        {
                            $('.alert-danger', $('.forget-form')).hide();
                            $('.alert-success').children('span').html('Password Sent To your Email.');
                            $('.alert-success', $('.forget-form')).show();
                            $('.login-form').show();
                            location.href = baseurl;
                        }
                        else
                        {
                            $('.alert-danger').children('span').html('Invalid Email address.');
                            $('.alert-danger', $('.forget-form')).show();
                            $('.alert-success', $('.forget-form')).hide();
                        }
                    }
                });
            }
        });

        // $('.forget-form input').keypress(function (e) {
        //     if (e.which == 13) {
        //         if ($('.forget-form').validate().form()) {
        //             $('.forget-form').submit();
        //         }
        //         return false;
        //     }
        // });

        jQuery('#forget-password').click(function () {
            jQuery('.login-form').hide();
            jQuery('.forget-form').show();
        });

        jQuery('#back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.forget-form').hide();
        });

    }

    var handleRegister = function () {

        function format(state) {
            if (!state.id) {
                return state.text;
            }
            var $state = $(
                    '<span><img src="../assets/global/img/flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
                    );

            return $state;
        }

        if (jQuery().select2 && $('#country_list').size() > 0) {
            $("#country_list").select2({
                placeholder: '<i class="fa fa-map-marker"></i>&nbsp;Select a Country',
                templateResult: format,
                templateSelection: format,
                width: 'auto',
                escapeMarkup: function (m) {
                    return m;
                }
            });


            $('#country_list').change(function () {
                $('.register-form').validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
        }

        $('.register-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                fullname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                address: {
                    required: true
                },
                city: {
                    required: true
                },
                country: {
                    required: true
                },
                username: {
                    required: true
                },
                password: {
                    required: true
                },
                rpassword: {
                    equalTo: "#register_password"
                },
                tnc: {
                    required: true
                }
            },
            messages: {// custom messages for radio buttons and checkboxes
                tnc: {
                    required: "Please accept TNC first."
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
                if (element.attr("name") == "tnc") { // insert checkbox errors after the container                  
                    error.insertAfter($('#register_tnc_error'));
                } else if (element.closest('.input-icon').size() === 1) {
                    error.insertAfter(element.closest('.input-icon'));
                } else {
                    error.insertAfter(element);
                }
            },
            submitHandler: function (form) {
                form.submit();
            }
        });

        // $('.register-form input').keypress(function (e) {
        //     if (e.which == 13) {
        //         if ($('.register-form').validate().form()) {
        //             $('.register-form').submit();
        //         }
        //         return false;
        //     }
        // });

        jQuery('#register-btn').click(function () {
            jQuery('.login-form').hide();
            jQuery('.register-form').show();
        });

        jQuery('#register-back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.register-form').hide();
        });
    }

    return {
        //main function to initiate the module
        init: function () {

            handleLogin();
            handleForgetPassword();
            handleRegister();

        }

    };

}();

jQuery(document).ready(function () {
    Login.init();
});