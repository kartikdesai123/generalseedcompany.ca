<?php

class Matt_rising_card extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = 'front/visiting_cards/matt_rising_card/list';
        $data['visiting_card'] = 'active';
        $data['matt_rising_card'] = 'active';
        
        $data['bodypagetitle'] = TRUE;
        $data['pagetitle'] = 'Matt Rising card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Visiting card', ''),
            array('Matt Rising card', '')
        );
        $data['var_meta_title'] = 'Matt Rising card';
        $data['var_meta_description'] = 'Matt Rising card';
        $data['var_meta_keyword'] = 'Matt Rising card';
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
        $data['page'] = 'front/visiting_cards/matt_rising_card/detail';
        $data['visiting_card'] = 'active';
        $data['matt_rising_card'] = 'active';
        $data['bodypagetitle'] = TRUE;
        $data['product_template'] = TRUE;
        $data['pagetitle'] = 'Matt Rising card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Visiting card', ''),
            array('Matt Rising card', '')
        );
        $data['var_meta_title'] = 'Matt Rising card';
        $data['var_meta_description'] = 'Matt Rising card';
        $data['var_meta_keyword'] = 'Matt Rising card';
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