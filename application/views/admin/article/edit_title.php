<div class="portlet box green">
    <div class="portlet-title">
        <div class="caption">
            <i class="fa fa-user"></i>Edit Title </div>
    </div>
    <div class="portlet-body form">
        <form role="form" method="post" id="editArticleFrm" enctype="multipart/form-data" action="<?php echo admin_url() . 'article/edit_title'; ?>" class="form-horizontal">
            <div class="form-body">
                <div class="form-group">
                    <label class="col-md-2 control-label">Title Name :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">
                            <input type="hidden" name="article_id"  value="<?= $articles[0]['int_glcode'] ?>"> 
                            <input type="text" name="article_title" placeholder="Enter Title Name" class="form-control" value="<?= $articles[0]['var_title'] ?>"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Is Active ? :</label>
                    <div class="col-md-10">
                        <div class="input-group md-checkbox-list">

                            <div class="md-checkbox">
                                <input type="checkbox"  <?= ($articles[0]['enum_status'] == 'A') ? 'checked' : '' ?> class="md-check" id="is_active" name="is_active">
                                <label for="is_active">
                                    <span class="inc"></span>
                                    <span class="check"></span>
                                    <span class="box"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-actions">
                <div class="row">
                    <div class="col-md-offset-2 col-md-6">
                        <button type="submit" class="btn green btn-circle">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
