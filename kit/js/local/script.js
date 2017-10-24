(function ($, Drupal) {

      var app;
      app = {
        init: function() {
          this._slider();
          this._navOffCanvas();
          // this._stickyHeader();
          this._scrollTop();
          this._file();
        },
        _file: function() {
          // if (jQuery('.js-form-managed-file [type=file]').length > 0) {
          //   // var filename = jQuery('input[type=file]').val().split('\\').pop();
          //   console.log(jQuery('.js-form-managed-file [type=file]').val());
          // }
          
          jQuery('.js-form-managed-file label').append('<div class="input-style"><span>C:\fakepath\</span> <strong>Choisir un fichier</strong></div>');
          jQuery('.js-form-managed-file [type=file]').on('change', function() {
            var $this = jQuery(this);
            if ($this.length > 0) {
              var filename = $this.val().split('\\').pop();
              jQuery('.js-form-managed-file label input-style span').append( filename );
            }
            
            
          });
        },
        _stickyHeader: function() {
          jQuery(window).on('load resize', function() {
            if (jQuery(this).width() > 1024) {

              if (jQuery('#toolbar-bar').length > 0) {
                var tb = jQuery('#toolbar-bar').height();
                if(jQuery('.toolbar-menu-administration').length > 0) {
                  var tb2 = jQuery('.toolbar-menu-administration').height();
                  tb += 39;
                }
              }
              var $menuHeight = jQuery('#block-pyxicom-main-menu').height();
              var $top = jQuery('#block-pyxicom-main-menu').offset().top - $menuHeight;
              jQuery(window).on('scroll resize load', function() {
                var $scrollTop = jQuery(this).scrollTop();
                if ($scrollTop >= $top) {
                  jQuery('#block-pyxicom-main-menu').addClass('is-scrolled').css('top', tb);
                  jQuery('.logo-sticky').addClass('is-active');
                } else {
                  jQuery('#block-pyxicom-main-menu').removeClass('is-scrolled');
                  jQuery('.logo-sticky').removeClass('is-active');
                }
              });
            }


            if(jQuery(this).width() < 767) {
              var $heightMenu = jQuery('.layout-header-top + div').height();
              jQuery('#block-pyxicom-main-menu').css('height', $heightMenu);
            }
          });
          jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > 60) {
              jQuery('#block-pyxicom-main-menu').addClass('is-opened');
              jQuery('body').addClass('is-scrolled');
            } else {
              jQuery('#block-pyxicom-main-menu').removeClass('is-opened');
              jQuery('body').addClass('is-scrolled');
            }
          });
        },
        _navOffCanvas: function() {
          jQuery('.c-nav__icon').on('click', function() {
            jQuery(this).toggleClass('is-active');
            jQuery('#block-pyxicom-main-menu').toggleClass('is-inViewport');
            jQuery('.c-nav__close').toggleClass('is-active');
          });
          jQuery('.c-nav__close').on('click', function() {
            jQuery(this).removeClass('is-active');
            jQuery('.c-nav__icon').removeClass('is-active');
            jQuery('#block-pyxicom-main-menu').removeClass('is-inViewport');
          });
        },
        _scrollTop: function() {
          var $scrollTop = jQuery('.c-action__gototop');
          jQuery(window).scroll(function() {
              if (jQuery(this).scrollTop() > 150) {
                  $scrollTop.fadeIn();
              } else {
                  $scrollTop.fadeOut();
              }
          });
          $scrollTop.click(function() {
            jQuery('html, body').animate({
              scrollTop: 0
            }, 500);
          });
         },
        _slider: function() {

          jQuery('.s-slider').flexslider({
            animation: "slide",
            directionNav: false,
            controlNav: true,
          });
        }
      }

      jQuery(document).foundation();
      
      jQuery(document).ajaxComplete(function() {
        jQuery('.js-form-type-managed-file label').append('<div class="input-style"><span>C:\\fakepath\\</span> <strong>Choisir un fichier</strong></div>');
      });
      app.init();
      

})(jQuery, Drupal);
