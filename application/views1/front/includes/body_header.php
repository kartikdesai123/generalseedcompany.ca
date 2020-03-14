<?php
$products = $this->db->get('gs_product')->result_array();
?>
<div class="cus-page-header">
    <div class="page-toggle-bar">
        <i class="fa fa-bars"></i>
    </div>
    <div class="responsive-logo">
        <a href="<?= base_url(); ?>" class="footer-logo">
            <img src="<?= base_url(); ?>public/front/images/generalseed/footer-logo-old.png">
        </a>
    </div>
    <div class="product-title pagemaintitle">
        <h3>
            <?php
            $title = explode(' ', $page_title);
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
</div>
<div class="bodyheader">
    <div class="cus-menubar">

        <ul>
            <li class="<?= ($active == 'home') ? 'active' : ''; ?>"><a href="<?= base_url(); ?>">Home</a></li>
            <li class="<?= ($active == 'product') ? 'active' : ''; ?>">
                <a href="javascript:;">Products</a>
                <ul class="sub-menu">
                    <li class="submenuadjust"></li>
                    <li><a href="<?php echo base_url() . 'products/silage-corn'; ?>">Silage Corn</a></li>
                    <li><a href="<?php echo base_url() . 'products/forage-seed'; ?>">Forage Seed</a></li>
                    <li><a href="<?php echo base_url() . 'products/turf-seed'; ?>">Turf Seed</a></li>
                    <li><a href="<?php echo base_url() . 'products/cover-crop'; ?>">Cover Crops</a></li>
                    <?php foreach ($products as $row) { ?>
                        <li class="<?= ($subactive == $row['var_product_name']) ? 'active' : ''; ?>"><a href="<?php echo base_url() . 'products/' . $row['var_product_url']; ?>"><?= $row['var_product_name']; ?></a></li>
                    <?php } ?>
                </ul>
            </li>
            <?php
            $products = $this->db->get('gs_product')->result_array();
            $articleMenu = $this->Common_model->getArticlePageMenus();
            ?>
            <li class="<?= ($active == 'article') ? 'active' : ''; ?>">
                <a href="javascript:;">Article</a>
                <ul class="sub-menu">
                    <li class="submenuadjust"></li>
                    <?php
                    for ($i = 0; $i < count($articleMenu); $i++) {
                        ?>
                        <li class="has-submenu">
                            <a href="javascript:;"><?php echo $articleMenu[$i]['var_title'] ?></a>
                            <?php
                            if (!empty($articleMenu[$i]['pages'])) {
                                $subPages = $articleMenu[$i]['pages'];
                                ?>
                                <ul class="submenu-sub">
                                    <?php
                                    for ($j = 0; $j < count($subPages); $j++) {
                                        ?>
                                        <li><a href="<?php echo base_url() . 'article/' . $subPages[$j]['page_id']; ?>"><?= $subPages[$j]['var_page_title'] ?></a></li>
                                        <?php
                                    }
                                    ?>
                                </ul>
                                <?php
                            }
                            ?>
                        </li>
                        <?php
                    }
                    ?>
                </ul>
            </li>
            <li class="<?= ($active == 'technical') ? 'active' : ''; ?>"><a href="javascript:;">Organic Information</a></li>
            <li class="<?= ($active == 'contact') ? 'active' : ''; ?>">
                <a href="<?= base_url() . 'contact'; ?>">Contact Us</a>
                <ul class="sub-menu">
                    <li class="submenuadjust"></li>
                    <li><a href="<?= base_url() . 'contact'; ?>">General Inquiries</a></li>
                    <li><a href="<?php echo base_url() . 'contact/retail-inquiries'; ?>">Retail inquiries</a></li>
                    <li><a href="<?php echo base_url() . 'contact/wholse-inquiries'; ?>">Wholesale inquiries</a></li>
                    <li><a href="<?php echo base_url() . 'contact/wholeseller-orders'; ?>">Wholesale Orders</a></li>
                </ul>
            </li>
            <li class="<?= ($active == 'dealership') ? 'active' : ''; ?>"><a href="<?php echo base_url() . 'dealership'; ?>">Dealer Inquires</a></li>
        </ul>
    </div>
    <hr>
</div>

<style>
    .product-title.pagemaintitle h3:before{
        display: none;
    }
</style>
