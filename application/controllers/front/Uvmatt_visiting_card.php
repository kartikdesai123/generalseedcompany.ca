<?php

class Uvmatt_visiting_card extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = 'front/visiting_cards/uvmatt_visiting_card/list';
        $data['visiting_card'] = 'active';
        $data['uvmatt_visiting_card'] = 'active';
        
        $data['bodypagetitle'] = TRUE;
        $data['pagetitle'] = 'UV Matt Visiting Card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Visiting card', ''),
            array('UV Matt Visiting Card', '')
        );
        $data['var_meta_title'] = 'UV Matt Visiting Card';
        $data['var_meta_description'] = 'UV Matt Visiting Card';
        $data['var_meta_keyword'] = 'UV Matt Visiting Card';
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
        $data['page'] = 'front/visiting_cards/uvmatt_visiting_card/detail';
        $data['visiting_card'] = 'active';
        $data['uvmatt_visiting_card'] = 'active';
        $data['bodypagetitle'] = TRUE;
        $data['product_template'] = TRUE;
        $data['pagetitle'] = 'UV Matt Visiting Card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Visiting card', ''),
            array('UV Matt Visiting Card', '')
        );
        $data['var_meta_title'] = 'UV Matt Visiting Card';
        $data['var_meta_description'] = 'UV Matt Visiting Card';
        $data['var_meta_keyword'] = 'UV Matt Visiting Card';
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