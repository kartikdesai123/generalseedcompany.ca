var Login = function () {

    var handleLogin = function () {

        $('.login-form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            rules: {
                username: {
                    email: true,
                    required: true,
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
                $('.alert-danger').children('span').html('Enter valid email address and password.');
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
                        if (response == 'success')
                        {
                            $('.alert-danger', $('.login-form')).hide();
                            $('.alert-success').children('span').html('Well done Login Successfully Done..');
                            $('.alert-success', $('.login-form')).show();
                            if (_fn_getQueryStringValue('url') != '') {
                                location.href = encodeURI(_fn_getQueryStringValue('url'));
                            } else {
                                location.href = baseurl + 'admin/dashboard';
                            }
                        }

                        else if (response == 'error')
                        {
                            $('.alert-danger').children('span').html('Email address and password dont match');
                            $('.alert-danger', $('.login-form')).show();
                            $('.alert-success', $('.login-form')).hide();
                        }
                    }
                });
            }
        });
        $('.login-form input').keypress(function (e) {
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
                }
            },
            messages: {
                email: {
                    required: "Username is required."
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
//                alert(forgetemail);
                $.ajax({
                    type: "POST",
                    url: baseurl + "admin/account/forgot_password",
                    data: {"forgetemail": forgetemail},
                    success: function (response) {
                        if (response == 'success')
                        {
                            Toastr.init('success', 'A new password has been sent to your email address', '');
                            $('.alert-success', $('.forget-form')).show();
                            $('.alert-danger', $('.forget-form')).hide();
                            location.href = baseurl + 'admin/';
                        }
                        else
                        {
                            $('.alert-danger').children('span').html('Opps Something Will be wrong');
                            $('.alert-danger', $('.forget-form')).show();
                            $('.alert-success', $('.forget-form')).hide();
                        }
                    }
                });
            }
        });
        $('.forget-form input').keypress(function (e) {
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

    var handleRegister1 = function () {

        var form = $('#reg_form');
        $('#reg_form').validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",
            rules: {
                state: {
                    required: true
                },
                zip: {
                    required: true,
                    number: true,
                },
                firstname: {
                    required: true
                },
                lastname: {
                    required: true
                },
                cellphone: {
                    required: true,
                    number: true,
                },
                email: {
                    required: true,
                    email: true
                },
                address: {
                    required: true
                },
                username: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                },
                rpassword: {
                    equalTo: "#register_password"
                },
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
            submitHandler: function (form) {
                var options = {
                    success: function (output) {
                        $.trim(output);
                        if (output == 'success')
                        {
                            Toastr.init('success', 'Welldone', 'Registration added successfully..');
                            setTimeout(function () {
                                window.location.href = baseurl + "admin/account/admin";
                            }, 5000);
                        }
                        else if (output == 'error')
                        {
                            Toastr.init('error', 'Oops..', 'Registration fails..');
                        }
                    }
                };
                $(form).ajaxSubmit(options);
                return false;
            }
        });
        $('.select2me', $('.register-form')).change(function () {
            $(this).validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
        });
        $('.register-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.register-form').validate().form()) {
                    $('.register-form').submit();
                }
                return false;
            }
        });
        jQuery('#register-btn').click(function () {
            jQuery('.login-form').hide();
            jQuery('.register-form').show();
        });
        jQuery('#register-back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.register-form').hide();
        });
    }

    var handleRegister = function () {

        var form = $('#reg_form');
        var rules = {
//            zip: { required: true, number: true, },
//            firstname: { required: true },
//            lastname: {  required: true },
//            cellphone: { required: true, number: true,},
//           
//            address: { required: true },
//            username: { required: true, email: false
//            },
//            password: { required: true, },
//            rpassword: { equalTo: "#register_password" },
        };
        handleFormValidate(form, rules, function (form) {
//            
            handleAjaxFormSubmit(form, true);
            return false;
        });

        $('.register-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.register-form').validate().form()) {
                    $('.register-form').submit();
                }
                return false;
            }
        });
        jQuery('#register-btn').click(function () {
            jQuery('.login-form').hide();
            jQuery('.register-form').show();
        });
        jQuery('#register-back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.register-form').hide();
        });
    };
    var check_mail = function () {
        $('#username').focusout(function () {
            var mail = $(this).val();
            $.ajax({
                type: 'post',
                url: baseurl + 'admin/Account/check_mail',
                data: {'mail': mail},
                success: function (output) {
                    if (output == 'error')
                    {
                        Toastr.init('error', '', 'Email already exist use another email..');
                        setTimeout(function () {
                            location.reload();
                        }, 5000);
                    }
                }
            })
        });
    }

    var country_wise_state = function () {
        $('body').on('change', '#select2_sample4', function () {
            var val5 = $(this).val()
            var url = baseurl + "admin/account/";
            var data = {"country_val": val5};
            ajaxcall(url, data, function (data) {
                var data1 = JSON.parse(data);
                var output;
                var i;
                var selected = '';
                var length = data1.length;
                for (var i = 0; i < length; i++)
                {
                    output += '<option value="' + data1[i].stateName + '">' + data1[i].stateName + '</option>';
                }
                $('#state').html(output);
            });
        });
        $("#state").select2();
    }

    var _fn_getQueryStringValue = function (name) {

        var regex = new RegExp("[\\?&]" + name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)"), results = regex.exec(window.location.search);
        return results ? decodeURIComponent(results[1].replace(/\+/g, " ")) : '';
    }

    return {
//main function to initiate the module
        init: function () {
            country_wise_state();
            handleLogin();
            handleForgetPassword();
            handleRegister();
            check_mail();
//            $.backstretch([
//                baseurl + "public/assets/img/bg/1.jpg",
//                baseurl + "public/assets/img/bg/2.jpg",
//                baseurl + "public/assets/img/bg/3.jpg",
//                baseurl + "public/assets/img/bg/4.jpg"
//            ], {
//                fade: 1000,
//                duration: 8000
//            });
        }

    };
}();