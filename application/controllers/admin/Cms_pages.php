<?php

class Cms_pages extends Admin_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        
    }
   
    function aboutus() {
        $data['page'] = "admin/cmspages/aboutus";
        $data['breadcrumb'] = 'CMS Pages';
        $data['breadcrumb_sub'] = 'About us';
        $data['breadcrumb_list'] = array(
            array('cmspages', ''),
            array('About us', ''),
        );
        $data['aboutus'] = 'open active';
        $data['cms_pages'] = 'active';
        $data['var_meta_title'] = 'CMS pages Abput us';
        $data['var_meta_description'] = 'CMS pages About us';
        $data['var_meta_keyword'] = 'CMS pages About us';
        $data['js'] = array(
            'admin/cmspages.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
            'Cmspages.about_init()',
        );
        $this->load->view(ADMIN_LAYOUT, $data);
    }
    function contactus() {
        $data['page'] = "admin/cmspages/contactus";
        $data['breadcrumb'] = 'CMS Pages';
        $data['breadcrumb_sub'] = 'Contact us';
        $data['breadcrumb_list'] = array(
            array('cmspages', ''),
            array('Contact us', ''),
        );
        $data['contactus'] = 'open active';
        $data['cms_pages'] = 'active';
        $data['var_meta_title'] = 'CMS pages Contact us';
        $data['var_meta_description'] = 'CMS pages Contact us';
        $data['var_meta_keyword'] = 'CMS pages Contact us';
        $data['js'] = array(
            'admin/cmspages.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
            'Cmspages.contact_init()',
        );
        $this->load->view(ADMIN_LAYOUT, $data);
    }
   
}
?>