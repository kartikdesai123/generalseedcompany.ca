var Query = function () {
    
    var handle_records = function () {
        queryDatatables = getDataTable('#query_datatable', adminurl + 'query/query_datatable', {
            dataTable: {
                "columnDefs": [{"searchable": false, "targets": [4]}
                ]}
        });
    }
    
//    var handle_records = function () {
//        var grid = new Datatable_Apply();
//        grid.init({
//            src: $("#query_datatable"),
//            onSuccess: function (grid) {
//                // execute some code after table records loaded
//            },
//            onError: function (grid) {
//                // execute some code on network or other general error  
//            },
//            dataTable: {
//                "fnPreDrawCallback": function (oSettings) {
//
//                    $('.group-checkable').attr('checked', false);
//                    $('.group-checkable').parents('span').removeClass('checked')
//                },
//                "aLengthMenu": [
//                    [10, 20, 50, 100, 150],
//                    [10, 20, 50, 100, 150] // change per page values here
//                ],
//                "bDestroy": true,
//                "iDisplayLength": 10, // default record count per page
//                "bServerSide": true, // server side processing
//                "sAjaxSource": adminurl + 'query/query_datatable', // ajax source
//                "aaSorting": [[1, "asc"]], // set first column as a default sort by asc
//                "aoColumnDefs": [{// define columns sorting options(by default all columns are sortable extept the first checkbox column)
//                        'bSortable': false,
//                        'aTargets': [0],
//                    }, {
//                        'bSearchable': false,
//                        'aTargets': [3],
//                    }],
//            }
//
//        });
//    }

    var general = function () {
        $('body').on('click', '.delete_query', function () {
            var id = $(this).attr('data-id');
            var url = $(this).attr('data-url');
            $('#btndelete').attr('data-id', id);
            $('#btndelete').attr('data-url', url);
        });

        $('body').on('click', '.btndelete', function () {
            ajaxcall($(this).attr('data-url'), {'id': $(this).attr('data-id')}, function (output) {
                output = JSON.parse(output);
                $('#deletemodel').modal('hide');
                $('#myModal_autocomplete').modal('hide');
                Toastr.init(output.status, output.message, '');
                queryDatatables.refresh();
            });
        });
    }
   
    return {
        //main function to initiate the module
        init: function () {
            handle_records();
            general();
        },
        
    };
}();
