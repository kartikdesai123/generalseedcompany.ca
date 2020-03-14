<?php

class Reception_card extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = 'front/invitation_cards/reception_card/list';
        $data['invitation_card'] = 'active';
        $data['reception_card'] = 'active';
        
        $data['bodypagetitle'] = TRUE;
        $data['pagetitle'] = 'Reception card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Reception card', '')
        );
        $data['var_meta_title'] = 'Reception card';
        $data['var_meta_description'] = 'Reception card';
        $data['var_meta_keyword'] = 'Reception card';
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
        $data['page'] = 'front/invitation_cards/reception_card/detail';
        $data['invitation_card'] = 'active';
        $data['reception_card'] = 'active';
        $data['bodypagetitle'] = TRUE;
        $data['product_template'] = TRUE;
        $data['pagetitle'] = 'Reception card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Reception card', '')
        );
        $data['var_meta_title'] = 'Reception card';
        $data['var_meta_description'] = 'Reception card';
        $data['var_meta_keyword'] = 'Reception card';
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