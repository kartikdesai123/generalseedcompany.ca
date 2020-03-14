<section class="hg_section ptop-80 pbottom-80">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="hg-portfolio-sortable" >
                    <div style="border-bottom: 2px solid #000000; margin-bottom: 25px;">
                        <div class="portfolio-title" style="width: 50%; float: left;">
                            <h3 style="margin: 0; color: #CD2122; font-weight: bold; font-size: 20px;"><?= $pagetitle; ?></h3>
                        </div>
                        <div id="sorting" class="fixclear" style="margin:0; float: right; width: 50%; text-align: right; font-size: 12px;">
                            <span class="sortTitle"> Sort By: </span>
                            <ul id="sortBy" class="option-set " data-option-key="sortBy" data-default="">
                                <li><a href="#sortBy=name" data-option-value="name">Name</a></li>
                                <li class="sort_separator">/</li>
                                <li style="margin:0;"><a href="#sortBy=date" data-option-value="date" class="selected">Date</a></li>
                            </ul>
                            <span class="sortTitle"> Direction: </span>
                            <ul id="sort-direction" class="option-set" data-option-key="sortAscending">
                                <li><a href="#sortAscending=true" data-option-value="true" class="selected">ASC</a></li>
                                <li class="sort_separator">/</li>
                                <li style="margin:0;"><a href="#sortAscending=false" data-option-value="false">DESC</a></li>
                            </ul>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <!--                    <ul id="portfolio-nav" class="fixclear">
                                            <li class="current"><a href="#" data-filter="*">All</a></li>
                                            <li class=""><a href="#" data-filter=".apps_sort">Apps</a></li>
                                            <li class=""><a href="#" data-filter=".branding_sort">Branding</a></li>
                                            <li class=""><a href="#" data-filter=".ecommerce_sort">eCommerce</a></li>
                                            <li class=""><a href="#" data-filter=".illustration_sort">Illustration</a></li>
                                            <li class=""><a href="#" data-filter=".miscellaneous_sort">Miscellaneous</a></li>
                                            <li class=""><a href="#" data-filter=".web_sort">WEB</a></li>
                                        </ul>-->
                    <div class="clear"></div>
                    <ul id="thumbs" class="fixclear" data-columns="4">
                        <?php for($i=1; $i<=12; $i++){ ?>
                        <li class="item kl-has-overlay miscellaneous_sort web_sort even" data-date="02122016">
                            <div class="inner-item">
                                <div class="img-intro">
                                    <a href="<?= base_url(); ?>public/front/images/site_img/kankotri/<?= $i; ?>.jpg" data-type="image" data-lightbox="image" class="hoverLink"></a>
                                    <img src="<?= base_url(); ?>public/front/images/site_img/kankotri/<?= $i; ?>.jpg" width="800" height="600" alt="">
                                    <div class="overlay">
                                        <div class="overlay-inner"><span class="glyphicon glyphicon-picture"></span></div>
                                    </div>
                                </div>
                                <h4 class="title">
                                    <a href="<?= base_url(); ?>anti-visiting-card/detail">
                                        <span class="name">Kankotri <?= $i; ?></span>
                                        <span class="name price"><i class="fa fa-inr"></i> <?= rand(10, 500); ?></span>
                                    </a>
                                </h4>
                                <span class="moduleDesc">Uniquely streamline future-proof resources before virtual experiences. Professionally re-engineer compelling leaders... </span>
                                <div class="btnreadmorearea"><a href="<?= base_url(); ?>anti-visiting-card/detail" class="read_more"><i class="fa fa-plus"></i></a></div>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <?php } ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
