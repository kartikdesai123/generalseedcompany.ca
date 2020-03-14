<style>
    .edit_profilelink {
        background: rgba(0, 0, 0, 0.4) none repeat scroll 0 0;
        border-radius: 50% !important;
        color: #fff !important;
        display: none;
        height: 100%;
        left: 0;
        margin: 0 auto;
        position: absolute;
        right: 0;
        text-align: center;
        text-decoration: none !important;
        width: 100%;
        z-index: 777;
    }
    .edit_profilelink > input {
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 999;
        border-radius: 50% !important;
    }
    .edit_profilelink i {
        font-size: 23px;
    }
    .edit_profilelink span {
        display: block;
    }
    .profile-userpic:hover .edit_profilelink{
        display: block;
    }
    .profile-userpic img{
        width:100%;
    }
    .linktext {
        margin: 35% 0;
    }
</style>
<div class="row">
    <div class="col-md-12">
        <!-- BEGIN PROFILE CONTENT -->
        <div class="profile-content">
            <div class="row">
                <div class="col-md-12">
                    <div class="portlet light ">
                        <div class="portlet-title tabbable-line">
                            <div class="caption caption-md">
                                <i class="icon-globe theme-font hide"></i>
                                <span class="caption-subject font-blue-madison bold uppercase">Profile Account</span>
                            </div>
                            <ul class="nav nav-tabs">
                                <li class="active">
                                    <a href="#tab_1_1" data-toggle="tab">Personal Info</a>
                                </li>
                                <li>
                                    <a href="#tab_1_2" data-toggle="tab">Change Avatar</a>
                                </li>
                                <li>
                                    <a href="#tab_1_3" data-toggle="tab">Change Password</a>
                                </li>
                                <!--                                                    <li>
                                                                                        <a href="#tab_1_4" data-toggle="tab">Privacy Settings</a>
                                                                                    </li>-->
                            </ul>
                        </div>
                        <div class="portlet-body">
                            <div class="tab-content">
                                <!-- PERSONAL INFO TAB -->
                                <div class="tab-pane active" id="tab_1_1">
                                    <form id="admin_infor" method="post" class="form-horizontal" name="user_info" action="<?php echo admin_url() . 'Profile/editdetail'; ?>" enctype="multipart/form-data">
                                    <!--<form method="post" role="form" id="admin_infor" action="<?php echo admin_url() . 'profile/editdetail'; ?>">-->
                                        <div class="form-group">
                                            <label class="control-label">Email Address</label>
                                            <input type="text" name="email" id="email" value="<?= $profiles[0]['var_email']; ?>" placeholder="Enter Email" class="form-control" /> 
                                            <input type="hidden" name="user_id" placeholder="Enter Last Name" value="<?= $profiles[0]['int_glcode']; ?>" class="form-control" /> 
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">User Name</label>
                                            <input type="text" placeholder="Enter User Name" value="<?= $profiles[0]['var_username']; ?>" name="uname" id="uname" class="form-control" /> 
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">First Name</label>
                                            <input type="text" placeholder="Enter First Name" value="<?= $profiles[0]['var_fname']; ?>" name="fname" id="fname" class="form-control" /> 
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Last Name</label>
                                            <input type="text" placeholder="Enter Last Name" value="<?= $profiles[0]['var_lname']; ?>" id="lname" name="lname" class="form-control" /> 
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Mobile Number</label>
                                            <input type="text" id="mnumber" maxlength="10" name="mnumber" value="<?= $profiles[0]['bint_phone']; ?>" placeholder="Enter Mobile Number" class="form-control" />
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label">Date Of Birth</label>
                                            <input type="text" name="dob" id="dob"  placeholder="Date Of Birth" value="<?= date('m/d/Y', strtotime($profiles[0]['dt_dob'])); ?>" class="form-control date-picker" /> 
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Address</label>
                                            <textarea class="form-control" rows="3" id="address" name="address" placeholder="Enter Address"><?= $profiles[0]['txt_address']; ?></textarea>
                                        </div>

                                        <div class="margiv-top-10">
                                            <input class="btn green btn-circle" type="submit" value="Update">
                                            <a href="javascript:;" class="btn default btn-circle"> Cancel </a>
                                        </div>
                                    </form>
                                </div>
                                <!-- END PERSONAL INFO TAB -->
                                <!-- CHANGE AVATAR TAB -->
                                <div class="tab-pane" id="tab_1_2">
                                    <form id="admin_pic" method="post" class="form-horizontal" name="user_image_change" action="<?php echo admin_url() . 'Profile/profile_image'; ?>" enctype="multipart/form-data">
                                        <div class="form-group">
                                            <div class="fileinput fileinput-new" data-provides="fileinput">
                                                <div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">
                                                    <?php if (!empty($profiles[0]['var_image'])) { ?>
                                                        <img src = "<?= base_url() . PROFILE_PIC_IMAGE_PATH . $profiles[0]['var_image']; ?>" width="100%" height="100%" alt = "" />
                                                    <?php } else { ?>
                                                    <img src="http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image" alt="" width="100%" height="100%" />
                                                    <?php } ?>
                                                </div>

                                                <div class="fileinput-preview fileinput-exists thumbnail" style="max-width: 200px; max-height: 150px;"> </div>
                                                <div>
                                                    <span class="btn default btn-file">
                                                        <span class="fileinput-new"> Select image </span>
                                                        <span class="fileinput-exists"> Change </span>
                                                        <input type="file" class="profile_change" name="edit_profile">
                                                        <input type="hidden" name="old_profile" value="<?= $profiles[0]['var_image']; ?>">
                                                        <input type="hidden" name="int_glcode" value="<?= $profiles[0]['int_glcode']; ?>">
                                                    </span>
                                                    <a href="javascript:;" class="btn default fileinput-exists" data-dismiss="fileinput"> Remove </a>
                                                </div>
                                            </div>
