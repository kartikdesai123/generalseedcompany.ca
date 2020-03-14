<?php

class Muslim_collection extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = 'front/wedding_card/muslim_collection/list';
        $data['wedding_card'] = 'active';
        $data['muslim_collection'] = 'active';
        
        $data['bodypagetitle'] = TRUE;
        $data['pagetitle'] = 'Muslim Collection';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Wedding Card', ''),
            array('Muslim Collection', ''),
        );
        $data['var_meta_title'] = 'Muslim Collection';
        $data['var_meta_description'] = 'Muslim Collection';
        $data['var_meta_keyword'] = 'Muslim Collection';
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
        $data['page'] = 'front/wedding_card/muslim_collection/detail';
        $data['wedding_card'] = 'active';
        $data['muslim_collection'] = 'active';
        $data['bodypagetitle'] = TRUE;
        $data['product_template'] = TRUE;
        $data['pagetitle'] = 'Muslim Collection';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Wedding Card', ''),
            array('Muslim Collection', ''),
        );
        $data['var_meta_title'] = 'Muslim Collection';
        $data['var_meta_description'] = 'Muslim Collection';
        $data['var_meta_keyword'] = 'Muslim Collection';
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