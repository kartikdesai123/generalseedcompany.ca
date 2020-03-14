<?php

class GeneralInquiry_model extends My_model {

    public function sendmail($postData){

        $details['fname']=$postData['fname'];
        $details['lname']=$postData['lname'];
        $details['email']=$postData['email'];
        $details['phone']=$postData['phone'];
        $details['town']=$postData['town'];
        $details['subject']=$postData['subject'];
        $details['message']=$postData['message'];
        $data['to']='kartikdesai123@gmail.com';
        $data['subject']="General Inquiry";
        $data['message']=$this->load->view('frontv2/email_template/dealerinquery_new',$details,true);
        $res=$this->utility->sendMailSMTP($data);
        return $res;
    }

    public function dealerInquirysendmail($postData){
    	
    	$details['product']=implode(" , ",$postData['ckbox']);
    	$details['bname']=$postData['bname'];
    	$details['fname']=$postData['fname'];
        $details['lname']=$postData['lname'];
        $details['email']=$postData['email'];
        $details['phone']=$postData['phone'];
        $details['town']=$postData['town'];
        $details['subject']=$postData['subject'];
        $details['message']=$postData['message'];
        $details['province']=$postData['province'];
        $data['to']='dev@experttech.ca';
        $data['subject']="Dealership Inquiry";
        $data['message']=$this->load->view('frontv2/email_template/dealerinquery',$details,true);
        $res=$this->utility->sendMailSMTP($data);
        return $res;
    }

    public function generalInquiry($postData){
    	
    	$details['fname']=$postData['fname'];
        $details['lname']=$postData['lname'];
        $details['email']=$postData['email'];
        $details['phone']=$postData['phone'];
        $details['town']=$postData['town'];
        $details['subject']=$postData['subject'];
        $details['message']=$postData['message'];
       
        $data['to']='dev@experttech.ca';
        $data['subject']="General Inquiry";
        $data['message']=$this->load->view('frontv2/email_template/generalInquiry',$details,true);
        $res=$this->utility->sendMailSMTP($data);
        return $res;
    }
}

?>