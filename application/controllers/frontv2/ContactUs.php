<?php

class ContactUs extends Front_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('front/GeneralInquiry_model');

    }

    function index(){
        $this->generalInquiry();
    }
    
    function generalInquiry() {
       if($this->input->post()){
           $result=$this->GeneralInquiry_model->generalInquiry($this->input->post());
           $this->session->set_flashdata('success', 'We will back you soon.');
           redirect("products/contact-us/generalInquiry");
           exit;
           // if($result){
           //    $return['status'] = 'success';
           //    $return['message'] = 'Your Details susscefully send to mail.';
           // }else{
           //    $return['status'] = 'error';
           //    $return['message'] = 'Something goes to wrong Please try again.';
           // }

           // echo json_encode($return);
           //  exit;
       }
       $data['page'] = 'frontv2/contactus/generalInquiry';
       $data['title'] = "Contact Us";
       $data['description'] = "Description";
       $data['generalInquiry'] = 'open active-tree';
       $data['contactus'] = 'active';

        $data['js'] = array(
          'toastr.min.js',
          'jquery.validate.min.js',
          'comman_function.js',
          'generalInquiry.js',
        );
        $data['js_plugin'] = array(
        );
        $data['css'] = array(      
          'toastr.min.css',      
        );
        $data['css_plugin'] = array(
        );
        $data['init'] = array(
          'GeneralInquiry.init()',
        );

       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function retailInquiry() {
       $data['page'] = 'frontv2/contactus/retailInquiry';
       $data['title'] = "Retail Inquiry";
       $data['description'] = "Description";
       $data['retailInquiry'] = 'open active-tree';
       $data['contactus'] = 'active';
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function wholesaleInquiry() {
       $data['page'] = 'frontv2/contactus/wholesaleInquiry';
       $data['title'] = "Wholesale Inquiry";
       $data['description'] = "Description";
       $data['wholesaleInquiry'] = 'open active-tree';
       $data['contactus'] = 'active';
       $data['vanue_artical'] = $this->vanueAddress('wholsale');

       $this->load->view(FRONT_LAYOUT_V2, $data);
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
    
    function wholesaleOrder() {
       $data['page'] = 'frontv2/contactus/wholesaleOrder';
       $data['title'] = "Wholesale Order";
       $data['description'] = "Description";
       $data['wholesaleOrder'] = 'open active-tree';
       $data['contactus'] = 'active';
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
  }
?>