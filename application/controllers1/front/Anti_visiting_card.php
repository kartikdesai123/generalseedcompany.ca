<?php

class Anti_visiting_card extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = 'front/visiting_cards/anti_visiting_card/list';
        $data['visiting_card'] = 'active';
        $data['anti_visiting_card'] = 'active';
        
        $data['bodypagetitle'] = TRUE;
        $data['pagetitle'] = 'Anti Visiting card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Visiting card', ''),
            array('Anti Visiting card', '')
        );
        $data['var_meta_title'] = 'Anti Visiting card';
        $data['var_meta_description'] = 'Anti Visiting card';
        $data['var_meta_keyword'] = 'Anti Visiting card';
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
        $data['page'] = 'front/visiting_cards/anti_visiting_card/detail';
        $data['visiting_card'] = 'active';
        $data['anti_visiting_card'] = 'active';
        $data['bodypagetitle'] = TRUE;
        $data['product_template'] = TRUE;
        $data['pagetitle'] = 'Anti Visiting card';
        $data['pagesubtitle'] = '';
        $data['breadcrumb_list'] = array(
            array('Reception card', '')
        );
        $data['var_meta_title'] = 'Anti Visiting card';
        $data['var_meta_description'] = 'Anti Visiting card';
        $data['var_meta_keyword'] = 'Anti Visiting card';
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