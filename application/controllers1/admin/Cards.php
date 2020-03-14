<?php

class Cards extends Admin_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('admin/Cards_model');
    }

    function index() {
        $data['page'] = "admin/cards/list";
        $data['breadcrumb'] = 'Cards';
        $data['breadcrumb_sub'] = 'List';
        $data['breadcrumb_list'] = array(
            array('Cards', '')
        );
        $data['card_list'] = 'start open active';
        $data['cards'] = 'start active';
        $data['var_meta_title'] = 'Cards';
        $data['var_meta_description'] = 'Cards';
        $data['var_meta_keyword'] = 'Cards';
        $data['js'] = array(
            'admin/cards.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
            'Cards.init()',
        );
        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function add() {
        $data['page'] = "admin/cards/add";
        $data['breadcrumb'] = 'Cards';
        $data['breadcrumb_sub'] = 'Add';
        $data['breadcrumb_list'] = array(
            array('Cards', 'cards'),
            array('Add', ''),
        );
        $data['card_add'] = 'start open active';
        $data['cards'] = 'start active';
        $data['var_meta_title'] = 'Add Cards';
        $data['var_meta_description'] = 'Add Cards';
        $data['var_meta_keyword'] = 'Add Cards';
        $data['js'] = array(
            'admin/cards.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.css'
        );
        $data['js_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.js',
            'ajaxfileupload.js',
            'jquery.form.min.js',
        );
        $data['init'] = array(
            'Cards.add_init()',
        );
        $data['caregorydata'] = $this->Common_model->getAllCardCategory();

        if ($this->input->post()) {
            $this->json_response = $this->Cards_model->add($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('admin/cards');
            }
        }
        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function edit($id) {
        $data['page'] = "admin/cards/edit";
        $data['breadcrumb'] = 'Cards';
        $data['breadcrumb_sub'] = 'Edit';
        $data['breadcrumb_list'] = array(
            array('Cards', 'cards'),
            array('Edit', ''),
        );
        $data['card_list'] = 'start open active';
        $data['cards'] = 'start active';
        $data['var_meta_title'] = 'Edit Cards';
        $data['var_meta_description'] = 'Edit Cards';
        $data['var_meta_keyword'] = 'Edit Cards';
        $data['js'] = array(
            'admin/cards.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
            'Cards.edit_init()',
        );
        $this->load->view(ADMIN_LAYOUT, $data);
    }

}

?>