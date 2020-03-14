<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<div class="pagecontent">
    <div class="cus-row minheight450">
        <div class="col-6 bdr-right height590">
            <div class="address-txt">
                <p><b>Office Hours :</b> 8:30am - 4:30pm Monday - Friday <br />
                648 Alberton Rd S.,<br />
                Alberton, ON L0R 1A0 <br />
                <br>
                <b>Office :</b> (905)-648-2101 <br />
                <b>Fax :</b> (905)-648-6429 <br />
                <b>Email :</b> generalseedcompany@gmail.com <br />
                </p>
<!--                <p>
                    Please enter your phone number in the comments field if you would prefer we phone you back.
                </p>-->
            </div>
            <form class="cus-frm" action="<?= base_url() . 'contact'; ?>" method="post" name="frmcontact" id="frmcontact">
                <div class="cus-frmgroup flt-left width49">
                    <input type="text" class="cus-frmcontrol " name="fname" placeholder="First Name" />
                </div>
                <div class="cus-frmgroup flt-right width49">
                    <input type="text" class="cus-frmcontrol " name="lname" placeholder="Last Name" />
                </div>
                <div class="clear"></div>
                <div class="cus-frmgroup">
                    <input type="text" class="cus-frmcontrol" name="email" placeholder="Email" />
                </div>
                <div class="cus-frmgroup">
                    <input type="text" class="cus-frmcontrol" name="phone" placeholder="Phone" />
                </div>
                <div class="cus-frmgroup">
                    <input type="text" class="cus-frmcontrol" name="town" placeholder="Town" />
                </div>
                <div class="cus-frmgroup">
                    <input type="text" class="cus-frmcontrol" name="subject" placeholder="Subject" />
                </div>
                <div class="cus-frmgroup">
                    <textarea class="cus-frmcontrol" style="height:110px;" name="txtmsg" placeholder="Message" name="message"></textarea>
                </div>
                <div class="cus-frmgroup">
                    <div class="g-recaptcha" data-sitekey="6LdQdBcUAAAAAKrKv6JyqjgxNP-Qn-Ru-wbo4hY1"></div>
                </div>
                <div class="cus-frmgroup">
                    <input type="submit" class="btnsubmit" value="Send mail" />
                </div>
            </form>
        </div>
        <div class="col-6 bdr-left height590">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.2186459482955!2d-80.07196858511233!3d43.18392289066744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c88459bf8aa5d%3A0x12b65d2c06124845!2s648+Alberton+Rd%2C+Alberton%2C+ON+L0R+1A0%2C+Canada!5e0!3m2!1sen!2sin!4v1485004239982" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <div class="clear"></div>
    </div>
</div>