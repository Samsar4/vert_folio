var	$parent = $("#main"),
		$aside = $("#aside"),
		$asideTarget = $aside.find(".aside--details"),
		$asideClose = $aside.find(".close"),
		$tilesParent = $(".tiles-a"),
		$tiles = $tilesParent.find("a"),
		slideClass = "show-detail";

		// tile click
		$tiles.on("click", function(e){
			e.preventDefault();
			e.stopPropagation();
			if(!$("html").hasClass(slideClass)){
				$tiles.removeClass("active");
				$(this).addClass("active");
				$(this).attr("aria-expanded","true");
				loadTileData($(this));
			}else{
				killAside();
				$(this).attr("aria-expanded","false");
			}
		});

		// kill aside
		$asideClose.on("click", function(e){
			e.preventDefault();
			killAside();
		});

		// load data to aside
		function loadTileData(target){
			var $this = $(target),
					itemHtml = $this.find(".details").html();
					$asideTarget.html(itemHtml);
					showAside();
		}

		// show/hide aside
		function showAside(){
			if(!$("html").hasClass(slideClass)){
				$("html").toggleClass(slideClass);
				$aside.attr("aria-hidden","false");
				focusCloseButton();
			}
		}

		// handle esc key
		window.addEventListener("keyup", function(e){

			// grab key pressed
			var code = (e.keyCode ? e.keyCode : e.which);

			// escape
			if(code === 27){
				killAside();
			}

		}, false);

		// kill aside
		function killAside(){
			if($("html").hasClass(slideClass)){
				$("html").removeClass(slideClass);
				sendFocusBack();
				$aside.attr("aria-hidden","true");
				$tiles.attr("aria-expanded","false");
			}
		}

		// send focus to close button
		function focusCloseButton(){
			$asideClose.focus();
		}

		// send focus back to item that triggered event
		function sendFocusBack(){
			$(".active").focus();
		}

		// handle body click to close off-canvas
		$parent.on("click",function(e){
			if($("html").hasClass(slideClass)){
				killAside();
			}
		});
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

// TILT.JS FUNC
$('.tilt0').tilt({
    glare: true,
    maxGlare: .15
})

// TEXT ROTATE -- TYPEWRITER
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
