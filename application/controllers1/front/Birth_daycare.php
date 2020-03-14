<?php

class Birth_daycare extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = 'front/invitation_cards/birth_daycare/list';
        $data['invitation_card'] = 'active';
        $data['birth_daycare'] = 'active';
        
        $data['bodypagetitle'] = TRUE;
        $data['pagetitle'] = 'Birth Daycare';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Invitation cards', ''),
            array('Birth Daycare', '')
        );
        $data['var_meta_title'] = 'Birth Daycare';
        $data['var_meta_description'] = 'Birth Daycare';
        $data['var_meta_keyword'] = 'Birth Daycare';
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
        $data['page'] = 'front/invitation_cards/birth_daycare/detail';
        $data['invitation_card'] = 'active';
        $data['birth_daycare'] = 'active';
        $data['bodypagetitle'] = TRUE;
        $data['product_template'] = TRUE;
        $data['pagetitle'] = 'Birth Daycare';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Invitation cards', ''),
            array('Birth Daycare', '')
        );
        $data['var_meta_title'] = 'Birth Daycare';
        $data['var_meta_description'] = 'Birth Daycare';
        $data['var_meta_keyword'] = 'Birth Daycare';
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