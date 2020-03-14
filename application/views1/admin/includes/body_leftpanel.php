<!-- BEGIN SIDEBAR -->
<div class="page-sidebar-wrapper">
    <!-- BEGIN SIDEBAR -->
    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
    <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
    <div class="page-sidebar navbar-collapse collapse">
        <!-- BEGIN SIDEBAR MENU -->
        <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
        <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
        <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
        <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
        <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
        <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
        <ul class="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="padding-top: 20px">
            <!-- DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element -->
            <li class="sidebar-toggler-wrapper hide">
                <!-- BEGIN SIDEBAR TOGGLER BUTTON -->
                <div class="sidebar-toggler"> </div>
                <!-- END SIDEBAR TOGGLER BUTTON -->
            </li>
            <!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
            <!--            <li class="sidebar-search-wrapper">
                             BEGIN RESPONSIVE QUICK SEARCH FORM 
                             DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box 
                             DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box 
                            <form class="sidebar-search  " action="page_general_search_3.html" method="POST">
                                <a href="javascript:;" class="remove">
                                    <i class="icon-close"></i>
                                </a>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search...">
                                    <span class="input-group-btn">
                                        <a href="javascript:;" class="btn submit">
                                            <i class="icon-magnifier"></i>
                                        </a>
                                    </span>
                                </div>
                            </form>
                             END RESPONSIVE QUICK SEARCH FORM 
                        </li>-->
            <li class="nav-item <?= $dashboard; ?>">
                <a href="<?= admin_url(); ?>dashboard" class="nav-link nav-toggle">
                    <i class="fa fa-dashboard"></i>
                    <!--<i class="icon-home"></i>-->
                    <span class="title">Dashboard</span>
                    <span class="selected"></span>
                </a>
            </li>
<!--            <li class="nav-item <?= $article; ?>">
                <a href="<?= admin_url(); ?>article" class="nav-link nav-toggle">
                    <i class="fa fa-dashboard"></i>
                    <i class="icon-home"></i>
                    <span class="title">Article</span>
                    <span class="selected"></span>
                </a>
            </li>-->
            <li class="nav-item <?= $article; ?>">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-credit-card"></i>
                    <!--<i class="icon-home"></i>-->
                    <span class="title">Article</span>
                    <span class="selected"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item <?= $title_list; ?>">
                        <a href="<?= admin_url(); ?>article/title_list" class="nav-link ">
                            <i class="fa fa-list"></i>
                            <span class="title">Title List</span>
                        </a>
                    </li>
                    <li class="nav-item <?= $add_title; ?>">
                        <a href="<?= admin_url(); ?>article/add_title" class="nav-link ">
                            <i class="fa fa-plus"></i>
                            <span class="title">Add Title</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    <li class="nav-item <?= $pages_list; ?>">
                        <a href="<?= admin_url(); ?>article/pages_list" class="nav-link ">
                            <i class="fa fa-list"></i>
                            <span class="title">Pages List</span>
                        </a>
                    </li>
                    <li class="nav-item <?= $add_page; ?>">
                        <a href="<?= admin_url(); ?>article/add_page" class="nav-link ">
                            <i class="fa fa-plus"></i>
                            <span class="title">Add Page</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                </ul>
            </li>

<!--            <li class="nav-item <?= $prodcut; ?>">
    <a href="javascript:;" class="nav-link nav-toggle">
        <i class="fa fa-credit-card"></i>
        <i class="icon-home"></i>
        <span class="title">Product</span>
        <span class="selected"></span>
    </a>
    <ul class="sub-menu">
        <li class="nav-item <?= $prodcut_list; ?>">
            <a href="<?= admin_url(); ?>product" class="nav-link ">
                <i class="fa fa-list"></i>
                <span class="title">List</span>
            </a>
        </li>
        <li class="nav-item <?= $product_add; ?>">
            <a href="<?= admin_url(); ?>product/add" class="nav-link ">
                <i class="fa fa-plus"></i>
                <span class="title">Add Product</span>
                <span class="selected"></span>
            </a>
        </li>
    </ul>
</li>-->

            <li class="nav-item <?= $prodcut; ?>">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-credit-card"></i>
                    <!--<i class="icon-home"></i>-->
                    <span class="title">Product</span>
                    <span class="selected"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item <?= $prodcut_list; ?>">
                        <a href="<?= admin_url(); ?>productpage" class="nav-link ">
                            <i class="fa fa-list"></i>
                            <span class="title">List</span>
                        </a>
                    </li>
                    <li class="nav-item <?= $product_add; ?>">
                        <a href="<?= admin_url(); ?>productpage/add" class="nav-link ">
                            <i class="fa fa-plus"></i>
                            <span class="title">Add Product</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item <?= $contact; ?>">
                <a href="javascript:;" class="nav-link nav-toggle">
                    <i class="fa fa-credit-card"></i>
                    <!--<i class="icon-home"></i>-->
                    <span class="title">Contact</span>
                    <span class="selected"></span>
                </a>
                <ul class="sub-menu">
                    <li class="nav-item <?= $venue_list; ?>">
                        <a href="<?= admin_url(); ?>contact/venue_list" class="nav-link ">
                            <i class="fa fa-list"></i>
                            <span class="title">Venue List</span>
                        </a>
                    </li>
                    <li class="nav-item <?= $add_venue; ?>">
                        <a href="<?= admin_url(); ?>contact/add_venue" class="nav-link ">
                            <i class="fa fa-plus"></i>
                            <span class="title">Add Venue</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                    <li class="nav-item <?= $address_list; ?>">
                        <a href="<?= admin_url(); ?>contact/address_list" class="nav-link ">
                            <i class="fa fa-list"></i>
                            <span class="title">Address List</span>
                        </a>
                    </li>
                    <li class="nav-item <?= $add_address; ?>">
                        <a href="<?= admin_url(); ?>contact/add_address" class="nav-link ">
                            <i class="fa fa-plus"></i>
                            <span class="title">Add Address</span>
                            <span class="selected"></span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="nav-item <?= $wholesale_password; ?>">
                <a href="<?= admin_url(); ?>wholesale_password" class="nav-link ">
                    <i class="fa fa-plus"></i>
                    <span class="title">Wholesale Set Password</span>
                    <span class="selected"></span>
                </a>
            </li>
        </ul>
        <!-- END SIDEBAR MENU -->
    </div>
    <!-- END SIDEBAR -->
</div>
<!-- END SIDEBAR -->