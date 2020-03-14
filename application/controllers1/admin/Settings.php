<?php

class Settings extends Admin_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('admin/Settings_model');
    }

   
    function index() {
        $data['page'] = "admin/settings/edit";
        $data['breadcrumb'] = 'Settings';
        $data['breadcrumb_sub'] = 'Edit';
        $data['breadcrumb_list'] = array(
            array('Settings', ''),
            array('Edit', ''),
        );
        $data['settings'] = 'active';
        $data['var_meta_title'] = 'Settings Edit';
        $data['var_meta_description'] = 'Settings Edit';
        $data['var_meta_keyword'] = 'Settings Edit';
        $data['js'] = array(
            'admin/settings.js'
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
            'Settings.init()',
        );
        $data['settingdata'] = $this->db->where('int_glcode','1')->get('ag_settings')->row_array();
        if($this->input->post()){
            
            $this->json_response = $this->Settings_model->update_settings($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('admin/settings');
            }
        }
        
        $this->load->view(ADMIN_LAYOUT, $data);
    }
   
}
?>