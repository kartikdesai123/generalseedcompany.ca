<?php

class Printing_services extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = 'front/printing_service/list';
        $data['printing_services'] = 'active';
        
        $data['bodypagetitle'] = TRUE;
        $data['pagetitle'] = 'Printing Services';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Printing Services', '')
        );
        $data['var_meta_title'] = 'Printing Services';
        $data['var_meta_description'] = 'Printing Services';
        $data['var_meta_keyword'] = 'Printing Services';
        $data['js'] = array(
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
        );
        $this->load->view(FRONT_LAYOUT, $data);
    }
    
}

?>