<?php

class Account extends Admin_Controller {

    function __construct() {
        parent::__construct();
       $this->load->model('user/account_model');
        $this->load->helper('cookie');
    }

    function index() {
        if ($this->session->userdata['valid_admin'] && $this->uri->segment(1) == 'admin') {
            redirect('admin/dashboard');
        } else {
            $this->login();
        }
    }

    function login() {
//         $data['page'] = "admin/account/login";
        $data['page'] = "user/account/login";
        $data['var_meta_title'] = 'Login';
        $data['var_meta_description'] = 'Login';
        $data['var_meta_keyword'] = 'Login';
        $data['js'] = array(
            'login.js'
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

                if ($row = $this->login_check($this->email, $this->password)) {

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

                        $sess_arr = array(
                            'username' => $row['var_fname'],
                            'name' => $row['var_fname'] . ' ' . $row['var_lname'],
                            'var_fname' => $row['var_fname'],
                            'var_lname' => $row['var_fname'],
                            'user_type' => $row['user_type'],
                            'user_image' => $row['var_image'],
                            'var_email' => $row['var_email'],
                            'bint_phone' => $row['bint_phone'],
                            'user_id' => $row['int_glcode']);

                        $arr1 = array('valid_admin' => $sess_arr);

//                        $redirect = user_url();
                        $this->session->set_userdata($arr1);


                        $this->json_response['status'] = 'success';
                        $this->json_response['message'] = 'Well Done Login Successfully Done..';
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

    function logout() {
        $this->session->unset_userdata('valid_admin');
        redirect(base_url());
    }

    function signup() {

        $data['page'] = "user/account/register";
        $data['var_meta_title'] = 'Login';
        $data['var_meta_description'] = 'Login';
        $data['var_meta_keyword'] = 'Login';
        $data['flag'] = 'no_padding';
        $data['js'] = array(
            'login.js'
        );
        $data['js_plugin'] = array(
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['init'] = array(
            'Login.signup_init()',
            'ComponentsDateTimePickers.init_datepicker()',
        );

        if ($this->input->post()) {
            $this->db->trans_start();
            $this->json_response = $this->account_model->sign_up($this->input->post(), $this->json_response);
            $this->db->trans_complete();
            if ($this->db->trans_status() === FALSE) {
                redirect();  //error
            } else {
                if ($this->input->is_ajax_request()) {
                    echo json_encode($this->json_response);
                    exit();
                } else {
                    redirect();
                }
            }
        }
        $this->load->view(USER_LAYOUT_LOGIN, $data);
    }

    function check_mail() {
        if ($this->input->post()) {
            $this->db->where('var_email', $this->input->post('mail'));
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

    /*  Start new user email varification function */

    function emailvarify($id) {
        if ($id) {
            $result = $this->account_model->email_verify($id);
            if ($result) {
                $status = 'success';
                $message = 'Varification Successfully!..';
                $redirect = base_url('');
            } else {
                $status = 'warning';
                $message = 'Token not found..';
                $redirect = base_url('');
            }
            $string = '?status=' . $status . '&message=' . $message . '&redirect=' . $redirect;
            redirect($string);
        }
        $this->load->view(USER_LAYOUT_LOGIN, $data);
    }

    /*  End new user email varification function */
}

?>