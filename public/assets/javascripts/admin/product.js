var Product = function () {

    var handleAddproduct = function () {
         CKEDITOR.replace( 'editor1' );
                   
        var form = $('#addProductFrm');
        var rules = {
            product_name: {required: true},
            product_url: {required: true},
        };
        handleFormValidate(form, rules, function () {
            handleAjaxFormSubmit(form, true);
        });
    };
   
    var handleeditproduct = function () {
        var form = $('#editProductFrm');
        var rules = {
            product_name: {required: true},
            product_url: {required: true},
        };
        handleFormValidate(form, rules, function () {
            handleAjaxFormSubmit(form, true);
        });
         CKEDITOR.replace( 'editor1' );
    };
    
     var handleAddproductdetail = function () {
        var form = $('#addproductdetail');
        var rules = {
        };
        handleFormValidate(form, rules, function () {
            handleAjaxFormSubmit(form, true);
        });
    };
    
    var general = function () {
         
        $('body').on('click','.deletebtn',function(){
           var id = $(this).attr('data-id');
           $('#delete_btn').attr('data-id',id);
           $('#modal-delete-all').modal('show');
        });
        
        $('body').on('click','#delete_btn',function(){
            var id = $(this).attr('data-id');
            var url = $(this).attr('data-url');
            ajaxcall(url,{id:id},function(output){
                 handleAjaxResponse(output);
            });
        });
    }
    
    var handleImages = function(){
        var count = pic_count;
        $('body').on('click', '.addimg', function () {
            var html = $('.append_html').html().replace(/\@/g, count);
            $('.append_div').append(html);
        });
        $('body').on('click', '.removeimg', function () {
            $(this).closest('.fileinput').remove();
        });
    }


    return {
        init: function () {
            general();
        },
        add_init: function () {
            handleAddproduct();
        },
        edit_init: function () {
            handleeditproduct();
        },        
        add_detail_init:function(){
            handleImages();
            handleAddproductdetail();
        }
    };
}();
function CKupdate(){
    for ( instance in CKEDITOR.instances )
        CKEDITOR.instances[instance].updateElement();
}