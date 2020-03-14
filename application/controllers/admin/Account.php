<?php

class Account extends Admin_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('user/account_model');
        $this->load->helper('cookie');
    }

    function index() {
        if (isset($this->session->userdata['valid_admin'])) {
            redirect('admin/dashboard');
        } else {
            $this->login();
        }
    }

    function login() {
        $data['page'] = "admin/account/login";
        $data['var_meta_title'] = 'Login | General Seed Company';
        $data['var_meta_description'] = 'Login';
        $data['var_meta_keyword'] = 'Login';
        $data['js'] = array(
            'admin/login.js'
        );
        $data['js_plugin'] = array(
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['init'] = array(
            'Login.init()'
        );
        
        if ($this->input->post()) {
            $this->email = $this->input->post('username');
            $this->password = $this->input->post('password');
            $this->remember = $this->input->post('remember');
            if ($this->email && $this->password) {

                if ($row = $this->login_check()) {
//                    print_r($row);
//                    exit;
                    if ($this->remember == 'true') {
                        $username_cookies = array(
                            'name' => 'username',
                            'value' => $this->email,
                            'expire' => '86500',
                            'domein' => $this->input->server(),
                            'path' => '/',
                        );
                        $this->input->set_cookie($username_cookies);
                        $password_cookies = array(
                            'name' => 'password',
                            'value' => $this->password,
                            'expire' => '86500',
                            'domein' => $this->input->server(),
                            'path' => '/',
                        );
                        $this->input->set_cookie($password_cookies);
                    } else {
                        $username_cookies = array(
                            'name' => 'username',
                            'value' => '',
                            'expire' => '0',
                            'domein' => $this->input->server(),
                            'path' => '/',
                        );
                        $password_cookies = array(
                            'name' => 'password',
                            'value' => '',
                            'expire' => '0',
                            'domein' => $this->input->server(),
                            'path' => '/',
                        );
                        delete_cookie($username_cookies);
                        delete_cookie($password_cookies);
                    }
                    
                        $redirect = admin_url();
                        $arr1 = array('valid_admin' => array(
                                'username' => $row['var_username'],
                                'name' => $row['var_fname'] . ' ' . $row['var_lname'],
                                'user_type' => $row['user_type'],
                                'user_image' => $row['var_image'],
                                'user_id' => $row['int_glcode'])
                        );
                        $this->session->set_userdata($arr1);

                        $this->json_response['status'] = 'success';
                        $this->json_response['message'] = 'Well done Login Successfully Done..';
                        $this->json_response['redirect'] = $redirect . 'dashboard';
                        echo json_encode($this->json_response);
                        exit;
                } else {
                    $this->json_response['status'] = 'error';
                    $this->json_response['message'] = 'Email address and password does not match';
                    echo json_encode($this->json_response);
                    exit;
                }
            }
        } else {
            $this->load->view(ADMIN_LAYOUT_LOGIN, $data);
        }
    }

    function login_check() {
//        $row = $this->toval->idtorow('var_email_address', $this->email, 'pos_user');
        $row = $this->db->select('gs_user.*')
                        ->from('gs_user')
                        ->where('gs_user.var_email', $this->email)
                        ->get()->row_array();
        if ((!empty($row))) {
            if ($row['var_password'] == md5($this->input->post('password'))) {
                return $row;
            } else {
                return false;
            }
        }
    }

    function logout($type) {
        $this->session->unset_userdata('valid_' . $type);
        redirect(admin_url());
    }

    function sign_up() {

        if ($this->input->post()) {
            $result = $this->account_model->sign_up($this->input->post(), $_FILES);
            if ($result == TRUE) {
                redirect('admin');
            } else {
                echo "error";
                exit;
            }
        }
    }

    function check_mail() {
        if ($this->input->post()) {
            $this->db->where('var_email_address', $this->input->post('mail'));
            $result = $this->db->get('gs_user')->num_rows();
            if ($result == 0) {
                echo 'success';
                exit;
            } else {
                echo 'error';
                exit;
            }
        }
    }

    function social() {
        print_r($this->input->post());
    }

    function forgot_password() {
        if ($this->input->post('forgetemail') != "") {
            $rslt = $this->account_model->forgot_password($this->input->post());
            if ($rslt == TRUE) {
                echo "success";
                exit;
            } else {
                echo "error";
                exit;
            }
        } else {
            echo "error";
            exit;
        }
    }

}

?>