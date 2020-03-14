<div class="portlet box green">
    <div class="portlet-title">
        <div class="caption">
            <i class="fa fa-user"></i>Add Product </div>
    </div>
    <div class="portlet-body form">
        <form role="form" method="post" id="editProductFrm" enctype="multipart/form-data" action="<?php echo admin_url() . 'product/edit'; ?>" class="form-horizontal">
            <div class="form-body">
                <div class="form-group">
                    <label class="col-md-3 control-label">Prodcut Name :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="hidden" name="old_img" value="<?php echo $product[0]['var_homepage_image']; ?>">
                            <input type="hidden" name="product_id" value="<?php echo $product[0]['int_glcode'];?>" class="form-control"> 
                            <input type="text" name="product_name" placeholder="Enter Prodcut Name" value="<?php echo $product[0]['var_product_name'];?>" class="form-control"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Prodcut URL :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text" name="product_url" value="<?php echo $product[0]['var_product_url'];?>" placeholder="Enter Prodcut URL" class="form-control"> 
                        </div>
                    </div>
                </div>
               <div class="form-group">
                    <label class="col-md-3 control-label">Home Page Image :</label>
                    <div class="col-md-6">
                        <div class="fileinput fileinput-new" data-provides="fileinput">
                            <div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">
                                <?php if($product[0]['var_homepage_image'] == ''){ ?>
                                <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="" width="100%" height="100%" />
                                <?php } else { ?>
                                <img src="<?php echo base_url().PRODUCT_HOME_IMAGE.'/'.$product[0]['var_homepage_image'];?>" alt="" width="100%" height="100%" />
                                <?php } ?>
                            </div>
                            <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 200px; max-height: 150px;"> </div>
                            <div>
                                <span class="btn default btn-file">
                                    <span class="fileinput-new"> Select image </span>
                                    <span class="fileinput-exists"> Change </span>
                                    
                                    <input type="file" name="home_page_image"> </span>
                                <a href="javascript:;" class="btn default fileinput-exists" data-dismiss="fileinput"> Remove </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-actions">
                <div class="row">
                    <div class="col-md-offset-3 col-md-6">
                        <button type="submit" class="btn green btn-circle">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
