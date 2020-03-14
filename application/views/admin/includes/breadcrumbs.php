<!-- BEGIN PAGE BAR -->
<div class="page-bar">
    <ul class="page-breadcrumb">
        <li>
            <a href="<?= admin_url(); ?>">Home</a>
            <i class="fa fa-circle"></i>
        </li>
        <!--        <li>
                    <span>Dashboard</span>
                </li>-->
        <?php
        if (!empty($breadcrumb_list)) {
            $i = 0;
            foreach ($breadcrumb_list as $value) {
                ?>
                <li>
                    <a href="<?= ($value[1] == '') ? 'javascript:;' : admin_url() . $value[1]; ?>"><?= ucwords($value[0]); ?></a>
                    <?= ($i + 1 != count($breadcrumb_list)) ? '<i class="fa fa-circle"></i></li>' : ''; ?>
                    <?php
                    $i++;
                }
            }
            ?>
    </ul>
</div>
<!-- END PAGE BAR -->
<!-- BEGIN PAGE TITLE-->
<h3 class="page-title"> <?= ucwords($breadcrumb); ?>
    <small><?= ucwords($breadcrumb_sub); ?></small>
</h3>
<!-- END PAGE TITLE-->
<!-- END PAGE HEADER-->