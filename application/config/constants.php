<?php

defined('BASEPATH') OR exit('No direct script access allowed');



/*

  |--------------------------------------------------------------------------

  | Display Debug backtrace

  |--------------------------------------------------------------------------

  |

  | If set to TRUE, a backtrace will be displayed along with php errors. If

  | error_reporting is disabled, the backtrace will not display, regardless

  | of this setting

  |

 */

defined('SHOW_DEBUG_BACKTRACE') OR define('SHOW_DEBUG_BACKTRACE', TRUE);



/*

  |--------------------------------------------------------------------------

  | File and Directory Modes

  |--------------------------------------------------------------------------

  |

  | These prefs are used when checking and setting modes when working

  | with the file system.  The defaults are fine on servers with proper

  | security, but you may wish (or even need) to change the values in

  | certain environments (Apache running a separate process for each

  | user, PHP under CGI with Apache suEXEC, etc.).  Octal values should

  | always be used to set the mode correctly.

  |

 */

defined('FILE_READ_MODE') OR define('FILE_READ_MODE', 0644);

defined('FILE_WRITE_MODE') OR define('FILE_WRITE_MODE', 0666);

defined('DIR_READ_MODE') OR define('DIR_READ_MODE', 0755);

defined('DIR_WRITE_MODE') OR define('DIR_WRITE_MODE', 0755);



/*

  |--------------------------------------------------------------------------

  | File Stream Modes

  |--------------------------------------------------------------------------

  |

  | These modes are used when working with fopen()/popen()

  |

 */

defined('FOPEN_READ') OR define('FOPEN_READ', 'rb');

defined('FOPEN_READ_WRITE') OR define('FOPEN_READ_WRITE', 'r+b');

defined('FOPEN_WRITE_CREATE_DESTRUCTIVE') OR define('FOPEN_WRITE_CREATE_DESTRUCTIVE', 'wb'); // truncates existing file data, use with care

defined('FOPEN_READ_WRITE_CREATE_DESTRUCTIVE') OR define('FOPEN_READ_WRITE_CREATE_DESTRUCTIVE', 'w+b'); // truncates existing file data, use with care

defined('FOPEN_WRITE_CREATE') OR define('FOPEN_WRITE_CREATE', 'ab');

defined('FOPEN_READ_WRITE_CREATE') OR define('FOPEN_READ_WRITE_CREATE', 'a+b');

defined('FOPEN_WRITE_CREATE_STRICT') OR define('FOPEN_WRITE_CREATE_STRICT', 'xb');

defined('FOPEN_READ_WRITE_CREATE_STRICT') OR define('FOPEN_READ_WRITE_CREATE_STRICT', 'x+b');



/*

  |--------------------------------------------------------------------------

  | Exit Status Codes

  |--------------------------------------------------------------------------

  |

  | Used to indicate the conditions under which the script is exit()ing.

  | While there is no universal standard for error codes, there are some

  | broad conventions.  Three such conventions are mentioned below, for

  | those who wish to make use of them.  The CodeIgniter defaults were

  | chosen for the least overlap with these conventions, while still

  | leaving room for others to be defined in future versions and user

  | applications.

  |

  | The three main conventions used for determining exit status codes

  | are as follows:

  |

  |    Standard C/C++ Library (stdlibc):

  |       http://www.gnu.org/software/libc/manual/html_node/Exit-Status.html

  |       (This link also contains other GNU-specific conventions)

  |    BSD sysexits.h:

  |       http://www.gsp.com/cgi-bin/man.cgi?section=3&topic=sysexits

  |    Bash scripting:

  |       http://tldp.org/LDP/abs/html/exitcodes.html

  |

 */

defined('EXIT_SUCCESS') OR define('EXIT_SUCCESS', 0); // no errors

defined('EXIT_ERROR') OR define('EXIT_ERROR', 1); // generic error

defined('EXIT_CONFIG') OR define('EXIT_CONFIG', 3); // configuration error

defined('EXIT_UNKNOWN_FILE') OR define('EXIT_UNKNOWN_FILE', 4); // file not found

defined('EXIT_UNKNOWN_CLASS') OR define('EXIT_UNKNOWN_CLASS', 5); // unknown class

defined('EXIT_UNKNOWN_METHOD') OR define('EXIT_UNKNOWN_METHOD', 6); // unknown class member

defined('EXIT_USER_INPUT') OR define('EXIT_USER_INPUT', 7); // invalid user input

