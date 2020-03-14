<?php

class Query extends Admin_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = "admin/query/list";
        $data['breadcrumb'] = 'Query';
        $data['breadcrumb_sub'] = 'List';
        $data['breadcrumb_list'] = array(
            array('Query', ''),
            array('list', ''),
        );
        $data['query'] = 'active';
        $data['var_meta_title'] = 'Query List';
        $data['var_meta_description'] = 'Query List';
        $data['var_meta_keyword'] = 'Query List';
        $data['js'] = array(
            'admin/query.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
        );
        $data['js_plugin'] = array(
        );
        $data['init'] = array(
            'Query.init()',
        );
        $this->load->view(ADMIN_LAYOUT, $data);
    }

    function query_datatable() {
        $this->load->library('Datatables');
        $this->datatables->select('ag_query.int_glcode,
                ag_query.var_name,
                ag_query.var_phone,
                ag_query.var_email', FALSE);
        $this->datatables->from('ag_query');
        $results = $this->datatables->generate();
        $results = (array) json_decode($results);
        for ($i = 0; $i < count($results['data']); $i++) {
            $id = $results['data'][$i][0];
            $option = "<a href='#myModal_autocomplete' data-toggle='modal' data-id='" . $id . "' data-url='" . admin_url() . "query/delete' class='btn red btn-sm delete_query'><i class='fa fa-trash-o'></i> Delete</a>";
            $results['data'][$i][4] = $option;
        }
        echo json_encode($results);
        exit;
    }

    function delete() {

        if ($this->input->post()) {
            $this->db->delete('ag_query', array('int_glcode' => $this->input->post('id')));
            $this->json_response['message'] = 'Query delete Successfully!..';
            $this->json_response['status'] = 'success';
            $this->json_response['redirect'] = getbaseURL() . 'query';
            if ($this->input->is_ajax_request()) {
                echo json_encode($this->json_response);
                exit();
            } else {
                redirect(getbaseURL() . 'client');
            }
        }
    }

}

?>