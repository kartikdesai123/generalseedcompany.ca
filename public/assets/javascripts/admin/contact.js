var Contact = function () {

    var handleAddvenue = function () {
        var form = $('#addContactFrm');
        var rules = {
            venue_name: {required: true},
        };
        handleFormValidate(form, rules, function () {
            handleAjaxFormSubmit(form, true);
        });
    };

    var handleEditvenue = function () {
        var form = $('#editContactFrm');
        var rules = {
            venue_name: {required: true},
        };
        handleFormValidate(form, rules, function () {
            handleAjaxFormSubmit(form, true);
        });
    };

    var handleAddaddress = function () {
        CKEDITOR.replace('venue_content');

        var form = $('#addContactAddress');
        var rules = {
            select_contact: {required: true},
            venue_content: {required: true},
        };
        handleFormValidate(form, rules, function () {
            handleAjaxFormSubmit(form, true);
        });
    };
    var handleEditaddress = function () {
        CKEDITOR.replace('venue_content');
        var form = $('#editContactAddress');
        var rules = {
            select_contact: {required: true},
            venue_content: {required: true},
        };
        handleFormValidate(form, rules, function () {
            handleAjaxFormSubmit(form, true);
        });
    };


    var general = function () {
        $('body').on('click', '.deletebtn', function () {
            var id = $(this).attr('data-id');
            $('#delete_btn').attr('data-id', id);
            $('#modal-delete-all').modal('show');
        });

        $('body').on('click', '#delete_btn', function () {
            var id = $(this).attr('data-id');
            var url = $(this).attr('data-url');
            ajaxcall(url, {id: id}, function (output) {
                handleAjaxResponse(output);
            });
        });
    }

    return {
        init: function () {
            general();
        },
        addvenue_init: function () {
            handleAddvenue();
        },
        editvenue_init: function () {
            handleEditvenue();
        },
        add_addressinit: function () {
            handleAddaddress();
        },
        edit_addressinit: function () {
            handleEditaddress();
        },
    };
}();
function CKupdate() {
    for (instance in CKEDITOR.instances)
        CKEDITOR.instances[instance].updateElement();
}