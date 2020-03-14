<?php

class Article_model extends CI_Model {

    public $validationArray;

    function __construct() {
        parent::__construct();
    }

    function getArticle($id) {
        if (!empty($id)) {
            $this->db->where('int_glcode', $id);
        }
        $result = $this->db->get('gs_article')->result_array();
        return $result;
    }

    function add($data, $json_response) {
        $this->load->library('form_validation');
        $articleData = array(
            array('field' => 'article_title', 'label' => 'Article Title', 'rules' => 'required')
        );
        $this->form_validation->set_rules($articleData);
        if ($this->form_validation->run() !== FALSE) {
            $articleData = array(
                'var_title' => $data['article_title'],
                
                'enum_status' => ($data['is_active']) ? 'A' : 'I',
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            if (empty($data['article_id'])) {
                $row = $this->db->get_where('gs_article', array('var_title' => $data['article_title']))->num_rows();
                if ($row == 0) {
                    $result = $this->db->insert('gs_article', $articleData);
                } else {
                    $redirect = admin_url('article/title_list');
                    $json_response = error_response('Article Title Already Exist!..', $redirect);
                    return $json_response;
                }
            } else {
                $this->db->where('int_glcode !=', $data['article_id']);
                $this->db->where('var_title', $data['article_title']);
                $row = $this->db->get('gs_article')->num_rows();
                if ($row == 0) {
                    $this->db->where('int_glcode', $data['article_id']);
                    $result = $this->db->update('gs_article', $articleData);
                } else {
                    $json_response = error_response('Article Title Already Exist!..');
                    return $json_response;
                }
            }
            if ($result) {
                if (empty($data['article_id'])) {
                    $redirect = admin_url('article/title_list');
                    $json_response = sucess_response('Article Added Succuessfully!..', $redirect);
                } else {
                    $redirect = admin_url('article/title_list');
                    $json_response = sucess_response('Article Edited Succuessfully!..', $redirect);
                }
            } else {
                $redirect = admin_url('article/title_list');
                $json_response = error_response('Something will be worng!..', $redirect);
            }
        } else {
            $json_response = error_response(validation_errors());
        }
        return $json_response;
    }

    function getArticlePage($pageId) {

        $this->db->select('gs_article_has_page.*,gs_article.var_title');
        $this->db->from('gs_article_has_page');
        $this->db->join('gs_article', 'gs_article.int_glcode = gs_article_has_page.fk_article');
        if (!empty($pageId)) {
            $this->db->where('gs_article_has_page.int_glcode', $pageId);
        }
        $result = $this->db->get()->result_array();
        return $result;
    }

    function article_delete($data, $json_response) {
        $this->db->where('int_glcode', $data['id']);
        $result = $this->db->delete('gs_article');

        $this->db->where('fk_article', $data['id']);
        $this->db->delete('gs_article_has_page');

        if ($result) {
            $redirect = admin_url('article/title_list');
            $json_response = sucess_response('Article Deleted Succuessfully!..', $redirect);
        } else {
            $redirect = admin_url('article/title_list');
            $json_response = error_response('Something will be worng!..', $redirect);
        }

        return $json_response;
    }

    function add_page($data, $json_response) {
        $this->load->library('form_validation');
        $articleData = array(
            array('field' => 'select_article', 'label' => 'Article', 'rules' => 'required'),
            array('field' => 'page_title', 'label' => 'Page Title', 'rules' => 'required'),
            array('field' => 'page_url', 'label' => 'Page Url', 'rules' => 'required'),
            array('field' => 'page_content', 'label' => 'Page Content', 'rules' => 'required'),
        );
        $this->form_validation->set_rules($articleData);
        if ($this->form_validation->run() !== FALSE) {
            $articlePageData = array(
                'fk_article' => $data['select_article'],
                'var_page_title' => $data['page_title'],
                'var_page_url' => $data['page_url'],
                'txt_page_content' => $data['page_content'],
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            if (empty($data['page_id'])) {
                $result = $this->db->insert('gs_article_has_page', $articlePageData);
            } else {
                $this->db->where('int_glcode', $data['page_id']);
                $result = $this->db->update('gs_article_has_page', $articlePageData);
            }
            if ($result) {
                if (empty($data['page_id'])) {
                    $redirect = admin_url('article/pages_list');
                    $json_response = sucess_response('Article Page Added Succuessfully!..', $redirect);
                } else {
                    $redirect = admin_url('article/pages_list');
                    $json_response = sucess_response('Article Page Edited Succuessfully!..', $redirect);
                }
            } else {
                $redirect = admin_url('article/title_list');
                $json_response = error_response('Something will be worng!..', $redirect);
            }
        } else {
            $json_response = error_response(validation_errors());
        }
        return $json_response;
    }

    function page_delete($data, $json_response) {
        $this->db->where('int_glcode', $data['id']);
        $result = $this->db->delete('gs_article_has_page');
        if ($result) {
            $redirect = admin_url('article/pages_list');
            $json_response = sucess_response('Article Page Deleted Succuessfully!..', $redirect);
        } else {
            $redirect = admin_url('article/pages_list');
            $json_response = error_response('Something will be worng!..', $redirect);
        }

        return $json_response;
    }

}

?>