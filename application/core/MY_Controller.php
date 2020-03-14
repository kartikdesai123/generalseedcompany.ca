<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class MY_Controller extends CI_Controller {

    public $json_response = null;

    function __construct() {
        parent::__construct();
        $this->json_response = array('status' => 'error', 'message' => 'something went wrong!');
    }

}
