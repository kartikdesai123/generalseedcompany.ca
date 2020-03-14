<?php

class Contact_model extends CI_Model {

    function __construct() {
        parent::__construct();
    }

    function getContact($id) {
        if (!empty($id)) {
            $this->db->where('int_glcode', $id);
        }
        $result = $this->db->get('gs_contact_venue')->result_array();
        return $result;
    }

    function add($data, $json_response) {

        $this->load->library('form_validation');
        $contactData = array(
            array('field' => 'venue_name', 'label' => 'Venue Name', 'rules' => 'required')
        );
        $this->form_validation->set_rules($contactData);
        if ($this->form_validation->run() !== FALSE) {
            $contactDataArray = array(
                'var_venue' => $data['venue_name'],
                'enum_status' => ($data['is_active']) ? 'A' : 'I',
                'type' => $data['venue_type'],
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            if (empty($data['contact_id'])) {
                $row = $this->db->get_where('gs_contact_venue', array('var_venue' => $data['venue_name'],'type' => $data['venue_type']))->num_rows();
                if ($row == 0) {
                    $result = $this->db->insert('gs_contact_venue', $contactDataArray);
                } else {
                    $redirect = admin_url('contact/venue_list');
                    $json_response = error_response('Venue Title Already Exist!..', $redirect);
                    return $json_response;
                }
            } else {
                $this->db->where('int_glcode !=', $data['contact_id']);
                $this->db->where('var_venue', $data['venue_name']);
                $this->db->where('type' , $data['venue_type']);
                $row = $this->db->get('gs_contact_venue')->num_rows();
                if ($row == 0) {
                    $this->db->where('int_glcode', $data['contact_id']);
                    $result = $this->db->update('gs_contact_venue', $contactDataArray);
                } else {
                    $json_response = error_response('Venue Title Already Exist!..');
                    return $json_response;
                }
            }
            if ($result) {
                if (empty($data['article_id'])) {
                    $redirect = admin_url('contact/venue_list');
                    $json_response = sucess_response('Venue Contact Added Succuessfully!..', $redirect);
                } else {
                    $redirect = admin_url('contact/venue_list');
                    $json_response = sucess_response('Venue Contact Edited Succuessfully!..', $redirect);
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

    function contact_delete($data, $json_response) {
        $this->db->where('int_glcode', $data['id']);
        $result = $this->db->delete('gs_contact_venue');

        $this->db->where('fk_contact_venue', $data['id']);
        $this->db->delete('gs_contact_venue_has_address');

        if ($result) {
            $redirect = admin_url('contact/venue_list');
            $json_response = sucess_response('Contact Deleted Succuessfully!..', $redirect);
        } else {
            $redirect = admin_url('article/title_list');
            $json_response = error_response('Something will be worng!..', $redirect);
        }

        return $json_response;
    }

    function getContactAddress($addressId) {
        $this->db->select('gs_contact_venue.var_venue,gs_contact_venue_has_address.*');
        $this->db->from('gs_contact_venue');
        $this->db->join('gs_contact_venue_has_address', 'gs_contact_venue_has_address.fk_contact_venue = gs_contact_venue.int_glcode');
        if (!empty($addressId)) {
            $this->db->where('gs_contact_venue_has_address.int_glcode', $addressId);
        }
        $result = $this->db->get()->result_array();
        return $result;
    }

    function add_address($data, $json_response) {
      
        $this->load->library('form_validation');
        $articleData = array(
            array('field' => 'select_contact', 'label' => 'Contact', 'rules' => 'required'),
            array('field' => 'venue_content', 'label' => 'Venue Content', 'rules' => 'required')
        );
        $this->form_validation->set_rules($articleData);
        if ($this->form_validation->run() !== FALSE) {
            $articlePageData = array(
                'fk_contact_venue' => $data['select_contact'],
                'txt_venue' => $data['venue_content'],
                'dt_created_date' => date('Y-m-d H:i:s')
            );
            if (empty($data['address_id'])) {
                $result = $this->db->insert('gs_contact_venue_has_address', $articlePageData);
            } else {
                $this->db->where('int_glcode', $data['address_id']);
                $result = $this->db->update('gs_contact_venue_has_address', $articlePageData);
            }
            if ($result) {
                if (empty($data['address_id'])) {
                    $redirect = admin_url('contact/address_list');
                    $json_response = sucess_response('Contact Address Added Succuessfully!..', $redirect);
                } else {
                    $redirect = admin_url('contact/address_list');
                    $json_response = sucess_response('Contact Address Edited Succuessfully!..', $redirect);
                }
            } else {
                $redirect = admin_url('contact/address_list');
                $json_response = error_response('Something will be worng!..', $redirect);
            }
        } else {
            $json_response = error_response(validation_errors());
        }
        return $json_response;
    }

    function address_delete($data, $json_response) {
       
        $this->db->where('int_glcode', $data['id']);
        $result = $this->db->delete('gs_contact_venue_has_address');

        if ($result) {
            $redirect = admin_url('contact/address_list');
            $json_response = sucess_response('Address Deleted Succuessfully!..', $redirect);
        } else {
            $redirect = admin_url('contact/address_list');
            $json_response = error_response('Something will be worng!..', $redirect);
        }

        return $json_response;
    }

}

?>