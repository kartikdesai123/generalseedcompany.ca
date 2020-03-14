<?php

class Profile_model extends CI_Model {

    function editprofiles($data, $json_response) {

        $this->load->library('form_validation');
        $config = array(
            array('field' => 'fname', 'label' => 'First Name', 'rules' => 'required'),
            array('field' => 'lname', 'label' => 'Last Name', 'rules' => 'required'),
            array('field' => 'email', 'label' => 'Email', 'rules' => 'required'),
            array('field' => 'uname', 'label' => 'User Name', 'rules' => 'required'),
            array('field' => 'address', 'label' => 'Address', 'rules' => 'required')
        );
        $this->form_validation->set_rules($config);
        if ($this->form_validation->run() !== FALSE) {
            $this->db->where('int_glcode !=', $data['user_id']);
            $this->db->where('var_email', $data['email']);
            $check_user = $this->db->get('ag_user')->num_rows();
            if ($check_user == 0) {
                $update_data = array(
                    'var_username' => $data['uname'],
                    'var_fname' => $data['fname'],
                    'var_lname' => $data['lname'],
                    'var_email' => $data['email'],
                    'bint_phone' => $data['mnumber'],
                    'dt_dob' => ($data['dob'] != '') ? date('Y-m-d', strtotime($data['dob'])) : NULL,
                    'txt_address' => ($data['address'] != '') ? $data['address'] : NULL,
                );

                if ($this->session->userdata['valid_user']['user_type'] == 'NORMAL') {
                    $this->session->userdata['valid_user']['username'] = $data['uname'];
                    $redirect = user_url('profile');
                } else if ($this->session->userdata['valid_dealer']['user_type'] == 'DEALER') {
                    $this->session->userdata['valid_dealer']['username'] = $data['uname'];
                    $redirect = dealer_url('profile');
                } else {
                    $redirect = admin_url('profile');
                    $this->session->userdata['valid_admin']['username'] = $data['uname'];
                }
                $this->db->where('int_glcode', $data['user_id']);
                $this->db->update('ag_user', $update_data);
                $json_response['message'] = 'Profile Update Successfully!..';
                $json_response['status'] = 'success';
                $json_response['redirect'] = $redirect;
            } else {
                $json_response['message'] = 'Email Is already Exist...';
                $json_response['status'] = 'warning';
            }
        } else {
            $json_response['message'] = validation_errors();
            $json_response['status'] = 'warning';
        }
        return $json_response;
    }

    function changespassword($data, $json_response) {
        $this->load->library('form_validation');
        $config = array(
            array('field' => 'new_pwd', 'label' => 'NewPassword', 'rules' => 'required'),
        );
        $this->form_validation->set_rules($config);
        if ($this->form_validation->run() !== FALSE) {
            $user_data = $this->db->get_where('ag_user', array('int_glcode' => $data['user_id']))->row();
            if ($this->session->userdata['valid_user']['user_type'] == 'NORMAL') {
                $redirect = user_url('profile');
            } else if ($this->session->userdata['valid_dealer']['user_type'] == 'DEALER') {
                $redirect = dealer_url('profile');
            } else {
                $redirect = admin_url('profile');
            }

            if ($user_data->var_password == md5($data['old_pwd'])) {
                $pwd_data = array(
                    'var_password' => md5($data['new_pwd'])
                );
                $this->db->where('int_glcode', $data['user_id']);
                $this->db->update('ag_user', $pwd_data);
                $json_response['message'] = 'Password Update Successfully!..';
                $json_response['status'] = 'success';
                $json_response['redirect'] = $redirect;
            } else {
                $json_response['message'] = 'Current Password is Wrong...';
                $json_response['status'] = 'warning';
            }
        } else {
            $json_response['message'] = validation_errors();
            $json_response['status'] = 'warning';
        }
        return $json_response;
    }

    function login_user_data() {
        $id = $this->user_data['user_id'];
        $res = $this->db->get_where('ag_user', array('int_glcode' => $id))->result_array();
        return $res;
    }

}
