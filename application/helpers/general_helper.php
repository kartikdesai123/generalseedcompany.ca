<?php



function get_country($ip) {

    $CI = & get_instance();

    $CI->load->model('curl_function');

    $url = "http://api.wipmania.com/" . $ip . "?" . base_url();

    $result = $CI->curl_function->get($url);

    return $result;

}



function admin_url($url = '') {

    $CI = &get_instance();

    return $CI->config->config['admin_url'] . $url;

}



function get_project_name() {

    $CI = &get_instance();

    return $CI->config->config['project_name'];

}



function get_project_link() {

    $CI = &get_instance();

    return $CI->config->config['project_link'];

}



function get_skip($page_no = 1, $per_page = 24) {

    return (($page_no - 1) * $per_page);

}



function upload_single_image($file, $name, $path, $thumb, $imagefrom) {

    $CI = & get_instance();



    $return['error'] = '';

    $image_name = $name . '_' . time();



    $CI->load->helper('form');

    $config['upload_path'] = $path;

    $config['allowed_types'] = 'gif|jpg|png|jpeg|JPEG|PNG|JPG';

    $config['file_name'] = $image_name;



    $CI->load->library('upload', $config);

    $CI->upload->initialize($config);



    $CI->upload->set_allowed_types('gif|jpg|png|jpeg|JPEG|PNG|JPG|GIF');



    if (!$CI->upload->do_upload(key($file))) {

        $return['error'] = $CI->upload->display_errors();

    } else {

        $result = $CI->upload->data();

        $return['data'] = $result;

    }



    if ($thumb == TRUE && $return['error'] == '') {

        $CI->load->library('Mylibrary');

        if ($imagefrom == 'PRODUCTHOME') {

            $thumb_array = array(

                array('width' => '538', 'height' => '538', 'image_type' => 'MEDIUM'));

        } else {

            $thumb_array = array(

                array('width' => '100', 'height' => '100', 'image_type' => 'SMALL'),

                array('width' => '250', 'height' => '250', 'image_type' => 'MEDIUM'));

        }



        for ($i = 0; $i < count($thumb_array); $i++) {

            $imageinfo = getimagesize($result['full_path']);

            $thumbSize = $CI->mylibrary->calculateResizeImage($imageinfo[0], $imageinfo[1], $thumb_array[$i]['width'], $thumb_array[$i]['height']);



            $CI->load->library('image_lib');

            $conf['image_library'] = 'gd2';

            $conf['source_image'] = $path . '/' . $result['orig_name'];

            $conf['create_thumb'] = TRUE;

            $conf['maintain_ratio'] = TRUE;

            $conf['new_image'] = $result['orig_name'];

            $conf['thumb_marker'] = "_" . $thumb_array[$i]['image_type'];

            $conf['width'] = $thumbSize['width'];

            $conf['height'] = $thumbSize['height'];

            $CI->image_lib->clear();

            $CI->image_lib->initialize($conf);

            if (!$CI->image_lib->resize()) {

                $return['error'] = 'Thumb Not Created';

            }

        }

    }



    return $return;

}



function delete_image($array, $path) {

    $CI = & get_instance();

    $img = $CI->db->select($array['field'])->where('int_glcode', $array['id'])->get($array['table'])->row_array();

    $mainImg = $img[$array['field']];

    $expImg = explode('.', $mainImg);

    $imgdelete = $path . $mainImg;

    if (file_exists($imgdelete)) {

        unlink($imgdelete);

    }

    return TRUE;

}



