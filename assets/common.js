    
$((function() {
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  setTimeout((function() {
    let strBadgeCut = $(".blanket-badge .yotpo .sr-only").text().substr(0, 4);
//     $(".blanket-badge .yotpo .sr-only").text(strBadgeCut)
  }), 1560);
  document.querySelector(".go-cart__empty") ? $(".go-cart-promo").hide() : $(".go-cart-promo").show();
  
  $("body").on("click", (function(event) {
    setTimeout((function() {
      document.querySelector(".go-cart__empty") ? $(".go-cart-promo").hide() : $(".go-cart-promo").show()
    }), 3560)
  })); 
  
  
  if ($(".color-swatch").length) {
    
    let variatnPrice = $(".color-swatch.active").data("priceprod");      
    let variant_compare_at_price = $(".color-swatch.active").data("variant_compare_at_price");    
    let sale_variant_compare_at_price = $(".color-swatch.active").data("sale_variant_compare_at_price");    
    var currency_format = $(".color-swatch.active").data("currency_format");
    
	//if sitewide sale or single sale is enabled
    if( $("body").hasClass("sitewide_sale-enabled") || $("body").hasClass("single_sale-enabled") ){
      //if single product sale is enabled
      if ($("body").hasClass("single_sale-enabled")) {
        let current_url = (window.location.href).split("/").pop();
        console.log(current_url); 
        for (let i = 0; i < items.length; i++) {
          if ( current_url.indexOf(items[i].handle) !== -1 ){
            //if percentage off is selected
            if ( $(".but-price").hasClass("percentage-off") ){
              console.log(parseInt(items[i].discounts), sale_variant_compare_at_price); 
              var sale_price = (sale_variant_compare_at_price - (sale_variant_compare_at_price * parseInt(items[i].discounts) / 100)).toFixed(2);        
              console.log(sale_price); 
              $(".but-price").text(currency_format + sale_price);
            }else{//if fixed off is selected
              var sale_price = (sale_variant_compare_at_price - parseInt(items[i].discounts)).toFixed(2);
              $(".but-price").text(currency_format + sale_price);
            }
          }
        }
      }else{ ////if single product sale is not enabled
        //if percentage off is selected
        if ( $(".but-price").hasClass("percentage-off") ){
          var sale_price = (sale_variant_compare_at_price - (sale_variant_compare_at_price * parseInt($("#AddToCart").data("off_amount")) / 100)).toFixed(2);        
          $(".but-price").text(currency_format + sale_price);
        }else{//if fixed off is selected
          var sale_price = (sale_variant_compare_at_price - parseInt($("#AddToCart").data("off_amount"))).toFixed(2);
          $(".but-price").text(currency_format + sale_price);
        }
      }      
    }else{
      console.log("nonono");
      $(".but-price").text(variatnPrice);
    }
    //         console.log(variant_compare_at_price);
    if ( $(".product-single__sale-price").length ){
      $(".product-single__sale-price").removeClass("hidden");
      $(".product-single__sale-price").text(variant_compare_at_price);
    }
    
    $("body").on("click", (function(event) {
      ! function() {
        let variatnPrice = $(".color-swatch.active").data("priceprod");      
        let variant_compare_at_price = $(".color-swatch.active").data("variant_compare_at_price");    
        let sale_variant_compare_at_price = $(".color-swatch.active").data("sale_variant_compare_at_price");    

       //if sitewide sale or single sale is enabled
      if( $("body").hasClass("sitewide_sale-enabled") || $("body").hasClass("single_sale-enabled") ){
        //if single product sale is enabled
        if ($("body").hasClass("single_sale-enabled")) {
          let current_url = (window.location.href).split("/").pop();
          for (let i = 0; i < items.length; i++) {
            if ( current_url.indexOf(items[i].handle) !== -1 ){
              //if percentage off is selected
              if ( $(".but-price").hasClass("percentage-off") ){
                console.log(parseInt(items[i].discounts), sale_variant_compare_at_price); 
                var sale_price = (sale_variant_compare_at_price - (sale_variant_compare_at_price * parseInt(items[i].discounts) / 100)).toFixed(2);        
                console.log(sale_price); 
                $(".but-price").text(currency_format + sale_price);
              }else{//if fixed off is selected
                var sale_price = (sale_variant_compare_at_price - parseInt(items[i].discounts)).toFixed(2);
                $(".but-price").text(currency_format + sale_price);
              }
            }
          }
        }else{ ////if single product sale is not enabled
          //if percentage off is selected
          if ( $(".but-price").hasClass("percentage-off") ){
            var sale_price = (sale_variant_compare_at_price - (sale_variant_compare_at_price * parseInt($("#AddToCart").data("off_amount")) / 100)).toFixed(2);        
            $(".but-price").text(currency_format + sale_price);
          }else{//if fixed off is selected
            var sale_price = (sale_variant_compare_at_price - parseInt($("#AddToCart").data("off_amount"))).toFixed(2);
            $(".but-price").text(currency_format + sale_price);
          }
        }      
      }else{
        $(".but-price").text(variatnPrice);
      }
      }()
    }))
  }
  
  if (window.location.href.indexOf("#recover") > -1) {
    console.log("recover page");
    $(".login-form").hide();
    $(".reset-pas-block").show()
  }
  
  $(".variatn__grid-item").on("click", (function(event) {
    $(this).addClass("active").siblings().removeClass("active");
    let curItem = $(this).data("value"),
      curItemAlt = $(this).text().trim();
    console.log("curItemAlt", curItemAlt);
    console.log("curItem", curItem);
    $('.gift__cart-title span[data-value="' + curItem + '"]').addClass("active").siblings().removeClass("active");
    $('.gift__cart-gallery img[alt="' + curItemAlt + '"]').addClass("active").siblings().removeClass("active");
    $('.gift-cart-js .btn__var[data-value="' + curItem + '"]').addClass("active").siblings().removeClass("active");
    $(".gift__cart-variants option").attr("selected", !1);
    $('.gift__cart-variants option[value="' + curItem + '"]').attr("selected", !0)
  }));
  
  $("body").on("click", (function(event) {
    $(".js-go-cart-overlay").hasClass("is-open") ? $(this).addClass("cart-hidden") : $(this).removeClass("cart-hidden")
  }));
  
  $(document).on("click", ".prod-rev .yotpo .yotpo-pager a", (function(event) {
    event.preventDefault();
    var top11 = $(".prod-rev .yotpo-reviews ").offset().top - 84;
    console.log("top11", top11);
    $("body,html").animate({
      scrollTop: top11
    }, 200)
  })); 
  
  $(".product__description-more").on("click", (function(event) {
    var curText = $(this).text().trim();
    "Read more..." == curText ? $(this).text("Read less...") : $(this).text("Read more...");
    console.log("curText", curText);
    $(".product__description").toggleClass("active")
  }));  
  
//     if (window.location.href.indexOf("variant") > -1) {
//       var values = (window.location.href).split('=');
//       var prodVariangOnPage =values[1];
//       $('.color-swatch[data-varprodid="' + prodVariangOnPage + '"]').click();
//     }
  
  var urlParams = new URLSearchParams(window.location.search);
  var variant = urlParams.get('variant');
  var urlParamsLength = Array.from(urlParams).length;

  if (!!variant) {
    $('.color-swatch[data-varprodid="' + variant + '"]').click();
//     event.stopImmediatePropagation();
  }

  $(document).on('click', '.product-title-wrapper .color-swatch', pushVariantToState);

  function pushVariantToState() {
    var variantId = $('.color-swatch.active').attr('data-varprodid');
    
    // check to makesure we don't overwrite the url if there are utm params from paid traffic
    if(variantId && urlParamsLength === 1) {
      window.history.replaceState(null, null, '?variant=' + variantId);
    }

    // reset url params length to zero so we can push variant id
    urlParamsLength = 1;
  }
  
  $(".collection-block__navigation a").on("click", (function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top - 84;
    $("body,html").animate({
      scrollTop: top
    }, 600)
  }));
  
  $(".add-adress-js").on("click", (function(event) {
    $(this).hide();
    $(".add-address-form").show()
  }));
  
  $(".reset-pas-js").on("click", (function(event) {
    event.preventDefault();
    $(".reset-pas-block").show();
    $(".login-form").hide()
  }));
  
  
  if (windowWidth < 991) {

    $(".collection-block__box").each((function(index, el) {
      $(this).find(".variant-count span").text($(this).find(".collection-block__item--variant").length);
      $(this).find(".collection-block__item--variant").wrapAll('<div class="variants-sl"></div>')
    }));



    $(".variants-sl").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      prevArrow: '<div class="slick-left-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.596 240.822"><path d="M 57.633,129.007 165.93,237.268 c 4.752,4.74 12.451,4.74 17.215,0 4.752,-4.74 4.752,-12.439 0,-17.179 L 83.438,120.418 183.133,20.747 c 4.752,-4.74 4.752,-12.439 0,-17.191 -4.752,-4.74 -12.463,-4.74 -17.215,0 L 57.621,111.816 c -4.679,4.691 -4.679,12.511 0.012,17.191 z" transform="translate(-54.113 -.001)"></path></svg></div>',
      nextArrow: '<div class="slick-right-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132.596 240.822"><path d="M 183.189,111.816 74.892,3.555 c -4.752,-4.74 -12.451,-4.74 -17.215,0 -4.752,4.74 -4.752,12.439 0,17.179 l 99.707,99.671 -99.695,99.671 c -4.752,4.74 -4.752,12.439 0,17.191 4.752,4.74 12.463,4.74 17.215,0 L 183.201,129.006 c 4.68,-4.691 4.68,-12.511 -0.012,-17.19 z" transform="translate(-54.113)"></path></svg></div>',
      responsive: [{
        breakpoint: 576,
        settings: {
          infinite: !1,
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      }]
    })



  }
  
  
  $(".collection-block__box").each((function(index, el) {
    $(this).find(".collection-block__item").length < 8 && $(el).find(".load-more").hide();
    $(this).find(".collection-block__item").slice(0, 7).addClass("show")
  }));
  
  $(".load-more").on("click", (function(event) {
    $(this).parents(".collection-block__box").find(".collection-block__item:not(.show)").slice(0, 4).slideDown().addClass("show");
    $(this).parents(".collection-block__box").find(".collection-block__item:not(.show)").length < 4 && $(this).slideUp()
  }));
  
  if ($(".template-product").length && $(".sl-carousel-cntrl").length) {
    
    var slControl = new Swiper(".sl-carousel-cntrl", {
        spaceBetween: 8,
        slidesPerView: 6,
        loop: !1,
        allowTouchMove: !1,
        breakpoints: {
          320: {
            slidesPerView: 6,
            spaceBetween: 8
          },
          640: {
            slidesPerView: 6,
            spaceBetween: 8
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 8
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 8,
            direction: "vertical"
          }
        }
      }),
        
      galleryTop = new Swiper(".sl-visible-carousel", {
        spaceBetween: 10,
        loop: !1,
        uniqueNavElements: !1,
        slidesPerView: 1,
        navigation: {
          nextEl: ".sl-vis-next",
          prevEl: ".sl-vis-prev"
        },
        thumbs: {
          swiper: slControl
        }
      });
//       $(".cst-prod__item.cst-prod__item--part-l").addClass("hidden");
      $(".sl-control .sl-control__item.active").clone().appendTo(".sl-carousel-cntrl .swiper-wrapper");
      $(".sl-control .sl-control__item.active").clone().appendTo(".sl-visible-carousel .swiper-wrapper");
      slControl.update();
      slControl.slideTo(0, 0, !1);
      galleryTop.update();
      galleryTop.slideTo(0, 0, !1);
    $(".cst-prod__item.cst-prod__item--part-l").removeClass("hidden");
      console.log("initializing");
    
    $("body").on("change", ".single-option-selector-custom", (function() {
      $(".sl-carousel-cntrl .swiper-wrapper").children().remove();
      $(".sl-visible-carousel .swiper-wrapper").children().remove();
      $(".sl-control .sl-control__item.active").clone().appendTo(".sl-carousel-cntrl .swiper-wrapper");
      $(".sl-control .sl-control__item.active").clone().appendTo(".sl-visible-carousel .swiper-wrapper");
      slControl.update();
      galleryTop.update();
      console.log("success");      
      $(".cst-prod__item.cst-prod__item--part-l").removeClass("hidden");
    })); 
    
    $(window).on("load resize", (function(event) {
      $(".sl-wrap, .sl-visible-carousel").attr("style", "");
//       setTimeout((function() {
        $(".sl-wrap").css({
          height: $(".sl-wrap").outerHeight(!0, !0),
          overflow: "hidden"
        });
        $(".sl-visible-carousel").css({
          height: $(".sl-visible-carousel").outerHeight(!0, !0),
          overflow: "hidden"
        })
//       }), 300)
    }));
    
    $(".colors-box .breakdown-box").each((function(index, el) {
      var colorsName = $(el).text().slice(0, -1);
      colorsNameData = colorsName.trim().replace(/[" "]/g, "_")
    }));
    
    //clicking function of color swatch
    $(document).on("click", ".color-swatch.group-Solid", (function(event) {
      var cTitle = $(this).prop("title");
      $(".breakdown-box span").remove();
      $(".breakdown-box.group-Solid > div").append("<span> " + cTitle + "</span>");      
      //getting some values for DY API SPA event
      var changed_sku = $(this).data("id");
      var changed_id = $(this).data("varprodid");      
      var final_data = changed_sku + "-" + changed_id ;
      var url = window.location.href;   
      
      DY.API('spa', {
        context: {
          type: 'PRODUCT',
          data: [final_data]
        },
        url: url,
        countAsPageview: false
      });
    }));
    
    $(document).on("click", ".color-swatch.group-Pattern", (function(event) {
      var cTitle = $(this).prop("title");
      $(".breakdown-box span").remove();
      $(".breakdown-box.group-Pattern > div").append("<span> " + cTitle + "</span>");
      
      //getting some values for DY API SPA event
      var changed_sku = $(this).data("id");
      var changed_id = $(this).data("varprodid");      
      var final_data = changed_sku + "-" + changed_id ;
      var url      = window.location.href;       
      
      DY.API('spa', {
        context: {
          type: 'PRODUCT',
          data: [final_data]
        },
        url: url,
        countAsPageview: false
      });
    }));
    //end clicking
    
    
    setTimeout((function() {
      var cTitle = $(".color-swatch.active").prop("title");
      console.log("cTitle", cTitle);
      $(".breakdown-box:first-child > div").append("<span> " + cTitle + "</span>")
    }), 300);
    
    $(".colors-box span").each((function(index, el) {
      let curIndex = $(el).attr("id");
      curIndex.includes("Pattern") ? $(el).addClass("group-Pattern") : curIndex.includes("Limited-Edition") ? $(el).addClass("group-Limited-Edition") : curIndex.includes("Pattern") || curIndex.includes("Limited-Edition") || $(el).addClass("group-Solid")
    }));
    
    $(".group-Solid").addClass("visible")
  }
  
  
  
  if ($(".template-index").length) {
    let topBlockHeight = $(".top-block").outerHeight(!0);
    $('<div class="top-block--clone"></div>').insertBefore(".top-block").css({
      height: topBlockHeight
    }).hide();
    $("document").on("ready", function(){
      windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if ($(window).height() >= 620 && windowWidth > 576 || $(window).height() >= 515 && windowWidth < 576) {
        topBlockHeight = $(".top-block").outerHeight(!0);
        $(".top-block--clone").css("height", topBlockHeight);
        $(".top-block").css("position", "fixed");
        $(".top-block--clone").show();
        $(".top-block").css("top", $(".header").outerHeight(!0))
      } else {
        $(".top-block--clone").hide();
        $(".top-block").css("top", 0);
        $(".top-block").css("position", "relative")
      }
    })
    $(window).on("resize load", (function(event) {
      windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if ($(window).height() >= 620 && windowWidth > 576 || $(window).height() >= 515 && windowWidth < 576) {
        topBlockHeight = $(".top-block").outerHeight(!0);
        $(".top-block--clone").css("height", topBlockHeight);
        $(".top-block").css("position", "fixed");
        $(".top-block--clone").show();
        $(".top-block").css("top", $(".header").outerHeight(!0))
      } else {
        $(".top-block--clone").hide();
        $(".top-block").css("top", 0);
        $(".top-block").css("position", "relative")
      }
    }))
  }
  
  
  $(".cart__list-count-controll").on("click", (function(event) {
    var $this = $(this),
      curFrom = $this.parents("form"),
      countVal = $this.parents(".cart__list-count").find("input").val();
    if ("+" == $(this).text().trim()) {
      if (!isNaN(countVal)) {
        countVal++;
        $this.parents(".cart__list-count").find("input").val(countVal)
      }
    } else {
      countVal--;
      $this.parents(".cart__list-count").find("input").val(countVal)
    }
    curFrom.submit()
  }));
  
  
  
  $(".menu-title").on("click", (function(event) {
    $(this).toggleClass("active");
    $(this).parent().find(".menu-list").stop(!0, !0).slideToggle(250)
  }));
  
  
  $(".main-menu--left li:first-child a").hover((function() {
    $(this).siblings().removeClass("active");
    $(".header__mmenu").removeClass("active");
    // $(".header__mmenu_second").removeClass("active");
    // $(".header__mmenu_second").removeClass("active").stop(!0).slideUp();
    if ((windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 1024) {
      $(this).addClass("active");
      $(".header__mmenu").addClass("active").stop(!0, !0).slideDown()
    }
  }), (function() {}));
  
  $(".main-menu--right li:first-child a").hover((function() {
//     $(this).siblings().removeClass("active");
//     $(".header__mmenu").removeClass("active");
    // $(".header__mmenu_second").removeClass("active");
//     $(".header__mmenu").removeClass("active").stop(!0).slideUp();
    if ((windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 1024) {
//       console.log("windowWidth", "hehehe");
      $(this).addClass("active");      
      // $(".header__mmenu_second").addClass("active").stop(!0, !0).slideDown()
    }
  }), (function() {}));
  
  $(".header__mmenu").hover((function() {}), (function() {
    if ((windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 1024) {
      
      setTimeout((function() {
        $(".main-menu a").removeClass("active");
        $(".main-menu--left li:first-child").removeClass("active");        
      }), 800);
      $(".header__mmenu").removeClass("active").stop(!0).slideUp();
    }
  }));
  
  // $(".header__mmenu_second").hover((function() {}), (function() {
  //   if ((windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 1024) {
      
  //     setTimeout((function() {
  //       $(".main-menu a").removeClass("active");
  //       $(".main-menu--left li:last-child").removeClass("active");
  //     }), 800);
  //     $(".header__mmenu_second").removeClass("active").stop(!0).slideUp();
  //   }
  // }));
  
  $(".hamburger--js").on("click", (function(event) {
	//if menu was already open
    if( $(this).hasClass("open") ){
      $(".header__mmenu").removeClass("active").stop(!0).slideUp();
      $(".header__mmenu_second").removeClass("active").stop(!0).slideUp();
    }else{
      $(".header__mmenu").toggleClass("active").stop(!0, !0).slideToggle();    
    }
    $(this).toggleClass("open");    
  }))  
  
  $(".mobile-secondary-menu-title p").on("click", (function(event) {
    var open_menu_class = $(this).data('open');
    var close_menu_class = $(this).data('close');    
    $("." + close_menu_class).removeClass("active").stop(!0).slideUp();
    $("." + open_menu_class ).toggleClass("active").stop(!0, !0).slideToggle();
  }))
  
}));

var swiper = new Swiper(".curtain-sl__box", {
  loop: !0,
  navigation: {
    loop: !0,
    prevEl: ".swiper-slide--prev",
    nextEl: ".swiper-slide--next"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: !1,
      initialSlide: 0,
      loop: !0,
      pagination: {
        el: ".curtain-sl__box-dots",
        clickable: !0
      }
    },
    375: {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: !0,
      initialSlide: 1,
      loop: !0,
      pagination: {
        el: ".curtain-sl__box-dots",
        clickable: !0
      }
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
      centeredSlides: !0,
      initialSlide: 1,
      loop: !0
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
      centeredSlides: !0,
      initialSlide: 2,
      loop: !0
    }
  }
});

