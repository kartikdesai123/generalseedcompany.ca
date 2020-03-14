<?php

class Test extends CI_Controller {

    public function index() {
        $this->load->library('payment');
        $test = $this->payment->makeTransaction(['AccountId' => 540348, 'Amount' => 100]);
        $test = json_decode($test);
        print_r($test);
        exit;
        echo tz_date(date('Y-m-d h:i:s'));
        exit;
    }

    function mail() {
        // 		for send mail using smtp with for new register user
        $token = $this->Common_model->getPassword();
        $url = base64_encode(json_encode(array('id' => '4', 'token' => $token)));
        $urls = base_url() . 'account/emailvarify/' . $url;
        $mail_body = '<p><h3>Hello "' . $data['fname'] . '   ' . $data['lname'] . '"</h3></p>';
        $mail_body .='<p>Demo User registration.</p>';
        $mail_body .='<p>Your registration successfully.</p>';
        $mail_body .='<p>Your Username : <b>' . $data['username'] . '</b></p>';
        $mail_body .='<p>Thanks for registeration.</p>';
        $mail_body .='<p><b>Click Below Link Varify Your email</b>.</p>';
        // 		$mail_body .='<p style="margin:5px 0">' . $urls . '</p>';
        $mail_body .='<p style="margin:5px 0"><a href="' . $urls . '">' . $urls . ' </a></p>';
        $mail_body .='<p>Regard,</p>';
        $mail_body .='<p>Admin</p>';
        $this->load->library('Mylibrary');
        $config['from_name'] = 'Cumulus.com';
        $config['to'] = 'rathod.dharmeshm@gmail.com';
        $config['subject'] = 'Registration success ';
        $config['mail_body'] = $mail_body;
        $this->mylibrary->sendMail($config);
        echo 'mail send';
        exit;
    }

    function test2() {
        $return['int_glcode'] = 6;
        $this->db->select('pos_transaction_has_product_has_modifier.*,
        pos_transaction_has_product.var_discount_name as discountname,
        pos_transaction_has_product.var_discount_amount as discountAmount
        ');
        $this->db->from('pos_transaction_has_product_has_modifier');
        $this->db->join('pos_transaction', 'pos_transaction.int_glcode = pos_transaction_has_product_has_modifier.fk_transaction', 'left');
        $this->db->join('pos_transaction_has_product', 'pos_transaction_has_product.fk_transaction = pos_transaction.int_glcode', 'left');
        $this->db->where('pos_transaction_has_product_has_modifier.fk_transaction', $return['int_glcode']);
        $has_modifier = $this->db->get()->result_array();
        echo $this->db->last_query();
        // 		print_r($has_modifier);
        exit;
    }

}
