// Entry point for the build script in your package.json
import './packages/jquery.js'
import {} from 'jquery-ujs'
import "@fortawesome/fontawesome-free/js/all";
import "bootstrap-sass/assets/javascripts/bootstrap-sprockets";
import "bootstrap-sass/assets/javascripts/bootstrap";

import 'gentelella/src/js/helpers/smartresize'
import 'gentelella/src/js/custom'
import 'gentelella/vendors/Chart.js/dist/Chart.min'
import 'gentelella/vendors/Flot/jquery.flot'
import 'gentelella/vendors/Flot/jquery.flot.pie'
import 'gentelella/vendors/Flot/jquery.flot.time'
import 'gentelella/vendors/Flot/jquery.flot.stack'
import 'gentelella/vendors/Flot/jquery.flot.resize'
import 'gentelella/vendors/datatables.net-buttons/js/buttons.flash';
import 'gentelella/vendors/datatables.net-buttons-bs/js/buttons.bootstrap'
import 'gentelella/vendors/datatables.net-responsive-bs/js/responsive.bootstrap'
import 'gentelella/vendors/dropzone/dist/min/dropzone.min'
import 'gentelella/vendors/moment/moment'
import 'gentelella/vendors/nprogress/nprogress'
import 'gentelella/vendors/validator/validator'

import {} from './web/home/index'

$(function() {
  $('#flash').delay(500).fadeIn('normal', function() {
    $(this).delay(2500).fadeOut();
  });
});

function CheckLocation(){
  $(document).mousedown(function(e){
    // context menu 가 아닌 다른 영역을 클릭한경우 판단
    if ($(e.target).parents(".contextmenu").length !== 0)
      return;
    $(".contextmenu").hide();
    $(document).unbind('mousedown');
  });
}
function ShowContextMenu(className){
  $("."+className).css({
    left:event.pageX+"px",
    top:event.pageY+"px"
  }).show();
}
