<?php

class Forage extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function legumesMain() {
        $data['page'] = 'frontv2/forage/legumes/homepage';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['legumes-main']['title'];
        $data['description'] = $variable['legumes-main']['discription'];
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function legumes() {
        $data['page'] = 'frontv2/forage/legumes/legumes';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['legumes']['title'];
        $data['description'] = $variable['legumes']['discription'];
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfa() {
        $data['page'] = 'frontv2/forage/legumes/alfalfa';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['alfalfa']['title'];
        $data['description'] = $variable['alfalfa']['discription'];
        $data['alfalfa'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function birdsfoottrefoil() {
        $data['page'] = 'frontv2/forage/legumes/birdsfoottrefoil';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['birdsfoot-trefoil']['title'];
        $data['description'] = $variable['birdsfoot-trefoil']['discription'];
        $data['birdsfoottrefoil'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function sainfoin() {
        $data['page'] = 'frontv2/forage/legumes/sainfoin';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['sainfoin']['title'];
        $data['description'] = $variable['sainfoin']['discription'];
        $data['sainfoin'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function whiteclover() {
        $data['page'] = 'frontv2/forage/legumes/whiteclover';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['white-clover']['title'];
        $data['description'] = $variable['white-clover']['discription'];
        $data['whiteclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function ladinoclover() {
        $data['page'] = 'frontv2/forage/legumes/ladinoclover';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['ladino-clover']['title'];
        $data['description'] = $variable['ladino-clover']['discription'];
        $data['ladinoclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alsikeclover() {
        $data['page'] = 'frontv2/forage/legumes/alsikeclover';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['alsike-clover']['title'];
        $data['description'] = $variable['alsike-clover']['discription'];
        $data['alsikeclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function doublecutredclover() {
        $data['page'] = 'frontv2/forage/legumes/doublecutredclover';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['double-cut-red-clover']['title'];
        $data['description'] = $variable['double-cut-red-clover']['discription'];
        $data['doublecutredclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function singlecutredclover() {
        $data['page'] = 'frontv2/forage/legumes/singlecutredclover';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['single-cut-red-clover']['title'];
        $data['description'] = $variable['single-cut-red-clover']['discription'];
        $data['singlecutredclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function yellowblossomsweetclover() {
        $data['page'] = 'frontv2/forage/legumes/yellowblossomsweetclover';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['yellow-blossom-sweet-clover']['title'];
        $data['description'] = $variable['yellow-blossom-sweet-clover']['discription'];
        $data['yellowblossomsweetclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function grassesMain() {
        $data['page'] = 'frontv2/forage/grasses/homepage';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['grasses-main']['title'];
        $data['description'] = $variable['grasses-main']['discription'];
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function timothy() {
        $data['page'] = 'frontv2/forage/grasses/timothy';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['timothy']['title'];
        $data['description'] = $variable['timothy']['discription'];
        $data['timothy'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function reedcanarygrass() {
        $data['page'] = 'frontv2/forage/grasses/reedcanarygrass';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['reed-canary-grass']['title'];
        $data['description'] = $variable['reed-canary-grass']['discription'];
        $data['reedcanarygrass'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function orchardgrass() {
        $data['page'] = 'frontv2/forage/grasses/orchardgrass';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['orchardgrass']['title'];
        $data['description'] = $variable['orchardgrass']['discription'];
        $data['orchardgrass'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function tallfescue() {
        $data['page'] = 'frontv2/forage/grasses/tallfescue';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['tall-fescue']['title'];
        $data['description'] = $variable['tall-fescue']['discription'];
        $data['tallfescue'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function perennialryegrass() {
        $data['page'] = 'frontv2/forage/grasses/perennialryegrass';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['perennial-ryegrass']['title'];
        $data['description'] = $variable['perennial-ryegrass']['discription'];
        $data['perennialryegrass'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function italianannualryegrass() {
        $data['page'] = 'frontv2/forage/grasses/italianannualryegrass';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['italian-annual-ryegrass']['title'];
        $data['description'] = $variable['italian-annual-ryegrass']['discription'];
        $data['italianannualryegrass'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function festulolium() {
        $data['page'] = 'frontv2/forage/grasses/festulolium';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['festulolium']['title'];
        $data['description'] = $variable['festulolium']['discription'];
        $data['festulolium'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function smoothbromegrass() {
        $data['page'] = 'frontv2/forage/grasses/smoothbromegrass';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['smooth-bromegrass']['title'];
        $data['description'] = $variable['smooth-bromegrass']['discription'];
        $data['smoothbromegrass'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function meadowbromegrass() {
        $data['page'] = 'frontv2/forage/grasses/meadowbromegrass';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['meadow-bromegrass']['title'];
        $data['description'] = $variable['meadow-bromegrass']['discription'];
        $data['meadowbromegrass'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function annualsMain() {
        $data['page'] = 'frontv2/forage/annuals/homepage';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['annuals-main']['title'];
        $data['description'] = $variable['annuals-main']['discription'];
        $data['annuals'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function sorghumSudangrass() {

        $data['page'] = 'frontv2/forage/annuals/sorghumsudangrass';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['forage/sorghum-sudangrass']['title'];
        $data['description'] = $variable['forage/sorghum-sudangrass']['discription'];
        $data['sorghumsudangrass'] = 'active-link';
        $data['annuals'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function pearlMillet() {
        $data['page'] = 'frontv2/forage/annuals/pearlmillet';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['forage/pearl-millet']['title'];
        $data['description'] = $variable['forage/pearl-millet']['discription'];
        $data['pearlmillet'] = 'active-link';
        $data['annuals'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function teff() {
        $data['page'] = 'frontv2/forage/annuals/teff';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['teff']['title'];
        $data['description'] = $variable['teff']['discription'];
        $data['teff'] = 'active-link';
        $data['annuals'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function peaMixtures() {
        $data['page'] = 'frontv2/forage/annuals/peamixtures';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['pea-mixtures']['title'];
        $data['description'] = $variable['pea-mixtures']['discription'];
        $data['peamixtures'] = 'active-link';
        $data['annuals'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function organic() {
        $data['page'] = 'frontv2/forage/organic/organic';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['organic']['title'];
        $data['description'] = $variable['organic']['discription'];
        $data['organicmain'] = 'active-link';
        $data['organic'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function pastureMain() {
        $data['page'] = 'frontv2/forage/pasture/homepage';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['pasture-main']['title'];
        $data['description'] = $variable['pasture-main']['discription'];
        $data['pasturemain'] = 'active-link';
        $data['pasture'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function cattlePastureHighland() {
        $data['page'] = 'frontv2/forage/pasture/cattlepasturehighland';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['permanent-pasture-cattle-pasture-highland']['title'];
        $data['description'] = $variable['permanent-pasture-cattle-pasture-highland']['discription'];
        $data['cattlepasturehighland'] = 'active-link';
        $data['pasture'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function lowlandCattlePasture() {
        $data['page'] = 'frontv2/forage/pasture/lowlandcattlepasture';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['permanent-pasture-lowland-cattle-pasture']['title'];
        $data['description'] = $variable['permanent-pasture-lowland-cattle-pasture']['discription'];
        $data['lowlandcattlepasture'] = 'active-link';
        $data['pasture'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function sheepGoatPasture() {
        $data['page'] = 'frontv2/forage/pasture/sheepgoatpasture';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['permanent-pasture-sheep-goat-pasture']['title'];
        $data['description'] = $variable['permanent-pasture-sheep-goat-pasture']['discription'];
        $data['sheepgoatpasture'] = 'active-link';
        $data['pasture'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function horseOrPaddockMixture() {
        $data['page'] = 'frontv2/forage/pasture/horseorpaddockmixture';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['permanent-pasture-horse-or-paddock-mixture']['title'];
        $data['description'] = $variable['permanent-pasture-horse-or-paddock-mixture']['discription'];
        $data['horseorpaddockmixture'] = 'active-link';
        $data['pasture'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function pastureRenevatorMixture() {
        $data['page'] = 'frontv2/forage/pasture/pasturerenevatormixture';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['pasture-renevator-mixture']['title'];
        $data['description'] = $variable['pasture-renevator-mixture']['discription'];
        $data['pasturerenevatormixture'] = 'active-link';
        $data['pasture'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfaGrassMain() {
        $data['page'] = 'frontv2/forage/alfalfagrass/homepage';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['alfalfa-grass-main']['title'];
        $data['description'] = $variable['alfalfa-grass-main']['discription'];
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfaGrasslandMixture() {
        $data['page'] = 'frontv2/forage/alfalfagrass/alfalfagrasslandmixture';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['alfalfa-grassland-mixture']['title'];
        $data['description'] = $variable['alfalfa-grassland-mixture']['discription'];
        $data['alfalfagrasslandmixture'] = 'active-link';
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfaTimothyGrasslandMixture() {
        $data['page'] = 'frontv2/forage/alfalfagrass/alfalfatimothygrasslandmixture';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['alfalfa-timothy-grassland-mixture']['title'];
        $data['description'] = $variable['alfalfa-timothy-grassland-mixture']['discription'];
        $data['alfalfatimothygrasslandmixture'] = 'active-link';
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfaGrassMixture() {
        $data['page'] = 'frontv2/forage/alfalfagrass/alfalfagrassmixture';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['alfalfa-grass-mixture']['title'];
        $data['description'] = $variable['alfalfa-grass-mixture']['discription'];
        $data['alfalfagrassmixture'] = 'active-link';
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfaGrassMixtureWithBrome() {
        $data['page'] = 'frontv2/forage/alfalfagrass/alfalfagrassmixturewithbrome';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['alfalfa-grass-mixture-with-brome']['title'];
        $data['description'] = $variable['alfalfa-grass-mixture-with-brome']['discription'];
        $data['alfalfagrassmixturewithbrome'] = 'active-link';
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfaWithAggressiveGrassMixture() {
        $data['page'] = 'frontv2/forage/alfalfagrass/alfalfawithaggressivegrassmixture';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['alfalfa-with-aggressive-grass-mixture']['title'];
        $data['description'] = $variable['alfalfa-with-aggressive-grass-mixture']['discription'];
        $data['alfalfawithaggressivegrassmixture'] = 'active-link';
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function dryCowHayMixture() {
        $data['page'] = 'frontv2/forage/alfalfagrass/drycowhaymixture';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['dry-cow-hay-mixture']['title'];
        $data['description'] = $variable['dry-cow-hay-mixture']['discription'];
        $data['drycowhaymixture'] = 'active-link';
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alternativeHayMain() {
        $data['page'] = 'frontv2/forage/alternativehay/homepage';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['alternative-hay-main']['title'];
        $data['description'] = $variable['alternative-hay-main']['discription'];
        $data['alternativehay'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function hayPastureMixture() {
        $data['page'] = 'frontv2/forage/alternativehay/haypasturemixture';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['hay-pasture-mixture']['title'];
        $data['description'] = $variable['hay-pasture-mixture']['discription'];
        $data['haypasturemixture'] = 'active-link';
        $data['alternativehay'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function mixedlandMixture() {
        $data['page'] = 'frontv2/forage/alternativehay/mixedlandmixture';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['mixedland-mixture']['title'];
        $data['description'] = $variable['mixedland-mixture']['discription'];
        $data['mixedlandmixture'] = 'active-link';
        $data['alternativehay'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function lowlandMixture() {
        $data['page'] = 'frontv2/forage/alternativehay/lowlandmixture';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['lowland-mixture']['title'];
        $data['description'] = $variable['lowland-mixture']['discription'];
        $data['lowlandmixture'] = 'active-link';
        $data['alternativehay'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function rollingFieldMixture() {
        $data['page'] = 'frontv2/forage/alternativehay/rollingfieldmixture';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['rolling-field-mixture']['title'];
        $data['description'] = $variable['rolling-field-mixture']['discription'];
        $data['rollingfieldmixture'] = 'active-link';
        $data['alternativehay'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfaTimothy() {
        $data['page'] = 'frontv2/forage/alternativehay/alfalfatimothy';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['alfalfa-timothy']['title'];
        $data['description'] = $variable['alfalfa-timothy']['discription'];
        $data['alfalfatimothy'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function ouebecMaritime() {
        $data['page'] = 'frontv2/forage/alternativehay/ouebecmaritime';
        $variable = json_decode(DESCRIPTION, true);
        $data['title'] = $variable['ouebec-maritime']['title'];
        $data['description'] = $variable['ouebec-maritime']['discription'];
        $data['ouebecmaritime'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfa_perfection_pdf() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Forage_Legumes_Alfalfa_Perfection.pdf'));
    }

    function alfalfa_digest_pdf() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/2019_GenSeedExtremeFlyer_FINAL.pdf'));
    }

    function alfalfa_cornerstone_pdf() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Forage_Legumes_Alfalfa_Cornerstone.pdf'));
    }

    function alfalfa_performer_pdf() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Forage_Legumes_Alfalfa_Performer.pdf'));
    }

    function alfalfa_endurance_pdf() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Forage_Legumes_Alfalfa_Endurance.pdf'));
    }

    function alfalfa_haygrazer_pdf() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/HayGrazer_Info_GeneralSeed.pdf'));
    }

    function individual_turf_grass_arrowhead() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Arrowhead.pdf'));
    }

    function individual_turf_grass_bluenote() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/BlueNote.pdf'));
    }

    function individual_turf_grass_bolt() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Bolt.pdf'));
    }

    function individual_turf_grass_legend() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Legend.pdf'));
    }

    function individual_turf_grass_volt() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Volt.pdf'));
    }

    function individual_turf_grass_stallite() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/StarliteII.pdf'));
    }

    function individual_turf_grass_cardinal() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Cardinal-II.pdf'));
    }

    function individual_turf_grass_compass() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Compass-II.pdf'));
    }

    function individual_turf_grass_beacon() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Beacon.pdf'));
    }

    function individual_turf_grass_blue() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Blueray.pdf'));
    }

    function individual_turf_grass_dynamite() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Dynamite.pdf'));
    }

    function individual_turf_grass_torsion() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Torison.pdf'));
    }

    function individual_turf_grass_slider() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Slider.pdf'));
    }

    function individual_turf_grass_fast() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Fastball.pdf'));
    }

    function individual_turf_grass_grand() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/GrandSlamGLD.pdf'));
    }

    function individual_turf_grass_stellar() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Stellar.pdf'));
    }

    function individual_turf_grass_breakout() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Breakout.pdf'));
    }

    function individual_turf_grass_barracuda() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Barracuda.pdf'));
    }

    function individual_turf_grass_piranha() {
        $this->output
                ->set_content_type('application/pdf')
                ->set_output(file_get_contents('public/frontv2/pdf/Pirahna.pdf'));
    }

}

?>