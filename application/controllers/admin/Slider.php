<?php

class Slider extends Admin_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = "admin/slider/list";
        $data['breadcrumb'] = 'Slider';
        $data['breadcrumb_sub'] = 'List';
        $data['breadcrumb_list'] = array(
            array('Slider', '')
        );
        $data['slider_list'] = 'open active';
        $data['slider'] = 'active';
        $data['var_meta_title'] = 'Slider';
        $data['var_meta_description'] = 'Slider';
        $data['var_meta_keyword'] = 'Slider';
        $data['js'] = array(
            'admin/slider.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
            'Slider.init()',
        );
        $this->load->view(ADMIN_LAYOUT, $data);
    }
    function add() {
        $data['page'] = "admin/slider/add";
        $data['breadcrumb'] = 'Slider';
        $data['breadcrumb_sub'] = 'Add';
        $data['breadcrumb_list'] = array(
            array('Slider', 'slider'),
            array('Add', ''),
        );
        $data['slider_add'] = 'start open active';
        $data['slider'] = 'start active';
        $data['var_meta_title'] = 'Add Slider';
        $data['var_meta_description'] = 'Add Slider';
        $data['var_meta_keyword'] = 'Add Slider';
        $data['js'] = array(
            'admin/slider.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
            'Slider.add_init()',
        );
        $this->load->view(ADMIN_LAYOUT, $data);
    }
    function edit($id) {
        $data['page'] = "admin/slider/edit";
        $data['breadcrumb'] = 'Slider';
        $data['breadcrumb_sub'] = 'Edit';
        $data['breadcrumb_list'] = array(
            array('Slider', 'slider'),
            array('Edit', ''),
        );
        $data['slider_list'] = 'start open active';
        $data['slider'] = 'start active';
        $data['var_meta_title'] = 'Edit Slider';
        $data['var_meta_description'] = 'Edit Slider';
        $data['var_meta_keyword'] = 'Edit Slider';
        $data['js'] = array(
            'admin/slider.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
            'Slider.edit_init()',
        );
        $this->load->view(ADMIN_LAYOUT, $data);
    }
}
?>