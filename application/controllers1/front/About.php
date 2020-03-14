<?php

class About extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = 'front/cmspages/about';
        $data['about'] = 'active';
        $data['bodypagetitle'] = TRUE;
        $data['image_name'] = '12.jpg';
        $data['pagetitle'] = 'ABOUT OUR COMPANY';
        $data['pagesubtitle'] = 'GET TO KNOW US BETTER';
        $data['breadcrumb_list'] = array(
            array('WHO WE ARE', '')
        );
        $data['var_meta_title'] = 'Angel Graphics Solution About';
        $data['var_meta_description'] = 'Angel Graphics Solution About';
        $data['var_meta_keyword'] = 'Angel Graphics Solution About';
        $data['js'] = array(
            'jquery.carouFredSel-packed.js',
            'kl-recent-work-carousel.js',
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