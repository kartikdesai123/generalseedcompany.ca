<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
//$route['default_controller'] = 'home';
$route['default_controller'] = 'home';

// OLD ROUTE
// $route['subscription'] = 'front/subscription';
//$route['signup'] = 'account/signup';
//$route['admin'] = 'admin/account';
//$route['dealer'] = 'account';
////$route['dealer/(:any)'] = 'user/$1';
//$route['user'] = 'account';
//$route['about'] = 'front/about';
//
//$route['article'] = 'front/article';
//$route['article/(:any)'] = 'front/article/index/$1';
//$route['contact/retail-inquiries'] = 'front/contact/retail_inquiries';
//$route['contact/wholse-inquiries'] = 'front/contact/whole_inquiries';
//$route['contact/wholeseller-orders'] = 'front/contact/wholeseller_orders';
//$route['contact/wholeseller-orders-detail'] = 'front/contact/wholeseller_orders_detail';
//$route['contact'] = 'front/contact';
//$route['dealership'] = 'front/dealership';
//$route['products/silage-corn'] = 'front/products/silage_corn';
//$route['products/silage-corn/2'] = 'front/products/silage_corn/2';
//$route['products/forage-seed'] = 'front/products/forage_seed';
//$route['products/forage-seed/2'] = 'front/products/forage_seed/2';
//$route['products/turf-seed'] = 'front/products/turf_seed';
//$route['products/turf-seed/(:any)'] = 'front/products/turf_seed/$1';
//$route['products/cover-crop'] = 'front/products/cover_crop';
//$route['products/cover-crop/2'] = 'front/products/cover_crop/2';
//$route['products/(:any)'] = 'front/products/detail/$1';
//$route['products/(:any)/(:any)'] = 'front/products/detail/$1/$2';

// $route['admin/contact'] = 'admin/contact';
// $route['admin/departments'] = 'admin/dashboard/departments';
// $route['admin/reports'] = 'admin/reporting';
// $route['admin/transaction_history'] = 'admin/reporting/transaction_history';
// $route['admin/store_settings'] = 'admin/settings';
// $route['admin/clerk_setup'] = 'admin/settings/clerk_setup';
// $route['admin/pos_devices'] = 'admin/settings/pos_devices';

$route['404_override'] = '';
$route['translate_uri_dashes'] = TRUE;

$route['products/forage/legumes-main'] = 'frontv2/forage/legumesMain';
$route['products/forage'] = 'frontv2/forage/legumes';
$route['products/forage/alfalfa'] = 'frontv2/forage/alfalfa';
$route['products/forage/birdsfoot-trefoil'] = 'frontv2/forage/birdsfoottrefoil';
$route['products/forage/sainfoin'] = 'frontv2/forage/sainfoin';
$route['products/forage/white-clover'] = 'frontv2/forage/whiteclover';
$route['products/forage/ladino-clover'] = 'frontv2/forage/ladinoclover';
$route['products/forage/alsike-clover'] = 'frontv2/forage/alsikeclover';
$route['products/forage/double-cut-red-clover'] = 'frontv2/forage/doublecutredclover';
$route['products/forage/single-cut-red-clover'] = 'frontv2/forage/singlecutredclover';
$route['products/forage/yellow-blossom-sweet-clover'] = 'frontv2/forage/yellowblossomsweetclover';

$route['products/forage/grasses-main'] = 'frontv2/forage/grassesMain';
$route['products/forage/timothy'] = 'frontv2/forage/timothy';
$route['products/forage/reed-canary-grass'] = 'frontv2/forage/reedcanarygrass';
$route['products/forage/orchardgrass'] = 'frontv2/forage/orchardgrass';
$route['products/forage/tall-fescue'] = 'frontv2/forage/tallfescue';
$route['products/forage/perennial-ryegrass'] = 'frontv2/forage/perennialryegrass';
$route['products/forage/italian-annual-ryegrass'] = 'frontv2/forage/italianannualryegrass';
$route['products/forage/festulolium'] = 'frontv2/forage/festulolium';
$route['products/forage/smooth-bromegrass'] = 'frontv2/forage/smoothbromegrass';
$route['products/forage/meadow-bromegrass'] = 'frontv2/forage/meadowbromegrass';

$route['products/forage/annuals-main'] = 'frontv2/forage/annualsMain';
$route['products/forage/sorghum-sudangrass'] = 'frontv2/forage/sorghumSudangrass';
$route['products/forage/pearl-millet'] = 'frontv2/forage/pearlMillet';
$route['products/forage/teff'] = 'frontv2/forage/teff';
$route['products/forage/pea-mixtures'] = 'frontv2/forage/peaMixtures';

$route['products/forage/organic'] = 'frontv2/forage/organic';

$route['products/forage/pasture-main'] = 'frontv2/forage/pastureMain';
$route['products/forage/permanent-pasture-cattle-pasture-highland'] = 'frontv2/forage/cattlePastureHighland';
$route['products/forage/permanent-pasture-lowland-cattle-pasture'] = 'frontv2/forage/lowlandCattlePasture';
$route['products/forage/permanent-pasture-sheep-goat-pasture'] = 'frontv2/forage/sheepGoatPasture';
$route['products/forage/permanent-pasture-horse-or-paddock-mixture'] = 'frontv2/forage/horseOrPaddockMixture';
$route['products/forage/pasture-renevator-mixture'] = 'frontv2/forage/pastureRenevatorMixture';

