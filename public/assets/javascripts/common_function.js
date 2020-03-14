function getDataTable(tableID, ajaxPath, extraOption) {
    if (typeof extraOption === 'undefined') {
        extraOption = {};
    }
    var grid = new Datatable();
    var options = {
        src: $(tableID),
        onSuccess: function (grid, response) {
            // grid:        grid object
            // response:    json object of server side ajax response
            // execute some code after table records loaded
        },
        onError: function (grid) {
            // execute some code on network or other general error  
        },
        onDataLoad: function (grid) {
            // execute some code on ajax data load
        },
        loadingMessage: 'Loading...',
        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/scripts/datatable.js). 
            // So when dropdowns used the scrollable div should be removed. 
            "dom": "<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'f<'table-group-actions pull-right'>>r>t<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'>>",
            "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

            "lengthMenu": [
                [10, 20, 50, 100, 150, -1],
                [10, 20, 50, 100, 150, "All"] // change per page values here
            ],
            "pageLength": 10, // default record count per page
//            "ajax": {
//                "url": ajaxPath, // ajax source
//            },
            "order": [
                [1, "asc"]
            ]// set first column as a default sort by asc
        }
    };
    options = $.extend(true, options, extraOption);
    if ('ajax' in options.dataTable == false) {
        options.dataTable.ajax = {"url": ajaxPath};
    }
    grid.init(options);

    // handle group actionsubmit button click
    grid.getTableWrapper().on('click', '.table-group-action-submit', function (e) {
        e.preventDefault();
        var action = $(".table-group-action-input", grid.getTableWrapper());
        if (action.val() != "" && grid.getSelectedRowsCount() > 0) {
            grid.setAjaxParam("customActionType", "group_action");
            grid.setAjaxParam("customActionName", action.val());
            grid.setAjaxParam("id", grid.getSelectedRows());
            grid.getDataTable().ajax.reload();
            grid.clearAjaxParams();
        } else if (action.val() == "") {
            App.alert({
                type: 'danger',
                icon: 'warning',
                message: 'Please select an action',
                container: grid.getTableWrapper(),
                place: 'prepend'
            });
        } else if (grid.getSelectedRowsCount() === 0) {
            App.alert({
                type: 'danger',
                icon: 'warning',
                message: 'No record selected',
                container: grid.getTableWrapper(),
                place: 'prepend'
            });
        }
    });

    grid.setAjaxParam("customActionType", "group_action");
//    grid.getDataTable().ajax.reload();
    grid.clearAjaxParams();
    return grid;
}

function getDataTable2(tableID, ajaxPath) {
    var grid = new Datatable();

    grid.init({
        src: $(tableID),
        onSuccess: function (grid, response) {
            // grid:        grid object
            // response:    json object of server side ajax response
            // execute some code after table records loaded
        },
        onError: function (grid) {
            // execute some code on network or other general error  
        },
        onDataLoad: function (grid) {
            // execute some code on ajax data load
        },
        loadingMessage: 'Loading...',
        dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/scripts/datatable.js). 
            // So when dropdowns used the scrollable div should be removed. 
            //"dom": "<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>r>t<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'>>",

            "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.
            "bServerSide": true,
            "bProcessing": true,
            "bJQueryUI": true,
            "sPaginationType": "full_numbers",
            "lengthMenu": [
                [10, 20, 50, 100, 150, -1],
                [10, 20, 50, 100, 150, "All"] // change per page values here
            ],
            "pageLength": 10, // default record count per page
            "ajax": {
                "url": ajaxPath, // ajax source
            },
            "order": [
                [1, "asc"]
            ]// set first column as a default sort by asc
        }
    });

    // handle group actionsubmit button click
    grid.getTableWrapper().on('click', '.table-group-action-submit', function (e) {
        e.preventDefault();
        var action = $(".table-group-action-input", grid.getTableWrapper());
        if (action.val() != "" && grid.getSelectedRowsCount() > 0) {
            grid.setAjaxParam("customActionType", "group_action");
            grid.setAjaxParam("customActionName", action.val());
            grid.setAjaxParam("id", grid.getSelectedRows());
            grid.getDataTable().ajax.reload();
            grid.clearAjaxParams();
        } else if (action.val() == "") {
            App.alert({
                type: 'danger',
                icon: 'warning',
                message: 'Please select an action',
                container: grid.getTableWrapper(),
                place: 'prepend'
            });
        } else if (grid.getSelectedRowsCount() === 0) {
            App.alert({
                type: 'danger',
                icon: 'warning',
                message: 'No record selected',
                container: grid.getTableWrapper(),
                place: 'prepend'
            });
        }
    });

    grid.setAjaxParam("customActionType", "group_action");