defined('EXIT_DATABASE') OR define('EXIT_DATABASE', 8); // database error

defined('EXIT__AUTO_MIN') OR define('EXIT__AUTO_MIN', 9); // lowest automatically-assigned error code

defined('EXIT__AUTO_MAX') OR define('EXIT__AUTO_MAX', 125); // highest automatically-assigned error code
//define('FRONT_LAYOUT', 'front/layout');

define('ADMIN_LAYOUT', 'admin/layout');

//define('USER_LAYOUT', 'user/layout');
//define('DEALER_LAYOUT', 'dealer/layout');

define('FRONT_LAYOUT', 'front/layout');

define('FRONT_LAYOUT_V2', 'frontv2/layout/layout');

define('FRONT_PRODUCT_LAYOUT', 'front/productslayout');

define('ADMIN_LAYOUT_LOGIN', 'admin/layout_login');

//define('USER_LAYOUT_LOGIN', 'user/layout_login');

define('DISPLAY_LOGO', 'public/front/images/generalseed/logo.png');


define('DESCRIPTION', json_encode(
                array(
                    'generalseedcompany' => array(
                        'title' => 'Ontario, Forage & Turf Seed',
                        'discription' => 'General Seed Company is serving top genetic varieties like ontario seed, forage seed, silage corn, turf seed, and cover crops in Canada'),
                    'legumes-main' => array(
                        'title' => 'Legumes Main',
                        'discription' => 'General seed company canada offer an assortment of different legumes. These legumes can be used for hay production to pastures of different livestock.'),
                    'alfalfa' => array(
                        'title' => 'Alfalfa',
                        'discription' => 'Alfalfa is the main legume that is used in hay production. Alfalfa is usually cut 3 to 4 times a year, however some varieties are cut 5 times'),
                    'birdsfoot-trefoil' => array(
                        'title' => 'Birdsfoot Trefoil',
                        'discription' => 'Birdsfoot Trefoil is a non-bloating legume used in pasture and hay mixtures. Trefoil likes growing in poorly drained land where Alfalfa does not prosper'),
                    'sainfoin' => array(
                        'title' => 'Sainfoin',
                        'discription' => 'Sainfoin is a cool-season Legume that is non-bloating. Sainfoin can grow up to3 feet tall. Saintoin is used for hay or pasture'),
                    'white-clover' => array(
                        'title' => 'White Clover',
                        'discription' => 'White Clover is a short-growing, nitrogen-fixing perennial used in pastures, lawns, and deer plots. it used in high traffic areas to minimize soil compaction'),
                    'ladino-clover' => array(
                        'title' => 'Ladino Clover',
                        'discription' => 'Ladino Clover is a tall growing type of White Clover with more yield, protein and forage quality. Ladino is mostly used when growing hay'),
                    'alsike-clover' => array(
                        'title' => 'Alsike Clover',
                        'discription' => 'Alsike Clover is a fast-growing, short-living perennial clover. Alsike Clover is adapted to cool climates and heavy, poorly drained clay soils'),
                    'double-cut-red-clover' => array(
                        'title' => 'Double Cut Red Clover',
                        'discription' => 'Double Cut Red Clover is primarily used for hay or soil improvement. It is easy to get established with quick growth and high forage quality'),
                    'single-cut-red-clover' => array(
                        'title' => 'Single Cut Red Clover',
                        'discription' => 'Single Cut Red Clover is known as a one cut Red Clover if left for hay. Single Cut is always used for a plowdown Cover Crop Red Clover'),
                    'yellow-blossom-sweet-clover' => array(
                        'title' => 'Yellow Blossom Sweet Clover',
                        'discription' => 'Sweet Clover is a cold tolerant, biennial clover that is easy to establish. Sweet Clover can be used for haylage, cover crops, conservation and honey making'),
                    'grasses-main' => array(
                        'title' => 'Grasses Main',
                        'discription' => 'General seed company canada offer an arrangement of different grasses from late maturing, high sugar, high palatability, fast re-growth hay varieties to fast growing'),
                    'timothy' => array(
                        'title' => 'Timothy',
                        'discription' => 'Timothy is used mainly for hay production, but also in some pasture mixes. Timothy makes an excellent companion grass for Alfalfa'),
                    'reed-canary-grass' => array(
                        'title' => 'Reed Canary Grass',
                        'discription' => 'Reed Canary Grass mainly grows in poorly drained land. It is a tall growing, winter-hardy grass that grows in all soils and has a wide leaf and quick regrowth'),
                    'orchardgrass' => array(
                        'title' => 'Orchardgrass',
                        'discription' => 'Orchardgrass is one of the best forage grasses available on the market. It is used for hay and pasture mixes with all livestock enjoying its soft leaves'),
                    'tall-fescue' => array(
                        'title' => 'Tall Fescue',
                        'discription' => 'Tall Fescue is most well rounded grass for hay that is available on the market today. Forage Tall Fescue handles all soil types, PH levels and moisture levels'),
                    'perennial-ryegrass' => array(
                        'title' => 'Perennial Ryegrass',
                        'discription' => 'Perennial Ryegrass is a fine leafed grass with exceptional palatability. Perennial Ryegrass is often planted for hay or pasture mixes'),
                    'italian-annual-ryegrass' => array(
                        'title' => 'Italian Annual Ryegrass',
                        'discription' => 'Italian Ryegrass is an awesome bi-annual grass. Italian Ryegrass can be used as pasture, haylage, or in Cover Crop mixtures.'),
                    'festulolium' => array(
                        'title' => 'Festulolium',
                        'discription' => 'Festulolium is a cross between Italian or Perennial Ryegrass and Tall or Meadow Fescue. By crossing the fescue and ryegrass'),
                    'smooth-bromegrass' => array(
                        'title' => 'Smooth Bromegrass',
                        'discription' => 'Smooth Bromegrass is a long-living, deep-rooted perennial grass. Smooth Bromegrass is ideal in hay mixes with its wide leaves making it highly palatable'),
                    'meadow-bromegrass' => array(
                        'title' => 'Meadow Bromegrass',
                        'discription' => 'Meadow Bromegrass is a long-living perennial used mainly for pasture. Pasture yields in Meadow Bromegrass are higher than Smooth Bromegrass'),
                    'annuals-main' => array(
                        'title' => 'Annuals Main',
                        'discription' => 'Forage Annuals can be items that are only good for the year you plant them. Forage Annuals can be used for feed for different livestock'),
                    'forage/sorghum-sudangrass' => array(
                        'title' => 'Forage Sorghum Sudangrass',
                        'discription' => 'Forage Sorghum Sudangrass - Fast growing forage for multi-cut system. Primarily used for pasture, balage or green cropping. Hard to make dry hay'),
                    'forage/pearl-millet' => array(
                        'title' => 'Forage Pearl Millet',
                        'discription' => 'High quality Forage forage that can be used for pasture, haylage or green chopped. Has a high leaf to stem ratio. Adapts well to marginal soils especially sand.'),
                    'teff' => array(
                        'title' => 'Teff',
                        'discription' => 'Teff is a fine-stemmed, warm-season annual grass that produces multiple crops of high quality forage. Must be planted into a firm seed bed.'),
                    'pea-mixtures' => array(
                        'title' => 'Pea Mixtures',
                        'discription' => 'These mixtures offer excellent combinations of forage grain mixed with forage peas. These mixtures can be planted straight or as a nurse crop to your new seeding'),
                    'organic' => array(
                        'title' => 'Organic',
                        'discription' => 'General seed company canada offer organic forage seed of many types that are certified organic through the CSI Organic forage seed provided must be from credible organic suppliers'),
                    'pasture-main' => array(
                        'title' => 'Pasture Main',
                        'discription' => 'General seed company canada offer many pasture mixes for different livestock. Some mixes are specially designed for well drained or poorly drained soils'),
                    'permanent-pasture-cattle-pasture-highland' => array(
                        'title' => 'Permanent Cattle Pasture Highland',
                        'discription' => 'A heavy duty pasture mix for cattle on fairly well drained soils. Comes with or without Brome depending on the personal preference.'),
                    'permanent-pasture-lowland-cattle-pasture' => array(
                        'title' => 'Permanent Lowland Cattle Pasture',
                        'discription' => 'A heavy-duty pasture mix for lowland or poor PH soil types. Comes with or without Brome depending on the personal preference.'),
                    'permanent-pasture-sheep-goat-pasture' => array(
                        'title' => 'Permanent Sheep Goat Pasture',
                        'discription' => 'A pasture mix well tested over time that handles all soil types. This mix comes with or without Bromegrass.'),
                    'permanent-pasture-horse-or-paddock-mixture' => array(
                        'title' => 'Permanent Horse or Paddock Mixture',
                        'discription' => 'An endophyte free horse pasture mix that we have marketed for over 25 years. Can be used for new pastures or overseeding existing pastures.'),
                    'pasture-renevator-mixture' => array(
                        'title' => 'Pasture Renevator Mixture',
                        'discription' => 'PASTURE RENEVATOR MIXTURE is an overseeding mixture for existing cattle pastures.'),
                    'alfalfa-grass-main' => array(
                        'title' => 'Alfalfa Grass Main',
                        'discription' => 'These mixes are designed for different livestock that you are feeding. Some mixtures are for haylage/baleage and others for dry hay'),
                    'alfalfa-grassland-mixture' => array(
                        'title' => 'Alfalfa Grassland Mixture',
                        'discription' => 'reliable, winter hardy, high yielding forage grass mixture that regrows for multiple cuts of highly palatable feed. Needs to have an aggressive cutting schedule'),
                    'alfalfa-timothy-grassland-mixture' => array(
                        'title' => 'Alfalfa Timothy Grassland Mixture',
                        'discription' => 'A reliable, winter hardy, high yielding forage grass mixture that regrows for multiple cuts of highly palatable feed. Needs to have an aggressive cutting schedule.'),
                    'alfalfa-grass-mixture' => array(
                        'title' => 'Alfalfa Grass Mixture',
                        'discription' => 'A grass mix with a high percentage of Alfalfa which ensures regrowth. Ideal mix for making dry hay that is soft and palatable.'),
                    'alfalfa-grass-mixture-with-brome' => array(
                        'title' => 'Alfalfa Grass Mixture with Brome',
                        'discription' => 'An awesome mixture that makes a large volume of hay. Ideal mixture for cow and calf operations which prefer dry hay that is soft and palatable.'),
                    'alfalfa-with-aggressive-grass-mixture' => array(
                        'title' => 'Alfalfa with Aggressive Grass Mixture',
                        'discription' => 'An aggressive grass mixture with lots of palatability. Great hay for small animals, calf hay or export hay which requires lots of grass.'),
                    'dry-cow-hay-mixture' => array(
                        'title' => 'Dry Cow Hay Mixture',
                        'discription' => 'A low potassium hay mixture for dry cows or for famers who wants pure grasses that will last a long time.'),
                    'alternative-hay-main' => array(
                        'title' => 'Alternative Hay Main',
                        'discription' => 'These mixtures are designed for different usage or different field conditions. These mixtures have been developed for multiple cuttings per year'),
                    'hay-pasture-mixture' => array(
                        'title' => 'Hay Pasture Mixture',
                        'discription' => 'One of the best hay and pasture mixtures on the market. Makes fine textured hay and yields lots of pasture. Comes with or without Brome'),
                    'mixedland-mixture' => array(
                        'title' => 'Mixedland Mixture',
                        'discription' => 'For rolling untiled land with high and low spots. Makes fine textured hay with large volumes for that kind of land. Can be used for hay and pasture'),
                    'lowland-mixture' => array(
                        'title' => 'Lowland Mixture',
                        'discription' => 'An excellent lowland hay mixture. An ideal mixture for wet lowland with poor drainage. Can be used for hay or pasture. Comes with or without Brome'),
                    'rolling-field-mixture' => array(
                        'title' => 'Rolling Field Mixture',
                        'discription' => 'A great solid mixture for rolling fields with a few low waterways where Alfalfa will only last a couple of years but most of the land is well drained.'),
                    'alfalfa-timothy' => array(
                        'title' => 'Alfalfa Timothy',
                        'discription' => 'Alfalfa mixtures are available with high alfalfa content for dairy and low Alfalfa percentage for horse hay.'),
                    'ouebec-maritime' => array(
                        'title' => 'Ouebec Maritime',
                        'discription' => 'We offer an arrangement of provincial mixtures that are available in Quebec and the Maritimes. We have many more provincial mixtures that are available'),
                    'silage-corn' => array(
                        'title' => 'Silage Corn',
                        'discription' => 'We offer best silege corn in canada, Its a high-quality forage crop that is used on many dairy farms and on some beef cattle farms in Tennessee'),
                    'ls-lawn-seed-mixtures' => array(
                        'title' => 'Ls Lawn Seed Mixtures',
                        'discription' => 'Lateral Spread lawn mixtures have a spreading tiller which fills in bare spots fast for increasing density to prevent possible weed pressures.'),
                    'lawn-seed-mixtures' => array(
                        'title' => 'Lawn Seed Mixtures',
                        'discription' => 'These well-structured lawn mixtures are custom designed to do specific lawn use. These mixes do not contain lateral spreading varieties'),
                    'ls-sports-field-mixtures' => array(
                        'title' => 'Ls Sports Field Mixtures',
                        'discription' => 'General seed company canada offer 2 well-designed Sportsfield mixtures that have been well tested and continually planted on top Canadian University and Highschool sports field'),
                    'ls-golf-mixtures' => array(
                        'title' => 'Ls Golf Mixtures',
                        'discription' => 'General seed company canada offer some golf course mixtures, we have learned over the years that custom mixing mixtures for golf courses that are super-tenant is the best way of going'),
                    'sod-mixtures' => array(
                        'title' => 'Sod Mixtures',
                        'discription' => 'We only use gold tagged Kentucky Bluegrass that has been tested multiple times for purity to make sod mixtures. The most popular mix is our 4-way sod mixtures'),
                    'provincial-highway-mixtures' => array(
                        'title' => 'Provincial Highway Mixtures',
                        'discription' => 'General seed company canada following provincial highway mixtures. They can be used on the highways or on low main-tenance lawns that might be low in nutrients or organic matter.'),
                    'individual-turf-grass' => array(
                        'title' => 'Individual Turf Grass',
                        'discription' => 'Listed are all of the individual turf grass varieties we currently offer. Also listed is the different wildflower mixtures that are available.'),
                    'deer-plot-mixtures' => array(
                        'title' => 'Deer Plot Mixtures',
                        'discription' => 'Our well designed, yet simple Deer Plot mixtures have been a popular hit for the last ten years. These mixtures are ideal for the avid hunter or the homeowner'),
                    'packaging-information' => array(
                        'title' => 'Packaging Information',
                        'discription' => 'General Seed Company packages lawn seed in various sized bags to suit your needs. Each mixture has a different coloured tag for easy identification'),
                    'covercrops' => array(
                        'title' => 'Cover Crops',
                        'discription' => 'These are the current covercrop legumes we offer. Some of the legumes will winter kill while other survive the winter to fix quick nitrogen the next spring'),
                    'legumes' => array(
                        'title' => 'Legumes',
                        'discription' => 'These are the current covercrop legumes we offer. Some of the legumes will winter kill while other survive the winter to fix quick nitrogen the next spring'),
                    'crimson-clover' => array(
                        'title' => 'Crimson Clover',
                        'discription' => 'Produces significant amounts of nitrogen | Low growing cover crop | Works well in interseeding corn because it handles shade well | Survives some winters'),
                    'berseem-clover' => array(
                        'title' => 'Berseem Clover',
                        'discription' => 'Berseem Clover | Low growing cover crop | Grows upright with a white flower | Produces significant amounts of nitrogen | Can grow 12 - 16 inches tall'),
                    'forage-peas' => array(
                        'title' => 'Forage Peas',
                        'discription' => 'Aggressive growth to suppress weeds | Produces significant amounts of nitrogen | Great item to be used in a Cover Crop mixture | Does not survive winter'),
                    'austrian-winter-peas' => array(
                        'title' => 'Austrian Winter Peas',
                        'discription' => 'Produces significant amounts of nitrogen | Great winter hardiness and survives most winters | Controls erosion through winter | Can be used for feed'),
                    'cow-peas' => array(
                        'title' => 'Cow Peas',
                        'discription' => 'Cow Peas roots break up hardpans | The most drought tolerant pea type | Adapts to poor PH soils | Produces significant amounts of nitrogen'),
                    'tnt-brand-hairy-vetch' => array(
                        'title' => 'Tnt Brand Hairy Vetch',
                        'discription' => 'TNT BRAND HAIRY VETCH | Produces significant amounts of nitrogen | Phosphorus scavenger | Provides excellent weed suppression'),
                    'common-vetch' => array(
                        'title' => 'Common Vetch',
                        'discription' => 'COMMON VETCH | Produces significant amounts of nitrogen | Phosphorus scavenger | Has a low carbon to nitrogen ratio | Sometimes used for Forage'),
                    'faba-beans' => array(
                        'title' => 'Faba Beans',
                        'discription' => 'Faba Beans have a tap root that opens up hardpans | Other Cover Crops will climb Faba Bean plants | Produces significant amounts of nitrogen'),
                    'sun-hemp' => array(
                        'title' => 'Sun Hemp',
                        'discription' => 'Produces significant amounts of nitrogen | Can produce large amounts of biomass per acre | Can be used as a great feed source'),
                    'brassicas' => array(
                        'title' => 'Brassicas',
                        'discription' => 'General seed company canada offer an arrangement of different brassicas that have many different usages. Some open up to the soil and take nutrients from the subsoil to the topsoil'),
                    'nitro-radish' => array(
                        'title' => 'Nitro Radish',
                        'discription' => 'NITRO RADISH | Scavenges Nutrients | Reduces soil compaction | Promotes water infiltration | Increases earthworm activity | Improves soil biology'),
                    'fumarad-brand-oil-seed' => array(
                        'title' => 'Fumarad Brand Oil Seed',
                        'discription' => 'It is a nematode controlling oil seed radish, FumaRad is a class 1 radish that shows up to 95% resistance against the white and the yellow beet cyst nematode'),
                    'vivant-hybrid-brassica' => array(
                        'title' => 'Vivant Hybrid Brassica',
                        'discription' => 'VIVANT HYBRID BRASSICA | Different than turnips because of all the energy in the leaves | Highly digestible for sheep and cattle grazing'),
                    'forage-turnips' => array(
                        'title' => 'Forage Turnips',
                        'discription' => 'FORAGE TURNIPS (PURPLE TOP) | Turnip bulbs and roots penetrate the soil and recycle nutrients from subsoil | Helps control erosion if left through winter'),
                    'forage-kale' => array(
                        'title' => 'Forage Kale',
                        'discription' => 'FORAGE KALE | Breaks up soil compaction | Holds soil from erosion | Scavenges for nutrients | Used in deer plot mixes'),
                    'forage-rape' => array(
                        'title' => 'Forage Rape',
                        'discription' => 'FORAGE RAPE (ESSEX) | Deep, fibrous root system | Great scavenger for nitrogen and soluble phosphorus | Very drought tolerant brassica'),
                    'mustard' => array(
                        'title' => 'Mustard',
                        'discription' => 'MUSTARD | New and improved varieties are used as biofumigants | Yellow and Oriental mustard varieties are high in glucosinolates | Increase organic matter'),
                    'grass-grain' => array(
                        'title' => 'Grass Grain',
                        'discription' => 'These grasses or grains are used to mixes because of their aggressive root system to prevent blowing and eroding soil from happening'),
                    'fall-rye' => array(
                        'title' => 'Fall Rye',
                        'discription' => 'FALL RYE | Fast growing and very hardy | Tolerant of poor soil conditions | Fights soil erosion | Suppress weeds | Helps control soil erosion'),
                    'oats' => array(
                        'title' => 'Oats',
                        'discription' => 'OATS | Great dual purpose grain | Can be used for Cover Crop or feed | Does not survive winters | Holds soil from erosion'),
                    'winter-triticale' => array(
                        'title' => 'Winter Triticale',
                        'discription' => 'WINTER TRITICALE | Helps suppress weeds | Grows well in heavy soil | Higher levels of digestible energy compared to fall rye | Good early spring vigour'),
                    'annual-ryegrass' => array(
                        'title' => 'Annual Ryegrass',
                        'discription' => 'ANNUAL RYEGRASS | Cost effective ryegrass for interseeding | Very fibrous aggressive roots | Increase water infiltration | Erosion control'),
                    'nitro-brand-italian' => array(
                        'title' => 'Nitro Brand Italian',
                        'discription' => 'NITRO BRAND ITALIAN RYEGRASS | Very fibrous aggressive root | Does very well when interseeded into corn | Erosion control | Biennial plant'),
                    'sorghum-sudangrass' => array(
                        'title' => 'Cover Crops Sorghum Sudangrass',
                        'discription' => 'Cover Crops Sorghum Sudangrass | Dense root system which penetrates compacted soil | Quick growing with lots of organic matter | Can be used for feed'),
                    'pearl-millet' => array(
                        'title' => 'Cover Crops Pearl Millet',
                        'discription' => 'Cover Crops Pearl Millet performs well in light soils where droughts can be an issue | Used for some nematode control | Can be used as feed'),
                    'other' => array(
                        'title' => 'Other',
                        'discription' => 'These have no real family of classification but still, have a purpose. It could act as a pollinator, a wire-worm control item, or an item with a strong taproot'),
                    'buckwheat' => array(
                        'title' => 'Buckwheat',
                        'discription' => 'BUCKWHEAT | A fast-growing green manure crop | Rejuvenates low fertility soils | Supports large bee hives and produces exceptional honey yields'),
                    'sunflowers' => array(
                        'title' => 'Sunflowers',
                        'discription' => 'SUNFLOWERS | Large extensive and prolific root system | Beneficial to bees and other insects | Other Cover Crop will use sunflowers for a climbing stem'),
                    'phacelia' => array(
                        'title' => 'Phacelia',
                        'discription' => 'PHACELIA | One of the top plants used for honey production | Has a very fibrous root system | Reduces sugar beet nematodes in the ground'),
                    'mixtures' => array(
                        'title' => 'Mixtures',
                        'discription' => 'These time-tested cover-crop mixtures are designed for different cropping rotations. Some mixtures are created for soybeans to be planted the next year'),
                    'articles' => array(
                        'title' => 'Articles',
                        'discription' => 'SILAGE CORN - Leafy Corn Silage: Designed For Making Milk, TURF - Lateral Spread Perennial Ryegrass: Turfgrass Developed To Withstand Wear'),
                    'contact-us' => array(
                        'title' => 'Contact Us',
                        'discription' => 'Contact Us'),
                    'generalInquiry' => array(
                        'title' => 'General Inquiry',
                        'discription' => 'Address: 648 Alberton Road South, Alberton, ON L0R 1A0 Office: (905)-648-2101 | Fax: (905)-648-6429 | Email: generalseedcompany@gmail.com'),
                    'retailInquiry' => array(
                        'title' => 'Retail Inquiry',
                        'discription' => 'Retail Inquiry'),
                    'wholesaleInquiry' => array(
                        'title' => 'Wholesale Inquiry',
                        'discription' => 'Wholesale Inquiry'),
                    'wholesaleOrder' => array(
                        'title' => 'Wholesale Order',
                        'discription' => 'Wholesale Order'),
                    'dealer-inquires' => array(
                        'title' => 'Dealer Inquires',
                        'discription' => 'Dealer Inquires'),
        ))
);

