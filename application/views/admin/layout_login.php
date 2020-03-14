<!DOCTYPE html>
<!-- 
Template Name: Metronic - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.5
Version: 4.5.2
Author: KeenThemes
Website: http://www.keenthemes.com/
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Like: www.facebook.com/keenthemes
Purchase: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes
License: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.
-->
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
    <!--<![endif]-->
    <!-- BEGIN HEAD -->

    <head>
        <meta charset="utf-8" />
        <title> Login | <?= get_project_name(); ?></title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="" name="description" />
        <meta content="" name="author" />
        <!-- BEGIN GLOBAL MANDATORY STYLES -->
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
        <link href="<?= base_url(); ?>public/assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="<?= base_url(); ?>public/assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
        <link href="<?= base_url(); ?>public/assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="<?= base_url(); ?>public/assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css" />
        <link href="<?= base_url(); ?>public/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css" />
        <!-- END GLOBAL MANDATORY STYLES -->
        <!-- BEGIN PAGE LEVEL PLUGINS -->
        <link href="<?= base_url(); ?>public/assets/global/plugins/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
        <link href="<?= base_url(); ?>public/assets/global/plugins/select2/css/select2-bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- END PAGE LEVEL PLUGINS -->
        <!-- BEGIN THEME GLOBAL STYLES -->
        <link href="<?= base_url(); ?>public/assets/global/css/components.min.css" rel="stylesheet" id="style_components" type="text/css" />
        <link href="<?= base_url(); ?>public/assets/global/css/plugins.min.css" rel="stylesheet" type="text/css" />
        <!-- END THEME GLOBAL STYLES -->
        <!-- BEGIN PAGE LEVEL STYLES -->
        <link href="<?= base_url(); ?>public/assets/pages/css/login.min.css" rel="stylesheet" type="text/css" />
        <link href="<?= base_url(); ?>public/assets/global/plugins/bootstrap-toastr/toastr.min.css" rel="stylesheet" type="text/css" />
        <!-- END PAGE LEVEL STYLES -->
        <!-- BEGIN THEME LAYOUT STYLES -->
        <!-- END THEME LAYOUT STYLES -->
        <link rel="shortcut icon" href="favicon.ico" /> </head>
    <!-- END HEAD -->

    <body class="login">
        <div class="menu-toggler sidebar-toggler"></div>
        <!-- END SIDEBAR TOGGLER BUTTON -->
        <!-- BEGIN LOGO -->
        <div class="logo">
            <a href="<?= base_url(); ?>">
                <img src="<?= base_url() . DISPLAY_LOGO; ?>" alt="<?= get_project_name(); ?>" style="margin: -50px 0 -26px 0" width="150" /> 
            </a>
                <!--<img src="" alt="<?= get_project_name(); ?>" />-->
            <!--</a>-->
        </div>
        <!-- END LOGO -->
        <?php echo $this->load->view($page); ?>
        <!-- BEGIN LOGIN -->

        <!--<div class="copyright"> 2016 © <?= get_project_name(); ?>. </div>-->
        <div class="copyright"> <?= date('Y') . ' © ' . get_project_name(); ?>.</div>
        <!--[if lt IE 9]>
<script src="../assets/global/plugins/respond.min.js"></script>
<script src="../assets/global/plugins/excanvas.min.js"></script> 
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
        <!-- END CORE PLUGINS -->
        <script src="<?= base_url(); ?>public/assets/global/plugins/bootstrap-toastr/toastr.min.js" type="text/javascript"></script>
        <?php
        if (!empty($js_plugin)) {
            foreach ($js_plugin as $value) {
                ?>
                <script src="<?= base_url(); ?>public/assets/global/plugins/<?php echo $value ?>" type="text/javascript"></script>
                <?php
            }
        }
        ?>
        <!-- BEGIN PAGE LEVEL PLUGINS -->
        <script src="<?= base_url(); ?>public/assets/global/plugins/jquery-validation/js/jquery.validate.min.js" type="text/javascript"></script>
        <script src="<?= base_url(); ?>public/assets/global/plugins/jquery-validation/js/additional-methods.min.js" type="text/javascript"></script>
        <script src="<?= base_url(); ?>public/assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
        <!-- END PAGE LEVEL PLUGINS -->
        <!-- BEGIN THEME GLOBAL SCRIPTS -->
        <script src="<?= base_url(); ?>public/assets/global/scripts/app.min.js" type="text/javascript"></script>
        <!-- END THEME GLOBAL SCRIPTS -->
        <!-- BEGIN PAGE LEVEL SCRIPTS -->
        <!--<script src="<?= base_url(); ?>public/assets/pages/scripts/login.min.js" type="text/javascript"></script>-->
        <!--<script src="<?= base_url(); ?>public/assets/pages/scripts/login.js" type="text/javascript"></script>-->
        <script src="<?= base_url(); ?>public/assets/javascripts/login.js" type="text/javascript"></script>

        <?php
        if (!empty($js)) {
            foreach ($js as $value) {
                ?>
                <script src="<?php echo base_url(); ?>public/assets/javascripts/<?php echo $value ?>" type="text/javascript"></script>
                <?php
            }
        }
        ?>
        <!-- END PAGE LEVEL SCRIPTS -->
        <!-- BEGIN THEME LAYOUT SCRIPTS -->
        <!-- END THEME LAYOUT SCRIPTS -->

        <script src="<?php echo base_url(); ?>public/assets/javascripts/common_function.js" type="text/javascript"></script>
        <script>
            var baseurl = "<?php echo base_url(); ?>";
            jQuery(document).ready(function () {
                App.init();
                Login.init();
<?php
if (!empty($init)) {
    foreach ($init as $value) {
        echo $value . ';';
    }
}
?>
            });
        </script>
    </body>
</html>