function pixelGlass() {
  "use strict";
  var controlsPanel, doc = document,
    panelClass = "controls-panel",
    canBeDisabled = [],
    prefix = "pg",
    filtersList = ["none", "invert"],
    statesList = ["off", "on"],
    currents = {
      state: getCurrent("state", statesList[1]),
      filter: getCurrent("filter", filtersList[0]),
      opacity: getCurrent("opacity", .5)
    },
    targets = {
      state: {
        elem: doc.documentElement,
        attr: "data"
      },
      filter: {
        elem: doc.body,
        attr: "data"
      },
      opacity: {
        elem: doc.body,
        attr: "style"
      }
    },
    paramsStates = {
      elemTag: "button",
      elemText: "on",
      listName: "states",
      itemName: "state",
      target: targets.state,
      type: "button",
      list: statesList,
      canDisableAll: !0,
      attrs: {
        tabindex: 1
      }
    },
    paramsFilters = {
      elemTag: "button",
      elemText: "invert",
      listName: "filters",
      itemName: "filter",
      target: targets.filter,
      type: "button",
      list: filtersList,
      attrs: {
        tabindex: 2
      }
    },
    paramsOpacity = {
      itemName: "opacity",
      type: "number",
      target: targets.opacity,
      setAttr: "style",
      attrs: {
        min: 0,
        max: 1,
        step: .1,
        tabindex: 3
      }
    };
  ! function() {
    ! function() {
      var targetElem = doc.documentElement;
      if (function(elem, dataName) {
          if (!elem) return !1;
          dataName = "data-" + dataName;
          if (void 0 !== elem.getAttribute(dataName) && null !== elem.getAttribute(dataName)) return !0;
          return !1
        }(doc.body, "has-sticky-point")) {
        var stickyPoint = doc.querySelector(".sticky-point");
        stickyPoint && !localStorage["pg-released"] && (targetElem = stickyPoint);
        currents.state = "off"
      }(controlsPanel = doc.createElement("div")).classList.add(panelClass);
      targetElem.appendChild(controlsPanel);
      ["top", "right", "bottom", "left"].forEach((function(item) {
        var itemVal = getCurrent(item, "");
        itemVal && (controlsPanel.style[item] = itemVal)
      }));
      ! function() {
        createButton(paramsStates);
        createButton(paramsFilters);
        ! function(params) {
          var itemName = params.itemName,
            attrs = params.attrs,
            type = params.type,
            setAttr = params.setAttr,
            canDisableAll = params.canDisableAll,
            id = itemName,
            input = doc.createElement("input");
          setClasses(input, [panelClass + "__control", panelClass + "__control--" + type]);
          input.setAttribute("type", type);
          input.setAttribute("id", id);
          for (var attr in attrs) input.setAttribute(attr, attrs[attr]);
          input.setAttribute("value", currents[itemName]);
          canDisableAll || canBeDisabled.push(input);
          controlsPanel.appendChild(input);
          input.oninput = function() {
            if ("style" === setAttr) {
              params.target.elem.style[itemName] = this.value;
              saveLocalStorage(itemName, this.value)
            }
          }
        }(paramsOpacity);
        ! function() {
          var input = doc.createElement("button");
          setClasses(input, [panelClass + "__control", panelClass + "__control--drag-n-drop"]);
          input.setAttribute("type", "button");
          input.innerHTML = " ";
          controlsPanel.appendChild(input);
          input.onmousedown = function() {
            this.offsetTop;
            var offsetLeft = controlsPanel.clientWidth - this.clientWidth,
              styles = getComputedStyle(controlsPanel);
            controlsPanel.style.top = styles.top;
            controlsPanel.style.left = styles.left;
            controlsPanel.style.right = "auto";
            controlsPanel.style.bottom = "auto";
            doc.onmousemove = function(ev) {
              var x = ev.clientX - offsetLeft + "px",
                y = ev.clientY + "px";
              controlsPanel.style.left = x;
              controlsPanel.style.top = y
            }
          };
          input.onmouseup = function() {
            var styles = getComputedStyle(controlsPanel),
              left = +styles.left.replace(/px/, ""),
              right = +styles.right.replace(/px/, ""),
              top = +styles.top.replace(/px/, ""),
              bottom = +styles.bottom.replace(/px/, "");
            if (left > right) {
              saveLocalStorage("left", "auto");
              saveLocalStorage("right", styles.right);
              controlsPanel.style.right = styles.right;
              controlsPanel.style.left = "auto"
            } else {
              saveLocalStorage("left", styles.left);
              saveLocalStorage("right", "auto")
            }
            if (top > bottom) {
              saveLocalStorage("top", "auto");
              saveLocalStorage("bottom", styles.bottom);
              controlsPanel.style.bottom = styles.bottom;
              controlsPanel.style.top = "auto"
            } else {
              saveLocalStorage("top", styles.top);
              saveLocalStorage("bottom", "auto")
            }
            doc.onmousemove = null
          }
        }()
      }()
    }();
    ! function() {
      for (var key in targets) {
        var target = targets[key],
          current = currents[key];
        "data" === target.attr && setData(target.elem, key, current)
      }
      "off" === currents.state && disableInputs()
    }();
    "on" === currents.state && applyCurrentStyles()
  }();

  function createButton(params) {
    params.listName;
    var itemName = params.itemName,
      elemTag = params.elemTag,
      elemText = params.elemText,
      type = params.type,
      list = params.list,
      currentVal = (params.action, currents[itemName]),
      attrs = params.attrs,
      currentNum = list.indexOf(currentVal),
      canDisableAll = params.canDisableAll,
      id = itemName,
      input = doc.createElement(elemTag);
    setClasses(input, [panelClass + "__control", panelClass + "__control--" + type]);
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    setData(input, "state-num", currentNum);
    if (attrs)
      for (var attr in attrs) input.setAttribute(attr, attrs[attr]);
    "button" === elemTag && (input.innerHTML = elemText);
    canDisableAll || canBeDisabled.push(input);
    controlsPanel.appendChild(input);
    input.onclick = function() {
      if (params.target) {
        currentVal = list[currentNum = +!currentNum];
        setData(input, "state-num", currentNum);
        setData(params.target.elem, itemName, currentVal);
        saveLocalStorage(itemName, currentVal);
        if (canDisableAll && !0 === canDisableAll)
          if ("off" === currentVal) {
            ! function() {
              for (var key in targets) {
                var target = targets[key];
                "style" === target.attr && (target.elem.style[key] = "")
              }
            }();
            disableInputs()
          } else {
            applyCurrentStyles();
            canBeDisabled.forEach((function(item) {
              item.removeAttribute("disabled")
            }))
          }
      }
    }
  }

  function disableInputs() {
    canBeDisabled.forEach((function(item) {
      item.setAttribute("disabled", "")
    }))
  }

  function getCurrent(name, defaultValue) {
    var itemName = [prefix, name].join("-"),
      localStorageVal = localStorage[itemName];
    return localStorageVal || defaultValue
  }

  function saveLocalStorage(name, value) {
    var itemName = [prefix, name].join("-");
    localStorage[itemName] = value
  }

  function applyCurrentStyles() {
    for (var key in targets) {
      var target = targets[key],
        current = currents[key];
      "style" === target.attr && (target.elem.style[key] = current)
    }
  }

  function setData(elem, dataName, dataVal) {
    if (elem) {
      dataName = "data-" + dataName;
      elem.setAttribute(dataName, dataVal)
    }
  }

  function setClasses(elem, classes) {
    elem && classes.length > 0 && classes.forEach((function(className) {
      elem.classList.add(className)
    }))
  }
}


