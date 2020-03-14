<?php

class Toval extends CI_Model {

    // id to val
    function idtoval($id, $val, $name, $table) {
        if (isset($val)) {
            $row = $this->idtorow($id, $val, $table, $name);
            if (isset($row->$name)) {
                return $row->$name;
            }
        }
    }

    function idtorow($id, $val, $table, $name = '*') {

        $this->db->select($name);
        $this->db->from($table);
        $this->db->where($id, $val);
        $query = $this->db->get();
//        print_r($query);exit
//        echo  $this->db->last_query();exit;
        if ($query->num_rows() > 0) {
            $row = $query->row();
//             $row = $query->result_array();exit;
            return $row;
        }
    }

    function idtorowarr($id, $val, $table, $name = '*') {

        $this->db->select($name);
        $this->db->from($table);
        $this->db->where($id, $val);
        $query = $this->db->get();
//        echo  $this->db->last_query();
        if ($query->num_rows() > 0) {
            $row = $query->row_array();
            return $row;
        }
    }

    function GetCountry($countryName, $fieldname, $table) {
        $this->db->select('int_glcode');
        $this->db->from($table);
        $this->db->where($fieldname, $countryName);
        $query = $this->db->get();
        if ($query->num_rows() > 0) {
            $row = $query->result_array();
            return $row;
        }
    }

    function Getteam($teamID, $fieldName, $table) {
        $this->db->select('int_glcode');
        $this->db->from($table);
        $this->db->where($fieldName, $teamID);
        $query = $this->db->get();
        $row = $query->result_array();
        return $row;
    }

    function getPlayerGoalScores($name, $fieldName, $table) {
        $player = explode(";", $name);
        if (empty($player[count($player) - 1])) {
            unset($player[count($player) - 1]);
        }
//        print_r($player);exit;
        $players_id = array();
        for ($i = 0; $i < count($player); $i++) {
            $playerDetail = explode(':', $player[$i]);
//            print_r($playerDetail);exit;
            $this->db->where($fieldName, trim($playerDetail[$i][1]));
            $query = $this->db->get($table)->result_array();
            if (!empty($query)) {
                $players_id[] = array(
                    'fk_player' => $query[0]['int_glcode'],
                    'time' => rtrim($playerDetail[0], "'"),
                );
            } else {
                $newplayer = array(
                    'var_name' => trim($playerDetail[1]),
                    'en_source' => 'L',
                    'dt_created' => date("Y-m-d H:i:s"),
                    'dt_modified' => date("Y-m-d H:i:s"),
                );
                $this->db->insert('fw_player', $newplayer);
                $last_id = $this->db->insert_id();
                $players_id[] = array(
                    'fk_player' => $last_id,
                    'time' => rtrim($playerDetail[0], "'"),
                );
            }
//            print_r($row);
//            exit;
        }
        return $players_id;
    }

    function idtorowarray($id, $val, $table, $name = '*', $type = "data") {

        $this->db->select($name);
        $this->db->from($table);

        $this->db->where($id, $val);
        $query = $this->db->get();
        //echo  $this->db->last_query();
        if ($type == "count") {
            return $query->num_rows();
        }
        if ($query->num_rows() > 0) {
            foreach ($query->result_array() as $row) {
//                echo $row['title'];
//                echo $row['name'];
//                echo $row['body'];
                $result[] = $row;
            }
        }
        return $result;
    }

    function idtorowarray_in($id, $val, $table, $name = '*', $type = "data") {

        $this->db->select($name);
        $this->db->from($table);

        $this->db->where_in($id, $val);
        $query = $this->db->get();
        //echo  $this->db->last_query();        
        if ($type == "count") {
            return $query->num_rows();
        }
        if ($query->num_rows() > 0) {
            foreach ($query->result_array() as $row) {
//                echo $row['title'];
//                echo $row['name'];
//                echo $row['body'];
                $result[] = $row;
            }
        }
        return $result;
    }

