<?php

class Account_model extends CI_Model {

    function sign_up($data, $json_response) {
        //print_r($data);exit;

        $this->load->library('form_validation');
        $config = array(
            array('field' => 'fname', 'label' => 'First Name', 'rules' => 'required'),
            array('field' => 'lname', 'label' => 'Last Name', 'rules' => 'required'),
            //            array('field' => 'username', 'label' => 'Username', 'rules' => 'required'),
            array('field' => 'email', 'label' => 'Email', 'rules' => 'required'),
            array('field' => 'password', 'label' => 'Password', 'rules' => 'required'),
            array('field' => 'repassword', 'label' => 'Re Password', 'rules' => 'required'),
            array('field' => 'phone', 'label' => 'Phone', 'rules' => 'required'),
            array('field' => 'dob', 'label' => 'Date of birth', 'rules' => 'required'),
            array('field' => 'address', 'label' => 'Address', 'rules' => 'required'),
            array('field' => 'tnc', 'label' => 'Terms', 'rules' => 'required')
        );

        $this->form_validation->set_rules($config);
        if ($this->form_validation->run() !== FALSE) {
            /* Start Unique email validation for new user */
            $email_validation = array('email' => $data['email'],);
            $this->json_response = $this->Common_model->unique_email($email_validation);
            if ($this->json_response['status'] == 'error') {
                echo json_encode($this->json_response);
                exit();
            }


            /* Insert User Detail in "ag_user" */
            $dob = date_format(date_create($data['dob']), 'Y-m-d');
            $token = $this->Common_model->getPassword();
            $data_user = array(
                'enum_is_registered_user' => 'NO',
                'var_fname' => $data['fname'],
                'var_lname' => $data['lname'],
                //'var_username' => $data['username'],
                'var_email' => $data['email'],
                'var_password' => md5($data['password']),
                'bint_phone' => $data['phone'],
                'dt_dob' => $dob,
                'enum_is_email_verified' => 'NO',
                'var_token' => $token,
                'fk_user_type' => '2',
                'txt_address' => $data['address'],
                'enum_is_registered_user' => date('Y-m-d H:i:s'),
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            $this->db->insert('ag_user', $data_user);
            $last_insert_user_id = $this->db->insert_id();
            $url = base64_encode(json_encode(array('token' => $token)));

            /* Insert Store Detail in "ag_store" */
            $data_store = array(
                'fk_admin_user' => $last_insert_user_id,
                'bint_phone_number' => $data['phone'],
                'var_email' => $data['email'],
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            $this->db->insert('ag_store', $data_store);
            $last_insert_store_id = $this->db->insert_id();


            /* Insert Store has User Detail in "ag_store_has_user" */
            $data_store_has_user = array(
                'fk_store' => $last_insert_store_id,
                'fk_user' => $last_insert_user_id
            );
            $this->db->insert('ag_store_has_user', $data_store_has_user);


            /* Insert Store has Email Setting in "ag_store_has_email_setting" */
            $data_store_has_email = array(
                'fk_store' => $last_insert_store_id,
                'enum_send_to_from_email' => 'YES',
                //                'var_from_name' => $data['username'],
                'var_from_email' => $data['email'],
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            $this->db->insert('ag_store_has_email_setting', $data_store_has_email);
            $last_insert_store_has_email_setting_id = $this->db->insert_id();


            /* Insert Store has Email Setting in "ag_store_has_proccessing_setting" */
            $data_store_has_process = array(
                'fk_store' => $last_insert_store_id,
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            $this->db->insert('ag_store_has_proccessing_setting', $data_store_has_process);
            $last_insert_store_has_process_setting_id = $this->db->insert_id();


            /* Insert Store has Email Setting in "ag_store_has_proccessing_setting" */
            $data_store_has_receipt = array(
                'fk_store' => $last_insert_store_id,
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            $this->db->insert('ag_store_has_receipt_settings', $data_store_has_receipt);
            $last_insert_store_has_receipt_setting_id = $this->db->insert_id();


            /* Insert Store has Email Setting in "ag_keyboard_layout" *** */
            $data_keyboard = array(
                'fk_access_status' => STATUS_ENABLE,
                'enum_default' => 'YES',
                'var_layout_name' => DEFAULT_LAYOUT,
                'fk_store' => $last_insert_store_id,
                'fk_loggedin_user' => $last_insert_user_id,
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            $this->db->insert('ag_keyboard_layout', $data_keyboard);

            /* Insert Cashier Detail in "ag_cashier" */
            $data_cashier = array(
                'fk_access_status' => STATUS_ENABLE,
                'enum_is_default' => 'YES',
                'fk_store' => $last_insert_store_id,
                'fk_loggedin_user' => $last_insert_user_id,
                'var_email' => $data['email'],
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            $this->db->insert('ag_cashier', $data_cashier);
            $last_insert_cashier_id = $this->db->insert_id();

            /* Insert Cashier Detail in "ag_cashier_has_permission" */
            $data_cashier_has = array(
                'fk_cashier' => $last_insert_cashier_id,
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            $this->db->insert('ag_cashier_has_permission', $data_cashier_has);


            /* Start Insert User Detail in "ag_user_has_subscription" */
            $subscription = $this->toval->idtorow('int_glcode', '1', 'ag_subscription_plan');
            //            $default_demo_day = $this->toval->idtorow('var_key', 'DEFAULT_DEMO_DAYS', 'ag_system_setting', 'var_value');
            $default_demo_day = $this->Common_model->getSystemSetting('DEFAULT_DEMO_DAYS');
            $days = '+' . $default_demo_day . ' days';
            $endDate = date("Y-m-d h:i:s", strtotime($days, strtotime(date('Y-m-d  H:i:s'))));
            //            $endDate = date("Y-m-d h:i:s", strtotime("+1 month", strtotime(date('Y-m-d  H:i:s'))));

            $data_subscription = array(
                'fk_store' => $last_insert_store_id,
                'fk_admin_user' => $last_insert_user_id,
                'fk_subscription' => $subscription->int_glcode,
                'var_subscription_name' => $subscription->var_subscription_name,
                'flt_monthly_price' => $subscription->flt_price,
                'flt_extra_terminal_cost' => '',
                'flt_total_monthly_price' => '',
                'int_terminal' => $subscription->int_max_terminal,
                'int_extra_terminal' => 0,
                'int_total_terminal' => 0 + $subscription->int_max_terminal,
                'dt_subscription_start_date' => date('Y-m-d H:i:s'),
                'dt_subscription_end_date' => $endDate,
                'enum_able_to_add_terminal' => $subscription->enum_able_to_add_terminal,
                'flt_cost_per_terminal' => $subscription->flt_cost_per_terminal,
                'enum_status' => 'CURRENT',
                'enum_payment_status' => PAID_STATUS,
                'enum_is_demo' => 'YES',
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            $this->db->insert('ag_user_has_subscription', $data_subscription);
            /* End Insert User Detail in "ag_user_has_subscription" */


            /* Insert Cashier Detail in "ag_store_has_terminals" */
            $data_has_terminal = array(
                'fk_store' => $last_insert_store_id,
                'int_total_terminal' => $subscription->int_max_terminal,
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            $this->db->insert('ag_store_has_terminals', $data_has_terminal);


            // for send mail using smtp with for new register user
            $urls = base_url() . 'account/emailvarify/' . $url;
            $mail_body = '<p><h3>Hello "' . $data['fname'] . '   ' . $data['lname'] . '"</h3></p>';
            $mail_body .='<p>Demo User registration.</p>';
            $mail_body .='<p>Your registration successfully.</p>';
            $mail_body .='<p>Your Email : <b>' . $data['email'] . '</b></p>';
            $mail_body .='<p>Thanks for registeration.</p>';
            $mail_body .='<p><b>Click Below Link Varify Your email</b>.</p>';
            //            $mail_body .='<p style="margin:5px 0">' . $urls . '</p>';
            $mail_body .='<p style="margin:5px 0"><a href="' . $urls . '">' . $urls . ' </a></p>';
            $mail_body .='<p>Regard,</p>';
            $mail_body .='<p>Admin</p>';

            $this->load->library('Mylibrary');
            $config['from_name'] = 'Possystem.com';
            $config['to'] = $data['email'];
            $config['subject'] = 'Registration success';
            $config['mail_body'] = $mail_body;
            $this->mylibrary->sendMail($config);

            $json_response['message'] = 'Registration Succuessfully!..';
            $json_response['status'] = 'success';
            $json_response['redirect'] = base_url();
        } else {
            $json_response['message'] = validation_errors();
            $json_response['status'] = 'warning';
        }
        return $json_response;
    }

    function forgot_password($data) {
        $condition = array('var_email' => $data['forgetemail']);
        $this->db->select('*')->from('ag_user')->where($condition);
        $query = $this->db->get();
        if ($query->num_rows() != 0) {
            $result_array = $query->result_array();

            $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            $auto_pass = '';
            for ($i = 0; $i < 7; $i++) {
                $auto_pass .= $characters[mt_rand(0, 61)];
            }
            $content = array(
                'var_password' => md5($auto_pass),
            );
            $this->db->where('int_glcode', $result_array[0]['int_glcode']);
            $this->db->update('ag_user', $content);
            $user_detail = $this->db->get_where('ag_user', array('var_email' => $data['forgetemail']))->result_array();
            $mail_body = '<p><h3>Hello "' . $user_detail[0]['var_fname'] . ' ' . $user_detail[0]['var_lname'] . '"</h3></p>';
            $mail_body .='<p>Here is Your New Password.</p>';
            $mail_body .='<p>New Password :<b>  ' . $auto_pass . '</b></p>';
            $mail_body .='<p>Please Save it.</p>';
            $mail_body .='<p>Regard,</p>';
            $mail_body .='<p>Angelgraphics  Admin </p>';

//            $this->load->library('email');
//            $this->email->from('patel_mayur_ce@yahoo.in', 'Angelgraphics');
//            $this->email->to($user_detail[0]['var_email']);
//            $this->email->subject('Forgot Password');
//            $this->email->message($mail_body);
//            $this->email->set_mailtype("html");
//            $this->email->send();

            $config['mailtype'] = 'html';
            $this->email->initialize($config);
            $this->email->from('patelmayur7008@gmail.com', 'Angelgraphics');
            $this->email->to($user_detail[0]['var_email']);
            $this->email->subject('Forgot Password');

//            $mail_body = '<p style="margin:18px 0">Hello Sir</p>';
//            $mail_body .='<p style="margin:5px 0">Cronjob Test Mail</p>';
            $this->email->message($mail_body);
            $this->email->send();


//            echo $this->email->print_debugger();
//            exit;
//            $this->load->library('Mylibrary');
//            $config['to'] = $user_detail[0]['var_email'];
//            $config['subject'] = 'Forgot Password';
//            $config['mail_body'] = $mail_body;
//
//            $this->mylibrary->sendMail($config);

            return TRUE;
        } else {
            return FALSE;
        }
    }

    function email_verify($data) {

        $token = json_decode(base64_decode($data));
        $result = $this->toval->idtorow('var_token', $token->token, 'ag_user', 'enum_is_email_verified');
        if (!empty($result)) {
            $user_arr = array(
                'var_token' => '',
                'enum_is_email_verified' => 'YES'
            );
            $this->db->where('var_token', $token->token);
            $this->db->update('ag_user', $user_arr);
            return TRUE;
        } else {
            return FALSE;
        }
    }

    function checkLogin($email, $password) {
        $this->db->select('ag_user.*');
        $this->db->from('ag_user');
        $this->db->where("ag_user.var_email", $email);
        $row = $this->db->get()->row_array();
        if ((!empty($row))) {
            if ($row['var_password'] == md5($password)) {
                return $row;
            } else {
                return false;
            }
        }
    }

}

?>