// if (APP_ENVIRONMENT == 'prod') {
// define('SMTP_HOST', 'email-smtp.us-west-2.amazonaws.com');
// define('SMTP_PORT', "465");
// define('SMTP_USER', 'AKIAIU32OVPCUS6RUAOQ');
// define('SMTP_PASSWORD', 'AvSIe78uNYMoAEkv33+GR9zIJlgPd/Ko+emXzkGw2cMW');
// define('FROM_NAME', 'no-reply@cumuluspos.com');
// define('FROM_EMAIL', 'no-reply@cumuluspos.com');
// } else {
//    define('SMTP_HOST', 'ssl://smtp.mailgun.org');
//    define('SMTP_PORT', "465");
//    define('SMTP_USER', 'postmaster@sandbox45305d08dfbc4337906b1e95dc2a16aa.mailgun.org');
//    define('SMTP_PASSWORD', '83bd22f464f53869447d1a219839e364');
//    define('FROM_NAME', 'no-reply@cumuluspos.com');
//    define('FROM_EMAIL', 'no-reply@cumuluspos.com');
// }



/* Access Status as per database ("pos_access_status") */

// define('STATUS_ENABLE', 1);
// define('STATUS_DISABLE', 2);
// define('STATUS_HOLD', 3);



/* File Upload PAth */

