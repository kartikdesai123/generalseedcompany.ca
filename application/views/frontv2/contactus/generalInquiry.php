<section class="content-category">
    <div class="container">
        <div class="row">
            <aside class="col-sm-3">
                <div class="sidebar">
                    <h2 class="active-page">CONTACT US</h2>
                    <?php $this->load->view('frontv2/contactus/leftsidebar'); ?>
                </div>
            </aside>
            <div class="col-sm-9">
                <div class="content-main">
                    <img src="<?= base_url(); ?>public/frontv2/images/contact_us/8ContactUs_GeneralInquires.jpg" alt="Category images" class="img-responsive">

                    <div class="content-intro">
                        <h2>GENERAL SEED COMPANY</h2>
                        <div class="row">
                            <div class="col-sm-6 col-xs-12 mb-30-xs">
                                <span>
                                    Office Hours: 8:30am - 4:30pm Monday - Friday <br/>
                                    648 Alberton Road South <br/>
                                    Alberton, ON L0R 1A0 
                                </span>
                            </div>
                            <div class="col-sm-6 col-xs-12">
                                <span>
                                    Office: (905)-648-2101 <br/>
                                    Fax: (905)-648-6429 <br/>
                                    Email: generalseedcompany@gmail.com
                                </span>
                            </div>
                        </div>
                        <br/>
                        <div id="ma1p"><div class="col-6 bdr-left height590">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.2186459482955!2d-80.07196858511233!3d43.18392289066744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c88459bf8aa5d%3A0x12b65d2c06124845!2s648+Alberton+Rd%2C+Alberton%2C+ON+L0R+1A0%2C+Canada!5e0!3m2!1sen!2sin!4v1485004239982" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div></div>
                        <br>
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
                        <form class="form-horizontal" method="post" id="generalInquiry">
                            <div class="form-group">
                                <div class="col-sm-6 col-xs-12 mb-30-xs">
                                    <input type="text" name="fname" class="form-control" placeholder="First Name" required="required" data-error="Please, leave us a first name."/>
                                </div>
                                <div class="col-sm-6 col-xs-12 mb-30-xs">
                                    <input type="text" name="lname" class="form-control" placeholder="Last Name" required="required" data-error="Please, leave us a last name."/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12 col-xs-12 mb-30-xs">
                                    <input type="text" name="email" class="form-control" placeholder="Email"  required="required" data-error="Please, leave us a email address."/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12 col-xs-12 mb-30-xs">
                                    <input type="text" name="phone" class="form-control" placeholder="Phone" required="required" data-error="Please, leave us a phone detail."/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12 col-xs-12 mb-30-xs">
                                    <input type="text" name="town" class="form-control" placeholder="Town"  required="required" data-error="Please, leave us a town name."/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12 col-xs-12 mb-30-xs">
                                    <input type="text" name="subject" class="form-control" placeholder="Subject" required="required" data-error="Please, leave us a subject name."/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12 col-xs-12 mb-30-xs">
                                    <textarea name="message" class="form-control" placeholder="Message" rows="5" required="required" data-error="Please, leave us a message."></textarea>
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
                                    <input type="submit" class="btn btn-success" id="submitBtn" value="SEND MAIL" disabled="disabled"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    <!--<meta name="viewport" content="initial-scale=1.0">-->
    <!--<meta charset="utf-8">-->
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 60%;
        margin: 0;
        padding: 0;
      }
    </style>
    
    <script>
        function verifyRecaptchaCallback() {
            $('#submitBtn').removeAttr('disabled');
        };

        var map;
        function initMap() {
          map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
          });
        }
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=6Le--FwUAAAAAMlf0dx0RjOKe0dpd2vsMRmcC6tg" async defer></script>
    
    
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src='https://www.google.com/recaptcha/api.js'></script>
    
</section>