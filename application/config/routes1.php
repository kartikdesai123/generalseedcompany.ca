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
// $route['subscription'] = 'front/subscription';
$route['signup'] = 'account/signup';
$route['admin'] = 'admin/account';
$route['dealer'] = 'account';
//$route['dealer/(:any)'] = 'user/$1';
$route['user'] = 'account';
$route['about'] = 'front/about';

$route['article'] = 'front/article';
$route['article/(:any)'] = 'front/article/index/$1';
$route['contact/retail-inquiries'] = 'front/contact/retail_inquiries';
$route['contact/wholeseller-orders'] = 'front/contact/wholeseller_orders';
$route['contact/wholeseller-orders-detail'] = 'front/contact/wholeseller_orders_detail';
$route['contact'] = 'front/contact';
$route['dealership'] = 'front/dealership';
$route['products/silage_corn'] = 'front/products/silage_corn';
$route['products/silage_corn/2'] = 'front/products/silage_corn/2';
$route['products/forage_seed'] = 'front/products/forage_seed';
$route['products/forage_seed/2'] = 'front/products/forage_seed/2';
$route['products/turf_seed'] = 'front/products/turf_seed';
$route['products/(:any)'] = 'front/products/detail/$1';
$route['products/(:any)/(:any)'] = 'front/products/detail/$1/$2';

// $route['admin/contact'] = 'admin/contact';
// $route['admin/departments'] = 'admin/dashboard/departments';
// $route['admin/reports'] = 'admin/reporting';
// $route['admin/transaction_history'] = 'admin/reporting/transaction_history';
// $route['admin/store_settings'] = 'admin/settings';
// $route['admin/clerk_setup'] = 'admin/settings/clerk_setup';
// $route['admin/pos_devices'] = 'admin/settings/pos_devices';

$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
