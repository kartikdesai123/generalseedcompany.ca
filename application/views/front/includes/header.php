<meta charset=UTF-8 />
<?php
$title = empty($var_meta_title) ? get_project_name() : $var_meta_title ;
$description = empty($var_meta_description) ? get_project_name() : $var_meta_description;
$keywords = empty($var_meta_keyword) ? get_project_name() : $var_meta_keyword;
$cururl = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
$version = '1.0.6';
?>

<meta property="og:title" content="<?php echo $title; ?>"/>
<meta property="og:type" content="website"/>
<!--<meta property="og:image" content="<?php // echo valid_img($fb_og_img);    ?>"/>-->
<meta property="og:url" content="<?= $cururl; ?>"/>
<meta property="og:site_name" content="<?= get_project_link() ?>"/>
<meta property="og:description" content="<?php echo $description; ?>"/>
<meta property="fb:app_id" content=""/>

<title><?php echo $title; ?></title>
<?php echo $meta_tag; ?>
<meta name="description" content="<?php echo $description; ?>" />
<meta name="keywords" content="<?php echo $keywords; ?>" />
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1">
<!--<meta name="viewport" content="width=device-width"/>-->
<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400italic,400,600,600italic,700,800,800italic" rel="stylesheet" type="text/css">
<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="<?= base_url(); ?>public/front/css/bootstrap.css" type="text/css" media="all">
<link rel="stylesheet" href="<?= base_url(); ?>public/front/css/style_new.css" type="text/css" media="all">
<link rel="stylesheet" href="<?= base_url(); ?>public/front/css/font-awesome.css" type="text/css" media="all">
<link rel="stylesheet" href="<?= base_url(); ?>public/front/css/responsive.css" type="text/css" media="all">
<link rel="stylesheet" href="<?= base_url(); ?>public/front/css/newlayout.css" type="text/css" media="all">

<link href="<?= base_url(); ?>public/assets/global/plugins/bootstrap-toastr/toastr.min.css" rel="stylesheet" type="text/css" />
<?php
if (!empty($css_plugin)) {
    foreach ($css_plugin as $value_plugin) {
        ?>
        <link rel="stylesheet" href="<?= base_url(); ?>public/assets/global/plugins/<?php echo $value_plugin; ?>" />
        <?php
    }
}
?>  
<link href="<?= base_url(); ?>public/assets/global/css/components.min.css" rel="stylesheet" id="style_components" type="text/css" />
<link href="<?= base_url(); ?>public/assets/global/css/plugins.min.css" rel="stylesheet" type="text/css" />

<?php
if (!empty($css)) {
    foreach ($css as $value) {
        ?>
        <link rel="stylesheet" href="<?= base_url(); ?>public/assets/layouts/layout/css/<?php echo $value; ?>" />
        <?php
    }
}
?>


<link rel="shortcut icon" href="favicon.ico" />
<!-- Google Analytics Starts here -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-93462425-1', 'auto');
  ga('send', 'pageview');

</script>
<!-- Ends Here -->
<script type="text/javascript">
    var baseurl = "<?php echo base_url(); ?>";
    var adminurl = "<?php echo admin_url(); ?>";
</script>