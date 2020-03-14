<div class="portlet box green">
    <div class="portlet-title">
        <div class="caption">
            <i class="fa fa-user"></i>Add Page </div>
    </div>
    <div class="portlet-body form">
        <form role="form" method="post" id="addarticlepage" enctype="multipart/form-data" action="<?php echo admin_url() . 'article/add_page'; ?>" class="form-horizontal">
            <div class="form-body">
                <div class="form-group">
                    <label class="col-md-2 control-label">Select Article :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">
                            <select name="select_article" id="select_article" class="form-control select2me" data-placeholder="Select Article Name">
                                <option value=""></option>
                                <?php
                                for ($i = 0; $i < count($articles); $i++) {
                                    ?>
                                    <option value="<?= $articles[$i]['int_glcode'] ?>"><?= $articles[$i]['var_title'] ?></option>
                                    <?php
                                }
                                ?>
                            </select> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Page Title :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">
                            <input type="text" name="page_title" id="page_title" placeholder="Enter Page Title" class="form-control"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Page URL :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">
                            <input type="text" name="page_url" id="page_url" placeholder="Enter Page URL Title" class="form-control"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Page Content :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">
                            <textarea  name="page_content" id="page_content" rows="10" cols="80"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-actions">
                <div class="row">
                    <div class="col-md-offset-2 col-md-6">
                        <button type="submit" onClick="CKupdate();" class="btn green btn-circle">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
