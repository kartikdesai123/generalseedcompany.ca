<style>
    .removeimg {
        font-size: 12px;
        height: 20px;
        line-height: 30px;
        padding: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 20px;
    }
    .fileinput {
        position: relative;
    }
</style>
<div class="portlet box green">
    <div class="portlet-title">
        <div class="caption">
            <i class="fa fa-user"></i>Add Product Images </div>
    </div>
    <div class="portlet-body form">
        <form role="form" method="post" enctype="multipart/form-data" id="addproductdetail" action="<?php echo admin_url() . 'product/detail_add'; ?>" class="form-horizontal">
            <div class="form-body">
                <div class="form-group">
                    <label class="col-md-3 control-label">Prodcut Name :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="hidden" name="product_id" value="<?php echo $product_id;?>" class="form-control"> 
                            <input type="text" name="product_name" placeholder="Enter Prodcut Name" value="<?php echo $produt_detail[0]['var_product_name'];?>" class="form-control" readonly> 
                        </div>
                    </div>
                </div>
                
                <div class="isimage_container">
                    
                    <div class="form-group">
                        <label class="col-md-3 control-label">Other Images :</label>
                        <div class="col-md-9">
                            
                            <div class="append_div">
                                <?php
                                if(empty($produt_detail)){ ?>
                                    <input type="hidden" class="form-control" name="pic_description[]" value="1" />
                                    <div class="fileinput fileinput-new" data-provides="fileinput">
                                    <div class="fileinput-new thumbnail" style="width: 150px; height: 100px;">
                                        <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="" width="100%" height="100%" />
                                    </div>
                                    <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 150px; max-height: 100px;"> </div>
                                    <div>
                                        <span class="btn default btn-file">
                                            <span class="fileinput-new"> Select image </span>
                                            <span class="fileinput-exists"> Change </span>
                                            <input type="file" name="product_other_img_0"> </span>
                                        <a href="javascript:;" class="btn default fileinput-exists" data-dismiss="fileinput"> Remove </a>
                                    </div>
                                </div>
                                <?php }else{ 
                                
                                for($i=0; $i<count($produt_detail); $i++){ ?>
                                    <input type="hidden" class="form-control" name="pic_description[]" value="1" />
                                <input type="hidden" name="image_id[<?php echo $i?>]" value="<?php echo $produt_detail[$i]['int_glcode'];?>">
                                <input type="hidden" name="old_image[<?php echo $i?>]" value="<?php echo $produt_detail[$i]['var_image'];?>">
                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                    <div class="fileinput-new thumbnail" style="width: 150px; height: 100px;">
                                        <?php if($produt_detail[$i]['var_image'] ==''){ ?>
                                        <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="" width="100%" height="100%" />
                                        <?php } else { ?>
                                        <img src="<?php echo base_url().PRODUCT_IMAGE.'/'.$produt_detail[$i]['var_image']?>" alt="" width="100%" height="100%" />
                                        <?php } ?>
                                    </div>
                                    <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 150px; max-height: 100px;"> </div>
                                    <div>
                                        <span class="btn default btn-file">
                                            <span class="fileinput-new"> Select image </span>
                                            <span class="fileinput-exists"> Change </span>
                                            <input type="file" name="product_other_img_<?php echo $i?>"> </span>
                                        <a href="javascript:;" class="btn default fileinput-exists" data-dismiss="fileinput"> Remove </a>
                                    </div>
                                </div>
                                <?php } }?>
                            </div>
                            <!-- Add Images OR Remove Images -->
                            <a href="javascript:;"class="btn green append_btns addimg"><i class="fa fa-plus"></i></a>
                            <!-- Add Images OR Remove Images -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-actions">
                <div class="row">
                    <div class="col-md-offset-3 col-md-6">
                        <button type="submit" class="btn green btn-circle">Update</button>
                        <a class="btn default btn-circle" href="<?php echo admin_url() . 'settings'; ?>">Cancel</a>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

<div class="append_html" style="display: none;">
    <input type="hidden" class="form-control" name="pic_description[]" value="1" />
    <div class="fileinput fileinput-new" data-provides="fileinput">
        <div class="fileinput-new thumbnail" style="width: 150px; height: 100px;">
            <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="" width="100%" height="100%" />
        </div>
        <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 150px; max-height: 100px;"> </div>
        <div>
            <span class="btn default btn-file">
                <span class="fileinput-new"> Select image </span>
                <span class="fileinput-exists"> Change </span>
                <input type="file" name="product_other_img_@"> </span>
            <a href="javascript:;" class="btn default fileinput-exists" data-dismiss="fileinput"> Remove </a>
            <a href="javascript:;"class="btn red append_btns removeimg"><i class="fa fa-times"></i></a>
        </div>
    </div>
</div>
<?php if(!empty($produt_detail)){
    $count = count($produt_detail);
}else{
    $count = 0;
}?>
<script type="text/javascript">
    var pic_count = <?php echo $count?>;
</script>