function sanitize($string, $force_lowercase = true, $anal = false) {



    $string = htmlentities($string, ENT_QUOTES, 'UTF-8');

    $string = preg_replace('~&([a-z]{1,2})(acute|cedil|circ|grave|lig|orn|ring|slash|th|tilde|uml);~i', '$1', $string);

    $string = html_entity_decode($string, ENT_QUOTES, 'UTF-8');



    $strip = array("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "+", "[", "{", "]",

        "}", "\\", "|", ";", ":", "\"", "'", "&#8216;", "&#8217;", "&#8220;", "&#8221;", "&#8211;", "&#8212;",

        "—", "–", ",", "<", ".", ">", "/", "?");

    $clean = trim(str_replace($strip, "", strip_tags($string)));

    $clean = preg_replace('/\s+/', "-", $clean);

    $clean = ($anal) ? preg_replace("/[^a-zA-Z0-9]/", "", $clean) : $clean;

    return ($force_lowercase) ?

            (function_exists('mb_strtolower')) ?

            mb_strtolower($clean, 'UTF-8') :

            strtolower($clean) :

            $clean;

}



function sanitize_title($string) {



    $strip = array("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "[", "{", "]",

        "}", "\\", "|", ";", ":", "\"", "'", "&#8216;", "&#8217;", "&#8220;", "&#8221;", "&#8211;", "&#8212;",

        "—", "–", ",", "<", ".", ">", "/", "?");

    $string = trim(str_replace($strip, "", strip_tags($string)));



    $url = $string;

    $url = preg_replace('~[^\\pL0-9_]+~u', '-', $url); // substitutes anything but letters, numbers and '_' with separator

    $url = trim($url, "-");

    $url = iconv("utf-8", "us-ascii//TRANSLIT", $url); // TRANSLIT does the whole job

    $url = strtolower($url);

    $url = preg_replace('~[^-a-z0-9_]+~', '', $url); // keep only letters, numbers, '_' and separator

    return $url;

}



function apply_lang($string, $delimiter = ' ') {

    $CI = & get_instance();

    $str_array = explode($delimiter, $string);

    $return_string = '';



    for ($i = 0; $i < count($str_array); $i++) {

        $return_string .= $CI->lang->line($str_array[$i]);

        if ($i < count($str_array)) {

            $return_string .= $delimiter;

        }

    }

    if ($return_string == '') {

        return $CI->lang->line($string);

    }

    return $return_string;

}



function time_ago($datetime) {

    $date2 = date("Y-m-d h:i:s");

    $date1 = $datetime;

    $diff = abs(strtotime($date2) - strtotime($date1));



    $min = 60;

    $hour = 60 * 60;

    $day = 60 * 60 * 24;

    $month = $day * 30;



    if ($diff < 60) { //Under a min

        $timeago = $diff . " seconds";

    } elseif ($diff < $hour) { //Under an hour

        $timeago = round($diff / $min) . " mins";

    } elseif ($diff < $day) { //Under a day

        $timeago = round($diff / $hour) . " hours";

    } elseif ($diff < $month) { //Under a day

        $timeago = round($diff / $day) . " days";

    } else {

        $timeago = round($diff / $month) . " months";

    }

    return $timeago;

}



function sorttextlen($text, $limit) {

    if (strlen($text) < $limit) {

        $sort_text = mb_substr($text, 0, $limit);

    } else if (strlen($text) > $limit) {

        $sort_text = mb_substr($text, 0, $limit) . '...';

    }

    return $sort_text;

}



function sucess_response($message, $redirect = "", $jscode = "") {



    $json_response['message'] = $message;

    $json_response['status'] = 'success';

    if (!empty($redirect)) {

        $json_response['redirect'] = $redirect;

    }
    
    if (!empty($jscode)) {

        $json_response['jscode'] = $jscode;

    }

    return $json_response;

}



function error_response($message, $redirect = "", $jscode = "") {



    $json_response['message'] = $message;

    $json_response['status'] = 'warning';

    if (!empty($redirect)) {

        $json_response['redirect'] = $redirect;

    }

    return $json_response;

}



function shortenText($str, $len, $readMore = " ... ") {



    if (mb_strlen($str) > $len) {

        $str = mb_substr($str, 0, $len);

        //        $str = mb_substr($str, 0, mb_strrpos($str, " "));

        return html_entity_decode(mb_convert_encoding($str, 'HTML-ENTITIES', 'UTF-8'), ENT_QUOTES, 'UTF-8') . $readMore;

    } else

        return html_entity_decode(mb_convert_encoding($str, 'HTML-ENTITIES', 'UTF-8'), ENT_QUOTES, 'UTF-8');

}



function date_formate($date) {

    $date = date('M', strtotime($date)) . ' ' . date('j', strtotime($date)) . "'" . date('y', strtotime($date)) . ' at' . ' ' . date('h:i', strtotime($date));

    return $date;

}



function str_replace_first($from, $to, $subject) {

    $from = '/' . preg_quote($from, '/') . '/';



    return preg_replace($from, $to, $subject, 1);

}



/* ----   Start Function to get the client IP address ----- */



function get_ip() {

    $ipaddress = '';

    if (getenv('HTTP_CLIENT_IP')) {

        $ipaddress = getenv('HTTP_CLIENT_IP');

    } else if (getenv('HTTP_X_FORWARDED_FOR')) {

        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');

    } else if (getenv('HTTP_X_FORWARDED')) {

        $ipaddress = getenv('HTTP_X_FORWARDED');

    } else if (getenv('HTTP_FORWARDED_FOR')) {

        $ipaddress = getenv('HTTP_FORWARDED_FOR');

    } else if (getenv('HTTP_FORWARDED')) {

        $ipaddress = getenv('HTTP_FORWARDED');

    } else if (getenv('REMOTE_ADDR')) {

        $ipaddress = getenv('REMOTE_ADDR');

    } else {

        $ipaddress = 'UNKNOWN';

    }

    return $ipaddress;

}



/* ---- End Function to get the client IP address ----- */



function getLoginUserData() {

    $CI = &get_instance();

    if ($CI->session->userdata['valid_admin']) {

        $result = $CI->session->userdata['valid_admin'];

    }

    return $result;

}



function get_img($path, $image, $multiple_img = FALSE) {

//        echo $path .'<br>';

//        echo $image .'<br>';

    $path = trim($path);

    $image = trim($image);

    if ($multiple_img == TRUE) {

        if (!empty($image)) {

            $img = explode(',', $image);

            if (file_exists($path . $img[0])) {

                $data = base_url() . $path . $img[0];

            } else {

                $data = base_url() . NO_IMAGE;

            }

        } else {

            $data = base_url() . NO_IMAGE;

        }

    } else {

        if (!empty($image) && !empty($path)) {

            if (file_exists($path . $image)) {

                $data = base_url() . $path . $image;

            } else {

                $data = base_url() . NO_IMAGE;

            }

        } else {

            $data = base_url() . NO_IMAGE;

        }

    }

    return $data;

}



function getLoginUserType($userData) {

    $CI = &get_instance();

    if ($CI->session->userdata['valid_admin'] && $CI->uri->segment(1) == 'admin') {

        $result = $CI->session->userdata['valid_admin'];

    }

    return $result['user_type'];

}



function getbaseURL($url = '') {

    $CI = &get_instance();

    if ($CI->session->userdata['valid_admin'] && $CI->uri->segment(1) == 'admin') {

        return admin_url($url);

    } else {

        return base_url($url);

    }

}



function tz_date($date, $formate = 'Y-m-d H:i:s', $zone = null) {

    return date($formate, strtotime($date));

}



function checkSubscription() {

    $CI = &get_instance();

    $userData = getLoginUserData();

    print_r($userData);

    exit;

}



function setDateFormate($date, $formate = 'Y-m-d') {

    

}



function get_img_thumb($path, $image, $thumb_type = '_thumb', $multiple_img = FALSE) {

//    echo $path . '<br>';

//    echo $image . '<br>';

    $path = trim($path);

    $image = trim($image);



    if (!empty($image) && !empty($path)) {

        if (file_exists($path . $image)) {

            $exp = explode('.', $image);

            $tmpImage = '';

            for ($i = 0; $i < (count($exp) - 1); $i++) {

                $tmpImage .= $exp[$i];

            }

            if (file_exists($path . $tmpImage . $thumb_type . '.' . end($exp))) {

                $data = base_url() . $path . $tmpImage . $thumb_type . '.' . end($exp);

            } else {

                $data = base_url() . $path . $tmpImage . '.' . end($exp);

            }

        } else {

            $data = base_url() . NO_IMAGE;

        }

    } else {

        $data = base_url() . NO_IMAGE;

    }

    return $data;

}