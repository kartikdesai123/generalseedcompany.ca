<?php

class Contact extends Front_Controller {

    function __construct() {
        parent::__construct();
        $this->validationArray = array(
            array('field' => 'fname', 'label' => 'Please Enter First Name ', 'rules' => 'required'),
            array('field' => 'lname', 'label' => 'Please Enter Last Name', 'rules' => 'required'),
            array('field' => 'email', 'label' => 'Please Enter Email', 'rules' => 'required'),
            array('field' => 'subject', 'label' => 'Please Enter Subject', 'rules' => 'required'),
            array('field' => 'txtmsg', 'label' => 'Please Enter Message', 'rules' => 'required'),
        );
    }

    function index() {
        $data['page'] = 'front/contact/contact';
        $data['page_title'] = 'Contact Us';
        $data['active'] = 'contact';
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = 'Contact Us | General Seed Company';
        $data['var_meta_description'] = 'Contact Us |' . get_project_name();
        $data['var_meta_keyword'] = 'Contact Us |' . get_project_name();
        $data['js'] = array(
            'custom/contact.js'
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

        if ($this->input->post()) {
//            print_r($this->input->post()); exit;
            $this->load->library('form_validation');
            $this->form_validation->set_rules($this->validationArray);
            $secret = '6LdQdBcUAAAAAEQG4YmPSACnsd88KU8MKDOwoIZY';
		//get verify response data
            $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
            $responseData = json_decode($verifyResponse);

            if($responseData->success){
                $this->json_response = error_response('Something will be wrong');
                echo json_encode($this->json_response);
                exit();
            }
            if ($this->form_validation->run() !== FALSE) {
                
                $carddata = array(
                    'var_fname' => $this->input->post('fname'),
                    'var_lname' => $this->input->post('lname'),
                    'var_email' => $this->input->post('email'),
                    'var_subject' => $this->input->post('subject'),
                    'txt_message' => $this->input->post('txtmsg'),
                    'dt_created_date' => date('Y-m-d H:i:s'),
                );
                $this->db->insert('gs_contact_us', $carddata);
                $insert_id = $this->db->insert_id();
                if ($insert_id > 0) {

                    // Send Mail Code
                   // $config['mailtype'] = 'html';
                    $mail_body = '<p style="margin:18px 0"><b> Contact Us Enquiry <b></p>';
                    $mail_body .= '<p style="margin:18px 0"> Dear Admin';
                    $mail_body .= '<p style="margin:18px 0"> Please follow below details';
                    $mail_body .= '<p style="margin:18px 0"> <b>Name: </b>' . $this->input->post('fname') . '  ' . $this->input->post('lname') . ',</p>';
                    $mail_body .= '<p style="margin:18px 0"> <b>Email: </b>' . $this->input->post('email') . ',</p>';
                    $mail_body .= '<p style="margin:18px 0"> <b>Phone: </b>' . $this->input->post('phone') . ',</p>';
                    $mail_body .= '<p style="margin:18px 0"> <b>Town: </b>' . $this->input->post('town') . '</p>';
                    $mail_body .= '<p style="margin:18px 0"> <b>Message: </b>' . $this->input->post('txtmsg') . '</p>';
                    $mail_body .= '<p style="margin-bottom: 10px!important"> <b>Regard,</b> </p>';
                    $mail_body .= '<p style="margin:5px 0"> <b> Admin </b></p>';
                    $mail_body .= '<p style="margin:5px 0"> <b> Generalseed </b></p>';
                    // Send Mail Code


                      $config = Array(
                            'protocol' => 'sendmail',
                            'mailtype' => 'html',
                        //    'charset' => 'iso-8859-1'
                        );
                        $this->load->library('email', $config);
                        $msgg['msg'] = 'Your request for magic show is decliend.';
                        $msg = $msgg['msg'];
                        $receiver = 'dev@experttech.ca';
                        $sub = 'Contect Us Detail';
                         $this->email->set_mailtype("html");
                        $this->email->from('dev@experttech.ca');
                        $this->email->to($receiver);
                        $this->email->subject($sub);
                       //  $msggdata = $this->load->view('site/home/email/booking_decline', $msgg, true);

                        $this->email->message($mail_body);
                        $this->email->send();
                        
                    $redirect = base_url('contact');
                    $this->json_response = sucess_response('Mail successfully sent', $redirect);
                } else {
                    $this->json_response = error_response('Something will be wrong');
                }
            } else {
                $this->json_response = error_response(validation_errors());
            }
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('admin/contact');
            }
        }
        $this->load->view(FRONT_PRODUCT_LAYOUT, $data);
    }
    
