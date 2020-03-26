<?php

class CoverCrops extends Front_Controller {

    function __construct() {
        parent::__construct();
        
    }

    /* tab-1st */
    function legumes() {
      
       $data['page'] = 'frontv2/covercrops/legumes/homepage';
       $data['title'] = "Legumes";
       $data['description'] = "Description";
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function crimsonclover() {
      
       $data['page'] = 'frontv2/covercrops/legumes/crimsonclover';
       $data['title'] = "Crimson Clover";
       $data['description'] = "Description";
       $data['crimsonclover'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function berseemclover() {
      
       $data['page'] = 'frontv2/covercrops/legumes/berseemclover';
       $data['title'] = "Berseem Clover";
       $data['description'] = "Description";
       $data['berseemclover'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function foragepeas() {
      
       $data['page'] = 'frontv2/covercrops/legumes/foragepeas';
       $data['title'] = "Forage Peas";
       $data['description'] = "Description";
       $data['foragepeas'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function austrianwinterpeas() {
      
       $data['page'] = 'frontv2/covercrops/legumes/austrianwinterpeas';
       $data['title'] = "Austruan Winter Peas";
       $data['description'] = "Description";
       $data['austrianwinterpeas'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function cowpeas() {
      
       $data['page'] = 'frontv2/covercrops/legumes/cowpeas';
       $data['title'] = "Cow Peas";
       $data['description'] = "Description";
       $data['cowpeas'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function tntbrandhairyvetch() {
      
       $data['page'] = 'frontv2/covercrops/legumes/tntbrandhairyvetch';
       $data['title'] = "TNT Brand Hairy Vetch";
       $data['description'] = "Description";
       $data['tntbrandhairyvetch'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function commonvetch() {
      
       $data['page'] = 'frontv2/covercrops/legumes/commonvetch';
       $data['title'] = "Common Vetch";
       $data['description'] = "Description";
       $data['commonvetch'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function fababeans() {
      
       $data['page'] = 'frontv2/covercrops/legumes/fababeans';
       $data['title'] = "Faba Beans";
       $data['description'] = "Description";
       $data['fababeans'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function sunhemp() {
        
       $data['page'] = 'frontv2/covercrops/legumes/sunhemp';
       $data['title'] = "Sun Hemp";
       $data['description'] = "Description";
       $data['sunhemp'] = 'active-link';
       $data['legumes'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    /* tab-2nd */
    function brassicas() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/homepage';
       $data['title'] = "Brassicas";
       $data['description'] = "Description";
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function nitroradish() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/nitroradish';
       $data['title'] = "Nitro Radish";
       $data['description'] = "Description";
       $data['nitroradish'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function fumaradbrandoilseed() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/fumaradbrandoilseed';
       $data['title'] = "Fumarad Brand Oil Seed";
       $data['description'] = "Description";
       $data['fumaradbrandoilseed'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function vivanthybridbrassica() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/vivanthybridbrassica';
       $data['title'] = "Vivant Hybrid Brassica";
       $data['description'] = "Description";
       $data['vivanthybridbrassica'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function forageturnips() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/forageturnips';
       $data['title'] = "Forage Turnips";
       $data['description'] = "Description";
       $data['forageturnips'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function foragekale() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/foragekale';
       $data['title'] = "Forage Kale";
       $data['description'] = "Description";
       $data['foragekale'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function foragerape() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/foragerape';
       $data['title'] = "Forage Rape";
       $data['description'] = "Description";
       $data['foragerape'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function mustard() {
      
       $data['page'] = 'frontv2/covercrops/brassicas/mustard';
       $data['title'] = "Mustard";
       $data['description'] = "Description";
       $data['mustard'] = 'active-link';
       $data['brassicas'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    /* tab-3rd */
    function grassGrain() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/homepage';
       $data['title'] = "Grass Grain";
       $data['description'] = "Description";
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function fallrye() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/fallrye';
       $data['title'] = "Fall Rye";
       $data['description'] = "Description";
       $data['fallrye'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function oats() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/oats';
       $data['title'] = "Oats";
       $data['description'] = "Description";
       $data['oats'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function wintertriticale() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/wintertriticale';
       $data['title'] = "Winter Triticale";
       $data['description'] = "Description";
       $data['wintertriticale'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function annualryegrass() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/annualryegrass';
       $data['title'] = "Annual Ryegrass";
       $data['description'] = "Description";
       $data['annualryegrass'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function nitrobranditalian() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/nitrobranditalian';
       $data['title'] = "Nitro Brand Italian";
       $data['description'] = "Description";
       $data['nitrobranditalian'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function sorghumsudangrass() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/sorghumsudangrass';
       $data['title'] = "Sorghum Sudangrass";
       $data['description'] = "Description";
       $data['sorghumsudangrass'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function pearlmillet() {
      
       $data['page'] = 'frontv2/covercrops/grassgrain/pearlmillet';
       $data['title'] = "Pearl Millet";
       $data['description'] = "Description";
       $data['pearlmillet'] = 'active-link';
       $data['grassgrain'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    /* tab-4th */
    function otherCoverCrops() {
      
       $data['page'] = 'frontv2/covercrops/other/homepage';
       $data['title'] = "Other Cover Crops";
       $data['description'] = "Description";
       $data['other'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function buckwheat() {
      
       $data['page'] = 'frontv2/covercrops/other/buckwheat';
       $data['title'] = "Buckwheat";
       $data['description'] = "Description";
       $data['buckwheat'] = 'active-link';
       $data['other'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function sunflowers() {
      
       $data['page'] = 'frontv2/covercrops/other/sunflowers';
       $data['title'] = "Sunflowers";
       $data['description'] = "Description";
       $data['sunflowers'] = 'active-link';
       $data['other'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function phacelia() {
      
       $data['page'] = 'frontv2/covercrops/other/phacelia';
       $data['title'] = "Phacelia";
       $data['description'] = "Description";
       $data['phacelia'] = 'active-link';
       $data['other'] = 'open active-tree';
       $data['covercrops'] = 'active';
        
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function mixtures() {
      
       $data['page'] = 'frontv2/covercrops/mixtures/homepage';
       $data['title'] = "Mixtures";
       $data['description'] = "Description";
       $data['mixtures'] = 'open active-tree';
       $data['covercrops'] = 'active';
       
       $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
  }

?>