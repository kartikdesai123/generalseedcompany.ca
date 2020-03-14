<div class="portlet box green">
    <div class="portlet-title">
        <div class="caption">
            <i class="fa fa-user"></i>Edit Venue </div>
    </div>
    <div class="portlet-body form">
        <form role="form" method="post" id="editContactFrm" enctype="multipart/form-data" action="<?php echo admin_url('contact/edit_venue'); ?>" class="form-horizontal">
            <div class="form-body">
                <div class="form-group">
                    <label class="col-md-2 control-label">Venue Name :</label>
                    <div class="col-md-10">
                        <div class="input-icon right">
                            <input type="text" name="venue_name" placeholder="Enter Venue Name" class="form-control" value="<?= $contact[0]['var_venue'] ?>"> 
                            <input type="hidden" name="contact_id"  value="<?= $contact[0]['int_glcode'] ?>"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Venue Type :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <select name="venue_type"  class="form-control">
                                <option <?php if($contact[0]['type'] == 'retail'){ echo "selected='selected'"; } ?> value="retail">Retail Inquiries</option>
                                <option <?php if($contact[0]['type'] == 'wholsale'){ echo "selected='selected'"; } ?> value="wholsale">Wholsale Inquiries</option>
                            </select> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-2 control-label">Is Active ? :</label>
                    <div class="col-md-10">
                        <div class="input-group md-checkbox-list">

                            <div class="md-checkbox">
                                <input type="checkbox" <?= ($contact[0]['var_venue']) ? 'checked' : '' ?> checked value="A" class="md-check" id="is_active" name="is_active">
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
