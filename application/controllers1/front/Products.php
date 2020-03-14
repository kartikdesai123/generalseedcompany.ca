<?php

class Products extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function detail($url, $page_no) {
        
       
     //   if (is_numeric($page_no)) {
            $this->db->select('*');
            //$this->db->join('gs_product_has_image', 'gs_product_has_image.fk_product = gs_product.int_glcode');
            $this->db->where('var_product_url', $url);
           // $this->db->order_by('gs_product_has_image.int_glcode','DESC');
           // $this->db->limit($per_page, $start_limit);
            $data['product_detail'] = $this->db->get('gs_product')->result_array();
  //      }
        
//        echo "<pre>";
//        print_r($data['product_detail']); exit;
        
      //  $data['prev'] = $page_no - 1;
      //  $data['next'] = $page_no + 1;
    //    $data['current_page'] = $page_no;
    //    $data['total_pages'] = ceil($total_count / $per_page);
        
        $data['page'] = 'front/product/products';
        $data['page_title'] = $data['product_detail'][0]['var_product_name'];
        $data['active'] = 'product';
        $data['subactive'] = $data['product_detail'][0]['var_product_name'];
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = $data['product_detail'][0]['var_product_name'] . ' | Generalseed Product';
        $data['var_meta_description'] = $data['product_detail'][0]['var_product_name'] . ' | Generalseed Product';
        $data['var_meta_keyword'] = $data['product_detail'][0]['var_product_name'] . ' | Generalseed Product';

        $data['js'] = array(
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
        );

        $this->load->view(FRONT_PRODUCT_LAYOUT, $data);
    }
    public function  silage_corn($id=NULL){
        
        if($id == 2){
            
            $data['page'] = 'front/product/silage_corn_2';
        }else{
            $data['page'] = 'front/product/silage_corn';
        }
       // $data['page'] = 'front/product/silage_corn';
        $data['page_title'] = 'Silage Corn';
        $data['active'] = 'product';
        $data['subactive'] = 'silage_corn';
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = 'Silage Corn' . ' | Generalseed Product';
        $data['var_meta_description'] = 'Silage Corn' . ' | Generalseed Product';
        $data['var_meta_keyword'] = 'Silage Corn' . ' | Generalseed Product';

        $data['js'] = array(
           'productpage.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
        );

        $this->load->view(FRONT_PRODUCT_LAYOUT, $data);
    }
    
     public function  forage_seed($id=NULL){
        
        if($id == 2){
            
            $data['page'] = 'front/product/forage_seed_2';
        }else{
            $data['page'] = 'front/product/forage_seed';
        }
       // $data['page'] = 'front/product/silage_corn';
        $data['page_title'] = 'Forage Seed';
        $data['active'] = 'product';
        $data['subactive'] = 'forage_seed';
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = 'Forage Seed' . ' | Generalseed Product';
        $data['var_meta_description'] = 'Forage Seed' . ' | Generalseed Product';
        $data['var_meta_keyword'] = 'Forage Seed' . ' | Generalseed Product';

        $data['js'] = array(
             'productpage.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
        );

        $this->load->view(FRONT_PRODUCT_LAYOUT, $data);
    }
    
    public function  turf_seed($id=NULL){
        
        if($id == 8){
            $data['page'] = 'front/product/turf_seed_8';
        }elseif($id == 7){
            $data['page'] = 'front/product/turf_seed_7';
        }elseif($id == 6){
             $data['page'] = 'front/product/turf_seed_6';
        }elseif($id == 5){
            $data['page'] = 'front/product/turf_seed_5';
        }elseif($id == 4){
            $data['page'] = 'front/product/turf_seed_4';
        }elseif($id == 3){
            $data['page'] = 'front/product/turf_seed_3';
        }elseif($id == 2){
            $data['page'] = 'front/product/turf_seed_2';
       }else{
           $data['page'] = 'front/product/turf_seed';
        }
       // $data['page'] = 'front/product/silage_corn';
        $data['page_title'] = 'Turf Seed';
        $data['active'] = 'product';
        $data['subactive'] = 'forage_seed';
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = 'Turf Seed' . ' | Generalseed Product';
        $data['var_meta_description'] = 'Turf Seed' . ' | Generalseed Product';
        $data['var_meta_keyword'] = 'Turf Seed' . ' | Generalseed Product';

        $data['js'] = array(
              'productpage.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
        );

        $this->load->view(FRONT_PRODUCT_LAYOUT, $data);
    }
    
     public function  cover_crop($id=NULL){
        
        if($id == 2){
            
            $data['page'] = 'front/product/cover_crop_2';
        }else{
            $data['page'] = 'front/product/cover_crop';
        }
       // $data['page'] = 'front/product/silage_corn';
        $data['page_title'] = 'Cover Crops';
        $data['active'] = 'product';
        $data['subactive'] = 'forage_seed';
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = 'Cover Crops' . ' | Generalseed Product';
        $data['var_meta_description'] = 'Cover Crops' . ' | Generalseed Product';
        $data['var_meta_keyword'] = 'Cover Crops' . ' | Generalseed Product';

        $data['js'] = array(
             'productpage.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
        );

        $this->load->view(FRONT_PRODUCT_LAYOUT, $data);
    }
}

?>