var pos_y = 0;
var lastScrollTop = 0;

$(document.body).on('touchmove', onScroll);
$(window).on('scroll', onScroll); 


var isfloating = 0;
var addCartForm = $('.cst-prod__item--part-r form');
if ( addCartForm.length ){
  var outerHeight = addCartForm.outerHeight();
  var offsetTop = addCartForm.offset().top;
}

function onScroll() {
  
  if ( ( $(window).width() > 374 ) && ( $(window).width() < 768 ) ){
    if (isfloating == 0) {

      if ($(window).scrollTop() - outerHeight - 200 > offsetTop){

        if (!$('#shopify-section-product-template').hasClass('floating-class')){
          $('#shopify-section-product-template').addClass("floating-class");
          isfloating = 1;		      	
//           if ( $(window).width() < 768 ){
            $(".close-button").addClass("should-show");
            var form_height = $(".floating-class .product-form-product-template").innerHeight() - 20;
            $(".close-button").css('bottom', form_height);
//           }
        }
      }

    }else {

      if ($(window).scrollTop() - 150 < offsetTop){
        if ($('#shopify-section-product-template').hasClass('floating-class')){
          $('#shopify-section-product-template').removeClass("floating-class");
//           if ( $(window).width() < 768 ){
            $(".close-button").removeClass("should-show");
//           }
        }      
        isfloating = 0;
      }
    }
  }
  
  
  
}

$(".close-button").click(function(){
  if ($("#shopify-section-product-template").hasClass('floating-class')){
    $('#shopify-section-product-template').removeClass("floating-class");  
    $(this).removeClass('should-show');
  }
})


$("document").ready(function(){
  
  if( window.location.href.indexOf("isPromoted") > 0 ){
    var new_url = window.location.href.split("&")[0];
    sessionStorage.setItem('isPromoted', 'true');    
    window.location.replace(new_url);       
  }
  
})

$(".lazyimg").Lazy({});

$('.attn-btn').click(function(evt) {
  evt.preventDefault();
  if(window.innerWidth >= 760){
    window.__attentive.trigger(null,null,null,272292)
   }else{
   window.__attentive.trigger(null,null,null,272292)
   }
})