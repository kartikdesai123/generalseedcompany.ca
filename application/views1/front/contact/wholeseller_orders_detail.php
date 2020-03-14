<div class="pagecontent">    
    <div class="cus-row">            
        <form class="cus-frm dealer-frm" action="#" method="post" name="wholesallerfrm" id="wholesallerfrm">            
            <div class="cus-frmgroup flt-left width49">                
                <input type="text" class="cus-frmcontrol date-picker" name="dateorder" placeholder="Delivery date" />                
                <input type="text" class="cus-frmcontrol" name="name" placeholder="Enter Name" />                
                <input type="text" class="cus-frmcontrol" name="address" placeholder="Enter Address" />                
                <input type="text" class="cus-frmcontrol" name="city" placeholder="Enter City" />            
            </div>            
            <div class="cus-frmgroup flt-right width49">                
                <input type="text" class="cus-frmcontrol" name="po" placeholder="Enter PO" />                
                <input type="text" class="cus-frmcontrol" name="telno" placeholder="Enter tel no" />                
                <input type="text" class="cus-frmcontrol" name="postalcde" placeholder="Enter Postal Code" />            
            </div>
            <div class="cus-frmgroup" id="append_div">                
                <div class="cur-formrow">                
                    <textarea class="cus-frmcontrol"name="comment"></textarea> 
                    <p>Type your order at above are: (bag size, quantity, etc) If we don't understand your oder, we will call you.</p>
                </div>
            </div>
            <div class="clear"></div>            
<!--            <div class="cus-frmgroup" id="append_div">                
                <div class="cur-formrow">                    
                    <input type="text" class="col-4 cus-frmcontrol" name="lbs[]" placeholder="Enter LBS" />                    
                    <input type="text" class="col-4 cus-frmcontrol" name="seed[]" placeholder="Enter Seed of mixture" />                    
                    <input type="text" class="col-4 cus-frmcontrol" name="price[]" placeholder="Price per lb" />                    
                    <a href="javascript:;"class=" btn btn-green add-more"><i class="fa fa-plus"></i></a>                
                </div>            
            </div>                        
            <div class="cus-frmgroup flt-left width49">                
                <input type="text" class="cus-frmcontrol" name="order_discount" placeholder="Enter Early Order Discount" />                
                <input type="text" class="cus-frmcontrol" name="repname" placeholder="Enter Rep Name" />                
                <input type="text" class="cus-frmcontrol" name="delivery" placeholder="Enter Delivery" />            
            </div>            
            <div class="cus-frmgroup flt-right width49">                
                <input type="text" class="cus-frmcontrol" name="contact_name" placeholder="Enter Contact Name" />                
                <input type="text" class="cus-frmcontrol" name="contact_phone" placeholder="Enter Contact no" />                
                <input type="text" class="cus-frmcontrol" name="email" placeholder="Enter Email" />            
            </div>            -->
            <div class="clear"></div>            
            <div class="cus-frmgroup">                
                <input type="submit" class="btnsubmit flt-right" style="width: 150px;" value="Submit" />                
                <div class="clear"></div>            
            </div>        
        </form>    
    </div>
    
</div>
<div id="append_html" class="cur-formrow" style="display: none;">    
    <div class="cur-formrow">        
        <input type="text" class="col-4 cus-frmcontrol" name="lbs[]" placeholder="Enter LBS" />        
        <input type="text" class="col-4 cus-frmcontrol" name="seed[]" placeholder="Enter Seed of mixture" />        
        <input type="text" class="col-4 cus-frmcontrol" name="price[]" placeholder="Price per lb" />        
        <a href="javascript:;"class=" btn btn-red remove-row"><i class="fa fa-times"></i></a>    
    </div>
</div>