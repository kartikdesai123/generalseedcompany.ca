<?php

class Turf extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function turf() {
        $data['page'] = 'frontv2/turf/turf';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['turf']['title'];
        $data['description'] = $variable['turf']['discription'];
        $data['lslawnseedmixtures'] = 'open active-tree';
        $data['turf'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function lslawnseedmixtures() {
        $data['page'] = 'frontv2/turf/lslawnseedmixtures';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['ls-lawn-seed-mixtures']['title'];
        $data['description'] = $variable['ls-lawn-seed-mixtures']['discription'];
        $data['lslawnseedmixtures'] = 'open active-tree';
        $data['turf'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function lawnseedmixtures() {
        $data['page'] = 'frontv2/turf/lawnseedmixtures';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['lawn-seed-mixtures']['title'];
        $data['description'] = $variable['lawn-seed-mixtures']['discription'];
        $data['lawnseedmixtures'] = 'open active-tree';
        $data['turf'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function lssportsfieldmixtures() {
        $data['page'] = 'frontv2/turf/lssportsfieldmixtures';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['ls-sports-field-mixtures']['title'];
        $data['description'] = $variable['ls-sports-field-mixtures']['discription'];
        $data['lssportsfieldmixtures'] = 'open active-tree';
        $data['turf'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function lsgolfmixtures() {
        $data['page'] = 'frontv2/turf/lsgolfmixtures';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['ls-golf-mixtures']['title'];
        $data['description'] = $variable['ls-golf-mixtures']['discription'];
        $data['lsgolfmixtures'] = 'open active-tree';
        $data['turf'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function sodmixtures() {
        $data['page'] = 'frontv2/turf/sodmixtures';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['sod-mixtures']['title'];
        $data['description'] = $variable['sod-mixtures']['discription'];
        $data['sodmixtures'] = 'open active-tree';
        $data['turf'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function provincialhighwaymixtures() {
        $data['page'] = 'frontv2/turf/provincialhighwaymixtures';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['provincial-highway-mixtures']['title'];
        $data['description'] = $variable['provincial-highway-mixtures']['discription'];
        $data['provincialhighwaymixtures'] = 'open active-tree';
        $data['turf'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function individualturfgrass() {
        $data['page'] = 'frontv2/turf/individualturfgrass';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['individual-turf-grass']['title'];
        $data['description'] = $variable['individual-turf-grass']['discription'];
        $data['individualturfgrass'] = 'open active-tree';
        $data['turf'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function deerplotmixtures() {
        $data['page'] = 'frontv2/turf/deerplotmixtures';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['deer-plot-mixtures']['title'];
        $data['description'] = $variable['deer-plot-mixtures']['discription'];
        $data['deerplotmixtures'] = 'open active-tree';
        $data['turf'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function packaginginformation() {
        $data['page'] = 'frontv2/turf/packaginginformation';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['packaging-information']['title'];
        $data['description'] = $variable['packaging-information']['discription'];
        $data['packaginginformation'] = 'open active-tree';
        $data['turf'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

}

?>