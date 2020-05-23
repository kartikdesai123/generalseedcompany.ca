<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?php echo $title; ?> - General Seed Company Canada</title>

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="<?php echo $description; ?>" />
<meta name="keywords" content="General Seed Company" />
<meta name="author" content="General Seed Company" />

<link rel="apple-touch-icon" sizes="57x57" href="/public/frontv2/images/fevicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/public/frontv2/images/fevicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/public/frontv2/images/fevicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/public/frontv2/images/fevicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/public/frontv2/images/fevicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/public/frontv2/images/fevicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/public/frontv2/images/fevicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/public/frontv2/images/fevicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/public/frontv2/images/fevicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/public/frontv2/images/fevicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/public/frontv2/images/fevicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/public/frontv2/images/fevicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/public/frontv2/images/fevicon/favicon-16x16.png">
<link rel="manifest" href="/public/frontv2/images/fevicon/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/public/frontv2/images/fevicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

<meta name="p:domain_verify" content="0f92f94323b5b6799dbac8195565a65f"/>

<?php if(isset($active) && ($active == 'home')){?>
<meta property="og:url" content="https://www.generalseedcompany.ca/" />
<meta property="og:type" content="article" />
<meta property="og:title" content="Ontario, Forage & Turf Seed - General Seed Company Canada" />
<meta property="og:description" content="Serving top genetic varieties like ontario seed, forage seed, silage corn, turf seed, and cover crops in Canada." />
<meta property="og:image" content="/public/frontv2/images/generalseedcompany.jpg" />
<?php } ?>
<!-- Chrome, Firefox OS and Opera -->
<meta name="theme-color" content="#004a1b">
<!-- Windows Phone -->
<meta name="msapplication-navbutton-color" content="#004a1b">
<!-- iOS Safari -->
<meta name="apple-mobile-web-app-status-bar-style" content="#004a1b">

<!--<link rel="icon" href="images/ac-favicon.ico">-->

<link href="https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800" rel="stylesheet">

<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Bootstrap  -->
<link rel="stylesheet" href="<?= base_url(); ?>public/frontv2/css/bootstrap.min.css">
<link rel="stylesheet" href="<?= base_url(); ?>public/frontv2/css/style.css">

<?php
     if (!empty($css)){  
        foreach ($css as $value){ ?>  
        <link rel="stylesheet" href="<?= base_url(); ?>public/css/<?php echo $value ?>">
      <?php  }
       }
    ?>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-147547935-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-147547935-1');
</script>