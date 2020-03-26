<?php
class Silagecorn extends Front_Controller {

    function __construct() {
        parent::__construct();
        
    }

    function silagecorn() {
        
        $data['page'] = 'frontv2/silagecorn/index';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['silage-corn']['title'];
        $data['description'] = $variable['silage-corn']['discription'];
        $data['silage'] = 'active';
       
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }
}
?>
