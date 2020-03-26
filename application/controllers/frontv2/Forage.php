<?php

class Forage extends Front_Controller {

    function __construct() {
        parent::__construct();
    }

    function legumesMain() {
        $data['page'] = 'frontv2/forage/legumes/homepage';
        $data['title'] = "Legumes";
        $variable = json_decode(DESCRIPTION);
        $data['description'] = "Description";
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';
        
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function legumes() {
        $data['page'] = 'frontv2/forage/legumes/legumes';
        $data['title'] = "Leagumes";
        $data['description'] = "Description";
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfa() {
        $data['page'] = 'frontv2/forage/legumes/alfalfa';
        $data['title'] = "Alfalfa";
        $data['description'] = "Description";
        $data['alfalfa'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function birdsfoottrefoil() {
        $data['page'] = 'frontv2/forage/legumes/birdsfoottrefoil';
        $data['title'] = "Birdsfoot Trefoil";
        $data['description'] = "Description";
        $data['birdsfoottrefoil'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function sainfoin() {
        $data['page'] = 'frontv2/forage/legumes/sainfoin';
        $data['title'] = "Sainfoin";
        $data['description'] = "Description";
        $data['sainfoin'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function whiteclover() {
        $data['page'] = 'frontv2/forage/legumes/whiteclover';
        $data['title'] = "White Clover";
        $data['description'] = "Description";
        $data['whiteclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function ladinoclover() {
        $data['page'] = 'frontv2/forage/legumes/ladinoclover';
        $data['title'] = "Ladino Clover";
        $data['description'] = "Description";
        $data['ladinoclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alsikeclover() {
        $data['page'] = 'frontv2/forage/legumes/alsikeclover';
        $data['title'] = "Alsike Clover";
        $data['description'] = "Description";
        $data['alsikeclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function doublecutredclover() {
        $data['page'] = 'frontv2/forage/legumes/doublecutredclover';
        $data['title'] = "Double Cut Red Clover";
        $data['description'] = "Description";
        $data['doublecutredclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function singlecutredclover() {
        $data['page'] = 'frontv2/forage/legumes/singlecutredclover';
        $data['title'] = "Single Cut Red Clover";
        $data['description'] = "Description";
        $data['singlecutredclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function yellowblossomsweetclover() {
        $data['page'] = 'frontv2/forage/legumes/yellowblossomsweetclover';
        $data['title'] = "Yellow Blossom Sweet Clover";
        $data['description'] = "Description";
        $data['yellowblossomsweetclover'] = 'active-link';
        $data['legumes'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function grassesMain() {
        $data['page'] = 'frontv2/forage/grasses/homepage';
        $data['title'] = "Grasses";
        $data['description'] = "Description";
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';
        
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function timothy() {
        $data['page'] = 'frontv2/forage/grasses/timothy';
        $data['title'] = "Timothy";
        $data['description'] = "Description";
        $data['timothy'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function reedcanarygrass() {
        $data['page'] = 'frontv2/forage/grasses/reedcanarygrass';
        $data['title'] = "Reed Canary Grass";
        $data['description'] = "Description";
        $data['reedcanarygrass'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function orchardgrass() {
        $data['page'] = 'frontv2/forage/grasses/orchardgrass';
        $data['title'] = "Orchard Grass";
        $data['description'] = "Description";
        $data['orchardgrass'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function tallfescue() {
        $data['page'] = 'frontv2/forage/grasses/tallfescue';
        $data['title'] = "Tall Fescue";
        $data['description'] = "Description";
        $data['tallfescue'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function perennialryegrass() {
        $data['page'] = 'frontv2/forage/grasses/perennialryegrass';
        $data['title'] = "Perennial Ryegrass";
        $data['description'] = "Description";
        $data['perennialryegrass'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function italianannualryegrass() {
        $data['page'] = 'frontv2/forage/grasses/italianannualryegrass';
        $data['title'] = "Italian Annual Ryegrass";
        $data['description'] = "Description";
        $data['italianannualryegrass'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function festulolium() {
        $data['page'] = 'frontv2/forage/grasses/festulolium';
        $data['title'] = "Festulolium";
        $data['description'] = "Description";
        $data['festulolium'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function smoothbromegrass() {
        $data['page'] = 'frontv2/forage/grasses/smoothbromegrass';
        $data['title'] = "Smooth Bromegrass";
        $data['description'] = "Description";
        $data['smoothbromegrass'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function meadowbromegrass() {
        $data['page'] = 'frontv2/forage/grasses/meadowbromegrass';
        $data['title'] = "Meadow Bromgrass";
        $data['description'] = "Description";
        $data['meadowbromegrass'] = 'active-link';
        $data['grasses'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function annualsMain() {
        $data['page'] = 'frontv2/forage/annuals/homepage';
        $data['title'] = "Annuals";
        $data['description'] = "Description";
        $data['annuals'] = 'open active-tree';
        $data['forage'] = 'active';
        
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function sorghumSudangrass() {

        $data['page'] = 'frontv2/forage/annuals/sorghumsudangrass';
        $data['title'] = "Sorghum Sudangrass";
        $data['description'] = "Description";
        $data['sorghumsudangrass'] = 'active-link';
        $data['annuals'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function pearlMillet() {
        $data['page'] = 'frontv2/forage/annuals/pearlmillet';
        $data['title'] = "Pearl Millet";
        $data['description'] = "Description";
        $data['pearlmillet'] = 'active-link';
        $data['annuals'] = 'open active-tree';
        $data['forage'] = 'active';

        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function teff() {
        $data['page'] = 'frontv2/forage/annuals/teff';
        $data['title'] = "Teff";
        $data['description'] = "Description";
        $data['teff'] = 'active-link';
        $data['annuals'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function peaMixtures() {
        $data['page'] = 'frontv2/forage/annuals/peamixtures';
        $data['title'] = "Pea Mixtures";
        $data['description'] = "Description";
        $data['peamixtures'] = 'active-link';
        $data['annuals'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function organic() {
        $data['page'] = 'frontv2/forage/organic/organic';
        $data['title'] = "Organic";
        $data['description'] = "Description";
        $data['organicmain'] = 'active-link';
        $data['organic'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function pastureMain() {
        $data['page'] = 'frontv2/forage/pasture/homepage';
        $data['title'] = "Pasture";
        $data['description'] = "Description";
        $data['pasturemain'] = 'active-link';
        $data['pasture'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function cattlePastureHighland() {
        $data['page'] = 'frontv2/forage/pasture/cattlepasturehighland';
        $data['title'] = "Highland Cattle Pasture";
        $data['description'] = "Description";
        $data['cattlepasturehighland'] = 'active-link';
        $data['pasture'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function lowlandCattlePasture() {
        $data['page'] = 'frontv2/forage/pasture/lowlandcattlepasture';
        $data['title'] = "Lowland Cattle Pasture";
        $data['description'] = "Description";
        $data['lowlandcattlepasture'] = 'active-link';
        $data['pasture'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function sheepGoatPasture() {
        $data['page'] = 'frontv2/forage/pasture/sheepgoatpasture';
        $data['title'] = "Sheep/Goat  Pasture Mixture";
        $data['description'] = "Description";
        $data['sheepgoatpasture'] = 'active-link';
        $data['pasture'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function horseOrPaddockMixture() {
        $data['page'] = 'frontv2/forage/pasture/horseorpaddockmixture';
        $data['title'] = "Horse Or Paddock Mixture";
        $data['description'] = "Description";
        $data['horseorpaddockmixture'] = 'active-link';
        $data['pasture'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function pastureRenevatorMixture() {
        $data['page'] = 'frontv2/forage/pasture/pasturerenevatormixture';
        $data['title'] = "Pasture Renevator Mixture";
        $data['description'] = "Description";
        $data['pasturerenevatormixture'] = 'active-link';
        $data['pasture'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function alfalfaGrassMain() {
        $data['page'] = 'frontv2/forage/alfalfagrass/homepage';
        $data['title'] = "Alfalfa Grass";
        $data['description'] = "Description";
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfaGrasslandMixture() {
        $data['page'] = 'frontv2/forage/alfalfagrass/alfalfagrasslandmixture';
        $data['title'] = "Alfalfa Grassland Mixture";
        $data['description'] = "Description";
        $data['alfalfagrasslandmixture'] = 'active-link';
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfaTimothyGrasslandMixture() {
        $data['page'] = 'frontv2/forage/alfalfagrass/alfalfatimothygrasslandmixture';
        $data['title'] = "Alfalfa/Timothy Grassland Mixture";
        $data['description'] = "Description";
        $data['alfalfatimothygrasslandmixture'] = 'active-link';
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfaGrassMixture() {
        $data['page'] = 'frontv2/forage/alfalfagrass/alfalfagrassmixture';
        $data['title'] = "Alfalfa Grass Mixture";
        $data['description'] = "Description";
        $data['alfalfagrassmixture'] = 'active-link';
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfaGrassMixtureWithBrome() {
        $data['page'] = 'frontv2/forage/alfalfagrass/alfalfagrassmixturewithbrome';
        $data['title'] = "Alfalfa Grass Mixture With Brome";
        $data['description'] = "Description";
        $data['alfalfagrassmixturewithbrome'] = 'active-link';
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfaWithAggressiveGrassMixture() {
        $data['page'] = 'frontv2/forage/alfalfagrass/alfalfawithaggressivegrassmixture';
        $data['title'] = "Alfalfa With Aggressive Grass Mixture";
        $data['description'] = "Description";
        $data['alfalfawithaggressivegrassmixture'] = 'active-link';
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function dryCowHayMixture() {
        $data['page'] = 'frontv2/forage/alfalfagrass/drycowhaymixture';
        $data['title'] = "Dry Cow Hay Mixture";
        $data['description'] = "Description";
        $data['drycowhaymixture'] = 'active-link';
        $data['alfalfagrass'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alternativeHayMain() {
        $data['page'] = 'frontv2/forage/alternativehay/homepage';
        $data['title'] = "Alternative Hay";
        $data['description'] = "Description";
        $data['alternativehay'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }
    
    function hayPastureMixture() {
        $data['page'] = 'frontv2/forage/alternativehay/haypasturemixture';
        $data['title'] = "Hay Pasture Mixture";
        $data['description'] = "Description";
        $data['haypasturemixture'] = 'active-link';
        $data['alternativehay'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function mixedlandMixture() {
        $data['page'] = 'frontv2/forage/alternativehay/mixedlandmixture';
        $data['title'] = "Mixedland Mixture";
        $data['description'] = "Description";
        $data['mixedlandmixture'] = 'active-link';
        $data['alternativehay'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function lowlandMixture() {
        $data['page'] = 'frontv2/forage/alternativehay/lowlandmixture';
        $data['title'] = "Lowland Mixture";
        $data['description'] = "Description";
        $data['lowlandmixture'] = 'active-link';
        $data['alternativehay'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function rollingFieldMixture() {
        $data['page'] = 'frontv2/forage/alternativehay/rollingfieldmixture';
        $data['title'] = "Rolling Field Mixture";
        $data['description'] = "Description";
        $data['rollingfieldmixture'] = 'active-link';
        $data['alternativehay'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function alfalfaTimothy() {
        $data['page'] = 'frontv2/forage/alternativehay/alfalfatimothy';
        $data['title'] = "Alfalfa-Timothy";
        $data['description'] = "Description";
        $data['alfalfatimothy'] = 'open active-tree';
        $data['forage'] = 'active';
        $this->load->view(FRONT_LAYOUT_V2, $data);
    }

    function ouebecMaritime() {
        $data['page'] = 'frontv2/forage/alternativehay/ouebecmaritime';
        $data['title'] = "Quebec & Maritime";
        $data['description'] = "Description";
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