    function fetchArrayMC($condiion, $table, $name = '*', $type = "data", $condiion_in = array()) {

        $this->db->select($name);
        $this->db->from($table);
        if (!empty($condiion)) {
            foreach ($condiion as $key => $value) {
                $this->db->where($key, $value);
            }
        }
        if (!empty($condiion_in)) {
            foreach ($condiion_in as $key => $value) {
                $this->db->where_in($key, $value);
            }
        }
        $query = $this->db->get();
//        echo  $this->db->last_query();
        if ($type == "count") {
            return $query->num_rows();
        }
        if ($query->num_rows() > 0) {
            foreach ($query->result_array() as $row) {
//                echo $row['title'];
//                echo $row['name'];
//                echo $row['body'];
                $result[] = $row;
            }
        }
        return $result;
    }

    function id_delete($id, $tb_name, $clm) {
        $this->db->where($clm, $id);
        $sql = $this->db->delete($tb_name);
        //echo  $this->db->last_query();
    }

    function id_delete_array($id_array, $tb_name, $clm, $condition = array()) {

        if (!empty($condition)) {
            $this->db->where($condition);
        }
        $this->db->where_in($clm, $id_array);
        $sql = $this->db->delete($tb_name);
        return TRUE;
    }

    function update_delete($id_array, $tb_name, $clm, $data, $condition) {
        if (!empty($condition)) {
            $this->db->where($condition);
        }
        $this->db->where_in($clm, $id_array);
        $sql = $this->db->update($tb_name, $data);
//        echo  $this->db->last_query();        
    }

    function createPNGFromBase64($param = array()) {
        $data = $param['data'];
        list($type, $data) = explode(';', $data);
        list(, $data) = explode(',', $data);

        $data = base64_decode($data);

        $savePath = $param['path'] . $param['filename'];

        file_put_contents($savePath, $data);
    }

    function calculateResizeImage($width, $height, $thumb_width, $thumb_height) {
        $image_height = floor(($height / $width) * $thumb_width);
        $image_width = $thumb_width;

        if ($image_height > $thumb_height) {
            $image_width = floor(($width / $height) * $thumb_height);
            $image_height = $thumb_height;
        }
        $resultArray = array($image_width, $image_height);

        return $resultArray;
    }

    function search_array($array, $key, $value) {
        // print_r($array);
        $results = array();

        if (is_array($array)) {
            echo $array[$key];
            echo $value;
            exit;
            if (isset($array[$key]) && $array[$key] == $value) {
                $results[] = $array;
            }

            foreach ($array as $subarray) {
                $results = array_merge($results, $this->search_array($subarray, $key, $value));
            }
        }
        // print_r($results);exit;
        return $results;
    }

    function in_multiarray($array, $field, $elem) {
        $top = sizeof($array) - 1;
        $bottom = 0;
        while ($bottom <= $top) {
            if ($array[$bottom][$field] == $elem)
                return $bottom;
            else
            if (is_array($array[$bottom][$field]))
                if (in_multiarray($elem, ($array[$bottom][$field])))
                    return $bottom;

            $bottom++;
        }
        return FALSE;
    }

    function valid_url($url) {
        if (!filter_var($url)) {

            if (empty($url)) {
                $img = 'http://www.placehold.it/200x150/EFEFEF/AAAAAA&text=no+image';
            } else {
                $img = $this->base_path . $url;
            }
        } else {
            $img = $url;
        }
        return $img;
    }

    function str_replace_from_array($str, $replace_arr, $pattern = '/<p>&nbsp;<\/p>/') {
        $count = 0;
        $str1 = preg_replace_callback($pattern, function ($match) use ($replace_arr, &$count) {
            return count($replace_arr) > $count ? $replace_arr[$count++] : $match[0];
        }, $str);
        return $str1;
    }

    function download_csv($dataArray, $fileName) {

        if (count($dataArray) > 0) {
            $this->load->helper('csv');
            array_unshift($dataArray, array_keys($dataArray[0]));
            array_to_csv($dataArray, $fileName . '.csv');
            exit;
        } else {
            $dataArray[0]['No data available in table'] = '';
            $this->load->helper('csv');
            array_unshift($dataArray, array_keys($dataArray[0]));
            array_to_csv($dataArray, $fileName . '.csv');
            exit;
        }
    }

}
