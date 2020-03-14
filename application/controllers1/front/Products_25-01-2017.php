<?php

class Products extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function detail($url, $page_no) {
        $per_page = 4;
        if ($page_no == '') {
            $page_no = 1;
            $start_limit = 0;
        } else {
            $start_limit = ($page_no - 1) * $per_page;
        }
        $start_limit = ($page_no - 1) * $per_page;

        $this->db->join('gs_product_has_image', 'gs_product_has_image.fk_product = gs_product.int_glcode');
        $this->db->where('gs_product.var_product_url', $url);
        $total_count = $this->db->get('gs_product')->num_rows();
        
        if (is_numeric($page_no)) {
            $this->db->select('gs_product.var_product_name,gs_product.var_product_url,gs_product_has_image.var_image');
            $this->db->join('gs_product_has_image', 'gs_product_has_image.fk_product = gs_product.int_glcode');
            $this->db->where('gs_product.var_product_url', $url);
            $this->db->order_by('gs_product_has_image.int_glcode','DESC');
            $this->db->limit($per_page, $start_limit);
            $data['product_detail'] = $this->db->get('gs_product')->result_array();
        }
        
//        echo "<pre>";
//        print_r($data['product_detail']); exit;
        
        $data['prev'] = $page_no - 1;
        $data['next'] = $page_no + 1;
        $data['current_page'] = $page_no;
        $data['total_pages'] = ceil($total_count / $per_page);
        
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

}

?>