$route['products/forage/alfalfa-grass-main'] = 'frontv2/forage/alfalfaGrassMain';
$route['products/forage/alfalfa-grassland-mixture'] = 'frontv2/forage/alfalfaGrasslandMixture';
$route['products/forage/alfalfa-timothy-grassland-mixture'] = 'frontv2/forage/alfalfaTimothyGrasslandMixture';
$route['products/forage/alfalfa-grass-mixture'] = 'frontv2/forage/alfalfaGrassMixture';
$route['products/forage/alfalfa-grass-mixture-with-brome'] = 'frontv2/forage/alfalfaGrassMixtureWithBrome';
$route['products/forage/alfalfa-with-aggressive-grass-mixture'] = 'frontv2/forage/alfalfaWithAggressiveGrassMixture';
$route['products/forage/dry-cow-hay-mixture'] = 'frontv2/forage/dryCowHayMixture';

$route['products/forage/alternative-hay-main'] = 'frontv2/forage/alternativeHayMain';
$route['products/forage/hay-pasture-mixture'] = 'frontv2/forage/hayPastureMixture';
$route['products/forage/mixedland-mixture'] = 'frontv2/forage/mixedlandMixture';
$route['products/forage/lowland-mixture'] = 'frontv2/forage/lowlandMixture';
$route['products/forage/rolling-field-mixture'] = 'frontv2/forage/rollingFieldMixture';

$route['products/forage/alfalfa-timothy'] = 'frontv2/forage/alfalfaTimothy';
$route['products/forage/ouebec-maritime'] = 'frontv2/forage/ouebecMaritime';

$route['products/silage-corn'] = 'frontv2/silagecorn/silagecorn';

$route['products/turf/ls-lawn-seed-mixtures'] = 'frontv2/turf/lslawnseedmixtures';
$route['products/turf/lawn-seed-mixtures'] = 'frontv2/turf/lawnseedmixtures';
$route['products/turf/ls-sports-field-mixtures'] = 'frontv2/turf/lssportsfieldmixtures';
$route['products/turf/ls-golf-mixtures'] = 'frontv2/turf/lsgolfmixtures';
$route['products/turf/sod-mixtures'] = 'frontv2/turf/sodmixtures';
$route['products/turf/provincial-highway-mixtures'] = 'frontv2/turf/provincialhighwaymixtures';
$route['products/turf/individual-turf-grass'] = 'frontv2/turf/individualturfgrass';
$route['products/turf/deer-plot-mixtures'] = 'frontv2/turf/deerplotmixtures';
$route['products/turf/packaging-information'] = 'frontv2/turf/packaginginformation';

$route['products/cover-crops'] = 'frontv2/coverCrops/covercrops';
$route['products/cover-crops/legumes'] = 'frontv2/coverCrops/legumes';
$route['products/cover-crops/brassicas'] = 'frontv2/coverCrops/brassicas';
$route['products/cover-crops/grass-grain'] = 'frontv2/coverCrops/grassGrain';
$route['products/cover-crops/other'] = 'frontv2/coverCrops/otherCoverCrops';
$route['products/cover-crops/mixtures'] = 'frontv2/coverCrops/mixtures';


$route['products/cover-crops/crimson-clover'] = 'frontv2/coverCrops/crimsonclover';
$route['products/cover-crops/berseem-clover'] = 'frontv2/coverCrops/berseemclover';
$route['products/cover-crops/forage-peas'] = 'frontv2/coverCrops/foragepeas';
$route['products/cover-crops/austrian-winter-peas'] = 'frontv2/coverCrops/austrianwinterpeas';
$route['products/cover-crops/cow-peas'] = 'frontv2/coverCrops/cowpeas';
$route['products/cover-crops/tnt-brand-hairy-vetch'] = 'frontv2/coverCrops/tntbrandhairyvetch';
$route['products/cover-crops/common-vetch'] = 'frontv2/coverCrops/commonvetch';
$route['products/cover-crops/faba-beans'] = 'frontv2/coverCrops/fababeans';
$route['products/cover-crops/sun-hemp'] = 'frontv2/coverCrops/sunhemp';


$route['products/cover-crops/nitro-radish'] = 'frontv2/coverCrops/nitroradish';
$route['products/cover-crops/fumarad-brand-oil-seed'] = 'frontv2/coverCrops/fumaradbrandoilseed';
$route['products/cover-crops/vivant-hybrid-brassica'] = 'frontv2/coverCrops/vivanthybridbrassica';
$route['products/cover-crops/forage-turnips'] = 'frontv2/coverCrops/forageturnips';
$route['products/cover-crops/forage-kale'] = 'frontv2/coverCrops/foragekale';
$route['products/cover-crops/forage-rape'] = 'frontv2/coverCrops/foragerape';
$route['products/cover-crops/mustard'] = 'frontv2/coverCrops/mustard';


