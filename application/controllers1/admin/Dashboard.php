<?php

class Dashboard extends Admin_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['page'] = "admin/account/dashboard";
        $data['breadcrumb'] = 'Dashboard';
        $data['breadcrumb_sub'] = 'dashboard';
        $data['breadcrumb_list'] = array(
            array('Dashboard', '')
        );
        $data['dashboard'] = 'start active open';
        $data['dashboard'] = 'start active';
        $data['var_meta_title'] = 'Dashboard';
        $data['var_meta_description'] = 'Dashboard';
        $data['var_meta_keyword'] = 'Dashboard';
        $data['js'] = array(
            'admin/dashboard.js'
        );
        $data['css'] = array(
        );
        $data['css_plugin'] = array(
            'bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
            'bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css'
        );
        $data['js_plugin'] = array(
            'counterup/jquery.waypoints.min.js',
            'counterup/jquery.counterup.min.js',
            'amcharts/amcharts/amcharts.js',
            'amcharts/amcharts/serial.js',
            'amcharts/amcharts/pie.js',
            'bootstrap-datepicker/js/bootstrap-datepicker.min.js',
        );
        $data['init'] = array(
            'Dashboard.init()',
            'ComponentsDateTimePickers.init()'
        );
        $array = array(
            'startDate' => date('Y-m-01'),
            'endDate' => date('Y-m-d'),
        );
        $this->load->view(ADMIN_LAYOUT, $data);
    }
}
?>