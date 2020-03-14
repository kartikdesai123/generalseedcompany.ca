<?php

class Wedding_website extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = 'front/wedding_website/list';
        $data['wedding_website'] = 'active';
        $data['bodypagetitle'] = TRUE;
        $data['pagetitle'] = 'Wedding Website';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Wedding Website', '')
        );
        $data['var_meta_title'] = 'Wedding Website';
        $data['var_meta_description'] = 'Wedding Website';
        $data['var_meta_keyword'] = 'Wedding Website';
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
        $data['page'] = 'front/wedding_website/detail';
        $data['wedding_website'] = 'active';
        $data['bodypagetitle'] = TRUE;
        $data['product_template'] = TRUE;
        $data['pagetitle'] = 'Wedding Website';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Wedding Website', ''),
        );
        $data['var_meta_title'] = 'Wedding Website';
        $data['var_meta_description'] = 'Wedding Website';
        $data['var_meta_keyword'] = 'Wedding Website';
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