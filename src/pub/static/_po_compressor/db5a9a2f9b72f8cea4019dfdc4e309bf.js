require(['jquery'],function($){if(!$("body").hasClass("page-layout-1column")&&!$("body").hasClass("account")){$(".sidebar-main").css("position","relative");$(".sidebar-additional").css("position","relative");var main_area_pos;var main_area_height=$(".column.main").outerHeight();var left_side_top=0;var right_side_top=0;var cur_Y=pre_Y=0;$(document).ready(function(){setTimeout(function(){stickySidebar();},1000);});$(window).scroll(function(){stickySidebar();});$(window).resize(function(){left_side_top=0;stickySidebar();});function stickySidebar(){if($(".column.main").offset()){main_area_pos=$(".column.main").offset().top;}
main_area_height=$(".column.main").outerHeight();margin_top=$(".page-header").hasClass("sticky-header")?60:10;margin_bottom=10;var fixedSideTop=fixedSideBottom=fixedSideTop_r=fixedSideBottom_r=0;cur_Y=$(window).scrollTop();if($(".sidebar-main").outerHeight()<main_area_height){if($(window).height()<$(".sidebar-main").outerHeight()+margin_top+margin_bottom){if(main_area_pos>=cur_Y+margin_top){left_side_top=0;}else if(cur_Y>=main_area_pos+main_area_height-$(window).height()){left_side_top=main_area_height-$(".sidebar-main").outerHeight();}else{if(cur_Y>pre_Y){if(fixedSideTop){fixedSideTop=0;left_side_top=$(".sidebar-main").offset().top-main_area_pos;}else if(!fixedSideBottom&&$(".sidebar-main").outerHeight()+$(".sidebar-main").offset().top<cur_Y+$(window).height()){fixedSideBottom=1;left_side_top=cur_Y-(main_area_pos+$(".sidebar-main").outerHeight()-$(window).height())-10}}else{if(fixedSideBottom){fixedSideBottom=0;left_side_top=cur_Y-main_area_pos-$(".sidebar-main").outerHeight()+$(window).height()-10;}else if(!fixedSideTop&&$(".sidebar-main").offset().top>=cur_Y+margin_top){fixedSideTop=1;left_side_top=cur_Y-main_area_pos+margin_top;}}}}else{if(cur_Y>=(main_area_pos-margin_top)&&cur_Y+$(".sidebar-main").outerHeight()+margin_top<main_area_pos+main_area_height){left_side_top=cur_Y-main_area_pos+margin_top;}else if(cur_Y+$(".sidebar-main").outerHeight()+margin_top>main_area_pos+main_area_height){left_side_top=main_area_height-$(".sidebar-main").outerHeight();}else{left_side_top=0;}
fixedSideTop=fixedSideBottom=0;}
$(".sidebar-main").css("top",left_side_top+"px");}else{$(".sidebar-main").css("top",0);}
if($(".sidebar-additional").outerHeight()<main_area_height){if($(window).height()<$(".sidebar-additional").outerHeight()+margin_top+margin_bottom){if(main_area_pos>=cur_Y+margin_top){right_side_top=0;}else if(cur_Y>=main_area_pos+main_area_height-$(window).height()){right_side_top=main_area_height-$(".sidebar-additional").outerHeight();}else{if(cur_Y>pre_Y){if(fixedSideTop_r){fixedSideTop_r=0;right_side_top=$(".sidebar-additional").offset().top-main_area_pos;}else if(!fixedSideBottom_r&&$(".sidebar-additional").outerHeight()+$(".sidebar-additional").offset().top<cur_Y+$(window).height()){fixedSideBottom_r=1;right_side_top=cur_Y-(main_area_pos+$(".sidebar-additional").outerHeight()-$(window).height())-10}}else{if(fixedSideBottom_r){fixedSideBottom_r=0;right_side_top=$(".sidebar-additional").offset().top-main_area_pos;}else if(!fixedSideTop_r&&$(".sidebar-additional").offset().top>=cur_Y+margin_top){fixedSideTop_r=1;right_side_top=cur_Y-main_area_pos+margin_top;}}}}else{if(cur_Y>=(main_area_pos-margin_top)&&cur_Y+$(".sidebar-additional").outerHeight()+margin_top<main_area_pos+main_area_height){right_side_top=cur_Y-main_area_pos+margin_top;}else if(cur_Y+$(".sidebar-additional").outerHeight()+margin_top>main_area_pos+main_area_height){right_side_top=main_area_height-$(".sidebar-additional").outerHeight();}else{right_side_top=0;}
fixedSideTop_r=fixedSideBottom_r=0;}
$(".sidebar-additional").css("top",right_side_top+"px");}
pre_Y=cur_Y;}}});;require(['jquery'],function($){$(document).ready(function(){if(!($("body").hasClass("product-type-default")||$("body").hasClass("product-type-carousel")||$("body").hasClass("product-type-fullwidth")||$("body").hasClass("product-type-grid")||$("body").hasClass("product-type-sticky-right")||$("body").hasClass("product-type-wide-grid"))){if($(".block.upsell").length>0){var u=$('<div class="main-upsell-product-detail"/>');$('<div class="container"/>').html($(".block.upsell").detach()).appendTo(u);$("#maincontent").after(u);}}});});;