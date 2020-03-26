<?php

class Articles extends Front_Controller {

    function __construct() {
        parent::__construct();
        
    }

    function index(){
        $this->articlesList();
    }
    
    function articlesList() {
       $data['page'] = 'frontv2/articles/articlesList';
       $data['title'] = "Articles";
       $data['description'] = "Description";
       $data['homepage'] = 'open active-tree';
       $data['articles'] = 'active';
        
      
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
   
    
    public function silageCornArt1()
    {
        $this->output
           ->set_content_type('application/pdf')
           ->set_output(file_get_contents('public/frontv2/pdf/SilageCorn_Leafy-Corn-Silage-Guide.pdf'));
    }
    public function turfArt1()
    {
        $this->output
           ->set_content_type('application/pdf')
           ->set_output(file_get_contents('public/frontv2/pdf/Turf_Lateral-Spread-Perennial-Ryegrass.pdf'));
    }
    
  }
?>