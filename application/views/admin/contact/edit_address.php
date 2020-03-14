<div class="portlet box green">
    <div class="portlet-title">
        <div class="caption">
            <i class="fa fa-user"></i>Edit Address </div>
    </div>
    <div class="portlet-body form">
        <form role="form" method="post" id="editContactAddress" enctype="multipart/form-data" action="<?php echo admin_url('contact/edit_address'); ?>" class="form-horizontal">
            <div class="form-body">
                <input type="hidden" name="address_id" value="<?= $contact_address[0]['int_glcode'] ?>"/>
                <div class="form-group">
                    <label class="col-md-2 control-label">Select Venue :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">

                            <select name="select_contact" class="form-control select2me" data-placeholder="Select Contact Name">
                                <?php
                                for ($i = 0; $i < count($contact); $i++) {
                                    $selected = "";
                                    if ($contact[$i]['int_glcode'] == $contact_address[0]['fk_contact_venue']) {
                                        $selected = "selected='selected'";
                                    }
                                    ?>
                                    <option value="<?= $contact[$i]['int_glcode'] ?>" <?= $selected ?> ><?= $contact[$i]['var_venue'] ?></option>
                                    <?php
                                }
                                ?>
                            </select> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Venue Content :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">
                            <textarea name="venue_content" name="venue_content" id="venue_content" rows="10" cols="80"><?php echo $contact_address[0]['txt_venue']; ?></textarea>
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
