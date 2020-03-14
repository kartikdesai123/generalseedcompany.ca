<?php

class Cards_model extends CI_Model {

    public $validationArray;

    function __construct() {
        parent::__construct();
        $this->validationArray = array(
            array('field' => 'card_category', 'label' => 'Select Card Category ', 'rules' => 'required'),
            array('field' => 'cardtitle', 'label' => 'Title ', 'rules' => 'required'),
//            array('field' => 'card_main_img', 'label' => 'Video Thumbnail', 'rules' => 'required'),
            array('field' => 'video_flag', 'label' => 'Video ', 'rules' => 'required'),
//            array('field' => 'youtube_link', 'label' => 'Youtube Video Link', 'rules' => 'required'),
            array('field' => 'card_desc', 'label' => 'Description ', 'rules' => 'required'),
            array('field' => 'cardheight', 'label' => 'Card Height in CM', 'rules' => 'required'),
            array('field' => 'cardprice', 'label' => 'Price ', 'rules' => 'required'),
            array('field' => 'cardwidth', 'label' => 'Card Width in CM', 'rules' => 'required'),
        );
    }

    function add($data, $json_response) {
        $this->load->library('form_validation');
        $this->form_validation->set_rules($this->validationArray);
//        print_r($data);
//        print_r($_FILES);
//        exit;
        if ($this->form_validation->run() !== FALSE) {
            $carddata = array(
                'fk_category' => $data['card_category'],
                'var_name' => $data['cardtitle'],
                'text_desc' => $data['card_desc'],
                'int_price' => $data['cardprice'],
                'var_height' => $data['cardheight'],
                'var_width' => $data['cardheight'],
                'dt_created' => date('Y-m-d H:i:s'),
            );
            $this->db->insert('ag_card', $carddata);
            $insert_id = $this->db->insert_id();

            if (!empty($_FILES['card_other_img'])) {
                $this->load->library('Mylibrary');
                for ($i = 0; $i < count($_FILES['card_other_img']['name']); $i++) {
                    $_FILES['artwork_imags']['name'] = $_FILES['card_other_img']['name'][$i];
                    $_FILES['artwork_imags']['type'] = $_FILES['card_other_img']['type'][$i];
                    $_FILES['artwork_imags']['tmp_name'] = $_FILES['card_other_img']['tmp_name'][$i];
                    $_FILES['artwork_imags']['error'] = $_FILES['card_other_img']['error'][$i];
                    $_FILES['artwork_imags']['size'] = $_FILES['card_other_img']['size'][$i];

                    $imgexten = explode('.', $_FILES['artwork_imags']['name']);
                    $img_name = 'artwork_imags';
                    $img_last_key = end($imgexten);
                    $image_name = url_title($imgexten[0]) . time();
                    $array = array(
                        'image_pet_name' => $img_name,
                        'image_name' => $image_name,
                        'path' => CARD_IMAGE,
                        'extension' => $img_last_key,
                    );
                    $result = $this->mylibrary->upload_image($array);
                    if (is_array($result)) {
                        $this->db->trans_commit();
                        $card_has_media = array(
                            'fk_card' => $insert_id,
                            'var_width' => $result['image_width'],
                            'var_height' => $result['image_height'],
                            'en_is_image' => ($data['card_category'] == '1' ? 'N' : 'Y'),
                            'en_main_image' => ($data['card_category'] == '1' ? 'N' : 'Y'),
                            'var_media_path' => $result['full_path'],
                            'dt_created' => date('Y-m-d H:i:s'),
                        );
                        $this->db->insert('ag_card_has_media', $card_has_media);

                        $small_size = '100';
                        $medium_size = '200';
                        $large_size = '500';

                        $thumb_array = array(
                            array('width' => $small_size, 'height' => $small_size, 'image_type' => 'SMALL'),
                            array('width' => $medium_size, 'height' => $medium_size, 'image_type' => 'MEDIUM'),
                            array('width' => $large_size, 'height' => $large_size, 'image_type' => 'LARGE'));

                        for ($j = 0; $j < count($thumb_array); $j++) {

                            $data_thump['config']['source_image'] = CARD_IMAGE . $result['orig_name'];
                            $data_thump['config']['maintain_ratio'] = TRUE;
                            $data_thump['config']['create_thumb'] = TRUE;
                            $data_thump['config']['new_image'] = $result['orig_name'];
                            $data_thump['config']['thumb_marker'] = TRUE;
                            $data_thump['width'] = $thumb_array[$j]['width'];
                            $data_thump['height'] = $thumb_array[$j]['height'];
                            $data_thump['full_path'] = $result['full_path'];
//                            $data_thump['table'] = 'kg_sell_artwork_has_images';
//                            $data_thump['id'] = $sell_artwork_id;
//                            $data_thump['parent_id'] = $original_img_id;
                            $thumb_data = $this->mylibrary->create_thumb($data_thump);
                        }
                    } else {
                        $this->db->trans_rollback();
                    }
                }
            }
            exit;


            $redirect = admin_url('cards');
            $json_response = sucess_response('Card Added Succuessfully!..', $redirect);
        } else {
            $json_response = error_response(validation_errors());
        }
        return $json_response;
    }

}

?>