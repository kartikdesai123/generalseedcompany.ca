<?php

class Productpage extends Admin_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('admin/Productpage_model');
    }

    function index() {
        $data['page'] = "admin/productpage/list";
        $data['breadcrumb'] = 'Product';
        $data['breadcrumb_sub'] = 'List';
        $data['breadcrumb_list'] = array(
            array('Product', '')
        );
        $data['product_list'] = 'start open active';
        $data['prodcut'] = 'start active';
        $data['var_meta_title'] = 'Product';
        $data['var_meta_description'] = 'Product';
        $data['var_meta_keyword'] = 'Product';
        $data['js'] = array(
            'admin/product.js',
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
            
        );
        $data['init'] = array(
            'Product.init()',
            
        );
        
        $data['product'] = $this->Productpage_model->getProduct();
        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function add() {
        $data['page'] = "admin/productpage/add";
        $data['breadcrumb'] = 'Product';
        $data['breadcrumb_sub'] = 'Add';
        $data['breadcrumb_list'] = array(
            array('Product', 'product'),
            array('Add', ''),
        );
        $data['product_add'] = 'start open active';
        $data['prodcut'] = 'start active';
        $data['var_meta_title'] = 'Add Product';
        $data['var_meta_description'] = 'Add Product';
        $data['var_meta_keyword'] = 'Add Product';
        $data['js'] = array(
            'admin/product.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.css'
        );
        $data['js_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.js',
            'ajaxfileupload.js',
            'jquery.form.min.js','ckeditor/ckeditor.js'
        );
        $data['init'] = array(
            'Product.add_init()',
        );
        
        if ($this->input->post()) {
            $this->json_response = $this->Productpage_model->add($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('admin/productpage');
            }
        }
        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function edit($id) {
        $data['page'] = "admin/productpage/edit";
        $data['breadcrumb'] = 'Product';
        $data['breadcrumb_sub'] = 'Edit';
        $data['breadcrumb_list'] = array(
            array('Product', 'product'),
            array('Edit', ''),
        );
        $data['product_list'] = 'start open active';
        $data['prodcut'] = 'start active';
        $data['var_meta_title'] = 'Edit Product';
        $data['var_meta_description'] = 'Edit Product';
        $data['var_meta_keyword'] = 'Edit Product';
        $data['js'] = array(
            'admin/product.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.css'
        );
        $data['js_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.js',
            'ajaxfileupload.js',
            'jquery.form.min.js','ckeditor/ckeditor.js'
        );
        $data['init'] = array(
            'Product.edit_init()',
        );
        
        $data['product'] = $this->Productpage_model->getProduct($id);
        
        if ($this->input->post()) {
            
            $this->json_response = $this->Productpage_model->add($this->input->post(), $this->json_response);
            
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                echo 'dd';exit;
                redirect('admin/productpage');
            }
        }
        
        $this->load->view(ADMIN_LAYOUT, $data);
    }
    
    function delete(){
        if ($this->input->post()) {
            $this->json_response = $this->Productpage_model->delete($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('admin/productpage');
            }
        }
    }
    
    function detail_add($id){
        $data['page'] = "admin/product/detail_add";
        $data['breadcrumb'] = 'Product Detail';
        $data['breadcrumb_sub'] = 'Add Detail';
        $data['breadcrumb_list'] = array(
            array('Product', 'Product Detail'),
            array('Add', ''),
        );
        $data['product_add_detail'] = 'start open active';
        $data['prodcut'] = 'start active';
        $data['var_meta_title'] = 'Add Product Detail';
        $data['var_meta_description'] = 'Add Product Detail';
        $data['var_meta_keyword'] = 'Add Product Detail';
        $data['js'] = array(
            'admin/product.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
             'bootstrap-fileinput/bootstrap-fileinput.css'
        );
        $data['js_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.js',
            'ajaxfileupload.js',
            'jquery.form.min.js',
        );
        $data['init'] = array(
            'Product.add_detail_init()',
        );
        
        $data['product_id'] = $id;
        $data['produt_detail'] = $this->Product_model->getProductDetail($id);
       
        if ($this->input->post()) {
            $this->json_response = $this->Product_model->add_detaiil($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('admin/product/productpage');
            }
        }
        $this->load->view(ADMIN_LAYOUT, $data);
    }
}

?>