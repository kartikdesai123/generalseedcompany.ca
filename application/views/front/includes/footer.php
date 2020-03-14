<script src="<?= base_url(); ?>public/assets/global/plugins/jquery.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/jquery-validation/js/jquery.validate.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/jquery-validation/js/jquery.validate.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/bootstrap-toastr/toastr.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/scripts/app.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/global/plugins/moment.min.js" type="text/javascript"></script>
<script src="<?= base_url(); ?>public/assets/javascripts/common_function.js" type="text/javascript"></script>

<?php
if (!empty($js_plugin)) {
    foreach ($js_plugin as $value) {
        ?>
        <script src="<?= base_url(); ?>public/assets/global/plugins/<?php echo $value ?>" type="text/javascript"></script>
        <?php
    }
}
?>
 <script src="<?= base_url(); ?>public/assets/pages/scripts/components-date-time-pickers.min.js" type="text/javascript"></script>
<?php
if (!empty($js)) {
    foreach ($js as $value) {
        ?>
        <script src="<?php echo base_url(); ?>public/front/js/<?php echo $value ?>" type="text/javascript"></script>
        <?php
    }
}
?>
<script>
    jQuery(document).ready(function () {
        
        jQuery('.page-toggle-bar').click(function (e) {
            jQuery('.cus-menubar').toggleClass('displayBlock');
            e.preventDefault();
        });
        
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
