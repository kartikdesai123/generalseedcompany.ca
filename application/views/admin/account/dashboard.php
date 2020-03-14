<!-- BEGIN DASHBOARD STATS 1-->
<style>
    .caption {
        margin-top: 6px;
    }
    .col-lg-3.col-md-3.col-sm-6.col-xs-12 {
        margin-bottom: 20px;
    }
    .cus-date-range {
        display: inline-block;
        text-align: left;
        width: 30%;
    }
    .showDataPicker {
        display: inline-block;
        margin-left: 10px;
        vertical-align: top;
    }
    .cus-gobtn {
        display: inline-block;
        margin-left: 12px;
        vertical-align: top;
    }
</style>
<?php
$first_day_this_month = date('m/01/Y');
//echo $dashboard_data['total_user'];
//exit;
?>
<div class="row">
    <div class="col-md-12 col-sm-12">
        <div class="portlet light portlet-fit portlet-datatable bordered" style="display:none;">
            <div class="portlet-title">
                <div class="col-md-3" style="padding-left: 0">
                    <div class="caption">
                        <i class="icon-settings font-dark"></i>
                        <span class="caption-subject font-dark sbold uppercase"> Dashboard </span>
                    </div>
                </div>
                <div class="col-md-9" style="padding-right: 0">
                    <div class="form-horizontal">
                        <div class="form-group " style="margin: 0 0 5px 0; text-align: right">
                            <!--<div class="col-md-1"></div>-->
                            <div class="cus-date-range">
                                <select name="filter_option" class="form-control select2me filter_option" id="filter_option">
                                    <option value="currentMonth" selected="" data-startDate="<?php echo date('Y-m-01'); ?>" data-endDate="<?php echo date('Y-m-d'); ?>">Current Month</option>
                                    <option value="today" data-startDate="<?php echo date('Y-m-d'); ?>" data-endDate="<?php echo date('Y-m-d'); ?>">Today</option>
                                    <option value="weekly" data-startDate="<?php echo $past_week; ?>" data-endDate="<?php echo date('Y-m-d'); ?>">Last Week</option>
                                    <option value="monthly" data-startDate="<?php echo $past_month; ?>" data-endDate="<?php echo date('Y-m-d'); ?>">Last Month</option>
                                    <option value="custom" data-startDate="" data-endDate="">Custom Date Range</option>
                                </select>
                            </div>
                            <div class="showDataPicker" style="display: none">
                                <div class="input-group date-picker input-daterange" data-date="10/11/2015" data-date-format="mm/dd/yyyy">
                                    <input type="text" class="form-control dataFilter from_date" placeholder="From Date" data-startDate="" value="<?php echo $first_day_this_month; ?>" id="from_date" name="From Date">
                                    <span class="input-group-addon"> to </span>
                                    <input type="text" class="form-control dataFilter to_date" id="to_date" placeholder="To Date"  data-startDate=""  value="<?php echo date('m/d/Y'); ?>" name="to_date">
                                </div>
                            </div>
                            <div class="cus-gobtn">
                                <a href="javascript:;"  class="btn green btn-circle btn_go">  Go </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="actions">
                </div>
            </div>
            <div class="portlet-body">

                <div class="table-container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div class="dashboard-stat blue">
                                <div class="visual">
                                    <i class="fa fa-user"></i>
                                </div>
                                <div class="details">
                                    <div class="number">
                                        <span data-counter="counterup" class="total_sales" data-value="<?php echo $dashboard_data['total_user']; ?>"> 0 </span> 
                                    </div>
                                    <div class="desc"> Total User </div>
                                </div>
                                <a class="more" href="javascript:;"> View more
                                    <i class="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div class="dashboard-stat red">
                                <div class="visual">
                                    <i class="fa fa-users"></i>
                                </div>
                                <div class="details">
                                    <div class="number">
                                        <span data-counter="counterup" class="total_cash_cls" data-value="<?php echo $dashboard_data['total_dealer']; ?>">50,000</span>  </div>
                                    <div class="desc"> Total Dealer </div>
                                </div>
                                <a class="more" href="javascript:;"> View more
                                    <i class="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div class="dashboard-stat green">
                                <div class="visual">
                                    <i class="fa fa-cc-mastercard"></i>
                                </div>
                                <div class="details">
                                    <div class="number">
                                        <span data-counter="counterup" class="total_payment_cls" data-value="<?php echo $dashboard_data['total_payment']['paymentAmount']; ?>">50,000</span> $ </div>
                                    <div class="desc"> Payment </div>
                                </div>
                                <a class="more" href="javascript:;"> View more
                                    <i class="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div class="dashboard-stat purple">
                                <div class="visual">
                                    <i class="fa fa-camera-retro"></i>
                                </div>
                                <div class="details">
                                    <div class="number">
                                        <span data-counter="counterup" class="card_payment" data-value="<?php echo $dashboard_data['active_subscription']; ?>">50,000</span>  </div>
                                    <div class="desc">Active Subscription </div>
                                </div>
                                <a class="more" href="javascript:;"> View more
                                    <i class="m-icon-swapright m-icon-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12 col-sm-12">
        <div class="portlet light portlet-fit portlet-datatable bordered" style="display:none;">
            <div class="portlet-title">
                <div class="caption">
                    <i class="icon-settings font-dark"></i>
                    <span class="caption-subject font-dark sbold uppercase">  Payment chart  <span class="salesChartDate"></span></span>
                </div>
                <div class="actions">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div id="payment_chart" class="chart" ng-app=""  style="height: 350px;"> </div>
                </div>
            </div>
        </div>
    </div>
</div>

