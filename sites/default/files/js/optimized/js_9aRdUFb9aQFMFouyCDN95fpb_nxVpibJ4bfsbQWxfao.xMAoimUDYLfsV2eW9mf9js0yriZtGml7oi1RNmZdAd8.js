!function(t,n){"use strict";var o=!1;n.behaviors.mainMenuMobileOperations={attach:function(n,e){n=t(".we-mega-menu-submenu .block-block-content",n),n=t(".field--name-field-d-main-title",n);n.length&&n.click(function(){if(window.innerWidth<992)return t(this).toggleClass("open").parent().find(".field--name-field-d-long-text").slideToggle("medium",function(){t(this).is(":hidden")&&(o=!0)}),!1})}},n.behaviors.mainMenuMobileNavbarListener={attach:function(e,n){t("#navbar-main button.navbar-toggler",e).click(function(){t(".navbar").hasClass("collapsing")||(t("body").toggleClass("navbar-open"),t(".navbar").toggleClass("open"),t("html, body").stop().animate({scrollTop:0},500),t(this).attr("aria-expanded","false"===t(this).attr("aria-expanded")))}),t(".main-navbar",e).click(function(n){n=t(n.target);0==n.parents(".navbar-inner").length&&0==n.is(".navbar-inner")&&t("#navbar-main button.navbar-toggler:visible",e).click()})}},n.behaviors.mainMenuMobileSubmenuToggle={attach:function(n,e){var a,i,n=t(".we-mega-menu-li.with-submenu",n),n=t("> a.we-mega-menu-li, > span.we-megamenu-nolink",n);n.length&&(a=".we-mega-menu-submenu",i=t(".main-navbar"),n.each(function(){var n=t(this),e=(n.toggleClass("open",n.parent().is(".active")),n),n=n.is("a")?n.find(".d-submenu-toggler"):n;e.click(function(){var n=t(this);return!(!n.is("a.open")&&!i.is(":not(.show)")&&(n.toggleClass("open").next(a).find("> .we-mega-menu-submenu-inner").slideToggle("medium",function(){t(this).is(":hidden")&&(o=!0)}),1))}),n.click(function(){var n;return!!i.is(":not(.show)")||((n=(n=t(this)).is(".d-submenu-toggler")?n.parent():n).toggleClass("open").next(a).find("> .we-mega-menu-submenu-inner").slideToggle("medium",function(){t(this).is(":hidden")&&(o=!0)}),!1)})}))}},n.behaviors.mainMenuDeepActiveTrail={attach:function(n,e){n=t("nav.navbar",n);if("/"==window.location.pathname)return!1;n.find('a[href$="'+window.location.pathname+'"]').each(function(){var n=t(this);n.addClass("active-menu-item"),n.parents(".we-mega-menu-li.with-submenu").addClass("active-trail open"),n.parents(".type-of-block").addClass("active-trail open")})}},n.behaviors.unsetHiddenNavElements={attach:function(n,e){var a=t("nav.navbar",n);t(window).resize(function(){992<window.innerWidth&&o&&(a.find('[style*="display: none"]').removeAttr("style"),o=!1)})}}}(jQuery,Drupal);
//# sourceMappingURL=main-menu.min.js.map
