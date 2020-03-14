<?php

class Profile extends Admin_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {

        $data['page'] = "admin/profile/profile";
        $data['breadcrumb'] = 'Profile';
        $data['breadcrumb_sub'] = 'Profile';
        $data['breadcrumb_list'] = array(
            array('Profile', '')
        );
        $data['profile'] = 'active open';
        $data['var_meta_title'] = 'Profile';
        $data['var_meta_description'] = 'Profile';
        $data['var_meta_keyword'] = 'Profile';
        $data['profile_tag'] = TRUE;
        $data['js'] = array(
            'admin/profile.js',
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
            'bootstrap-fileinput/bootstrap-fileinput.css'
        );
        $data['js_plugin'] = array(
            'bootstrap-datepicker/js/bootstrap-datepicker.min.js',
            'bootstrap-fileinput/bootstrap-fileinput.js',
            'ajaxfileupload.js',
            'jquery.form.min.js',
        );
        $data['init'] = array(
            'Profile.pinit()',
            'ComponentsDateTimePickers.init()',
        );
        $id = $this->user_data['user_id'];
        $data['profiles'] = $this->db->get_where('ag_user', array('int_glcode' => $id))->result_array();

        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function editdetail() {
        if ($this->input->post()) {
//            print_r($this->input->post());exit;
            $this->json_response = $this->Profile_model->editprofiles($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('admin/profile');
            }
        }
    }
    
    function passdetail() {
        if ($this->input->post()) {
            $this->json_response = $this->Profile_model->changespassword($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('admin/profile');
            }
        }
    }

    function profile_image() {
//        print_r($_FILES); exit;
        $old_img = $this->input->post('old_profile');
        if ($_FILES['edit_profile']['name'] != "") {
            delete_image(array('id' => $this->input->post('int_glcode'), 'table' => 'ag_user', 'field' => 'var_image'), PROFILE_PIC_IMAGE_PATH);
            $image = upload_single_image($_FILES, 'PROFILE', PROFILE_PIC_IMAGE_PATH, FALSE);
            $var_image = ($image['error'] == '') ? $image['data']['orig_name'] : $data['old_profile'];
        }
        $array = array('var_image' => $var_image);
        $this->db->where('int_glcode', $this->input->post('int_glcode'));
        $result = $this->db->update('ag_user', $array);

        $this->session->userdata['valid_admin']['user_image'] = $var_image;
        $this->json_response['status'] = 'success';
        $this->json_response['message'] = 'Profile Pic updated Successfully!..';
        $this->json_response['redirect'] = admin_url('profile');
        if ($this->input->is_ajax_request()) {
            echo json_encode($this->json_response);
            exit();
        } else {
            echo 'error';
            exit;
        }
    }

}

?>