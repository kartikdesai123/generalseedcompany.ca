<?php

class Article extends Front_Controller {

    function __construct() {
        parent::__construct();
        $this->load->model('admin/Article_model');
    }

    function index($pageId) {
        $data['page'] = 'front/article/article';
        $data['page_title'] = 'Article';
        $data['active'] = 'article';
        $data['bodypagetitle'] = FALSE;
        $data['slider'] = TRUE;
        $data['var_meta_title'] = 'Article |' . get_project_name();
        $data['var_meta_description'] = 'Article |' . get_project_name();
        $data['var_meta_keyword'] = 'Article |' . get_project_name();
        $data['js'] = array(
            'custom/article.js'
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

        $data['page_detail'] = $this->Article_model->getArticlePage($pageId);
        $this->load->view(FRONT_PRODUCT_LAYOUT, $data);
    }

}

?>