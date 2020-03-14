var GeneralInquiry = function () {
    var sendmail = function () {
    	
		
       	 var form = $('#generalInquiry');
	        var rules = {
	            fname: {required: true},
	            lname: {required: true},
	            email: {required: true},
	            phone: {required: true},
	            town: {required: true},
	            subject: {required: true},
	            message: {required: true},
	        };
	        handleFormValidate(form, rules, function(form) {
	            handleAjaxFormSubmit(form);
	        }); 
    };
    return{
        init: function () {
            sendmail();
        }
    };
}();