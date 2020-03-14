var Article = function () {

    var handleAddArticleTitle = function () {
        var form = $('#addArticleFrm');
        var rules = {
            article_title: {required: true},
        };
        handleFormValidate(form, rules, function () {
            handleAjaxFormSubmit(form, true);
        });
    };

    var handleEditArticleTitle = function () {
        var form = $('#editArticleFrm');
        var rules = {
            article_title: {required: true},
        };
        handleFormValidate(form, rules, function () {
            handleAjaxFormSubmit(form, true);
        });
    };

    var handleAddpage = function () {
        CKEDITOR.replace('page_content');

        var form = $('#addarticlepage');
        var rules = {
            select_article: {required: true},
            page_title: {required: true},
            page_url: {required: true},
            page_content: {required: true},
        };
        handleFormValidate(form, rules, function () {
            handleAjaxFormSubmit(form, true);
        });
    };
    var handleEditpage = function () {
        CKEDITOR.replace('page_content');

        var form = $('#editarticlepage');
        var rules = {
            select_article: {required: true},
            page_title: {required: true},
            page_url: {required: true},
            page_content: {required: true},
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
        add_init: function () {
            handleAddArticleTitle();
        },
        edit_init: function () {
            handleEditArticleTitle();
        },
        add_pageinit: function () {
            handleAddpage();
        },
        edit_pageinit: function () {
            handleEditpage();
        },
    };
}();
function CKupdate() {
    for (instance in CKEDITOR.instances)
        CKEDITOR.instances[instance].updateElement();
}