<?php

class CoverCrops extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    /* tab-1st */

    function covercrops() {

        $data['page'] = 'frontv2/covercrops/covercrops/homepage';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['covercrops']['title'];
        $data['description'] = $variable['covercrops']['discription'];
        $data['covercrops'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function legumes() {

        $data['page'] = 'frontv2/covercrops/legumes/homepage';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['legumes']['title'];
        $data['description'] = $variable['legumes']['discription'];
        $data['legumes'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function crimsonclover() {

        $data['page'] = 'frontv2/covercrops/legumes/crimsonclover';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['crimson-clover']['title'];
        $data['description'] = $variable['crimson-clover']['discription'];
        $data['crimsonclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function berseemclover() {

        $data['page'] = 'frontv2/covercrops/legumes/berseemclover';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['berseem-clover']['title'];
        $data['description'] = $variable['berseem-clover']['discription'];
        $data['berseemclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function foragepeas() {

        $data['page'] = 'frontv2/covercrops/legumes/foragepeas';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['forage-peas']['title'];
        $data['description'] = $variable['forage-peas']['discription'];
        $data['foragepeas'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function austrianwinterpeas() {

        $data['page'] = 'frontv2/covercrops/legumes/austrianwinterpeas';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['austrian-winter-peas']['title'];
        $data['description'] = $variable['austrian-winter-peas']['discription'];
        $data['austrianwinterpeas'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function cowpeas() {

        $data['page'] = 'frontv2/covercrops/legumes/cowpeas';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['cow-peas']['title'];
        $data['description'] = $variable['cow-peas']['discription'];
        $data['cowpeas'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function tntbrandhairyvetch() {

        $data['page'] = 'frontv2/covercrops/legumes/tntbrandhairyvetch';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['tnt-brand-hairy-vetch']['title'];
        $data['description'] = $variable['tnt-brand-hairy-vetch']['discription'];
        $data['tntbrandhairyvetch'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function commonvetch() {

        $data['page'] = 'frontv2/covercrops/legumes/commonvetch';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['common-vetch']['title'];
        $data['description'] = $variable['common-vetch']['discription'];
        $data['commonvetch'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function fababeans() {

        $data['page'] = 'frontv2/covercrops/legumes/fababeans';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['faba-beans']['title'];
        $data['description'] = $variable['faba-beans']['discription'];
        $data['fababeans'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function sunhemp() {

        $data['page'] = 'frontv2/covercrops/legumes/sunhemp';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['sun-hemp']['title'];
        $data['description'] = $variable['sun-hemp']['discription'];
        $data['sunhemp'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    /* tab-2nd */

    function brassicas() {

        $data['page'] = 'frontv2/covercrops/brassicas/homepage';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['brassicas']['title'];
        $data['description'] = $variable['brassicas']['discription'];
        $data['brassicas'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function nitroradish() {

        $data['page'] = 'frontv2/covercrops/brassicas/nitroradish';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['nitro-radish']['title'];
        $data['description'] = $variable['nitro-radish']['discription'];
        $data['nitroradish'] = 'active-link';
        $data['brassicas'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function fumaradbrandoilseed() {

        $data['page'] = 'frontv2/covercrops/brassicas/fumaradbrandoilseed';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['fumarad-brand-oil-seed']['title'];
        $data['description'] = $variable['fumarad-brand-oil-seed']['discription'];
        $data['fumaradbrandoilseed'] = 'active-link';
        $data['brassicas'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function vivanthybridbrassica() {

        $data['page'] = 'frontv2/covercrops/brassicas/vivanthybridbrassica';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['vivant-hybrid-brassica']['title'];
        $data['description'] = $variable['vivant-hybrid-brassica']['discription'];
        $data['vivanthybridbrassica'] = 'active-link';
        $data['brassicas'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function forageturnips() {

        $data['page'] = 'frontv2/covercrops/brassicas/forageturnips';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['forage-turnips']['title'];
        $data['description'] = $variable['forage-turnips']['discription'];
        $data['forageturnips'] = 'active-link';
        $data['brassicas'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function foragekale() {

        $data['page'] = 'frontv2/covercrops/brassicas/foragekale';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['forage-kale']['title'];
        $data['description'] = $variable['forage-kale']['discription'];
        $data['foragekale'] = 'active-link';
        $data['brassicas'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function foragerape() {

        $data['page'] = 'frontv2/covercrops/brassicas/foragerape';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['forage-rape']['title'];
        $data['description'] = $variable['forage-rape']['discription'];
        $data['foragerape'] = 'active-link';
        $data['brassicas'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function mustard() {

        $data['page'] = 'frontv2/covercrops/brassicas/mustard';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['mustard']['title'];
        $data['description'] = $variable['mustard']['discription'];
        $data['mustard'] = 'active-link';
        $data['brassicas'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    /* tab-3rd */

    function grassGrain() {

        $data['page'] = 'frontv2/covercrops/grassgrain/homepage';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['grass-grain']['title'];
        $data['description'] = $variable['grass-grain']['discription'];
        $data['grassgrain'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function fallrye() {

        $data['page'] = 'frontv2/covercrops/grassgrain/fallrye';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['fall-rye']['title'];
        $data['description'] = $variable['fall-rye']['discription'];
        $data['fallrye'] = 'active-link';
        $data['grassgrain'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function oats() {

        $data['page'] = 'frontv2/covercrops/grassgrain/oats';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['oats']['title'];
        $data['description'] = $variable['oats']['discription'];
        $data['oats'] = 'active-link';
        $data['grassgrain'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function wintertriticale() {

        $data['page'] = 'frontv2/covercrops/grassgrain/wintertriticale';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['winter-triticale']['title'];
        $data['description'] = $variable['winter-triticale']['discription'];
        $data['wintertriticale'] = 'active-link';
        $data['grassgrain'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function annualryegrass() {

        $data['page'] = 'frontv2/covercrops/grassgrain/annualryegrass';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['annual-ryegrass']['title'];
        $data['description'] = $variable['annual-ryegrass']['discription'];
        $data['annualryegrass'] = 'active-link';
        $data['grassgrain'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function nitrobranditalian() {

        $data['page'] = 'frontv2/covercrops/grassgrain/nitrobranditalian';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['nitro-brand-italian']['title'];
        $data['description'] = $variable['nitro-brand-italian']['discription'];
        $data['nitrobranditalian'] = 'active-link';
        $data['grassgrain'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function sorghumsudangrass() {

        $data['page'] = 'frontv2/covercrops/grassgrain/sorghumsudangrass';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['sorghum-sudangrass']['title'];
        $data['description'] = $variable['sorghum-sudangrass']['discription'];
        $data['sorghumsudangrass'] = 'active-link';
        $data['grassgrain'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function pearlmillet() {

        $data['page'] = 'frontv2/covercrops/grassgrain/pearlmillet';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['pearl-millet']['title'];
        $data['description'] = $variable['pearl-millet']['discription'];
        $data['pearlmillet'] = 'active-link';
        $data['grassgrain'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    /* tab-4th */

    function otherCoverCrops() {

        $data['page'] = 'frontv2/covercrops/other/homepage';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['other']['title'];
        $data['description'] = $variable['other']['discription'];
        $data['other'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function buckwheat() {

        $data['page'] = 'frontv2/covercrops/other/buckwheat';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['buckwheat']['title'];
        $data['description'] = $variable['buckwheat']['discription'];
        $data['buckwheat'] = 'active-link';
        $data['other'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function sunflowers() {

        $data['page'] = 'frontv2/covercrops/other/sunflowers';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['sunflowers']['title'];
        $data['description'] = $variable['sunflowers']['discription'];
        $data['sunflowers'] = 'active-link';
        $data['other'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function phacelia() {

        $data['page'] = 'frontv2/covercrops/other/phacelia';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['phacelia']['title'];
        $data['description'] = $variable['phacelia']['discription'];
        $data['phacelia'] = 'active-link';
        $data['other'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function mixtures() {

        $data['page'] = 'frontv2/covercrops/mixtures/homepage';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['mixtures']['title'];
        $data['description'] = $variable['mixtures']['discription'];
        $data['mixtures'] = 'open active-tree';
        $data['covercrops'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

}

?>