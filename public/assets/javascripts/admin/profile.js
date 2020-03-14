var Profile = function () {

    var profile_info = function () {

        var form = $('#admin_infor');
        var rules = {
            email: {required: true, email: true},
            uname: {required: true},
            fname: {required: true},
            lname: {required: true},
            dob: {required: true},
            mnumber: {required: true, number: true},
            address: {required: true}
        };
        handleFormValidate(form, rules);
    };
    var change_pass = function () {
        var form = $('#change_password');
        var rules = {
            old_pwd: {required: true},
            new_pwd: {required: true},
            conf_pwd: {required: true, equalTo: "#new_pwd"}
        };
        handleFormValidate(form, rules);
    };
    var change_image = function () {

        $('.profile_change').change(function (e) {
//            alert('ssadds');
//            return false;
            var form = $('#admin_pic');
            var options = {
                resetForm: false, // reset the form after successful submit 
                success: function (output) {
                    output = JSON.parse(output);
                    Toastr.init(output.status, output.message, '');
                    location.reload();
                }
            };
            $(form).ajaxSubmit(options);
        });
    };
    return {
        //main function to initiate the module
        pinit: function () {
            profile_info();
            change_pass();
            change_image();
        },
    };
}();
