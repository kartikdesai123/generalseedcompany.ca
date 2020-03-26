<?php

class Home extends Front_Controller {

    function __construct() {
        parent::__construct();
        
    }

    function index() {
       $data['page'] = 'frontv2/home/home';
       $data['title'] = 'Home';
       $data['description'] = "Description";
        $data['active'] = 'home';
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = 'General Seed Company | Forage, Turf, Cover Crops, Silage Corn seeds';
        $data['var_meta_description'] = 'General Seed Company specialized in Forage, Turf, Cover Crops, Silage Corn and Native Seeds General seed help you in all your seeding needs with over 25 years of knowledge and experience. Serving Ontario, Quebec and the Maritimes. We also offer custom mixing. ';
        $data['var_meta_keyword'] = 'Forage seed products, Organic forage seed, Silage corn seed for sale, Silage corn varieties, General seed company, Best cover crops, forage cover crops, cover crop Canada, Cover crop seed, good Cover crops, Organic cover crops, Turf grass seed products, turf grass items, all types of lawn seed mixtures, turf grass items, silage corn varieties, Organic Forage seed, forage seed mix';
        $data['js'] = array(
            'home-index.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
        );

      //  $data['product'] = $this->db->order_by('int_glcode', 'asc')->limit(4)->get('gs_home_product')->result_array();
//        $data['articleMenu'] = $this->Home_model->getArticlePageMenus();
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    function indexOld() {
        $data['page'] = 'front/home/home';
        $data['title'] = 'Home';
        $data['active'] = 'home';
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = 'General Seed Company | Forage, Turf, Cover Crops, Silage Corn seeds';
        $data['var_meta_description'] = 'General Seed Company specialized in Forage, Turf, Cover Crops, Silage Corn and Native Seeds General seed help you in all your seeding needs with over 25 years of knowledge and experience. Serving Ontario, Quebec and the Maritimes. We also offer custom mixing. ';
        $data['var_meta_keyword'] = 'Forage seed products, Organic forage seed, Silage corn seed for sale, Silage corn varieties, General seed company, Best cover crops, forage cover crops, cover crop Canada, Cover crop seed, good Cover crops, Organic cover crops, Turf grass seed products, turf grass items, all types of lawn seed mixtures, turf grass items, silage corn varieties, Organic Forage seed, forage seed mix';
        $data['js'] = array(
            'home-index.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
        );

        $data['product'] = $this->db->order_by('int_glcode', 'asc')->limit(4)->get('gs_home_product')->result_array();
//        $data['articleMenu'] = $this->Home_model->getArticlePageMenus();
        $this->load->view(FRONT_LAYOUT, $data);
    }

}

?>