if (APP_ENVIRONMENT == 'prod') {

    define('PATHFORUPLOADFOLDER', $_SERVER['DOCUMENT_ROOT'] . 'login/');
} else if (APP_ENVIRONMENT == 'local') {

    define('PATHFORUPLOADFOLDER', $_SERVER['DOCUMENT_ROOT'] . 'generalseed/');
} else if (APP_ENVIRONMENT == 'dev') {

    define('PATHFORUPLOADFOLDER', $_SERVER['DOCUMENT_ROOT'] . 'generalseed/');
} else if (APP_ENVIRONMENT == 'staging') {

    define('PATHFORUPLOADFOLDER', $_SERVER['DOCUMENT_ROOT'] . 'generalseed/');
}

define('DEFAULT_PROFILE_PICTURE', 'public/uploads/DefaultImage.png');



// define('APK_DOCUMENT_PROFILE_IMAGE_PATH', 'public/uploads/apk/');
// define('DEPARTMENT_DOCUMENT_PROFILE_IMAGE_PATH', 'public/uploads/department/');
//define('INVENTORY_DOCUMENT_PROFILE_IMAGE_PATH', 'public/uploads/inventory/');
//define('KEYBOARD_DOCUMENT_PROFILE_IMAGE_PATH', 'public/uploads/keyboard/');
// define('INVENTORY_DOCUMENT_PROFILE_IMAGE_PATH', 'inventory/');
// define('KEYBOARD_DOCUMENT_PROFILE_IMAGE_PATH', 'keyboard/');

