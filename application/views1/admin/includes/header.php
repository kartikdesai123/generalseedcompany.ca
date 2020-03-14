<head>
    <meta charset="utf-8"/>
    <?php
    $title = empty($var_meta_title) ? get_project_name() : $var_meta_title . ' | ' . get_project_name();
    $description = empty($var_meta_description) ? get_project_name() : $var_meta_description . ' | ' . get_project_name();
    $keywords = empty($var_meta_keyword) ? get_project_name() : $var_meta_keyword . ' | ' . get_project_name();
    ?>
    <title><?= $title; ?></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="<?= $description; ?>" name="description" />
    <meta content="<?= $keywords; ?>" name="author" />

    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    <link href="<?= base_url(); ?>public/assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="<?= base_url(); ?>public/assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
    <link href="<?= base_url(); ?>public/assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="<?= base_url(); ?>public/assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css" />
    <link href="<?= base_url(); ?>public/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css" />
    <link href="<?= base_url(); ?>public/assets/global/plugins/bootstrap-toastr/toastr.min.css" rel="stylesheet" type="text/css" />
    <link href="<?= base_url(); ?>public/assets/global/plugins/datatables/datatables.min.css" rel="stylesheet" type="text/css" />
    <link href="<?= base_url(); ?>public/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="<?= base_url(); ?>public/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css" rel="stylesheet" type="text/css" />    
    <!-- END GLOBAL MANDATORY STYLES -->
    <!-- BEGIN PAGE LEVEL PLUGINS -->
    <!--<link href="<?= base_url(); ?>public/assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css" rel="stylesheet" type="text/css" />-->
    <!--<link href="<?= base_url(); ?>public/assets/global/plugins/morris/morris.css" rel="stylesheet" type="text/css" />-->
    <!--<link href="<?= base_url(); ?>public/assets/global/plugins/fullcalendar/fullcalendar.min.css" rel="stylesheet" type="text/css" />-->
    <!--<link href="<?= base_url(); ?>public/assets/global/plugins/jqvmap/jqvmap/jqvmap.css" rel="stylesheet" type="text/css" />-->
    <!-- END PAGE LEVEL PLUGINS -->

    <link href="<?= base_url(); ?>public/assets/global/plugins/datatables/datatables.min.css" rel="stylesheet" type="text/css" />
    <link href="<?= base_url(); ?>public/assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css" rel="stylesheet" type="text/css" />
    <link href="<?= base_url(); ?>public/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css" rel="stylesheet" type="text/css" />

    <!-- BEGIN THEME GLOBAL STYLES -->
    <link href="<?= base_url(); ?>public/assets/global/css/components.min.css" rel="stylesheet" id="style_components" type="text/css" />
    <link href="<?= base_url(); ?>public/assets/global/css/plugins.min.css" rel="stylesheet" type="text/css" />
    <!-- END THEME GLOBAL STYLES -->
    <!-- BEGIN THEME LAYOUT STYLES -->
    <link href="<?= base_url(); ?>public/assets/layouts/layout/css/layout.min.css" rel="stylesheet" type="text/css" />
    <link href="<?= base_url(); ?>public/assets/layouts/layout/css/themes/darkblue.min.css" rel="stylesheet" type="text/css" id="style_color" />
    <link href="<?= base_url(); ?>public/assets/layouts/layout/css/themes/darkgreen.min.css" rel="stylesheet" type="text/css" id="style_color" />
    <link href="<?= base_url(); ?>public/assets/layouts/layout/css/custom.css" rel="stylesheet" type="text/css" />
    <?php if ($profile_tag == TRUE) { ?>
        <link href="<?= base_url(); ?>public/assets/pages/css/profile.min.css" rel="stylesheet" type="text/css" />
    <?php } ?>

    <link href="<?= base_url(); ?>public/assets/global/plugins/select2/css/select2.min.css" rel="stylesheet" type="text/css">
    <link href="<?= base_url(); ?>public/assets/global/plugins/select2/css/select2-bootstrap.min.css" rel="stylesheet" type="text/css">

    <!-- END THEME LAYOUT STYLES -->

    <?php
    if (!empty($css)) {
        foreach ($css as $value) {
            ?>
            <link rel="stylesheet" href="<?= base_url(); ?>public/assets/layouts/layout/css/<?php echo $value; ?>" />
            <?php
        }
    }
    ?>
    <?php
    if (!empty($css_plugin)) {
        foreach ($css_plugin as $value_plugin) {
            ?>
            <link rel="stylesheet" href="<?= base_url(); ?>public/assets/global/plugins/<?php echo $value_plugin; ?>" />
            <?php
        }
    }
    ?>  

    <link rel="shortcut icon" href="favicon.ico" />
    <script type="text/javascript">
        var baseurl = "<?php echo base_url(); ?>";
        var adminurl = "<?php echo admin_url(); ?>";
    </script>
    <script src="<?= base_url(); ?>public/assets/global/plugins/jquery.min.js" type="text/javascript"></script>
</head>
