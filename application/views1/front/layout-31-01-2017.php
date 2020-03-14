<!doctype html>

<html>
    <head>
        <?php
        $title = empty($var_meta_title) ? get_project_name() : $var_meta_title . ' | ' . get_project_name();
        $description = empty($var_meta_description) ? get_project_name() : $var_meta_description;
        $keywords = empty($var_meta_keyword) ? get_project_name() : $var_meta_keyword;
        $cururl = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $version = '1.0.6';
        ?>

        <meta property="og:title" content="<?php echo $title; ?>"/>
        <meta property="og:type" content="website"/>
        <!--<meta property="og:image" content="<?php // echo valid_img($fb_og_img);     ?>"/>-->
        <meta property="og:url" content="<?= $cururl; ?>"/>
        <meta property="og:site_name" content="<?= get_project_link() ?>"/>
        <meta property="og:description" content="<?php echo $description; ?>"/>
        <meta property="fb:app_id" content=""/>

        <title><?php echo $title; ?></title>
        <?php echo $meta_tag; ?>
        <meta name="description" content="<?php echo $description; ?>" />
        <meta name="keywords" content="<?php echo $keywords; ?>" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1">
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400italic,400,600,600italic,700,800,800italic" rel="stylesheet" type="text/css">
        <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="<?= base_url(); ?>public/front/css/bootstrap.css" type="text/css" media="all">
        <link rel="stylesheet" href="<?= base_url(); ?>public/front/css/style_new.css" type="text/css" media="all">
        <link rel="stylesheet" href="<?= base_url(); ?>public/front/css/font-awesome.css" type="text/css" media="all">
    </head>
    <body class="home_body">
        <div class="page_wrapper">
            <div class="bodyheader">
                <div class="logo-section">
                    <div class="right-part">

                        <div class="cmmp-details">
                            <h2>General Seed Company</h2>
                            <span class="subtitle">A Division of General Seed Company (2000) Ltd.</span>
                            <b>Tel:</b><span class="phonefaxno">905.648.2101 </span>
                            <b> <span class="dot">.</span> Fax:</b><span class="phonefaxno">905.648.6429</span> <br />
                            <b>E-mail:</b><span class="phonefaxno"> generalseedcompany@gmail.com </span>
                        </div>
                        <div class="logo">
                            <img src="<?= base_url() . 'public/front/images/generalseed/logo.png'; ?>" height="170" width="140">
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="temptxt">
<!--                    <h1>This Website is Under Construction</h1>
                    <h4>We apologize for any inconvenience. All contact information is correct on this page. Thank you.</h4>-->
                </div>
                <?php
                $products = $this->db->get('gs_product')->result_array();
                ?>
                <div class="menubar">
                    <ul>
                        <li class="<?= ($active == 'home') ? 'active' : ''; ?>"><a href="javascript:;">Home</a></li>
                        <li class="<?= ($active == 'product') ? 'active' : ''; ?>">
                            <a href="javascript:;">Products</a>
                            <ul class="sub-menu">
                                <li class="submenuadjust"></li>
                                <li><a href="<?php echo base_url().'products/silage_corn';?>">Silage Corn</a></li>
                                <li><a href="<?php echo base_url().'products/forage_seed';?>">Forage Seed</a></li>
                                <li><a href="<?php echo base_url().'products/turf_seed';?>">Turf Seed</a></li>
                                <?php foreach ($products as $row) { ?>
                                    <li class="<?= ($subactive == $row['var_product_name']) ? 'active' : ''; ?>"><a href="<?php echo base_url().'products/'.$row['var_product_url'];?>"><?= $row['var_product_name']; ?></a></li>
                                <?php } ?>
                            </ul>
                        </li>
                        <li class="<?= ($active == 'technical') ? 'active' : ''; ?>"><a href="javascript:;">Technical Information</a></li>
                        <li class="<?= ($active == 'contact') ? 'active' : ''; ?>"><a href="<?= base_url().'contact'; ?>">Contact Us</a></li>
                        <li class="<?= ($active == 'dealership') ? 'active' : ''; ?>"><a href="javascript:;">Dealership Enquiries</a></li>
                    </ul>
                </div>

            </div>
            <div class="pagecontent">
                <div class="home-cont">
                    General Seed was established in 1965 as a Forage Seed Company. In 1999, with the owner retiring, General Seed was sold and since 2000, 
                    the company has become specialized in Forage, Turf, Cover Crops, Silage Corn and Native Seeds. Serving Ontario, Quebec and the Maritimes, 
                    General Seed has been blessed with massive growth and expansion over 16 years. We are eager to help you in all your seeding needs 
                    with over 25 years of knowledge and experience. We also offer custom mixing so why not give us a call today.
                </div>

                <div class="home-grid">

                    <?php
                    for ($i = 0; $i < count($product); $i++) {
                        if ($i == 0) {
                            $class = 'firstbox';
                        } else {
                            $class = '';
                        }
                        ?>
                        <div class="onebox <?= $class; ?>">
                            <div class="title">
                                <?php $title = explode(' ', $product[$i]['var_product_name']) ?>
                                <h3>
                                    <?php
                                    for ($j = 0; $j < count($title); $j++) {
                                        if ($j == 0) {
                                            echo $title[$j];
                                        } else {
                                            echo " <span>" . $title[$j] . "</span>";
                                        }
                                    }
                                    ?>
                                </h3>

                            </div>
                            <div class="img">
                                <?php $image = explode('.', $product[$i]['var_homepage_image']) ?>
                                <a href="<?= base_url(); ?>products/<?= $product[$i]['var_product_url']; ?>"><img src="<?= base_url()   . 'public/front/images/generalseed/' .$product[$i]['var_homepage_image']; ?>"></a>
                            </div>
                        </div>
                    <?php } ?>
                    <!--                    <div class="onebox">
                                            <div class="title">
                                                <h3> SILAGE <span> CORN </span></h3>
                                            </div>
                                            <div class="img">
                                                <img src="<?= base_url(); ?>public/front/images/generalseed/img2-new.png">
                                            </div>
                                        </div>
                                        <div class="onebox">
                                            <div class="title">
                                                <h3> TURF <span> SEED </span></h3>
                                            </div>
                                            <div class="img">
                                                <img src="<?= base_url(); ?>public/front/images/generalseed/img3-new.png">
                                            </div>
                                        </div>
                                        <div class="onebox lastbox">
                                            <div class="title">
                                                <h3> COVER <span> CROPS </span></h3>
                                            </div>
                                            <div class="img">
                                                <img src="<?= base_url(); ?>public/front/images/generalseed/img4-new.png">
                                            </div>
                                        </div>-->
                    <div class="clear"></div>
                </div>
            </div>
            <div class="bodyfooter">
                <!--Body Footer Section-->
            </div>
        </div>
    </body>
</html>
