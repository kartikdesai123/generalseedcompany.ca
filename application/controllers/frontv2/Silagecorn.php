<?php
class Silagecorn extends Front_Controller {

    function __construct() {
        parent::__construct();
        
    }

    function silagecorn() {
        
        $data['page'] = 'frontv2/silagecorn/index';
        $data['title'] = "Silage Corn";
        $data['silage'] = 'active';
       
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }
}
?>
