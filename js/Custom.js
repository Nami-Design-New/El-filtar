$(document).ready(function () {
  // navbar hide in scroll down
  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     $("header").css({
  //       top: "0px",
  //     });
  //   } else {
  //     $("header").css({
  //       top: "-100%",
  //     });
  //   }
  //   prevScrollpos = currentScrollPos;
  // };
  //navbar ainmation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if (appScroll >= 1) {
      $("header .navbar").addClass("headerAnimate");
    } else {
      $("header .navbar").removeClass("headerAnimate");
    }
  });
  //MainSlider
  var mainSlider = new Swiper(".mainSliderContainer", {
    // spaceBetween: -10,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    // effect: "fade",
    speed: 700,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  //product Details Slider
  var productDetailsSlider = new Swiper(".productDetailsSlider", {
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: ".productDetailsSliderPagination",
      clickable: true,
    },
    speed: 700,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
  //products Slider
  var specialProductsSlider = new Swiper(".specialProductsSlider", {
    navigation: {
      nextEl: ".specialProductsSliderNext",
      prevEl: ".specialProductsSliderPrev",
    },
    // centeredSlides: true,
    // loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
  //products Slider
  var productsSlider = new Swiper(".productsSlider", {
    navigation: {
      nextEl: ".productsSliderNext",
      prevEl: ".productsSliderPrev",
    },
    // centeredSlides: true,
    // loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      340: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  });
  //all Vendors Slider
  var allVendorsSlider = new Swiper(".allVendorsSlider", {
    navigation: {
      nextEl: ".allVendorsSliderNext",
      prevEl: ".allVendorsSliderPrev",
    },
    // centeredSlides: true,
    // loop: true,
    slidesPerView: "auto",
    spaceBetween: 5,
    speed: 800,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      340: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      },
      991: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 8,
      },
    },
  });
  // count Down Date
  var countDownDate = new Date("nov 29, 2022").getTime();
  var myFunc = setInterval(function () {
    var now = new Date().getTime();
    var timeLeft = countDownDate - now;
    var month = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    // Result is output to the specific element
    document.getElementById("month").innerHTML = month + "<span> شهر </span>";
    document.getElementById("days").innerHTML = days + "<span> يوم </span>";
    document.getElementById("hours").innerHTML = hours + "<span> ساعة </span> ";
  }, 1000);
  // quantity
  $(".plus").click(function () {
    $(this)
      .prev()
      .val(+$(this).prev().val() + 1);
  });
  $(".min").click(function () {
    if ($(this).next().val() > 0)
      $(this)
        .next()
        .val(+$(this).next().val() - 1);
  });
  // show div
  $("#changeDate").change(function () {
    $(".filtarDates").slideToggle(300);
  });
});
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
// ////////////////////////////////////////
$(document).ready(function () {
  //spinner
  $(".loader ").fadeOut("slow");
  // select2
  $(".select2search").select2();
  $(".select2").select2({
    minimumResultsForSearch: -1,
  });
  // odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  // aos
  AOS.init({
    offset: 60,
    delay: 50,
    duration: 500,
    // easing: "linear",
    once: true,
  });
  //aos Delay
  function aosDelay() {
    var class_ = "mainSection";
    $("section").each(function (i) {
      class_ = $(this).attr("class");
      $("." + class_ + " div[data-aos]").each(function (i) {
        var d = 0;
        d = i * 100;
        $(this).attr("data-aos-delay", d);
        d = 0;
      });
    });
  }
  aosDelay();
  // dropify
  $(".dropify").dropify();
  // tooltip
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
// /////////////////////////////
// /////////////////////////////
// /////////////////////////////
// custom cursor
var cursor = document.querySelector(".customCursor");
var cursorinner = document.querySelector(".customCursorInner");
var a = document.querySelectorAll("a");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});
document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("customClick");
});
document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("customClick");
});
a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("customHover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("customHover");
  });
});
