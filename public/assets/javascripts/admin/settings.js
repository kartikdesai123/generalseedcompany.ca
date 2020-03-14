var Settings = function () {
    
    var handleEditSettings = function () {
        var form = $('#editSettingsFrm');
        var rules = {
            help_phoneno: {required: true},
            cmp_email: {required: true},
            cmp_contactno: {required: true},
            office_address: {required: true},
            google_maplink: {required: true},
            copyrighttxt: {required: true},
        };
        handleFormValidate(form, rules,function(){
            handleAjaxFormSubmit(form,true);
        });
    };
   
    return {
        //main function to initiate the module
        init: function () {
            handleEditSettings();
        },
        
    };
}();