    function retail_inquiries() {
        $data['page'] = 'front/contact/retail_inquiries';
        $data['page_title'] = 'Retail inquiries';
        $data['active'] = 'retail_inquiries';
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = 'Retail inquiries | General Seed Company';
        $data['var_meta_description'] = 'Retail inquiries |' . get_project_name();
        $data['var_meta_keyword'] = 'Retail inquiries |' . get_project_name();
        $data['js'] = array(
            'custom/contact.js'
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
        
        $data['vanue_artical'] = $this->vanueAddress('retail');
        $this->load->view(FRONT_PRODUCT_LAYOUT, $data);
    }
    
    function whole_inquiries()
    {
        $data['page'] = 'front/contact/retail_inquiries';
        $data['page_title'] = 'Wholesale inquiries';
        $data['active'] = 'retail_inquiries';
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = 'Wholesale inquiries | General Seed Company';
        $data['var_meta_description'] = 'Wholesale inquiries |' . get_project_name();
        $data['var_meta_keyword'] = 'Wholesale inquiries |' . get_project_name();
        $data['js'] = array(
            'custom/contact.js'
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
        
        $data['vanue_artical'] = $this->vanueAddress('wholsale');
        $this->load->view(FRONT_PRODUCT_LAYOUT, $data);
    }
    function vanueAddress($type){
        $this->db->select('gs_contact_venue.var_venue,GROUP_CONCAT(gs_contact_venue_has_address.txt_venue) as venue_address');
        $this->db->from('gs_contact_venue');
        $this->db->join('gs_contact_venue_has_address','gs_contact_venue_has_address.fk_contact_venue = gs_contact_venue.int_glcode');
        $this->db->where('gs_contact_venue.enum_status','A');
        $this->db->where('gs_contact_venue.type',$type);
        $this->db->group_by('gs_contact_venue_has_address.fk_contact_venue');
        $result = $this->db->get()->result_array();
        return $result;
    }
    
    function wholeseller_orders() {
        $data['page'] = 'front/contact/wholeseller_orders';
        $data['page_title'] = 'Wholeseller Orders';
        $data['active'] = 'wholeseller_orders';
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = 'Wholeseller Orders | General Seed Company';
        $data['var_meta_description'] = 'Wholeseller Orders |' . get_project_name();
        $data['var_meta_keyword'] = 'Wholeseller Orders |' . get_project_name();
        $data['js'] = array(
            'custom/contact.js'
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
        
        if($this->input->post()){
            $password = $this->input->post('whpass');
            $checkPassword = $this->db->get_where('gs_wholesale_password',array('var_password'=>md5($password)))->num_rows();
            if($checkPassword == 1){
                $redirect = base_url().'contact/wholeseller-orders-detail';
                $json_response = sucess_response('',$redirect);
            }else{
                $json_response = error_response('Password is Worng!..', $redirect="");
            }
            echo json_encode($json_response); exit();
        }
        
        $this->load->view(FRONT_PRODUCT_LAYOUT, $data);
    }
    
     function wholeseller_orders_detail() {
        $data['page'] = 'front/contact/wholeseller_orders_detail';
        $data['page_title'] = 'Wholeseller Orders Form';
        $data['active'] = 'wholeseller_orders Form';
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = 'Wholeseller Orders Form | General Seed Company';
        $data['var_meta_description'] = 'Wholeseller Orders Form|' . get_project_name();
        $data['var_meta_keyword'] = 'Wholeseller Orders Form|' . get_project_name();
        $data['js'] = array(
            'custom/contact.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
        );
        $data['js_plugin'] = array(
            'bootstrap-datepicker/js/bootstrap-datepicker.min.js',
        );
        $data['init'] = array(
            'Contact.detail_init()',
            'ComponentsDateTimePickers.init()'
        );
        
        if($this->input->post()){
            $mail_body = '<p style="margin:18px 0"><b> Wholeseller Orders <b></p>';
            $mail_body .= '<p style="margin:18px 0"> Dear Admin';
            $mail_body .= '<p style="margin:18px 0"> Please follow below details';
            $mail_body .= '<p style="margin:18px 0"> <b>Date: </b>' . date('Y-m-d',strtotime($this->input->post('dateorder'))) . '  ' . $this->input->post('lname') . ',</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>Name: </b>' . $this->input->post('name') . ',</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>Address: </b>' . $this->input->post('address') . '</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>city: </b>' . $this->input->post('city') . '</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>PO: </b>' . $this->input->post('po') . '</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>Phone: </b>' . $this->input->post('telno') . '</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>Postalcde: </b>' . $this->input->post('postalcde') . '</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>Comment: </b>' . implode(',',$this->input->post('comment')) . '</p>';
//            $mail_body .= '<p style="margin:18px 0"> <b>Seed: </b>' . implode(',',$this->input->post('seed')) . '</p>';
//            $mail_body .= '<p style="margin:18px 0"> <b>Price: </b>' . implode(',',$this->input->post('price')) . '</p>';
//            $mail_body .= '<p style="margin:18px 0"> <b>Order Discount: </b>' . $this->input->post('order_discount') . '</p>';
//            $mail_body .= '<p style="margin:18px 0"> <b>Repname: </b>' . $this->input->post('repname') . '</p>';
//            $mail_body .= '<p style="margin:18px 0"> <b>Delivery: </b>' . $this->input->post('delivery') . '</p>';
//            $mail_body .= '<p style="margin:18px 0"> <b>Contact name: </b>' . $this->input->post('contact_name') . '</p>';
//            $mail_body .= '<p style="margin:18px 0"> <b>Repname: </b>' . $this->input->post('email') . '</p>';;
            $mail_body .= '<p style="margin-bottom: 10px!important"> <b>Regard,</b> </p>';
            $mail_body .= '<p style="margin:5px 0"> <b> Admin </b></p>';
            $mail_body .= '<p style="margin:5px 0"> <b> Generalseed </b></p>';
            // Send Mail Code

            $config = Array(
                'protocol' => 'sendmail',
                'mailtype' => 'html',
                    //    'charset' => 'iso-8859-1'
            );
            $this->load->library('email', $config);
            
//            $receiver = 'abhishekdesai39@gmail.com';
            $receiver = 'dev@experttech.ca';
            $sub = 'Wholeseller Orders';
            $this->email->set_mailtype("html");
            $this->email->from('dev@experttech.ca');
            $this->email->to($receiver);
            $this->email->subject($sub);
            //  $msggdata = $this->load->view('site/home/email/booking_decline', $msgg, true);

            $this->email->message($mail_body);
            $this->email->send();
            
            $redirect = base_url('contact/wholeseller-orders');
            $this->json_response = sucess_response('Mail successfully sent', $redirect);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            }
        }
        
        $this->load->view(FRONT_PRODUCT_LAYOUT, $data);
    }

}

?>