//    grid.getDataTable().ajax.reload();
    grid.clearAjaxParams();

}

function getQueryString(field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
}


function CKupdate() {
    for (instance in CKEDITOR.instances)
        CKEDITOR.instances[instance].updateElement();
}
if (typeof CKEDITOR !== 'undefined') {
    CKEDITOR.on('instanceCreated', function (ev) {
        CKEDITOR.dtd.$removeEmpty['a'] = 0;
    })
}

function ajaxcall(url, data, callback) {
    App.startPageLoading();
    $.ajax({
        type: 'POST',
        url: url,
        data: data,
        success: function (result) {
            App.stopPageLoading();
            callback(result);
        }
    })
}

function handleAjaxFormSubmit(form, type) {
    if (typeof type === 'undefined') {
        ajaxcall($(form).attr('action'), $(form).serialize(), function (output) {
            handleAjaxResponse(output);
        });
    }
    else if (type === true) {
        App.startPageLoading();
        var options = {
            resetForm: false, // reset the form after successful submit 
            success: function (output) {
                App.stopPageLoading();
                handleAjaxResponse(output);
            }
        };
        $(form).ajaxSubmit(options);
    }
    return false;
}

function handleAjaxResponse(output) {

    output = JSON.parse(output);

    if (output.message != '') {
        Toastr.init(output.status, output.message, '');
    }
    if (typeof output.redirect !== 'undefined' && output.redirect != '') {
        setTimeout(function () {
            window.location.href = output.redirect;
        }, 500);
    }
    if (typeof output.jscode !== 'undefined' && output.jscode != '') {
        eval(output.jscode);
    }
}

function _fn_getQueryStringValue(name) {
    var regex = new RegExp("[\\?&]" + name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)"), results = regex.exec(window.location.search);
    return results ? decodeURIComponent(results[1].replace(/\+/g, " ")) : '';
}

function handleFormValidate(form, rules, submitCallback) {

    var error = $('.alert-danger', form);
    var success = $('.alert-success', form);
    form.validate({
        errorElement: 'span', //default input error message container
        errorClass: 'help-block', // default input error message class
        focusInvalid: false, // do not focus the last invalid input
        ignore: ":hidden",
        rules: rules,
        invalidHandler: function (event, validator) { //display error alert on form submit              
            success.hide();
            error.show();
            App.scrollTo(error, -200);
        },
        highlight: function (element) { // hightlight error inputs
            $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
        },
        unhighlight: function (element) { // revert the change done by hightlight
            $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
        },
        success: function (label) {
            label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
        },
        submitHandler: function (form) {
            if (typeof submitCallback !== 'undefined' && typeof submitCallback == 'function') {
                submitCallback(form);
            } else {
                handleAjaxFormSubmit(form);
            }
            return false;
        }
    });

    $('.select2me', form).change(function () {
        form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
    });
    $('.date-picker .form-control').change(function () {
        form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input 
    })
}

function gritter(title, text, sticky, time) {
    $.gritter.add({
        // (string | mandatory) the heading of the notification
        title: title,
        // (string | mandatory) the text inside the notification
        text: text,
        // (string | optional) the image to display on the left
//                    image1: './assets/img/avatar1.jpg',
        // (bool | optional) if you want it to fade out on its own or just sit there
        sticky: sticky,
        // (int | optional) the time you want it to be alive for before fading out
        time: time,
        // (string | optional) the class name you want to apply to that specific message
        class_name: 'my-sticky-class'
    });

}

