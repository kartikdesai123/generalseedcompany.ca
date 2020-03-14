<div class="portlet box green">
    <div class="portlet-title">
        <div class="caption">
            <i class="fa fa-user"></i>Add Product </div>
    </div>
    <div class="portlet-body form">
        <form role="form" method="post" id="addProductFrm" enctype="multipart/form-data" action="<?php echo admin_url() . 'productpage/add'; ?>" class="form-horizontal">
            <div class="form-body">
                <div class="form-group">
                    <label class="col-md-2 control-label">Prodcut Name :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">
                            <input type="text" name="product_name" placeholder="Enter Prodcut Name" class="form-control"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Prodcut URL :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">
                            <input type="text" name="product_url" placeholder="Enter Prodcut URL" class="form-control"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Prodcut Description :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">
                             <textarea name="page_description" name="editor1" id="editor1" rows="10" cols="80">
                                This is my textarea to be replaced with CKEditor.
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-actions">
                <div class="row">
                    <div class="col-md-offset-3 col-md-6">
                        <button type="submit" onClick="CKupdate();" class="btn green btn-circle">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