<!--                                            <div class="margin-top-10">
                                                <input class="btn green btn-circle" type="submit" value="Update">
                                                <a href="javascript:;" class="btn default btn-circle"> Cancel </a>
                                            </div>-->
                                        </div>
                                    </form>
                                </div>
                                <!-- END CHANGE AVATAR TAB -->
                                <!-- CHANGE PASSWORD TAB -->
                                <div class="tab-pane" id="tab_1_3">
                                    <form method="POST"  role="form" id="change_password" action="<?php echo admin_url() . 'Profile/passdetail'; ?>">
                                        <div class="form-group">
                                            <label class="control-label">Current Password</label>
                                            <input type="password" name="old_pwd" id="old_pwd" class="form-control" /> </div>
                                        <input type="hidden" name="user_id" placeholder="" value="<?= $profiles[0]['int_glcode']; ?>" class="form-control" /> 
                                        <div class="form-group">
                                            <label class="control-label">New Password</label>
                                            <input type="password" name="new_pwd" id="new_pwd" class="form-control" /> </div>
                                        <div class="form-group">
                                            <label class="control-label">Re-type New Password</label>
                                            <input type="password" name="conf_pwd" id="conf_pwd" class="form-control" /> </div>
                                        <div class="margin-top-10">
                                            <input class="btn green btn-circle" type="submit" value="Update">
                                            <a href="javascript:;" class="btn default btn-circle"> Cancel </a>
                                        </div>
                                    </form>
                                </div>
                                <!-- END CHANGE PASSWORD TAB -->
                                <!-- PRIVACY SETTINGS TAB -->
                                <!--                                <div class="tab-pane" id="tab_1_4">
                                                                    <form action="#">
                                                                        <table class="table table-light table-hover">
                                                                            <tr>
                                                                                <td> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus.. </td>
                                                                                <td>
                                                                                    <label class="uniform-inline">
                                                                                        <input type="radio" name="optionsRadios1" value="option1" /> Yes </label>
                                                                                    <label class="uniform-inline">
                                                                                        <input type="radio" name="optionsRadios1" value="option2" checked/> No </label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td> Enim eiusmod high life accusamus terry richardson ad squid wolf moon </td>
                                                                                <td>
                                                                                    <label class="uniform-inline">
                                                                                        <input type="checkbox" value="" /> Yes </label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td> Enim eiusmod high life accusamus terry richardson ad squid wolf moon </td>
                                                                                <td>
                                                                                    <label class="uniform-inline">
                                                                                        <input type="checkbox" value="" /> Yes </label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td> Enim eiusmod high life accusamus terry richardson ad squid wolf moon </td>
                                                                                <td>
                                                                                    <label class="uniform-inline">
                                                                                        <input type="checkbox" value="" /> Yes </label>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                        end profile-settings
                                                                        <div class="margin-top-10">
                                                                            <a href="javascript:;" class="btn red"> Save Changes </a>
                                                                            <a href="javascript:;" class="btn default"> Cancel </a>
                                                                        </div>
                                                                    </form>
                                                                </div>-->
                                <!-- END PRIVACY SETTINGS TAB -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END PROFILE CONTENT -->
    </div>
</div>