define('PROFILE_PIC_IMAGE_PATH', 'public/uploads/profilepic/');

define('SETTINGS_IMG_PATH', 'public/uploads/');

// define('STORE_PIC_IMAGE_PATH', 'public/uploads/store/');
// define('VENDOR_PIC_IMAGE_PATH', 'public/uploads/vendor/');



/* User Type as per database ("pos_user_type") */

define('SUPERADMIN', 'SUPER');

//define('NO_IMAGE', 'public/uploads/profilepic/DefaultUserImage.png');

define('PRODUCT_HOME_IMAGE', 'public/uploads/product/home');

define('PRODUCT_IMAGE', 'public/uploads/product/image');

// define('GOOGLE_GEOLOCATION_KEY', 'AIzaSyBzi4T8CeRF2koIn47ph1pYZpGi_fi68jQ');



/* Default Subscription Plan as per database ("pos_subscription_plan")  */

// define('DEFAULT_SUBSCRIPTION_PLAN', '1');           // for Demo User
// define('SINGLE_USER_SUBSCRIPTION_PLAN', '2');       // for Single User
// define('EDGE_USER_SUBSCRIPTION_PLAN', '3');         // for Edge User
//define('SUPER_ADMIN_USER_TYPE', '1');           // for Super Admin User
//define('DEMO_USER_TYPE', '2');           // for Demo User
//define('SINGLE_USER_TYPE', '3');       // for Single User
//define('EDGE_USER_TYPE', '4');         // for Edge User





