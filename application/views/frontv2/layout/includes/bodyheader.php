<header>
    <?php if( base_url(uri_string()) != base_url()){ 
        $newcall = '';
    }else{
        $newcall = 'home-nav';
    } ?>
    <nav id="main-menu" class="navbar navbar-default navbar-fixed-top top-nav-collapse <?php echo $newcall; ?>" role="banner">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                
                <?php if( base_url(uri_string()) != base_url()){ ?>
                <a class="navbar-brand" href="<?= base_url(); ?>">General Seed Company</a>
                <?php } ?>
            </div>

            <div class="collapse navbar-collapse navbar-right">
                <ul class="nav navbar-nav">
                    <li class="dropdown <?php echo $forage; ?>">
                        <a href="javascript:;">Forage</a>
                        <ul class="dropdown-menu">
                            <li><a href="<?= base_url(); ?>products/forage/legumes-main">Legumes</a></li>
                            <li><a href="<?= base_url(); ?>products/forage/grasses-main">Grasses</a></li>
                            <li><a href="<?= base_url(); ?>products/forage/annuals-main">Annuals</a></li>
                            <li><a href="<?= base_url(); ?>products/forage/organic">Organic</a></li>
                            <li><a href="<?= base_url(); ?>products/forage/pasture-main">Pasture</a></li>
                            <li><a href="<?= base_url(); ?>products/forage/alfalfa-grass-main">Alfalfa/Grass</a></li>
                            <li><a href="<?= base_url(); ?>products/forage/alternative-hay-main">Alternative Hay</a></li>
                            <li><a href="<?= base_url(); ?>products/forage/alfalfa-timothy">Alfalfa-Timothy</a></li>
                            <li><a href="<?= base_url(); ?>products/forage/ouebec-maritime">Quebec & Maritime</a></li>
                        </ul>
                    </li>
                    <li class="dropdown <?php echo $silage; ?>"><a href="<?= base_url(); ?>products/silage-corn">Silage Corn</a></li>
                    <li class="dropdown <?php echo $turf; ?>">
                        <a href="javascript:;">TurF</a>
                        <ul class="dropdown-menu">
                            <li><a href="<?= base_url(); ?>products/turf/ls-lawn-seed-mixtures">LS Lawn Seed Mixtures</a></li>
                            <li><a href="<?= base_url(); ?>products/turf/lawn-seed-mixtures">Lawn Seed Mixtures</a></li>
                            <li><a href="<?= base_url(); ?>products/turf/ls-sports-field-mixtures">LS Sports Field Mixtures</a></li>
                            <li><a href="<?= base_url(); ?>products/turf/ls-golf-mixtures">LS Golf Mixtures </a></li>
                            <li><a href="<?= base_url(); ?>products/turf/sod-mixtures">Sod Mixtures</a></li>
                            <li><a href="<?= base_url(); ?>products/turf/provincial-highway-mixtures">Provincial Highway Mixtures</a></li>
                            <li><a href="<?= base_url(); ?>products/turf/individual-turf-grass">Individual Turf Grass </a></li>
                            <li><a href="<?= base_url(); ?>products/turf/deer-plot-mixtures">Deer Plot Mixtures</a></li>
                            <li><a href="<?= base_url(); ?>products/turf/packaging-information">Packaging Information</a></li>
                        </ul>
                    </li>
                    <li class="dropdown <?php echo $covercrops; ?>">
                        <a href="javascript:;">Cover Crops</a>
                        <ul class="dropdown-menu">
                            <li><a href="<?= base_url(); ?>products/cover-crops/legumes">Legumes</a></li>
                            <li><a href="<?= base_url(); ?>products/cover-crops/brassicas">Brassicas</a></li>
                            <li><a href="<?= base_url(); ?>products/cover-crops/grass-grain">Grass/Grain</a></li>
                            <li><a href="<?= base_url(); ?>products/cover-crops/other">Other</a></li>
                            <li><a href="<?= base_url(); ?>products/cover-crops/mixtures">Mixtures</a></li>
                        </ul>
                    </li>
                    <li class="<?php echo $articles; ?>"><a href="<?= base_url(); ?>products/articles">Articles</a></li>
                    <li class="dropdown <?php echo $contactus; ?>">
                        <a href="<?= base_url(); ?>products/contact-us">Contact US</a>
                        <ul class="dropdown-menu">
                            <li><a href="<?= base_url(); ?>products/contact-us/generalInquiry">General Inquires</a></li>
                            <li><a href="<?= base_url(); ?>products/contact-us/retailInquiry">Retail Inquires</a></li>
                            <li><a href="<?= base_url(); ?>products/contact-us/wholesaleInquiry">Wholesale Inquires</a></li>
                            <li><a href="<?= base_url(); ?>products/contact-us/wholesaleOrder">Wholesale Orders</a></li>
                        </ul>
                    </li>
                    <li class="<?php echo $dealerinquires; ?>"><a href="<?= base_url(); ?>products/dealer-inquires">Dealer inquires</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<style>
/*    #main-menu.navbar-default .dropdown-menu > li > a{
        color: black !important;
        padding: 10px 0px;
        font-size: 15px;
    }*/
    .dropdown:hover ul.dropdown-menu{ 
        display: block; 
    }
    .navbar-right .dropdown-menu{
        left: 0;
    }
/*    .nav .dropdown-toggle .caret { 
        display:none; 
    }*/
</style>