$route['products/cover-crops/fall-rye'] = 'frontv2/coverCrops/fallrye';
$route['products/cover-crops/oats'] = 'frontv2/coverCrops/oats';
$route['products/cover-crops/winter-triticale'] = 'frontv2/coverCrops/wintertriticale';
$route['products/cover-crops/annual-ryegrass'] = 'frontv2/coverCrops/annualryegrass';
$route['products/cover-crops/nitro-brand-italian'] = 'frontv2/coverCrops/nitrobranditalian';
$route['products/cover-crops/sorghum-sudangrass'] = 'frontv2/coverCrops/sorghumsudangrass';
$route['products/cover-crops/pearl-millet'] = 'frontv2/coverCrops/pearlmillet';


$route['products/cover-crops/buckwheat'] = 'frontv2/coverCrops/buckwheat';
$route['products/cover-crops/sunflowers'] = 'frontv2/coverCrops/sunflowers';
$route['products/cover-crops/phacelia'] = 'frontv2/coverCrops/phacelia';

$route['products/cover-crops/mixures'] = 'frontv2/coverCrops/mixures';

$route['products/contact-us'] = 'frontv2/contactUs/index';
$route['products/contact-us/generalInquiry'] = 'frontv2/contactUs/generalInquiry';
$route['products/contact-us/retailInquiry'] = 'frontv2/contactUs/retailInquiry';
$route['products/contact-us/wholesaleInquiry'] = 'frontv2/contactUs/wholesaleInquiry';
$route['products/contact-us/wholesaleOrder'] = 'frontv2/contactUs/wholesaleOrder';

$route['products/dealer-inquires'] = 'frontv2/DealerInquires';

$route['products/articles'] = 'frontv2/articles';
$route['products/articles/silagecorn-art-1'] = 'frontv2/articles/silageCornArt1';
$route['products/articles/turf-art-1'] = 'frontv2/articles/turfArt1';

/* Display PDF for forage -> alfalfa*/
$route['products/forage/alfalfa/perfection'] = 'frontv2/forage/alfalfa_perfection_pdf';
//$route['products/forage/alfalfa/digest'] = 'frontv2/forage/alfalfa_digest_pdf';
$route['products/forage/alfalfa/extreme'] = 'frontv2/forage/alfalfa_digest_pdf';
$route['products/forage/alfalfa/cornerstone'] = 'frontv2/forage/alfalfa_cornerstone_pdf';
$route['products/forage/alfalfa/performer'] = 'frontv2/forage/alfalfa_performer_pdf';
$route['products/forage/alfalfa/endurance'] = 'frontv2/forage/alfalfa_endurance_pdf';
$route['products/forage/alfalfa/haygrazer'] = 'frontv2/forage/alfalfa_haygrazer_pdf';


$route['products/forage/individual_turf_grass/arrowhead'] = 'frontv2/forage/individual_turf_grass_arrowhead';
$route['products/forage/individual_turf_grass/bluenote'] = 'frontv2/forage/individual_turf_grass_bluenote';
$route['products/forage/individual_turf_grass/bolt'] = 'frontv2/forage/individual_turf_grass_bolt';
$route['products/forage/individual_turf_grass/legend'] = 'frontv2/forage/individual_turf_grass_legend';
$route['products/forage/individual_turf_grass/volt'] = 'frontv2/forage/individual_turf_grass_volt';



$route['products/forage/individual_turf_grass/stallite'] = 'frontv2/forage/individual_turf_grass_stallite';
$route['products/forage/individual_turf_grass/cardinal'] = 'frontv2/forage/individual_turf_grass_cardinal';
$route['products/forage/individual_turf_grass/compass'] = 'frontv2/forage/individual_turf_grass_compass';
$route['products/forage/individual_turf_grass/beacon'] = 'frontv2/forage/individual_turf_grass_beacon';
$route['products/forage/individual_turf_grass/blue'] = 'frontv2/forage/individual_turf_grass_blue';
$route['products/forage/individual_turf_grass/dynamite'] = 'frontv2/forage/individual_turf_grass_dynamite';
$route['products/forage/individual_turf_grass/torsion'] = 'frontv2/forage/individual_turf_grass_torsion';
$route['products/forage/individual_turf_grass/slider'] = 'frontv2/forage/individual_turf_grass_slider';
$route['products/forage/individual_turf_grass/fast'] = 'frontv2/forage/individual_turf_grass_fast';

$route['products/forage/individual_turf_grass/grand'] = 'frontv2/forage/individual_turf_grass_grand';
$route['products/forage/individual_turf_grass/stellar'] = 'frontv2/forage/individual_turf_grass_stellar';
$route['products/forage/individual_turf_grass/breakout'] = 'frontv2/forage/individual_turf_grass_breakout';
$route['products/forage/individual_turf_grass/barracuda'] = 'frontv2/forage/individual_turf_grass_barracuda';
$route['products/forage/individual_turf_grass/piranha'] = 'frontv2/forage/individual_turf_grass_piranha';


// OLD ROUTE END