<?php

class Contact extends Admin_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('admin/Contact_model');
    }

    function index() {
        
    }

    function venue_list() {
        $data['page'] = "admin/contact/venue_list";
        $data['breadcrumb'] = 'Contact';
        $data['breadcrumb_sub'] = 'Contact';
        $data['breadcrumb_list'] = array(
            array('Contact', '')
        );
        $data['venue_list'] = 'start open active';
        $data['contacts'] = 'start active';
        $data['var_meta_title'] = 'Contact';
        $data['var_meta_description'] = 'Contact';
        $data['var_meta_keyword'] = 'Contact';
        $data['js'] = array(
            'admin/contact.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
            'Contact.init()',
        );

        $data['contact'] = $this->Contact_model->getContact();

        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function add_venue() {
        $data['page'] = "admin/contact/add_venue";
        $data['breadcrumb'] = 'Contact';
        $data['breadcrumb_sub'] = 'Contact';
        $data['breadcrumb_list'] = array(
            array('Contact', '')
        );
        $data['add_venue'] = 'start open active';
        $data['contacts'] = 'start active';
        $data['var_meta_title'] = 'Contact';
        $data['var_meta_description'] = 'Contact';
        $data['var_meta_keyword'] = 'Contact';
        $data['js'] = array(
            'admin/contact.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.css'
        );
        $data['js_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.js',
            'ajaxfileupload.js',
            'jquery.form.min.js', 'ckeditor/ckeditor.js'
        );
        $data['init'] = array(
            'Contact.addvenue_init()',
        );
        if ($this->input->post()) {
            $this->json_response = $this->Contact_model->add($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('contact/venue_list');
            }
        }

        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function edit_venue($id) {
        $data['page'] = "admin/contact/edit_venue";
        $data['breadcrumb'] = 'Contact';
        $data['breadcrumb_sub'] = 'Contact';
        $data['breadcrumb_list'] = array(
            array('Contact', '')
        );
        $data['venue_list'] = 'start open active';
        $data['contacts'] = 'start active';
        $data['var_meta_title'] = 'Contact';
        $data['var_meta_description'] = 'Contact';
        $data['var_meta_keyword'] = 'Contact';
        $data['js'] = array(
            'admin/contact.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.css'
        );
        $data['js_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.js',
            'ajaxfileupload.js',
            'jquery.form.min.js', 'ckeditor/ckeditor.js'
        );
        $data['init'] = array(
            'Contact.editvenue_init()',
        );
        $data['contact'] = $this->Contact_model->getContact($id);
        if ($this->input->post()) {
            $this->json_response = $this->Contact_model->add($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('contact/venue_list');
            }
        }
        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function contact_delete() {
        if ($this->input->post()) {
            $this->json_response = $this->Contact_model->contact_delete($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('contact/venue_list');
            }
        }
    }

    function address_list() {
        $data['page'] = "admin/contact/address_list";
        $data['breadcrumb'] = 'Contact';
        $data['breadcrumb_sub'] = 'Contact';
        $data['breadcrumb_list'] = array(
            array('Contact', '')
        );
        $data['address_list'] = 'start open active';
        $data['contacts'] = 'start active';
        $data['var_meta_title'] = 'Contact';
        $data['var_meta_description'] = 'Contact';
        $data['var_meta_keyword'] = 'Contact';
        $data['js'] = array(
            'admin/contact.js'
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
            'Contact.init()',
        );

        $data['contact_address']= $this->Contact_model->getContactAddress();

        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function add_address() {
        $data['page'] = "admin/contact/add_address";
        $data['breadcrumb'] = 'Contact';
        $data['breadcrumb_sub'] = 'Contact';
        $data['breadcrumb_list'] = array(
            array('Contact', '')
        );
        $data['add_address'] = 'start open active';
        $data['contacts'] = 'start active';
        $data['var_meta_title'] = 'Contact';
        $data['var_meta_description'] = 'Contact';
        $data['var_meta_keyword'] = 'Contact';
        $data['js'] = array(
            'admin/contact.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.css'
        );
        $data['js_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.js',
            'ajaxfileupload.js',
            'jquery.form.min.js', 'ckeditor/ckeditor.js'
        );
        $data['init'] = array(
            'Contact.add_addressinit()',
        );
        $data['contact'] = $this->Contact_model->getContact();
        if ($this->input->post()) {
            $this->json_response = $this->Contact_model->add_address($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('contact/address_list');
            }
        }
        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function edit_address($id) {
        $data['page'] = "admin/contact/edit_address";
        $data['breadcrumb'] = 'Contact';
        $data['breadcrumb_sub'] = 'Contact';
        $data['breadcrumb_list'] = array(
            array('Contact', '')
        );
        $data['address_list'] = 'start open active';
        $data['contacts'] = 'start active';
        $data['var_meta_title'] = 'Contact';
        $data['var_meta_description'] = 'Contact';
        $data['var_meta_keyword'] = 'Contact';
        $data['js'] = array(
            'admin/contact.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.css'
        );
        $data['js_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.js',
            'ajaxfileupload.js',
            'jquery.form.min.js', 'ckeditor/ckeditor.js'
        );
        $data['init'] = array(
            'Contact.edit_addressinit()',
        );
        $data['contact'] = $this->Contact_model->getContact();
        $data['contact_address']= $this->Contact_model->getContactAddress($id);
        if ($this->input->post()) {
            $this->json_response = $this->Contact_model->add_address($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('contact/address_list');
            }
        }
        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function address_delete() {
        if ($this->input->post()) {
            $this->json_response = $this->Contact_model->address_delete($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('contact/venue_list');
            }
        }
    }

}

?>