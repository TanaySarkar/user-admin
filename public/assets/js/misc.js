(function ($) {
  'use strict';
  $(function () {
    var body = $('body');
    var sidebar = $('.sidebar');

    //Close other submenu in sidebar on opening any
    sidebar.on('show.bs.collapse', '.collapse', function () {
      sidebar.find('.collapse.show').collapse('hide');
    });

    $('[data-toggle="minimize"]').on('click', function () {
      if (
        body.hasClass('sidebar-toggle-display') ||
        body.hasClass('sidebar-absolute')
      ) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });

    //checkbox and radios
    $('.form-check label,.form-radio label').append(
      '<i class="input-helper"></i>'
    );

    if ($('.navbar').hasClass('fixed-top')) {
      document.querySelector('.page-body-wrapper').classList.remove('pt-0');
      document.querySelector('.navbar').classList.remove('pt-5');
    } else {
      document.querySelector('.page-body-wrapper').classList.add('pt-0');
      document.querySelector('.navbar').classList.add('pt-5');
      document.querySelector('.navbar').classList.add('mt-3');
    }

    // offcanvas menu for responsive
    $('[data-toggle="offcanvas"]').on('click', function () {
      $('.sidebar-offcanvas').toggleClass('active');
    });

    // showing sidebar menu item while collapsed
    $(document).on(
      'mouseenter mouseleave',
      '.sidebar .nav-item',
      function (ev) {
        var body = $('body');
        var sidebarIconOnly = body.hasClass('sidebar-icon-only');
        var sidebarFixed = body.hasClass('sidebar-fixed');
        if (!('ontouchstart' in document.documentElement)) {
          if (sidebarIconOnly) {
            if (sidebarFixed) {
              if (ev.type === 'mouseenter') {
                body.removeClass('sidebar-icon-only');
              }
            } else {
              var $menuItem = $(this);
              if (ev.type === 'mouseenter') {
                $menuItem.addClass('hover-open');
              } else {
                $menuItem.removeClass('hover-open');
              }
            }
          }
        }
      }
    );
  });
})(jQuery);
