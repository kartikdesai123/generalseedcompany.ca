<?php

class Mundane_card extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = 'front/invitation_cards/mundane_card/list';
        $data['invitation_card'] = 'active';
        $data['mundane_card'] = 'active';
        
        $data['bodypagetitle'] = TRUE;
        $data['pagetitle'] = 'Mundane card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Invitation cards', ''),
            array('Mundane card', '')
        );
        $data['var_meta_title'] = 'Mundane card';
        $data['var_meta_description'] = 'Mundane card';
        $data['var_meta_keyword'] = 'Mundane card';
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
        $data['page'] = 'front/invitation_cards/mundane_card/detail';
        $data['invitation_card'] = 'active';
        $data['mundane_card'] = 'active';
        $data['bodypagetitle'] = TRUE;
        $data['product_template'] = TRUE;
        $data['pagetitle'] = 'Mundane card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Invitation cards', ''),
            array('Mundane card', '')
        );
        $data['var_meta_title'] = 'Mundane card';
        $data['var_meta_description'] = 'Mundane card';
        $data['var_meta_keyword'] = 'Mundane card';
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