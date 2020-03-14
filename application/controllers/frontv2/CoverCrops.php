<?php

class CoverCrops extends Front_Controller {

    function __construct() {
        parent::__construct();
        
    }

    /* tab-1st */
    function legumes() {
      
       $data['page'] = 'frontv2/covercrops/legumes/homepage';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function crimsonclover() {
      
       $data['page'] = 'frontv2/covercrops/legumes/crimsonclover';
       $data['crimsonclover'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function berseemclover() {
      
       $data['page'] = 'frontv2/covercrops/legumes/berseemclover';
       $data['berseemclover'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function foragepeas() {
      
       $data['page'] = 'frontv2/covercrops/legumes/foragepeas';
       $data['foragepeas'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function austrianwinterpeas() {
      
       $data['page'] = 'frontv2/covercrops/legumes/austrianwinterpeas';
       $data['austrianwinterpeas'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function cowpeas() {
      
       $data['page'] = 'frontv2/covercrops/legumes/cowpeas';
       $data['cowpeas'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function tntbrandhairyvetch() {
      
       $data['page'] = 'frontv2/covercrops/legumes/tntbrandhairyvetch';
       $data['tntbrandhairyvetch'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function commonvetch() {
      
       $data['page'] = 'frontv2/covercrops/legumes/commonvetch';
       $data['commonvetch'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function fababeans() {
      
       $data['page'] = 'frontv2/covercrops/legumes/fababeans';
       $data['fababeans'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function sunhemp() {
        
       $data['page'] = 'frontv2/covercrops/legumes/sunhemp';
       $data['sunhemp'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    /* tab-2nd */
    function brassicas() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/homepage';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function nitroradish() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/nitroradish';
       $data['nitroradish'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function fumaradbrandoilseed() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/fumaradbrandoilseed';
       $data['fumaradbrandoilseed'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function vivanthybridbrassica() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/vivanthybridbrassica';
       $data['vivanthybridbrassica'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function forageturnips() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/forageturnips';
       $data['forageturnips'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function foragekale() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/foragekale';
       $data['foragekale'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function foragerape() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/foragerape';
       $data['foragerape'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function mustard() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/mustard';
       $data['mustard'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    /* tab-3rd */
    function grassGrain() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/homepage';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function fallrye() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/fallrye';
       $data['fallrye'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function oats() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/oats';
       $data['oats'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function wintertriticale() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/wintertriticale';
       $data['wintertriticale'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function annualryegrass() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/annualryegrass';
       $data['annualryegrass'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function nitrobranditalian() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/nitrobranditalian';
       $data['nitrobranditalian'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function sorghumsudangrass() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/sorghumsudangrass';
       $data['sorghumsudangrass'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function pearlmillet() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/pearlmillet';
       $data['pearlmillet'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    /* tab-4th */
    function otherCoverCrops() {
      
       $data['page'] = 'frontv2/covercrops/other/homepage';
       $data['other'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function buckwheat() {
      
       $data['page'] = 'frontv2/covercrops/other/buckwheat';
       $data['buckwheat'] = 'active-link';
       $data['other'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function sunflowers() {
      
       $data['page'] = 'frontv2/covercrops/other/sunflowers';
       $data['sunflowers'] = 'active-link';
       $data['other'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function phacelia() {
      
       $data['page'] = 'frontv2/covercrops/other/phacelia';
       $data['phacelia'] = 'active-link';
       $data['other'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function mixtures() {
      
       $data['page'] = 'frontv2/covercrops/mixtures/homepage';
       $data['mixtures'] = 'open active-tree';
       $data['covercrops'] = 'active';
       
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
  }

?>