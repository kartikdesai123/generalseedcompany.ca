<!DOCTYPE html lang="en">
<html>
    <head>
         <?php $this->load->view('frontv2/layout/includes/header'); ?>
        
    </head>
    <body>
        <?php $this->load->view('frontv2/layout/includes/bodyheader'); ?>
        
        <?php $this->load->view($page); ?>
       
        <?php $this->load->view('frontv2/layout/includes/bodyfooter'); ?>
        
        <?php $this->load->view('frontv2/layout/includes/footer'); ?>
     
   </body>
</html>
