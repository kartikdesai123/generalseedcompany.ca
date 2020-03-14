
<!-- jQuery -->
<script src="<?= base_url(); ?>public/frontv2/js/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="<?= base_url(); ?>public/frontv2/js/bootstrap.min.js"></script>

<script src="<?= base_url(); ?>public/frontv2/js/main.js"></script>
            <?php
				if (!empty($js)){ 
				 foreach ($js as $value){ ?>
					<script src="<?= base_url()?>public/js/<?php echo $value; ?>" type="text/javascript"></script>

			<?php } } ?>
<script>
    jQuery(document).ready(function() {
        <?php
        if (!empty($init)) {
            foreach ($init as $value) {
                echo $value . ';';
            }
        }
        ?>
    });
</script>