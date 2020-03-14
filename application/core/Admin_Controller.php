<?php
/**
 * Description of Admin_controller
 *
 * @author Kunjt Gallery
 */
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Admin_Controller extends MY_Controller {
    public $user_data = null;

    function __construct() {
        parent::__construct();
        if ($this->router->fetch_class() != "account" && $this->router->fetch_method() != "login") {
            if (!isset($this->session->userdata['valid_admin'])) {
                redirect(base_url().'admin');
            }
            $this->user_data = $this->session->userdata('valid_admin');
        }
    }
}
?>