var Toastr = function () {

    return {
        //main function to initiate the module
        init: function (type, title, message) {
            toastr.options = {
                "closeButton": true,
                "debug": false,
                "positionClass": "toast-top-center",
                "onclick": null,
                "showDuration": "1000",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"

            }
            toastr[type](message, title);
        }

    };

}();

function handleDelete() {

    $('body').on('click', '#btndelete', function () {
        var data = '';
        var thumb = $(this).attr('data-thumb');
        if (thumb) {
            data = {'id': $(this).attr('data-id'), 'thumb': thumb};
        } else {
            data = {'id': $(this).attr('data-id')};
        }
        ajaxcall($(this).attr('data-url'), data, function (output) {
            $('#myModal_autocomplete').modal('hide');
            handleAjaxResponse(output);
        });
    });
}

function handleDeleteData() {

    var delete_records_value = '';
    var delete_model_name = '';
    $('body').on('click', '.delete_confirmation_btn', function () {

        var checked_value = $('input[type="checkbox"].delete_checkbox_id:checked');
        if (checked_value.length > 0) {
            delete_model_name = $(this).attr('data-model-open');
            $(delete_model_name).modal('show');
            for (var i = 0; i < checked_value.length; i++) {
                delete_records_value += $(checked_value[i]).attr('data-id');
                if (i != checked_value.length - 1) {
                    delete_records_value += ",";
                }
            }
        } else {
            Toastr.init('warning', 'Please select atleast one record', '');
        }
    });
    $('body').on('click', '#multiple_delete_btn', function () {
        var data = {'id': delete_records_value};
        ajaxcall($(this).attr('data-url'), data, function (output) {
            $(delete_model_name).modal('hide');
            var temp_array = delete_records_value.split(',');
            for (var i = 0; i < temp_array.length; i++) {
                $('input[type="checkbox"].delete_checkbox_id[data-id="' + temp_array[i] + '"]').parents('tr').hide();
            }
            handleAjaxResponse(output);
        });
    });
}

function handleTimePickers() {

    if (jQuery().timepicker) {
        $('.timepicker-default').timepicker({
            autoclose: true,
            //showSeconds: true,
            minuteStep: 1
        });

        $('.timepicker-no-seconds').timepicker({
            autoclose: true,
            minuteStep: 5
        });

        $('.timepicker-24').timepicker({
            autoclose: true,
            minuteStep: 5,
            showSeconds: true,
            showMeridian: false
        });

        // handle input group button click
        $('.timepicker').parent('.input-group').on('click', '.input-group-btn', function (e) {
            e.preventDefault();
            $(this).parent('.input-group').find('.timepicker').timepicker('showWidget');
        });
    }
}

var check_checkbox = function () {

    return {
        init: function () {
            var checked_length = $(".checkboxes:checked").length;
            var id_array = new Array();
            $('.checkboxes:checked').each(function () {
                id_array.push($(this).attr('value'));
            });
            if (checked_length != 0)
            {
                return id_array;
            }
            else
            {
                Toastr.init('warning', 'Opps..', 'Please Select Atleast One Checkbox');
                return false;
            }
        }
    }
}();

// Handle Sidebar toggling
$('.page-sidebar-menu li').on('click', function () {
    $('.page-sidebar-menu li:not(.open)').each(function (i) {
        $(this).find('a .arrow').removeClass('open');
        $(this).find('ul.sub-menu').hide();
    });
});
// Handle Sidebar toggling

if (getQueryString('status') != null && getQueryString('message') != null) {
    Toastr.init(getQueryString('status'), '', decodeURIComponent(getQueryString('message')));
}
if (getQueryString('redirect') != null) {
    setTimeout(function () {
        window.location.href = getQueryString('redirect');
    }, 500);
}
