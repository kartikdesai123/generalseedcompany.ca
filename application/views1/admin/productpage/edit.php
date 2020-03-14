<div class="portlet box green">
    <div class="portlet-title">
        <div class="caption">
            <i class="fa fa-user"></i>Edit Product </div>
    </div>
    <div class="portlet-body form">
        <form role="form" method="post" id="editProductFrm" enctype="multipart/form-data" action="<?php echo admin_url() . 'productpage/edit'; ?>" class="form-horizontal">
            <div class="form-body">
                <div class="form-group">
                    <label class="col-md-2 control-label">Prodcut Name :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">
                            <input type="hidden" name="old_img" value="<?php echo $product[0]['var_homepage_image']; ?>">
                            <input type="hidden" name="product_id" value="<?php echo $product[0]['int_glcode'];?>" class="form-control"> 
                            <input type="text" name="product_name" placeholder="Enter Prodcut Name" value="<?php echo $product[0]['var_product_name'];?>" class="form-control"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Prodcut URL :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">
                            <input type="text" name="product_url" value="<?php echo $product[0]['var_product_url'];?>" placeholder="Enter Prodcut URL" class="form-control"> 
                        </div>
                    </div>
                </div>
               <div class="form-group">
                    <label class="col-md-2 control-label">Prodcut Description :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">
                             <textarea name="page_description" name="editor1" id="editor1" rows="10" cols="80">
                                <?php echo $product[0]['product_decription'];?>
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-actions">
                <div class="row">
                    <div class="col-md-offset-3 col-md-6">
                        <button onClick="CKupdate();" type="submit" class="btn green btn-circle">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
