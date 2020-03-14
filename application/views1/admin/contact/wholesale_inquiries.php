<div class="row">
    <div class="col-md-12 col-sm-12">
        <!-- BEGIN EXAMPLE TABLE PORTLET-->
        <div class="portlet box blue">
            <div class="portlet-title">
                <div class="caption"><i class="fa fa-list-alt"></i>Wholesale Inquires</div>
            </div>
            <div class="portlet-body">
                
            </div>
        </div>
        <!-- END EXAMPLE TABLE PORTLET-->
    </div>
</div>


<!--start  delete model-->
<div id="modal-delete-all" class="modal fade" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
                <h4 class="modal-title">Delete Confirmation</h4>
            </div>
            <div class="modal-body">
                <h3>Are you Sure to Delete ?...</h3>
            </div>
            <div class="modal-footer" >
                <button type="button" class="btn btn-default" data-dismiss="modal" >Close</button>
                <button type="submit" id="delete_btn" data-url ="<?php echo admin_url('productpage/delete');?>" class="btn red multiple_delete_btn"><i class="fa fa-check"></i>Delete</button>
            </div>
        </div>
    </div>
</div>

<!--End  delete model-->