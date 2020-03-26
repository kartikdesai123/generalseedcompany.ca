<?php

class Turf extends Front_Controller {

    function __construct() {
        parent::__construct();
        
    }

    function lslawnseedmixtures() {
       $data['page'] = 'frontv2/turf/lslawnseedmixtures';
       $data['title'] = "Lateral Spread Lawn Seed Mixture";
       $data['description'] = "Description";
       $data['lslawnseedmixtures'] = 'open active-tree';
       $data['turf'] = 'active';
        
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    function lawnseedmixtures() {
       $data['page'] = 'frontv2/turf/lawnseedmixtures';
       $data['title'] = "Lawn Seed Mixtures";
       $data['description'] = "Description";
       $data['lawnseedmixtures'] = 'open active-tree';
       $data['turf'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
  
    function lssportsfieldmixtures() {
       $data['page'] = 'frontv2/turf/lssportsfieldmixtures';
       $data['title'] = "Lateral Spread Sports Field Mixtures";
       $data['description'] = "Description";
       $data['lssportsfieldmixtures'] = 'open active-tree';
       $data['turf'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function lsgolfmixtures() {
       $data['page'] = 'frontv2/turf/lsgolfmixtures';
       $data['title'] = "Lateral Spread Golf Mixtures";
       $data['description'] = "Description";
       $data['lsgolfmixtures'] = 'open active-tree';
       $data['turf'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function sodmixtures() {
       $data['page'] = 'frontv2/turf/sodmixtures';
       $data['title'] = "Sod Mixtures";
       $data['description'] = "Description";
       $data['sodmixtures'] = 'open active-tree';
       $data['turf'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function provincialhighwaymixtures() {
       $data['page'] = 'frontv2/turf/provincialhighwaymixtures';
       $data['title'] = "Provincial Highway Mixtures";
       $data['description'] = "Description";
       $data['provincialhighwaymixtures'] = 'open active-tree';
       $data['turf'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function individualturfgrass() {
       $data['page'] = 'frontv2/turf/individualturfgrass';
       $data['title'] = "Individual Turf Grass";
       $data['description'] = "Description";
       $data['individualturfgrass'] = 'open active-tree';
       $data['turf'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function deerplotmixtures() {
       $data['page'] = 'frontv2/turf/deerplotmixtures';
       $data['title'] = "Deer Plot Mixtures";
       $data['description'] = "Description";
       $data['deerplotmixtures'] = 'open active-tree';
       $data['turf'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function packaginginformation() {
       $data['page'] = 'frontv2/turf/packaginginformation';
       $data['title'] = "Packaging Information";
       $data['description'] = "Description";
       $data['packaginginformation'] = 'open active-tree';
       $data['turf'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
  }

?>