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
                                    <a href="<?= base_url(); ?>wedding-website/detail">
                                        <span class="name">Kankotri <?= $i; ?></span>
                                        <span class="name price"><i class="fa fa-inr"></i> <?= rand(10, 500); ?></span>
                                    </a>
                                </h4>
                                <span class="moduleDesc">Uniquely streamline future-proof resources before virtual experiences. Professionally re-engineer compelling leaders... </span>
                                <div class="btnreadmorearea"><a href="<?= base_url(); ?>wedding-website/detail" class="read_more"><i class="fa fa-plus"></i></a></div>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <?php } ?>
<!--                        <li class="item kl-has-overlay apps_sort ecommerce_sort web_sort even" data-date="09122016">
                            <div class="inner-item">
                                <div class="img-intro">
                                    <a href="<?= base_url(); ?>public/front/images/ptf1.png" data-type="image" data-lightbox="image" class="hoverLink"></a><img src="<?= base_url(); ?>public/front/images/ptf1-800x600.png" width="800" height="600" alt="">
                                    <div class="overlay">
                                        <div class="overlay-inner"><span class="glyphicon glyphicon-picture"></span></div>
                                    </div>
                                </div>
                                <h4 class="title"><a href="portfolio-item.html"><span class="name">Progressively harness</span></a></h4>
                                <span class="moduleDesc">Conveniently maximize ethical portals with strategic applications. Distinctively generate interactive web. Appropria... </span>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li class="item kl-has-overlay branding_sort ecommerce_sort illustration_sort even" data-date="10122016">
                            <div class="inner-item">
                                <div class="img-intro">
                                    <a href="<?= base_url(); ?>public/front/images/moon.jpg" data-type="image" data-lightbox="image" class="hoverLink"></a><img src="<?= base_url(); ?>public/front/images/moon-800x600.jpg" width="800" height="600" alt="">
                                    <div class="overlay">
                                        <div class="overlay-inner"><span class="glyphicon glyphicon-picture"></span></div>
                                    </div>
                                </div>
                                <h4 class="title"><a href="portfolio-item.html"><span class="name">Authoritatively benchmark virtual</span></a></h4>
                                <span class="moduleDesc">Rapidiously incentivize backward-compatible methods of empowerment via granular web services. Assertively monetize s... </span>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li class="item kl-has-overlay ecommerce_sort illustration_sort even" data-date="15122016">
                            <div class="inner-item">
                                <div class="img-intro">
                                    <a href="<?= base_url(); ?>public/front/images/image.jpg" data-type="image" data-lightbox="image" class="hoverLink"></a><img src="<?= base_url(); ?>public/front/images/image-800x600.jpg" width="800" height="600" alt="">
                                    <div class="overlay">
                                        <div class="overlay-inner"><span class="glyphicon glyphicon-picture"></span></div>
                                    </div>
                                </div>
                                <h4 class="title"><a href="portfolio-item.html"><span class="name">Continually unleash scalable</span></a></h4>
                                <span class="moduleDesc">Authoritatively revolutionize maintainable convergence whereas B2B growth strategies. Phosfluorescently recaptiualiz... </span>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li class="item kl-has-overlay apps_sort branding_sort web_sort even" data-date="20122016">
                            <div class="inner-item">
                                <div class="img-intro">
                                    <a href="https://vimeo.com/23237102" data-mfp="iframe" data-lightbox="iframe" class="hoverLink"></a><img src="<?= base_url(); ?>public/front/images/graph3-800x600.png" width="800" height="600" alt="">
                                    <div class="overlay">
                                        <div class="overlay-inner"><span class="glyphicon glyphicon-play"></span></div>
                                    </div>
                                </div>
                                <h4 class="title"><a href="portfolio-item.html"><span class="name">Cross-unit meta-services</span></a></h4>
                                <span class="moduleDesc">Interactively transition covalent e-services with just in time channels. Distinctively strategize enterprise portals... </span>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li class="item kl-has-overlay apps_sort illustration_sort web_sort even" data-date="22122016">
                            <div class="inner-item">
                                <div class="img-intro">
                                    <a href="<?= base_url(); ?>public/front/images/untitled-1jhgggfd.png" data-type="image" data-lightbox="image" class="hoverLink"></a><img src="<?= base_url(); ?>public/front/images/untitled-1jhgggfd-800x600.png" width="800" height="600" alt="">
                                    <div class="overlay">
                                        <div class="overlay-inner"><span class="glyphicon glyphicon-picture"></span></div>
                                    </div>
                                </div>
                                <h4 class="title"><a href="portfolio-item.html"><span class="name">Efficiently incubate sticky vortals</span></a></h4>
                                <span class="moduleDesc">Internal or "organic" sources and maintainable meta-services. Uniquely maximize 24/365 collaboration and idea-sharin... </span>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li class="item kl-has-overlay branding_sort ecommerce_sort miscellaneous_sort web_sort even" data-date="25122016">
                            <div class="inner-item">
                                <div class="img-intro">
                                    <a href="<?= base_url(); ?>public/front/images/ptf9.png" data-type="image" data-lightbox="image" class="hoverLink"></a><img src="<?= base_url(); ?>public/front/images/ptf9.png" width="800" height="600" alt="">
                                    <div class="overlay">
                                        <div class="overlay-inner"><span class="glyphicon glyphicon-picture"></span></div>
                                    </div>
                                </div>
                                <h4 class="title"><a href="portfolio-item.html"><span class="name">Dramatically integrate parallel</span></a></h4>
                                <span class="moduleDesc">Whiteboard exceptional internal or "organic" sources and maintainable meta-services. Uniquely maximize 24/365 collab... </span>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li class="item kl-has-overlay illustration_sort miscellaneous_sort even" data-date="26122016">
                            <div class="inner-item">
                                <div class="img-intro">
                                    <a href="<?= base_url(); ?>public/front/images/triangle.jpg" data-type="image" data-lightbox="image" class="hoverLink"></a><img src="<?= base_url(); ?>public/front/images/triangle.jpg" width="800" height="600" alt="">
                                    <div class="overlay">
                                        <div class="overlay-inner"><span class="glyphicon glyphicon-picture"></span></div>
                                    </div>
                                </div>
                                <h4 class="title"><a href="portfolio-item.html"><span class="name">Engineer turnkey</span></a></h4>
                                <span class="moduleDesc">Enthusiastically promote impactful services with performance based synergy. Assertively promote sticky users before ... </span>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li class="item kl-has-overlay apps_sort miscellaneous_sort web_sort even" data-date="27122016">
                            <div class="inner-item">
                                <div class="img-intro">
                                    <a href="<?= base_url(); ?>public/front/images/ptf5.png" data-type="image" data-lightbox="image" class="hoverLink"></a><img src="<?= base_url(); ?>public/front/images/ptf5.png" width="800" height="600" alt="">
                                    <div class="overlay">
                                        <div class="overlay-inner"><span class="glyphicon glyphicon-picture"></span></div>
                                    </div>
                                </div>
                                <h4 class="title"><a href="portfolio-item.html"><span class="name">Dramatically extend world-class</span></a></h4>
                                <span class="moduleDesc">Enthusiastically promote impactful services with performance based synergy. Assertively promote sticky users before ... </span>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li class="item kl-has-overlay branding_sort ecommerce_sort even" data-date="28122016">
                            <div class="inner-item">
                                <div class="img-intro">
                                    <a href="<?= base_url(); ?>public/front/images/kkjj.png" data-type="image" data-lightbox="image" class="hoverLink"></a><img src="<?= base_url(); ?>public/front/images/kkjj.png" width="800" height="600" alt="">
                                    <div class="overlay">
                                        <div class="overlay-inner"><span class="glyphicon glyphicon-picture"></span></div>
                                    </div>
                                </div>
                                <h4 class="title"><a href="portfolio-item.html"><span class="name">Granular e-commerce</span></a></h4>
                                <span class="moduleDesc">Enthusiastically promote impactful services with performance based synergy. Assertively promote sticky users before ... </span>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li class="item kl-has-overlay apps_sort branding_sort ecommerce_sort web_sort even" data-date="29122016">
                            <div class="inner-item">
                                <div class="img-intro">
                                    <a href="<?= base_url(); ?>public/front/images/ptf4.png" data-type="image" data-lightbox="image" class="hoverLink"></a><img src="<?= base_url(); ?>public/front/images/ptf4.png" width="800" height="600" alt="">
                                    <div class="overlay">
                                        <div class="overlay-inner"><span class="glyphicon glyphicon-picture"></span></div>
                                    </div>
                                </div>
                                <h4 class="title"><a href="portfolio-item.html"><span class="name">Phosfluorescently matrix</span></a></h4>
                                <span class="moduleDesc">Appropriately visualize interactive partnerships and principle-centered initiatives. Dramatically reinvent plug-and-... </span>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li class="item kl-has-overlay illustration_sort miscellaneous_sort even" data-date="30122016">
                            <div class="inner-item">
                                <div class="img-intro">
                                    <a href="<?= base_url(); ?>public/front/images/untitled-12222.png" data-type="image" data-lightbox="image" class="hoverLink"></a><img src="<?= base_url(); ?>public/front/images/untitled-12222.png" width="800" height="600" alt="">
                                    <div class="overlay">
                                        <div class="overlay-inner"><span class="glyphicon glyphicon-picture"></span></div>
                                    </div>
                                </div>
                                <h4 class="title"><a href="portfolio-item.html"><span class="name">Competently synthesize</span></a></h4>
                                <span class="moduleDesc">Globally fashion enabled systems and 24/365 web services. Collaboratively impact bleeding-edge paradigms for bricks-... </span>
                                <div class="clear"></div>
                            </div>
                        </li>-->
                    </ul>
                </div>
                <div class="loadmore">
                    <a href="#"><i class="fa fa-refresh"></i> Load More</a>
                </div>
            </div>
        </div>
    </div>
</section>
