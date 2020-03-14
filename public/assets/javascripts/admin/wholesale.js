var Wholesale = function () {
    
    var updatePassword = function () {
        var form = $('#setPassword');
        var rules = {
            old_password: {required: true},
            new_password: {required: true},
            confirm_password: {required: true,equalTo: "#password"},
        };
        handleFormValidate(form, rules,function(){
            handleAjaxFormSubmit(form);
        });
    };
   
    return {
        //main function to initiate the module
        init: function () {
            updatePassword();
        },
        
    };
}();
