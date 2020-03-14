<?php

class Productpage_model extends CI_Model {

    public $validationArray;

    function __construct() {
        parent::__construct();
        $this->validationArray = array(
            array('field' => 'product_name', 'label' => 'Prodcut Name', 'rules' => 'required'),
            array('field' => 'product_url', 'label' => 'Prodcut URL', 'rules' => 'required'),
        );
    }

    function add($data, $json_response) {
        
        $this->load->library('form_validation');
        $this->form_validation->set_rules($this->validationArray);
        if ($this->form_validation->run() !== FALSE) {
//            if ($_FILES['home_page_image']['name'] != "") {
//                delete_image(array('id' => $data['product_id'], 'table' => 'gs_product', 'field' => 'var_homepage_image'), SETTINGS_IMG_PATH);
//                $image = upload_single_image($_FILES, 'Home', PRODUCT_HOME_IMAGE, TRUE ,'PRODUCTHOME');
//                $var_image = ($image['error'] == '') ? $image['data']['orig_name'] : $data['old_img'];
//            } else {
//                $var_image = $data['old_img'];
//            }
           
            $productdata = array(
                'var_product_name' => $data['product_name'],
                'var_product_url' => str_replace(' ','-', $data['product_url']),
                'product_decription'=> $data['page_description'],
                'dt_created_date' => date('Y-m-d H:i:s'),
            );
            
            if(empty($data['product_id'])){
                $result = $this->db->insert('gs_product', $productdata);
            }else{
                $this->db->where('int_glcode',$data['product_id']);
                $result = $this->db->update('gs_product', $productdata);
            }
            if($result){
                if (empty($data['product_id'])) {
                    $redirect = admin_url('productpage');
                    $json_response = sucess_response('Product Added Succuessfully!..', $redirect);
                } else {
                    $redirect = admin_url('productpage');
                    $json_response = sucess_response('Product Edited Succuessfully!..', $redirect);
                }
                
            }else{
                $redirect = admin_url('productpage');
                $json_response = error_response('Something will be worng!..', $redirect);
            }
        } else {
            $json_response = error_response(validation_errors());
        }
        return $json_response;
    }
    
    function delete($data, $json_response){
        $this->db->where('int_glcode',$data['id']);
        $result = $this->db->delete('gs_product');
        
        $this->db->where('fk_product',$data['id']);
        $this->db->delete('gs_product_has_image');
        
        if ($result) {
            $redirect = admin_url('productpage');
            $json_response = sucess_response('Product Deleted Succuessfully!..', $redirect);
        } else {
            $redirect = admin_url('productpage');
            $json_response = error_response('Something will be worng!..', $redirect);
        }
        
        return $json_response;
    }
    
    function getProduct($id){
        $where = '';
        if ($id != '') {
            $where = $this->db->where('int_glcode', $id);
        }
        
        $where;
        $result = $this->db->get('gs_product')->result_array();

        return $result;
    }
    
    function getProductDetail($id){
        $this->db->select('gs_product_has_image.int_glcode,gs_product_has_image.var_image,gs_product.var_product_name');
        $this->db->join('gs_product_has_image','gs_product_has_image.fk_product = gs_product.int_glcode','left');
        $this->db->where('gs_product.int_glcode', $id);
        $result = $this->db->get('gs_product')->result_array();
        
        return $result;
    }
    
    function add_detaiil($data,$json_response){
                
                $this->load->library('Mylibrary');
                for ($i = 0; $i < count($data['pic_description']); $i++) {
                    
                    if (!empty($_FILES['product_other_img_' . $i])) {
                        $_FILES['product_img']['name'] = $_FILES['product_other_img_' . $i]['name'];
                        $_FILES['product_img']['type'] = $_FILES['product_other_img_' . $i]['type'];
                        $_FILES['product_img']['tmp_name'] = $_FILES['product_other_img_' . $i]['tmp_name'];
                        $_FILES['product_img']['error'] = $_FILES['product_other_img_' . $i]['error'];
                        $_FILES['product_img']['size'] = $_FILES['product_other_img_' . $i]['size'];
//
                        $imgexten = explode('.', $_FILES['product_img']['name']);
                        $img_name = 'product_img';
                        $img_last_key = end($imgexten);
                        $image_name = url_title($imgexten[0]) . time();
                        $array = array(
                            'image_pet_name' => $img_name,
                            'image_name' => $image_name,
                            'path' => PRODUCT_IMAGE,
                            'extension' => $img_last_key,
                        );
                        $result = $this->mylibrary->upload_image($array);

                    if (is_array($result)) {
                        $this->db->trans_commit();
                        
                        if (!empty($data['image_id'][$i])) {
                            
                            $img_data = array(
                                'fk_product' => $data['product_id'],
                                'var_image' => $result['file_name'],
                                'dt_created_date' => date('Y-m-d H:i:s'),
                            );
                            $this->db->where('int_glcode', $data['image_id'][$i]);
                           $result1 = $this->db->update('gs_product_has_image', $img_data);
                        } else {
                            $img_data = array(
                                'fk_product' => $data['product_id'],
                                'var_image' => $result['file_name'],
                                'dt_created_date' => date('Y-m-d H:i:s'),
                            );
                           $result1 = $this->db->insert('gs_product_has_image', $img_data);
                        }
                        $thumb_array = array(
                            array('width' => 650, 'height' => 450, 'image_type' => 'Thumb'),);

                        for ($j = 0; $j < count($thumb_array); $j++) {

                            $data_thump['config']['source_image'] = PRODUCT_IMAGE . '/' . $result['orig_name'];
                            $data_thump['config']['maintain_ratio'] = TRUE;
                            $data_thump['config']['create_thumb'] = TRUE;
                            $data_thump['config']['new_image'] = $result['orig_name'];
                            $data_thump['config']['thumb_marker'] = TRUE;
                            $data_thump['width'] = $thumb_array[$j]['width'];
                            $data_thump['height'] = $thumb_array[$j]['height'];
                            $data_thump['full_path'] = $result['full_path'];
                            $thumb_data = $this->mylibrary->create_thumb($data_thump);
                        }
                        
                        if ($result1) {
                            $redirect = admin_url('product');
                            $json_response = sucess_response('Product Detail Edited Succuessfully!..', $redirect);
                        } else {
                            $redirect = admin_url('product');
                            $json_response = error_response('Something will be worng!..', $redirect);
                        }
                    } else {
                        $this->db->trans_rollback();
                    }
                }else{
                    $redirect = admin_url('product');
                    $json_response = sucess_response('Product Detail Edited Succuessfully!..', $redirect);
                }
                    
            }
            
             return $json_response;
    }
}

?>