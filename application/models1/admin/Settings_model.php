<?php

class Settings_model extends CI_Model {

    function update_settings($data, $json_response) {

        $this->load->library('form_validation');
        $config = array(
            array('field' => 'help_phoneno', 'label' => 'Help Phone no', 'rules' => 'required'),
            array('field' => 'cmp_email', 'label' => 'Email address', 'rules' => 'required'),
            array('field' => 'cmp_contactno', 'label' => 'Contact Number', 'rules' => 'required'),
            array('field' => 'office_address', 'label' => 'Office Address', 'rules' => 'required'),
            array('field' => 'google_maplink', 'label' => 'Google Map Link', 'rules' => 'required'),
            array('field' => 'copyrighttxt', 'label' => 'Copyright', 'rules' => 'required')
        );
        $this->form_validation->set_rules($config);
        if ($this->form_validation->run() !== FALSE) {

            if ($_FILES['setting_logo']['name'] != "") {
                delete_image(array('id' => $data['int_glcode'], 'table' => 'ag_settings', 'field' => 'var_logo'), SETTINGS_IMG_PATH);
                $image = upload_single_image($_FILES, 'SETTING', SETTINGS_IMG_PATH, FALSE);
                $var_image = ($image['error'] == '') ? $image['data']['orig_name'] : $data['old_logo'];
            } else {
                $var_image = $data['old_logo'];
            }

            $settingData = array(
                'var_logo' => $var_image,
                'var_fb_link' => $data['fblink'],
                'var_tw_link' => $data['twlink'],
                'var_pt_link' => $data['ptlink'],
                'var_gp_link' => $data['gplink'],
                'var_helpcenter_no' => $data['help_phoneno'],
                'var_cmp_email' => $data['cmp_email'],
                'var_contact_no' => $data['cmp_contactno'],
                'txt_address' => $data['office_address'],
                'txt_google_map_link' => $data['google_maplink'],
                'var_copyright_text' => $data['copyrighttxt']);
            $this->db->where('int_glcode', $data['int_glcode']);
            $this->db->update('ag_settings', $settingData);

            $json_response['message'] = 'Settings Updated Succefully';
            $json_response['status'] = 'success';
        } else {
            $json_response['message'] = validation_errors();
            $json_response['status'] = 'warning';
        }
        return $json_response;
    }
    
    function update_password($data, $json_response) {

        $this->load->library('form_validation');
        $config = array(
            array('field' => 'old_password', 'label' => 'Old Password', 'rules' => 'required'),
            array('field' => 'new_password', 'label' => 'New Password', 'rules' => 'required'),
            
        );
        $this->form_validation->set_rules($config);
        if ($this->form_validation->run() !== FALSE) {

           $check_passweod = $this->db->get_where('gs_wholesale_password',array('var_password' => md5($data['old_password'])))->num_rows();
           if($check_passweod == 1){
                
               $data_array = array(
                   'var_password' => md5($data['new_password']),
               );
               $this->db->where('int_glcode',1);
               $result = $this->db->update('gs_wholesale_password',$data_array);
               
               if ($result) {
                   $redirect = admin_url('wholesale_password');
                   $json_response = sucess_response('Password change Succuessfully!..', $redirect);
                    
                }else{
                    $json_response = error_response('Something went worng!..', $redirect="");
                }
                   
           }else{
               $json_response = error_response('Old Password is worng!..', $redirect="");
           }
            
        } else {
            $json_response['message'] = validation_errors();
            $json_response['status'] = 'warning';
        }
        return $json_response;
    }

}
