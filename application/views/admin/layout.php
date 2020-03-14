<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
    <!--<![endif]-->
    <!-- BEGIN HEADER -->
    <?php $this->load->view('admin/includes/header'); ?>
    <!-- END HEADER -->
    <body class="page-header-fixed page-sidebar-closed-hide-logo page-content-white">
        <!-- BEGIN BODY HEADER -->
        <?php $this->load->view('admin/includes/body_header'); ?>
        <!-- END BODY HEADER -->
        <!-- BEGIN CONTAINER -->
        <div class="page-container">
            <?php $this->load->view('admin/includes/body_leftpanel'); ?>


            <!-- BEGIN CONTENT -->
            <div class="page-content-wrapper">
                <!-- BEGIN CONTENT BODY -->
                <div class="page-content">
                    <!-- BEGIN PAGE HEADER-->
                    <?php $this->load->view('admin/includes/breadcrumbs'); ?>
                    <!-- END PAGE HEADER-->

                    <?php $this->load->view($page); ?>

                </div>
                <!-- END CONTENT BODY -->
            </div>
            <!-- END CONTENT -->

        </div>
        <!-- END CONTAINER -->
        <!-- BEGIN BODY FOOTER -->
        <?php $this->load->view('admin/includes/body_footer'); ?>
        <!-- END BODY FOOTER -->
        <!-- BEGIN FOOTER -->
        <?php $this->load->view('admin/includes/footer'); ?>
        <!-- END FOOTER -->
    </body>
</html>