/* Payment Status as per database ("") */

//define('PAID_STATUS', 'PAID');
//define('UNPAID_STATUS', 'UNPAID');





/* Payment Unit as default '$' */

// define('PAYMENT_UNIT', '$');
// define('LAYOUT_TYPE_PRODUCT', '1');
// define('LAYOUT_TYPE_FOLDER', '2');
// define('LAYOUT_TYPE_DEPARTMENT', '3');
// define('LAYOUT_TYPE_TENDER', '4');
// define('LAYOUT_TYPE_EXTERNAL_APP', '5');
// define('LAYOUT_TYPE_TEXT', '6');
// define('LAYOUT_TYPE_NO_SALE', '7');





/* Subscription Status as per database ("pos_user_has_subscription") */

// define('ENUM_STATUS_CURRENT', 'CURRENT');
// define('ENUM_STATUS_CANCELED', 'CANCELED');
// define('ENUM_STATUS_PENDING', 'PENDING');





/*  Inventory Take Inventory Count statud */

// define('ENUM_TRACKED', 'Tracked');
// define('ENUM_NON_TRACKED', 'Non Tracked');



/* Layout for pos_keyboard_layout */

// define('DEFAULT_LAYOUT', 'Default layout');
// define('IMAGE_BASEPATH', 'http://cdn-lab.cumuluspos.com/');



define('NO_IMAGE', 'public/front/images/no-image.png');



define('ADMIN_EMAIL', 'patelmayur7008@gmail.com');

define('FROM_NAME', 'generalseed');
define('PROJECT_NAME', 'Generalseed company');

/* Email Setting constatnts */
define("SMTP_HOST", "smtpout.secureserver.net");
define("SMTP_PORT", '80');
define("SMTP_USER", 'noreply@helpdesk.experttech.ca');
define("SMTP_PASS", 'N9V2Tx.QWuF?@++%');
//define("SMTP_PASS", '7688328jg');
if ($_SERVER['HTTP_HOST'] == "localhost") {
    define("IMAGES", 'http://' . $_SERVER['HTTP_HOST'] . '/generalseedcompany.ca/public/frontv2/images/');
} else {
    define("IMAGES", 'http://' . $_SERVER['HTTP_HOST'] . '/public/frontv2/images/');
}

