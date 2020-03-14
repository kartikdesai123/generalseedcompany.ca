<div class="row">
    <div class="col-md-12 col-sm-12">
        <!-- BEGIN EXAMPLE TABLE PORTLET-->
        <div class="portlet box green">
            <div class="portlet-title">
                <div class="caption"><i class="fa fa-list-alt"></i>Article List</div>
            </div>
            <div class="portlet-body">
                <table class="table table-striped table-bordered table-hover" id="sample_3">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Article Name</th>
                            <th>Active / Inactive</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        for ($i = 0; $i < count($articles); $i++) {
                            ?>

                            <tr>
                                <td> <?= $i + 1; ?> </td>
                                <td><?= $articles[$i]['var_title']; ?></td>
                                <td><?= ($articles[$i]['enum_status'] == 'A') ? "Active" : 'Inactive'; ?></td>


                                <td>
                                    <a class="btn blue" href="<?= admin_url() . 'article/edit_title/' . $articles[$i]['int_glcode']; ?>">
                                        Edit </a> 

                                    <a class="btn red deletebtn" href="javascript:;" data-id="<?php echo $articles[$i]['int_glcode']; ?>">
                                        Delete </a> 
                                </td>
                            </tr>
                            <?php
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- END EXAMPLE TABLE PORTLET-->
    </div>
</div>


<!--start  delete model-->

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
                <button type="submit" id="delete_btn" data-url ="<?php echo admin_url('article/article_delete'); ?>" class="btn red multiple_delete_btn"><i class="fa fa-check"></i>Delete</button>
            </div>
        </div>
    </div>
</div>

<!--End  delete model-->

<!--End  delete model-->