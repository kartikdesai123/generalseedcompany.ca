<?php

class Digital_wedding_card extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = 'front/digital_wedding_card/list';
        $data['digital_wedding_card'] = 'active';
        
        $data['bodypagetitle'] = TRUE;
        $data['pagetitle'] = 'Digital Wedding Card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Digital Wedding Card', '')
        );
        $data['var_meta_title'] = 'Digital Wedding Card';
        $data['var_meta_description'] = 'Digital Wedding Card';
        $data['var_meta_keyword'] = 'Digital Wedding Card';
        $data['js'] = array(
            'jquery.isotope.min.js',
            'kl-portfolio-sortable.js',
            'kl-portfolio-sortable.js',
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
    
    function detail() {
        $data['page'] = 'front/digital_wedding_card/detail';
        $data['digital_wedding_card'] = 'active';
        $data['bodypagetitle'] = TRUE;
        $data['product_template'] = TRUE;
        $data['pagetitle'] = 'Digital Wedding Card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Digital Wedding Card', '')
        );
        $data['var_meta_title'] = 'Digital Wedding Card';
        $data['var_meta_description'] = 'Digital Wedding Card';
        $data['var_meta_keyword'] = 'Digital Wedding Card';
        $data['js'] = array(
            'shop-cat.js',
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