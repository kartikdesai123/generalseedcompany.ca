<?php

class Wholesale_password extends Admin_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('admin/Settings_model');
    }

    function index() {
        $data['page'] = "admin/wholesale/wholesale";
        $data['breadcrumb'] = 'Wholesale';
        $data['breadcrumb_sub'] = 'List';
        $data['breadcrumb_list'] = array(
            array('wholesale', '')
        );
        
        $data['wholesale_password'] = 'active';
        $data['var_meta_title'] = 'Wholesale';
        $data['var_meta_description'] = 'Wholesale';
        $data['var_meta_keyword'] = 'Wholesale';
        $data['js'] = array(
            'admin/wholesale.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
            'Wholesale.init()',
        );
        $this->load->view(ADMIN_LAYOUT, $data);
    }
    
    function setpassword(){
       if($this->input->post()){
            $this->json_response = $this->Settings_model->update_password($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('admin/wholesale_password');
            }
        }
    }
}
?>