<!doctype html>
<html>
    <head>
        
         <?php $this->load->view('front/includes/header'); ?>
    </head>
    <body class="">
        <?php $this->load->view('front/includes/body_header'); ?>
        
        <div class="page_wrapper">
             <?php $this->load->view($page); ?>
            
            </div>
        <div class="bodyfooter">
             <?php $this->load->view('front/includes/body_footer'); ?>
            
        </div>
         <?php $this->load->view('front/includes/footer'); ?>
    </body>
</html>
