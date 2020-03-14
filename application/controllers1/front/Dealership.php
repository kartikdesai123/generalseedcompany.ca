<?php

class Dealership extends Front_Controller {

    function __construct() {
        parent::__construct();
       
    }

    function index() {
        $data['page'] = 'front/dealership/dealership';
        $data['page_title'] = 'Dealership inquires';
        $data['active'] = 'dealership';
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = 'Dealership inquires | General Seed Company';
        $data['var_meta_description'] = 'Dealership inquires |' . get_project_name();
        $data['var_meta_keyword'] = 'Dealership inquires |' . get_project_name();
        $data['js'] = array(
            'custom/dealership.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
            'Dealership.init()',
        );

        if ($this->input->post()) {
              $secret = '6LdQdBcUAAAAAEQG4YmPSACnsd88KU8MKDOwoIZY';
		//get verify response data
            $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
            $responseData = json_decode($verifyResponse);

            if($responseData->success){
                $this->json_response = error_response('Something will be wrong');
                echo json_encode($this->json_response);
                exit();
            }
            $mail_body = '<p style="margin:18px 0"><b> Dealership inquires <b></p>';
            $mail_body .= '<p style="margin:18px 0"> Dear Admin';
            $mail_body .= '<p style="margin:18px 0"> Please follow below details';
            $mail_body .= '<p style="margin:18px 0"> <b>Farm / Business Name: </b>' . $this->input->post('fbname') . '  ' . $this->input->post('lname') . ',</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>First Name: </b>' . $this->input->post('fname') . ',</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>Last Name: </b>' . $this->input->post('lname') . '</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>Phone Number: </b>' . $this->input->post('phno') . '</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>Town: </b>' . $this->input->post('town') . '</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>Products of interest: </b>' . implode(',',$this->input->post('product')) . '</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>Email: </b>' . $this->input->post('email') . '</p>';
            $mail_body .= '<p style="margin:18px 0"> <b>Province: </b>' . $this->input->post('province') . '</p>';
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
            
            $receiver = 'dev@experttech.ca';
            $sub = 'Dealership inquires';
            $this->email->set_mailtype("html");
            $this->email->from('dev@experttech.ca');
            $this->email->to($receiver);
            $this->email->subject($sub);
            //  $msggdata = $this->load->view('site/home/email/booking_decline', $msgg, true);

            $this->email->message($mail_body);
            $this->email->send();
            
            $redirect = base_url('dealership');
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