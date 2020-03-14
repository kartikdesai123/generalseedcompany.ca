<div id="page_header" class="page-subheader site-subheader-cst maskcontainer--mask3 min-300">
    <div class="bgback"></div>
    <div class="kl-bg-source">
        <!--<div class="kl-bg-source__overlay" style="background:rgba(186,3,3,1); background: -moz-linear-gradient(left, rgba(186,3,3,1) 0%, rgba(53,53,53,0.85) 100%); background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(186,3,3,1)), color-stop(100%,rgba(53,53,53,0.85))); background: -webkit-linear-gradient(left, rgba(186,3,3,1) 0%,rgba(53,53,53,0.85) 100%); background: -o-linear-gradient(left, rgba(186,3,3,1) 0%,rgba(53,53,53,0.85) 100%); background: -ms-linear-gradient(left, rgba(186,3,3,1) 0%,rgba(53,53,53,0.85) 100%); background: linear-gradient(to right, rgba(186,3,3,1) 0%,rgba(53,53,53,0.85) 100%); "></div>-->
    </div>
    <div class="th-sparkles"></div>
    <div class="ph-content-wrap ptop-170">
        <div class="ph-content-v-center">
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <ul class="breadcrumbs fixclear">
                                <li><a href="<?= base_url(); ?>">Home</a></li>
                                <?php
                                if (!empty($breadcrumb_list)) {
                                    $i = 0;
                                    foreach ($breadcrumb_list as $value) {
                                        if ($i + 1 != count($breadcrumb_list)) {
                                            ?>
                                            <li><a href="<?= (!empty($value[1])) ? base_url() .   $value[1] : 'javascript:;'; ?>"><?= $value[0]; ?></a></li>
                                        <?php } else { ?>
                                            <li><?= $value[0]; ?></li>
                                            <?php
                                        } $i++;
                                    }
                                }
                                ?>

                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        <div class="col-sm-6">
                            <div class="subheader-titles">
                                <?php if ($pagetitle != '') { ?>
                                    <h2 class="subheader-maintitle"><?= $pagetitle ?></h2>
                                <?php } if ($pagesubtitle != '') { ?>
                                    <h4 class="subheader-subtitle"><?= $pagesubtitle ?></h4>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>