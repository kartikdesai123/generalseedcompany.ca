<?php

class Nri_collection extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = 'front/wedding_card/nri_collection/list';
        $data['wedding_card'] = 'active';
        $data['nri_collection'] = 'active';
        
        $data['bodypagetitle'] = TRUE;
        $data['pagetitle'] = 'NRI Collection';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Wedding Card', ''),
            array('NRI Collection', ''),
        );
        $data['var_meta_title'] = 'NRI Collection';
        $data['var_meta_description'] = 'NRI Collection';
        $data['var_meta_keyword'] = 'NRI Collection';
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
        $data['page'] = 'front/wedding_card/nri_collection/detail';
        $data['wedding_card'] = 'active';
        $data['nri_collection'] = 'active';
        $data['bodypagetitle'] = TRUE;
        $data['product_template'] = TRUE;
        $data['pagetitle'] = 'NRI Collection';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Wedding Card', ''),
            array('NRI Collection', ''),
        );
        $data['var_meta_title'] = 'NRI Collection';
        $data['var_meta_description'] = 'NRI Collection';
        $data['var_meta_keyword'] = 'NRI Collection';
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