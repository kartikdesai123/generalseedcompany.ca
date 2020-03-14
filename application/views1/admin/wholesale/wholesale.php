<div class="portlet box green">
    <div class="portlet-title">
        <div class="caption">
            <i class="fa fa-user"></i>Wholesale Password </div>
    </div>
    <div class="portlet-body form">
        <form role="form" method="post" id="setPassword" action="<?php echo admin_url() . 'wholesale_password/setpassword'; ?>" class="form-horizontal">
            <div class="form-body">
                <div class="form-group">
                    <label class="col-md-3 control-label">Old Password :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="password" name="old_password" placeholder="Enter Old Password" class="form-control"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">New Password :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="password" id="password" name="new_password" placeholder="Enter New Password" class="form-control"> 
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-md-3 control-label">Confirm Password :</label>
                    <div class="col-md-6">
                        <div class="input-icon right">
                            <input type="password" name="confirm_password" placeholder="Confirm Password" class="form-control"> 
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
