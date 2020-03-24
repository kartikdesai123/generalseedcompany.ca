<?php

class DealerInquires extends Front_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('front/GeneralInquiry_model');
    }

    function index() {
        $this->dealerInquiry();
    }

    function dealerInquiry() {
        $data['page'] = 'frontv2/dealerInquires/homepage';
        $data['title'] = 'Dealer Inquiry';
        $data['homepage'] = 'open active-tree';
        $data['dealerInquiry'] = 'active';

        if ($this->input->post()) {
            $postData = $this->input->post();
            if ($postData['g-recaptcha-response'] == "") {
                $this->session->set_flashdata('error', 'Please enter captcha.');
                redirect("products/dealer-inquires");
                exit;
            }

            $result=$this->GeneralInquiry_model->dealerInquirysendmail($this->input->post());
            $this->session->set_flashdata('success', 'We will back you soon.');
            redirect("products/dealer-inquires");
            exit;
        }
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    public function sendMailSMTP($data) {
        $CI = & get_instance();

        $config ['protocol'] = "smtp";
        $config ['smtp_host'] = SMTP_HOST;
        $config ['smtp_port'] = SMTP_PORT;
        $config ['smtp_user'] = SMTP_USER;
        $config ['smtp_pass'] = SMTP_PASS;

        $config ['smtp_timeout'] = 20;
        $config ['priority'] = 1;
        $config ['charset'] = 'utf-8';
        $config ['wordwrap'] = TRUE;
        $config ['crlf'] = "\r\n";
        $config ['newline'] = "\r\n";
        $config ['mailtype'] = "html";
        $config ['starttls'] = true;

        $message = $data ["message"];
        $CI->load->library('email', $config);
        $CI->email->initialize($config);
        $CI->email->clear(TRUE);
        $CI->email->to($data ["to"]);
        if (isset($data ['from'])) {
            $CI->email->from($data ['from'], $data ['from_title']);
        } else {
            $CI->email->from($config ['smtp_user'], PROJECT_NAME);
        }
        if (isset($data ["bcc"])) {
            $CI->email->bcc($data ["bcc"]);
        }
        if (isset($data ["replyto"])) {
            $CI->email->reply_to(REPLAY_EMAIL, $data ['from_title']);
        }
        $CI->email->subject($data ["subject"]);
        $CI->email->message($message);
        if (isset($data ["attech"])) {
            $CI->email->attach($data["attech"]);
        }
        $response = $CI->email->send();
        return true;
    }

    public function viewPdf() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/SilageCorn_Leafy-Corn-Silage-Guide.pdf'));
    }

}

?>