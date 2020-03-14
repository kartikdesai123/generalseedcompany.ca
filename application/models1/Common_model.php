<?php

class Common_model extends CI_Model {

    function getPassword() {
        $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        $password = '';
        for ($i = 0; $i < 7; $i++) {
            $password .= $characters[mt_rand(0, 61)];
        }
        return $password;
    }

    function unique_email($data) {

        $this->db->select('var_email');
        $this->db->where('var_email', $data['email']);
        if (!empty($data['id'])) {
            $this->db->where('int_glcode!=', $data['id']);
        }
        $result = $this->db->get('ag_user')->num_rows();

        if ($result >= 1) {
            $json_response['status'] = 'error';
            $json_response['message'] = 'Email Already Exists!..';
            $json_response['redirect'] = '';
        } else {
            $json_response['status'] = 'success';
            $json_response['message'] = '';
        }
        return $json_response;
    }

    function check_device_key($data) {

        $this->db->select('var_device_key');
        $this->db->where('fk_store', $data['fk_store']);
        $this->db->where('var_device_key', $data['group_key']);
        if (!empty($data['id'])) {
            $this->db->where('int_glcode!=', $data['id']);
        }
        $result = $this->db->get('pos_device_key')->num_rows();
        if ($result >= 1) {
            $json_response['status'] = 'warning';
            $json_response['message'] = 'Pos New Key Already Exists!..';
            $json_response['redirect'] = '';
        } else {
            $json_response['status'] = 'success';
            $json_response['message'] = '';
        }
        return $json_response;
    }

    function check_barcode_number($data) {

        $this->db->select('var_barcode');
        $this->db->where('fk_store', $data['fk_store']);
        $this->db->where('var_barcode', $data['barcode']);
        if (!empty($data['id'])) {
            $this->db->where('int_glcode!=', $data['id']);
        }
        $result = $this->db->get('pos_modifier')->num_rows();
        if ($result >= 1) {
            $json_response['status'] = 'warning';
            $json_response['message'] = 'Barcode Number Already Exists!..';
            $json_response['redirect'] = '';
        } else {
            $json_response['status'] = 'success';
            $json_response['message'] = '';
        }
        return $json_response;
    }

    function getDepartment() {
        $this->load->library('AuthLibrary');
        $fk_store = $this->authlibrary->getLoginUserStoreId();
        $data = $this->toval->idtorowarray('fk_store', $fk_store, 'pos_department');
        return $data;
    }

    function getVendor() {
        $this->load->library('AuthLibrary');
        $fk_store = $this->authlibrary->getLoginUserStoreId();
        $data = $this->toval->idtorowarray('fk_store', $fk_store, 'pos_vendor');
        return $data;
    }

    function unique_mobile_number($data) {
        $this->db->select('var_phone');
        $this->db->where('var_phone', $data['phone']);
        if (!empty($data['id'])) {
            $this->db->where('int_glcode!=', $data['id']);
        }
        $result = $this->db->get('ep_user')->num_rows();
        if ($result >= 1) {
            $json_response['status'] = 'error';
            $json_response['message'] = 'Phone number Already Exists!..';
            $json_response['redirect'] = '';
        } else {
            $json_response['status'] = 'success';
            $json_response['message'] = '';
        }
        return $json_response;
    }

    function get_int_userId($user_id) {
        $user_id = ($user_id != '') ? $user_id : intval(rand(1, 9) . rand(0, 9) . rand(0, 9) . rand(0, 9));
        $result = $this->db->get_where('ep_user', array('int_user_id' => $user_id))->num_rows();
        if ($result == 1) {
            $user_id = intval(rand(1, 9) . rand(0, 9) . rand(0, 9) . rand(0, 9));
            $user_id = $this->get_int_userId($user_id);
            return $user_id;
        } else {
            return $user_id;
        }
    }

    function check_data($table, $id, $usertype) {
        if ($usertype != '') {
            $this->db->where('enum_user_type', $usertype);
        }
        $this->db->where('int_glcode', $id);
        $count = $this->db->get($table)->num_rows();
        return $count;
    }

//    function getUserName() {
//        $result = $this->db->get_where('pos_user_type', array('enum_user_type' => NORMAL))->result_array();
//        return $result;
//    }
//    function delete($tblname, $fieldname, $id) {
//        if (!empty($id)) {
//            $data = $this->db->where($fieldname, $id);
//            $result = $this->db->delete($tblname, $data);
//            if ($result) {
//                $this->json_response['message'] = 'Record Delete successfully!..';
//                $this->json_response['status'] = 'success';
//                $this->json_response['redirect'] = admin_url('Doctor');
//            } else {
//                $this->json_response['message'] = 'Something will be worng!..';
//                $this->json_response['status'] = 'error';
//            }
//        }
//        echo json_encode($this->json_response);
//    }

    function setSystemSetting($data) {
        $setting = $this->db->get('pos_system_setting')->result_array();
        for ($i = 0; $i < count($setting); $i++) {
            if ($data[$setting[$i]['var_key']] != '') {
                $this->db->where('int_glcode', $setting[$i]['int_glcode']);
                $result = $this->db->update('pos_system_setting', array('var_value' => $data[$setting[$i]['var_key']]));
            }
        }
        return $result;
    }

    function getSystemSetting($data) {

        $this->db->select('var_key,var_value');
        if (!empty($data)) {
            $this->db->where('var_key', $data);
        }
        $result = $this->db->get('pos_system_setting');
        if (!empty($data)) {
            return $result->row('var_value');
        } else {
            return $result->result_array();
        }
    }

    function generateApiKey() {
        $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        $apikey = '';
        for ($i = 0; $i < 40; $i++) {
            $apikey .= $characters[mt_rand(0, 61)];
        }
        $check_email = $this->toval->fetchArrayMC(array('var_api_key' => $apikey), 'pos_client_has_api_key', '*', 'count');
        if ($check_email == 0) {
            return $apikey;
        } else {
            $this->generateApiKey();
        }
        return $apikey;
    }

    function getAllCardCategory() {
        return $this->db->get('ag_card_category')->result_array();
    }

    function getArticlePageMenus() {

        $articleData = $this->db->get_where('gs_article', array('enum_status' => 'A'))->result_array();

        for ($i = 0; $i < count($articleData); $i++) {
            $articleData[$i]['pages'] = $this->getArticlePage($articleData[$i]['int_glcode']);
        }
        return $articleData;
    }

    function getArticlePage($article) {
        $this->db->select('int_glcode as page_id,var_page_title');
        $result = $this->db->get_where('gs_article_has_page', array('fk_article' => $article))->result_array();
        return $result;
    }

}

?>