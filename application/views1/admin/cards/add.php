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
            <i class="fa fa-user"></i>Add Card </div>
    </div>
    <div class="portlet-body form">
        <form role="form" method="post" enctype="multipart/form-data" id="addCardsFrm" action="<?php echo admin_url() . 'cards/add'; ?>" class="form-horizontal">
            <div class="form-body">
                <div class="form-group">
                    <label class="col-md-3 control-label">Select Card Category :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <select class="form-control select2me card_category" name="card_category" data-placeholder="Select card category">
                                <option value=""></option>
                                <?php foreach ($caregorydata as $row) { ?>
                                    <option value="<?= $row['int_glcode']; ?>"><?= $row['var_name']; ?></option>
                                <?php } ?>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Title :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text" name="cardtitle" placeholder="Enter Card Title" class="form-control"> 
                        </div>
                    </div>
                </div>
                
<!--                <div class="form-group">
                    <label class="col-md-3 control-label">Media  : </label>
                    <div class="col-md-4 md-radio-inline">
                        <div class="md-radio">
                            <input type="radio" id="radio53" class="form-control md-radiobtn selectmedia" name="media" value="I" checked>
                            <label for="radio53">
                                <span></span>
                                <span class="check"></span>
                                <span class="box"></span> Image 
                            </label>
                        </div>
                        <div class="md-radio">
                            <input type="radio" id="radio54" class="form-control md-radiobtn selectmedia" name="media" value="V" >
                            <label for="radio54">
                                <span></span>
                                <span class="check"></span>
                                <span class="box"></span> Video 
                            </label>
                        </div>
                    </div>
                </div>-->

                <div class="isimage_container">
                    <div class="form-group">
                        <label class="col-md-3 control-label">Main Image :</label>
                        <div class="col-md-6">
                            <div class="fileinput fileinput-new" data-provides="fileinput">
                                <div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">
                                    <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="" width="100%" height="100%" />
                                </div>
                                <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 200px; max-height: 150px;"> </div>
                                <div>
                                    <span class="btn default btn-file">
                                        <span class="fileinput-new"> Select image </span>
                                        <span class="fileinput-exists"> Change </span>
                                        <input type="file" name="card_main_img"> </span>
                                    <a href="javascript:;" class="btn default fileinput-exists" data-dismiss="fileinput"> Remove </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-md-3 control-label">Other Images :</label>
                        <div class="col-md-9">
                            <div class="append_div">
                                <div class="fileinput fileinput-new" data-provides="fileinput">
                                    <div class="fileinput-new thumbnail" style="width: 150px; height: 100px;">
                                        <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="" width="100%" height="100%" />
                                    </div>
                                    <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 150px; max-height: 100px;"> </div>
                                    <div>
                                        <span class="btn default btn-file">
                                            <span class="fileinput-new"> Select image </span>
                                            <span class="fileinput-exists"> Change </span>
                                            <input type="file" name="card_other_img[]"> </span>
                                        <a href="javascript:;" class="btn default fileinput-exists" data-dismiss="fileinput"> Remove </a>
                                    </div>
                                </div>
                            </div>
                            <!-- Add Images OR Remove Images -->
                            <a href="javascript:;"class="btn green append_btns addimg"><i class="fa fa-plus"></i></a>
                            <!-- Add Images OR Remove Images -->
                        </div>
                    </div>
                </div>
                <div class="isvideo_container" style="display:none;">
                    <div class="form-group">
                        <label class="col-md-3 control-label">Video Thumbnail :</label>
                        <div class="col-md-6">
                            <div class="fileinput fileinput-new" data-provides="fileinput">
                                <div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">
                                    <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="" width="100%" height="100%" />
                                </div>
                                <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 200px; max-height: 150px;"> </div>
                                <div>
                                    <span class="btn default btn-file">
                                        <span class="fileinput-new"> Select image </span>
                                        <span class="fileinput-exists"> Change </span>
                                        <input type="file" name="card_videothumb"> </span>
                                    <a href="javascript:;" class="btn default fileinput-exists" data-dismiss="fileinput"> Remove </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">Video  : </label>
                        <div class="col-md-4 md-radio-inline">
                            <div class="md-radio">
                                <input type="radio" id="radio55" class="form-control md-radiobtn selectvideoType" name="video_flag" checked value="M">
                                <label for="radio55">
                                    <span></span>
                                    <span class="check"></span>
                                    <span class="box"></span> Manual Upload 
                                </label>
                            </div>
                            <div class="md-radio">
                                <input type="radio" id="radio56" class="form-control md-radiobtn selectvideoType" name="video_flag" value="Y">
                                <label for="radio56">
                                    <span></span>
                                    <span class="check"></span>
                                    <span class="box"></span> Youtube Link 
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group upload_video">
                        <label class="control-label col-md-3">Upload Video</label>
                        <div class="col-md-6">
                            <div class="fileinput fileinput-new" data-provides="fileinput" style="width: 100%;">
                                <div class="input-group">
                                    <div class="form-control uneditable-input input-fixed" data-trigger="fileinput">
                                        <i class="fa fa-file fileinput-exists"></i>&nbsp;
                                        <span class="fileinput-filename"> </span>
                                    </div>
                                    <span class="input-group-addon btn default btn-file">
                                        <span class="fileinput-new"> Select file </span>
                                        <span class="fileinput-exists"> Change </span>
                                        <input type="file" name="upload_video"> </span>
                                    <a href="javascript:;" class="input-group-addon btn red fileinput-exists" data-dismiss="fileinput"> Remove </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group yutubelink" style="display:none;">
                        <label class="control-label col-md-3">Youtube Video Link</label>
                        <div class="col-md-6">
                            <div class="input-icon right">
                                <input type="text" name="youtube_link" placeholder="Enter Youtube Link" class="form-control"> 
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-3 control-label">Description :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <textarea class="form-control" rows="5" id="card_desc" name="card_desc" placeholder="Enter Card Description"></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Price :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text" name="cardprice" placeholder="Enter Card Price" class="form-control"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Card Height in CM :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text" name="cardheight" placeholder="Enter Card Height" class="form-control"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Card Width in CM :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text" name="cardwidth" placeholder="Enter Card Width" class="form-control"> 
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
    <div class="fileinput fileinput-new" data-provides="fileinput">
        <div class="fileinput-new thumbnail" style="width: 150px; height: 100px;">
            <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="" width="100%" height="100%" />
        </div>
        <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 150px; max-height: 100px;"> </div>
        <div>
            <span class="btn default btn-file">
                <span class="fileinput-new"> Select image </span>
                <span class="fileinput-exists"> Change </span>
                <input type="file" name="card_other_img[]"> </span>
            <a href="javascript:;" class="btn default fileinput-exists" data-dismiss="fileinput"> Remove </a>
            <a href="javascript:;"class="btn red append_btns removeimg"><i class="fa fa-times"></i></a>
        </div>
    </div>
</div>