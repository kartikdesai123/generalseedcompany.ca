var Cards = function () {

    var handleAddCard = function () {
        var form = $('#addCardsFrm');
        var rules = {
            help_phoneno: {required: true},
            cmp_email: {required: true},
            cmp_contactno: {required: true},
            office_address: {required: true},
            google_maplink: {required: true},
            copyrighttxt: {required: true},
            cardprice: {required: true,number:true},
            cardheight: {required: true,number:true},
            cardwidth: {required: true,number:true},
            card_desc: {required: true},
            cardtitle: {required: true},
            card_category: {required: true},
            upload_video: {required: true},
            youtube_link: {required: true},
        };
        handleFormValidate(form, rules, function () {
            handleAjaxFormSubmit(form, true);
        });
    };

    var general = function () {
        $('body').on('click', '.addimg', function () {
            var html = $('.append_html').html();
            $('.append_div').append(html);
        });
        $('body').on('click', '.removeimg', function () {
            $(this).closest('.fileinput').remove();
        });

        $('body').on('change', '.card_category', function () {
            
            if ($(this).val() == '1') {
                $('.isimage_container').hide();
                $('.isvideo_container').show();
            } else {
                $('.isvideo_container').hide();
                $('.isimage_container').show();
            }
        });

//        $('body').on('click', '.selectmedia', function () {
//            alert($(this).val())
//            if ($(this).val() == 'I') {
//                $('.isvideo_container').hide();
//                $('.isimage_container').show();
//            } else {
//                $('.isimage_container').hide();
//                $('.isvideo_container').show();
//            }
//        });

        $('body').on('click', '.selectvideoType', function () {
            if ($(this).val() == 'M') {
                $('.yutubelink').hide();
                $('.upload_video').show();
            } else {
                $('.upload_video').hide();
                $('.yutubelink').show();
            }
        });
    }


    return {
        //main function to initiate the module
        init: function () {
            general();
        },
        add_init: function () {
            handleAddCard();
            general();
        },
        edit_init: function () {
            general();
        },
    };
}();
