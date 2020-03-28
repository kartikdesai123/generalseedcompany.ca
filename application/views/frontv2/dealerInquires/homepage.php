<section class="content-category">
    <div class="container">
        <div class="row">
            <aside class="col-sm-3">
                <div class="sidebar">
                    <h2 class="active-page">DEALER  INQUIRES</h2>
                </div>
            </aside>
            <div class="col-sm-9">
                <div class="content-main">
                    <div class="content-intro">
                        <h1>DEALERSHIP INQUIRES ARE WELCOME </h1>
                        <p>Are you interested in becoming a General Seed Farm Dealer or a General Seed wholesale customer (have a retail business)? </p>
                    </div>
                    <div class="available-list-category">
                        <?php if(($this->session->flashdata('success'))){ ?>
                        <div class="alert alert-success">
                            <strong>Success!</strong> <?php echo $this->session->flashdata('success'); ?>.
                         </div>
                        <?php } ?>
                        <?php if(($this->session->flashdata('error'))){ ?>
                        <div class="alert alert-danger">
                            <strong>Error!</strong> <?php echo $this->session->flashdata('error'); ?>.
                         </div>
                        <?php } ?>
                        <h3 class="title-with-border">Please fill out the form below and we will get back to you.</h3>
                        <br/>
                        <div class="">
                            <form class="form-horizontal" method="post" action="">
                                <div class="form-group">
                                    <div class="col-sm-12 col-xs-12 mb-30-xs">
                                        <input type="text" name="bname" class="form-control" placeholder="Farm/Business Name" required="required" data-error="Please, leave us a first name."/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-12 col-xs-12 mb-30-xs">
                                        <input type="text" name="fname" class="form-control" placeholder="First Name" required="required" data-error="Please, leave us a first name."/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-12 col-xs-12 mb-30-xs">
                                        <input type="text" name="lname" class="form-control" placeholder="Last Name" required="required" data-error="Please, leave us a last name."/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-12 col-xs-12 mb-30-xs">
                                        <input type="text" name="phone" class="form-control" placeholder="Phone Number" required="required" data-error="Please, leave us a phone detail."/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-12 col-xs-12 mb-30-xs">
                                        <input type="text" name="town" class="form-control" placeholder="Town"  required="required" data-error="Please, leave us a town name."/>
                                    </div>
                                </div>
                                <div class="test" style="padding: 0px 15px;">
                                    
                                    <div class="form-group" style="border-color:#dcdcdc; border-width: thin; border-style: solid; border-radius: 5px; padding: 10px;">
                                        <label class="col-sm-12 col-xs-12 mb-30-xs" >Check products of interest</label>
                                        <div class="col-sm-12 col-xs-12 mb-30-xs">
                                            <div class="col-sm-12">
                                                <input type="checkbox" name="ckbox[]" value="Forage Seed" class=""/> Forage Seed <br/>
                                                <input type="checkbox" name="ckbox[]" value="GSL Silage Corn" class=""/> GSL Silage Corn <br/>
                                                <input type="checkbox" name="ckbox[]" value="Cover Crop" class=""/> Cover Crop <br/>
                                                <input type="checkbox" name="ckbox[]" value="Turf Seed" class=""/> Turf Seed
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-12 col-xs-12 mb-30-xs">
                                        <input type="text" name="email" class="form-control" placeholder="Email"  required="required" data-error="Please, leave us a email address."/>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <div class="col-sm-12 col-xs-12 mb-30-xs">
                                        <input type="text" name="province" class="form-control" placeholder="Province"  required="required" data-error="Please, leave us a province name."/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-12 col-xs-12 mb-30-xs">
                                        <textarea name="message" class="form-control" placeholder="Optional Message" rows="5" required="required" data-error="Please, leave us a message."></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-12 col-xs-12 mb-30-xs">
                                        <div class="g-recaptcha" data-sitekey="6Le--FwUAAAAAMlf0dx0RjOKe0dpd2vsMRmcC6tg" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                        <!--<input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha">-->
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-12 col-xs-12 mb-30-xs">
                                        <input id="submitBtn" type="submit" class="btn btn-success" value="SUBMIT" disabled="disabled" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<script>
     function verifyRecaptchaCallback() {
         
            $('#submitBtn').removeAttr('disabled');
        }
       </script>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src='https://www.google.com/recaptcha/api.js'></script>
</section>