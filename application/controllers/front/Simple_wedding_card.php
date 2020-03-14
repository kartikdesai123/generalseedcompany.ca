<?php

class Simple_wedding_card extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = 'front/wedding_card/simple_wedding_card/list';
        $data['wedding_card'] = 'active';
        $data['simple_wedding_card'] = 'active';
        
        $data['bodypagetitle'] = TRUE;
        $data['pagetitle'] = 'Simple Wedding Card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Wedding Card', ''),
            array('Simple Wedding Card', ''),
        );
        $data['var_meta_title'] = 'Simple Wedding Card';
        $data['var_meta_description'] = 'Simple Wedding Card';
        $data['var_meta_keyword'] = 'Simple Wedding Card';
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
        $data['page'] = 'front/wedding_card/simple_wedding_card/detail';
        $data['wedding_card'] = 'active';
        $data['simple_wedding_card'] = 'active';
        $data['bodypagetitle'] = TRUE;
        $data['product_template'] = TRUE;
        $data['pagetitle'] = 'Simple Wedding Card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Wedding Card', ''),
            array('Simple Wedding Card', ''),
        );
        $data['var_meta_title'] = 'Simple Wedding Card';
        $data['var_meta_description'] = 'Simple Wedding Card';
        $data['var_meta_keyword'] = 'Simple Wedding Card';
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