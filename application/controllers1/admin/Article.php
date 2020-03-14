<?php

class Article extends Admin_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('admin/Article_model');
    }

    function index() {
        
    }

    function title_list() {
        $data['page'] = "admin/article/title_list";
        $data['breadcrumb'] = 'Article';
        $data['breadcrumb_sub'] = 'Article';
        $data['breadcrumb_list'] = array(
            array('Article', '')
        );
        $data['title_list'] = 'start open active';
        $data['article'] = 'start active';
        $data['var_meta_title'] = 'Article';
        $data['var_meta_description'] = 'Article';
        $data['var_meta_keyword'] = 'Article';
        $data['js'] = array(
            'admin/article.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
            'Article.init()',
        );
        $data['articles'] = $this->Article_model->getArticle();

        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function add_title() {
        $data['page'] = "admin/article/add_title";
        $data['breadcrumb'] = 'Article';
        $data['breadcrumb_sub'] = 'Article';
        $data['breadcrumb_list'] = array(
            array('Article', '')
        );
        $data['add_title'] = 'start open active';
        $data['article'] = 'start active';
        $data['var_meta_title'] = 'Article';
        $data['var_meta_description'] = 'Article';
        $data['var_meta_keyword'] = 'Article';
        $data['js'] = array(
            'admin/article.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.css'
        );
        $data['js_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.js',
            'ajaxfileupload.js',
            'jquery.form.min.js', 'ckeditor/ckeditor.js'
        );
        $data['init'] = array(
            'Article.add_init()',
        );

        if ($this->input->post()) {
            $this->json_response = $this->Article_model->add($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('article/title_list');
            }
        }

        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function edit_title($id) {
        $data['page'] = "admin/article/edit_title";
        $data['breadcrumb'] = 'Article';
        $data['breadcrumb_sub'] = 'Article';
        $data['breadcrumb_list'] = array(
            array('Article', '')
        );
        $data['title_list'] = 'start open active';
        $data['article'] = 'start active';
        $data['var_meta_title'] = 'Article';
        $data['var_meta_description'] = 'Article';
        $data['var_meta_keyword'] = 'Article';
        $data['js'] = array(
            'admin/article.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.css'
        );
        $data['js_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.js',
            'ajaxfileupload.js',
            'jquery.form.min.js', 'ckeditor/ckeditor.js'
        );
        $data['init'] = array(
            'Article.edit_init()',
        );
        $data['articles'] = $this->Article_model->getArticle($id);
        if ($this->input->post()) {
            $this->json_response = $this->Article_model->add($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('article/title_list');
            }
        }

        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function article_delete() {
        if ($this->input->post()) {
            $this->json_response = $this->Article_model->article_delete($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('article/title_list');
            }
        }
    }

    function pages_list() {
        $data['page'] = "admin/article/pages_list";
        $data['breadcrumb'] = 'Article';
        $data['breadcrumb_sub'] = 'Article';
        $data['breadcrumb_list'] = array(
            array('Article', '')
        );
        $data['pages_list'] = 'start open active';
        $data['article'] = 'start active';
        $data['var_meta_title'] = 'Article';
        $data['var_meta_description'] = 'Article';
        $data['var_meta_keyword'] = 'Article';
        $data['js'] = array(
            'admin/article.js'
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
            'Article.init()',
        );
        $data['article_pages'] = $this->Article_model->getArticlePage();
        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function add_page() {
        $data['page'] = "admin/article/add_page";
        $data['breadcrumb'] = 'Article';
        $data['breadcrumb_sub'] = 'Article';
        $data['breadcrumb_list'] = array(
            array('Article', '')
        );
        $data['add_page'] = 'start open active';
        $data['article'] = 'start active';
        $data['var_meta_title'] = 'Article';
        $data['var_meta_description'] = 'Article';
        $data['var_meta_keyword'] = 'Article';
        $data['js'] = array(
            'admin/article.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.css'
        );
        $data['js_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.js',
            'ajaxfileupload.js',
            'jquery.form.min.js', 'ckeditor/ckeditor.js'
        );
        $data['init'] = array(
            'Article.add_pageinit()',
        );
        $data['articles'] = $this->Article_model->getArticle();

        if ($this->input->post()) {
            $this->json_response = $this->Article_model->add_page($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('article/title_list');
            }
        }

        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function edit_page($pageId) {

        $data['page'] = "admin/article/edit_page";
        $data['breadcrumb'] = 'Article';
        $data['breadcrumb_sub'] = 'Article';
        $data['breadcrumb_list'] = array(
            array('Article', '')
        );
        $data['pages_list'] = 'start open active';
        $data['article'] = 'start active';
        $data['var_meta_title'] = 'Article';
        $data['var_meta_description'] = 'Article';
        $data['var_meta_keyword'] = 'Article';
        $data['js'] = array(
            'admin/article.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.css'
        );
        $data['js_plugin'] = array(
            'bootstrap-fileinput/bootstrap-fileinput.js',
            'ajaxfileupload.js',
            'jquery.form.min.js', 'ckeditor/ckeditor.js'
        );
        $data['init'] = array(
            'Article.edit_pageinit()',
        );
        $data['articles'] = $this->Article_model->getArticle();
        $data['article_pages'] = $this->Article_model->getArticlePage($pageId);
        if ($this->input->post()) {
            $this->json_response = $this->Article_model->add_page($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('article/title_list');
            }
        }
        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function page_delete() {
        if ($this->input->post()) {
            $this->json_response = $this->Article_model->page_delete($this->input->post(), $this->json_response);
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect('article/title_list');
            }
        }
    }

}

?>