var Contact = function () {

    var general = function () {

        var form = $('#frmcontact');
        var rules = {
            fname: {required: true},
            lname: {required: true},
            email: {required: true, email: true},
            subject: {required: true},
            txtmsg: {required: true}
        };
        handleFormValidate(form, rules);
    };
    var password = function(){
        var form = $('#frmpassword');
        var rules = {
            whpass: {required: true},
        };
        handleFormValidate(form, rules);
    };
    
    var order_form = function(){
        var form = $('#wholesallerfrm');
        var rules = {
            dateorder : {required: true},
            name : {required: true},
            address : {required: true},
            city : {required: true},
            po : {required: true},
            telno: {required: true},
            postalcde: {required: true},
            order_discount: {required: true},
            repname: {required: true},
            delivery: {required: true},
            contact_name: {required: true},
            contact_phone: {required: true,number:true},
            email: {required: true,email:true},
            'lbs[]': {required: true},
            'seed[]': {required: true},
            'price[]': {required: true},
        };
        handleFormValidate(form, rules);
    };
    
    var whole_orders = function(){
        $('body').on('click','.add-more',function(){
            var append_html = $('#append_html').html();
            $('#append_div').append(append_html);
        });
        $('body').on('click','.remove-row',function(){
            $(this).closest('.cur-formrow').remove();
        });
        
    }

    return {

        //main function to initiate the module
        init: function () {
            general();
            password();
        },
        detail_init: function(){
           order_form();
           whole_orders(); 
        }        
    };
}();