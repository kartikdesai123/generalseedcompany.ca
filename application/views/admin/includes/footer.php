<!--[if lt IE 9]>
<script src="<?= base_url(); ?>public/assets/global/plugins/respond.min.js"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/excanvas.min.js"></script> 
<![endif]-->
<!-- BEGIN CORE PLUGINS -->

<script src="<?= base_url(); ?>public/assets/global/plugins/jquery.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/js.cookie.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/jquery-validation/js/jquery.validate.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/jquery-validation/js/jquery.validate.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/bootstrap-toastr/toastr.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/scripts/datatable.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/datatables/datatables.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js" type="text/javascript"></script>
<!-- END CORE PLUGINS -->

<script src="<?= base_url(); ?>public/assets/global/plugins/select2/js/select2.js" type="text/javascript"></script>
<?php
if (!empty($js_plugin)) {
    foreach ($js_plugin as $value) {
        ?>
        <script src="<?= base_url(); ?>public/assets/global/plugins/<?php echo $value ?>" type="text/javascript"></script>
        <?php
    }
}
?>

<!-- BEGIN THEME GLOBAL SCRIPTS -->

<script src="<?= base_url(); ?>public/assets/global/scripts/app.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/moment.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/javascripts/common_function.js" type="text/javascript"></script>

<!-- END THEME GLOBAL SCRIPTS -->
<!-- BEGIN THEME LAYOUT SCRIPTS -->
<script src="<?= base_url(); ?>public/assets/layouts/layout/scripts/layout.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/layouts/layout/scripts/demo.js" type="text/javascript"></script>
<!-- END THEME LAYOUT SCRIPTS -->

<?php
if (!empty($js)) {
    foreach ($js as $value) {
        ?>
        <script src="<?php echo base_url(); ?>public/assets/javascripts/<?php echo $value ?>" type="text/javascript"></script>
        <?php
    }
}
?>

<!--<script src="<?php echo base_url(); ?>public/assets/pages/scripts/table-datatables-ajax.js" type="text/javascript"></script>-->
<script src="<?php echo base_url(); ?>public/assets/pages/scripts/components-date-time-pickers.js" type="text/javascript"></script>
<script src="<?php echo base_url(); ?>public/assets/pages/scripts/table-datatables-managed.min.js" type="text/javascript"></script>
<script>
    jQuery(document).ready(function () {
        App.init();
<?php
if (!empty($init)) {
    foreach ($init as $value) {
        echo $value . ';';
    }
}
?>
    });
</script>

<!--start  delete model-->
<div id="myModal_autocomplete" class="modal fade delete_modal" style="padding-top: 20px;" role="dialog" aria-hidden="true">
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
                <button type="button" class="btn btn-circle btn-default" data-dismiss="modal" >Close</button>
                <button type="submit" id="btndelete" data-url="" class="btn red btn-circle btndelete delete-records-modal"><i class="fa fa-check"></i>Delete</button>
            </div>
        </div>
    </div>
</div>

<!--End  delete model-->

<!--/* myModal_autocomplete */-->
<!--start  delete model-->
<div id="delete_model" class="modal fade delete_modal" style="padding-top: 20px;" role="dialog" aria-hidden="true">
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
                <button type="button" class="btn btn-default btn-circle" data-dismiss="modal" >Close</button>
                <button type="submit" id="btndelete btn-circle" data-url="" class="btn red btndelete delete-records-modal"><i class="fa fa-check"></i>Delete</button>
            </div>
        </div>
    </div>
</div>

<!--End  delete model-->