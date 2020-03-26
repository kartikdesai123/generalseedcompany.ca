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
                    'legumes-main' => array(
                        'title' => 'Legumes',
                        'discription' => 'Legumes'),
                    'alfalfa' => array(
                        'title' => 'Alfalfa',
                        'discription' => 'This is the Grasses'),
                    'birdsfoot-trefoil' => array(
                        'title' => 'birdsfoot-trefoil',
                        'discription' => 'birdsfoot-trefoil'),
                    'sainfoin' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'white-clover' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'ladino-clover' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'alsike-clover' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'double-cut-red-clover' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'single-cut-red-clover' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'yellow-blossom-sweet-clover' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'grasses-main' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'timothy' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'reed-canary-grass' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'orchardgrass' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'tall-fescue' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'perennial-ryegrass' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'italian-annual-ryegrass' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'festulolium' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'smooth-bromegrass' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'meadow-bromegrass' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'annuals-main' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'sorghum-sudangrass' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'pearl-millet' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'teff' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'pea-mixtures' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'organic' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'pasture-main' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'permanent-pasture-cattle-pasture-highland' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'permanent-pasture-lowland-cattle-pasture' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'permanent-pasture-sheep-goat-pasture' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'permanent-pasture-horse-or-paddock-mixture' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'pasture-renevator-mixture' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'alfalfa-grass-main' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'alfalfa-grassland-mixture' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'alfalfa-timothy-grassland-mixture' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'alfalfa-grass-mixture' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'alfalfa-grass-mixture-with-brome' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'alfalfa-with-aggressive-grass-mixture' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'dry-cow-hay-mixture' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'alternative-hay-main' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'hay-pasture-mixture' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'mixedland-mixture' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'lowland-mixture' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'rolling-field-mixture' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'alfalfa-timothy' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'ouebec-maritime' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'silage-corn' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'ls-lawn-seed-mixtures' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'lawn-seed-mixtures' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'ls-sports-field-mixtures' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'ls-golf-mixtures' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'sod-mixtures' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'provincial-highway-mixtures' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'individual-turf-grass' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'deer-plot-mixtures' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'packaging-information' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'legumes' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'crimson-clover' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'berseem-clover' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'forage-peas' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'austrian-winter-peas' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'cow-peas' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'tnt-brand-hairy-vetch' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'common-vetch' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'faba-beans' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'sun-hemp' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'brassicas' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'nitro-radish' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'fumarad-brand-oil-seed' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'vivant-hybrid-brassica' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'forage-turnips' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'forage-kale' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'forage-rape' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'mustard' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'grass-grain' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'fall-rye' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'oats' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'winter-triticale' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'annual-ryegrass' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'nitro-brand-italian' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'sorghum-sudangrass' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'pearl-millet' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'other' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'buckwheat' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'sunflowers' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'phacelia' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'mixtures' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'articles' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'contact-us' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'generalInquiry' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'retailInquiry' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'wholesaleInquiry' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'wholesaleOrder' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
                    'dealer-inquires' => array(
                        'title' => 'Title',
                        'discription' => 'Description'),
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

