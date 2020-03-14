var Dealership = function () {

    var general = function () {

        var form = $('#frmdealership');
        var rules = {
            fbname: {required: true},
            fname: {required: true},
            lname: {required: true},
            pnno: {required: true,number:true},
            email: {required: true, email: true},
            town: {required: true},
            txtmsg: {required: true},
            province: {required: true},
        };
        handleFormValidate(form, rules);
    };

    return {

        //main function to initiate the module
        init: function () {
            general();
        },
    };
}();
