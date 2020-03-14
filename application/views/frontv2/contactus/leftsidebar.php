<ul class="nav nav-list tree left-nopadding">
    <li>
        <a class="<?= $contactus; ?>" href="<?= base_url(); ?>products/contact-us/generalInquiry">
            <label class="tree-toggler nav-header <?= $generalInquiry; ?>">
                <i class="fa fa-plus" aria-hidden="true"></i>General Inquires
            </label>
        </a>
    </li>
    <li>
        <a class="<?= $contactus; ?>" href="<?= base_url(); ?>products/contact-us/retailInquiry">
            <label class="tree-toggler nav-header <?= $retailInquiry; ?>">
                <i class="fa fa-plus" aria-hidden="true"></i>Retail Inquires
            </label>
        </a>
    </li>
    <li>
        <a class="<?= $contactus; ?>" href="<?= base_url(); ?>products/contact-us/wholesaleInquiry">
            <label class="tree-toggler nav-header <?= $wholesaleInquiry; ?>">
                <i class="fa fa-plus" aria-hidden="true"></i>Wholesale Inquires
            </label>
        </a>
    </li>
    <li>
        <a class="<?= $contactus; ?>" href="<?= base_url(); ?>products/contact-us/wholesaleOrder">
            <label class="tree-toggler nav-header <?= $wholesaleOrder; ?>">
                <i class="fa fa-plus" aria-hidden="true"></i>Wholesale Orders
            </label>
        </a>
    </li>
</ul>
<style>
    .left-nopadding.nav > li > a{
        padding: 0px;
    }
</style>