<div class="pagecontent">
    <div class="cus-row">
        <?php
        $image = FALSE;

        if (!empty($product_detail)) {
           echo $product_detail[0]['product_decription'];
            
            ?>
            <div class="clear"></div>
            <?php
           
        } else {
            ?>
            <h3 class="not_found">No images not found</h3>
<?php } ?>
    </div>
</div>