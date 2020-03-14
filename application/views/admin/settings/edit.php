<div class="portlet box green">
    <div class="portlet-title">
        <div class="caption">
            <i class="fa fa-user"></i>Update Settings </div>
    </div>
    <div class="portlet-body form">
        <form role="form" method="post" enctype="multipart/form-data" id="editSettingsFrm" action="<?php echo admin_url() . 'settings'; ?>" class="form-horizontal">
            <div class="form-body">
                <div class="form-group">
                    <label class="col-md-3 control-label">Logo :</label>
                    <div class="col-md-6">
                        <div class="fileinput fileinput-new" data-provides="fileinput">
                            <div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">
                                <?php if (!empty($settingdata['var_logo'])) { ?>
                                    <img src = "<?= base_url() . SETTINGS_IMG_PATH . $settingdata['var_logo']; ?>" width="100%" height="100%" alt = "" />
                                <?php } else { ?>
                                    <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="" width="100%" height="100%" />
                                <?php } ?>
                            </div>
                            <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 200px; max-height: 150px;"> </div>
                            <div>
                                <span class="btn default btn-file">
                                    <span class="fileinput-new"> Select image </span>
                                    <span class="fileinput-exists"> Change </span>
                                    <input type="file" name="setting_logo"> </span>
                                    <input type="hidden" name="old_logo" value="<?= $settingdata['var_logo']; ?>">
                                    <input type="hidden" name="int_glcode" value="<?= $settingdata['int_glcode']; ?>">
                                <a href="javascript:;" class="btn default fileinput-exists" data-dismiss="fileinput"> Remove </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Facebook Link :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text" name="fblink" placeholder="Enter Facebook Link" class="form-control" value="<?= $settingdata['var_fb_link']; ?>"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Twitter Link :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text" name="twlink" placeholder="Enter Twitter Link" class="form-control" value="<?= $settingdata['var_tw_link']; ?>"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Pintrest Link :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text" name="ptlink" placeholder="Enter Pintrest Link" class="form-control" value="<?= $settingdata['var_pt_link']; ?>"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Google+ Link :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text" name="gplink" placeholder="Enter Google+ Link" class="form-control" value="<?= $settingdata['var_gp_link']; ?>"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Help Center Phone No :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text" name="help_phoneno" placeholder="Enter Help Center Phone No" class="form-control" value="<?= $settingdata['var_helpcenter_no']; ?>"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Company Email Address :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text"  name="cmp_email" placeholder="Enter Company Email Address" class="form-control" value="<?= $settingdata['var_cmp_email']; ?>"> 
                            <span class='info-text' style="font-size: 13px;">Comma Separate Email (Multiple Numbers)</span>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Company Contact No :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text"  name="cmp_contactno" placeholder="Enter Company Contact No" class="form-control" value="<?= $settingdata['var_contact_no']; ?>"> 
                            <span class='info-text' style="font-size: 13px;">Comma Separate Numbers (Multiple Numbers)</span>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Office Address :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <textarea class="form-control" rows="3" id="office_address" name="office_address" placeholder="Enter Office Address"><?= $settingdata['txt_address']; ?></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Google Map Link :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text" name="google_maplink" placeholder="Enter Google Map Link" class="form-control" value="<?= $settingdata['txt_google_map_link']; ?>"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Copyright text :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="text"  name="copyrighttxt" placeholder="Enter Copyright text" class="form-control" value="<?= $settingdata['var_copyright_text']; ?>"> 
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