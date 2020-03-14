<div class="pagecontent">
    <div class="cus-row">
        <h1 class="text-center"><?php echo $page_title; ?> <br> (Forage/GSL Silage/Covercrops Sales)</h1>
        <br>
        <div class="content-start">
            
            <?php 
                
            for($i=0; $i<count($vanue_artical); $i++){ 
                    echo '<h4>'.$vanue_artical[$i]["var_venue"].'</h4>';
                    $vanue_address = explode(',', $vanue_artical[$i]["venue_address"]);
                    $str = '';
                    for($j=0; $j<count($vanue_address); $j++){
                        $str .= $vanue_address[$j];
                    }
                    echo $str;
             }?>
<!--            <h4>Ontario :</h4>
            <p>Southwestern ontario to lindsay : Wayne De Boer <br> (905)-648-2101</p>
            <p>North of Guelph to hwy 400 : Harvey Bults <br> harvey.generalseed@gmail.ca-(519)-570-8993</p>
            <p>East Lindsay : Mike Nagle <br> forageseed@yahoo.ca-(613)-327-8993</p>
            <br>
            <br>
            <br>
            <h4>Ouebee :</h4>
            <p>Eastern Quebee : Dan St.Arnauld <br> danielst-arnaud@videotron.ca-(418)-951-8992</p>
            <p>Western Quebee : Eric Trepanier <br> esteed@icloud.com-(819)-664-3556</p>
            <br>
            <br>
            <br>
            <h4>Maritimes :</h4>
            <p>Lou Mason <br> lou@generalseed@gmail.com-(705)-937-8993</p>
            <p>Mike Nagle <br> forageseed@yahoo.ca-(613)-327-8993</p>-->

        </div>
    </div>
</div>