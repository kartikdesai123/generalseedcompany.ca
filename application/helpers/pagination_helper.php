<?php

function pagination($url, $total, $current_page) {
    
//    echo 'hi';
    $fresh_url = base_url() . $url;
    $adjacents = "2";
    $page = ($current_page == 0 ? 1 : $current_page);
//    $page = 25;
    $total = ($total == 0 ? 1 : $total);
//    $total = 50;
    $prev = $page - 1;
    $next = $page + 1;
    $lastpage = $total;
    $lpm1 = $lastpage - 1;

    $pagination = "";
    if ($lastpage > 1) {
        $pagination .= "<div class='pagination_btns'>";
//        $pagination .= "<div style='display: inline-block;'>Page " . $page . " of " . $lastpage . "</div>";
        if ($lastpage < 7 + ($adjacents * 2)) {
            for ($counter = 1; $counter <= $lastpage; $counter++) {
                if ($counter == $page)
                    $pagination .= "<a class='page_active prev_next_btns'>$counter</a>";
                else
                    $pagination .= "<a class='prev_next_btns' href='{$fresh_url}{$counter}'>$counter</a>";
            }
        } elseif ($lastpage > 5 + ($adjacents * 2)) {
//            echo "hello";
            if ($page < 1 + ($adjacents * 2)) {
                for ($counter = 1; $counter < 4 + ($adjacents * 2); $counter++) {
                    if ($counter == $page)
                        $pagination .= "<a class='page_active prev_next_btns'>$counter</a>";
                    else
                        $pagination .= "<a class='prev_next_btns' href='{$fresh_url}{$counter}'>$counter</a>";
                }
                $pagination .= "<div style='display: inline-block;'>...</div>";
                $pagination .= "<a class='prev_next_btns' href='{$fresh_url}{$lpm1}'>$lpm1</a>";
                $pagination .= "<a class='prev_next_btns' href='{$fresh_url}{$lastpage}'>$lastpage</a>";
            } elseif ($lastpage - ($adjacents * 2) > $page && $page > ($adjacents * 2)) {
                $pagination .= "<a  class='prev_next_btns' href='{$fresh_url}1'>1</a>";
                $pagination .= "<a  class='prev_next_btns' href='{$fresh_url}2'>2</a>";
                $pagination .= "<div style='display: inline-block;'>...</div>";
                for ($counter = $page - $adjacents; $counter <= $page + $adjacents; $counter++) {
                    if ($counter == $page)
                        $pagination .= "<a class='page_active prev_next_btns'>$counter</a>";
                    else
                        $pagination .= "<a class='prev_next_btns' href='{$fresh_url}{$counter}'>$counter</a>";
                }
                $pagination .= "<div style='display: inline-block;'>...</div>";
                $pagination .= "<a class='prev_next_btns' href='{$fresh_url}{$lpm1}'>$lpm1</a>";
                $pagination .= "<a class='prev_next_btns' href='{$fresh_url}{$lastpage}'>$lastpage</a>";
            } else {
                $pagination .= "<a class='prev_next_btns' href='{$fresh_url}1'>1</a>";
                $pagination .= "<a class='prev_next_btns' href='{$fresh_url}2'>2</a>";
                $pagination .= "<div style='display: inline-block;'>...</div>";
                for ($counter = $lastpage - (2 + ($adjacents * 2)); $counter <= $lastpage; $counter++) {
                    if ($counter == $page)
                        $pagination .= "<a class='page_active prev_next_btns'>$counter</a>";
                    else
                        $pagination .= "<a class='prev_next_btns' href='{$fresh_url}{$counter}'>$counter</a>";
                }
            }
        }

        if ($page < $counter - 1) {
//            $pagination .= "<a class='prev_next_btns' href='{$fresh_url}{$next}'>Next</a>";
//            $pagination .= "<a class='prev_next_btns' href='{$fresh_url}{$lastpage}'>Last</a>";
        } else {
//            $pagination .= "<a class='prev_next_btns'>Next</a>";
//            $pagination .= "<a class='prev_next_btns'>Last</a>";
        }
        $pagination .= "</div>";
    }
    echo $pagination;
}



