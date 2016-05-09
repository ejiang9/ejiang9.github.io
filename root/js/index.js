$(window).load(function(){

  var body = $("body"),
      universe = $("#universe"),
      gstarsys = $("#gstar-system");
      kstarsys = $("#kstar-system");
      mstarsys = $("#mstar-system");

  var init = function() {
    body.removeClass('view2D opening').removeClass('hide-UI').addClass("set-gstar").addClass("view-3D");
    document.getElementById('gstar-system').style.display = 'inline';
    document.getElementById('gstars').style.display = 'inline';
    document.getElementById('kstar-system').style.display = 'none';
    document.getElementById('kstars').style.display = 'none';
    document.getElementById('mstar-system').style.display = 'none';
    document.getElementById('mstars').style.display = 'none';
  };

  var setView = function(view) { universe.removeClass().addClass(view); };

  $("#toggle-data").click(function(e) {
    body.toggleClass("data-open data-close");
    e.preventDefault();
  });

  $("#toggle-controls").click(function(e) {
    body.toggleClass("controls-open controls-close");
    e.preventDefault();
  });

  $("#data a").click(function(e) {
    var ref = $(this).attr("class");
    gstarsys.removeClass().addClass(ref);
    kstarsys.removeClass().addClass(ref);
    mstarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
  $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
  
  $(".set-gstar").click(function() { 
    document.getElementById('gstar-system').style.display = 'inline';
    document.getElementById('gstars').style.display = 'inline';
    document.getElementById('kstar-system').style.display = 'none';
    document.getElementById('kstars').style.display = 'none';
    document.getElementById('mstar-system').style.display = 'none';
    document.getElementById('mstars').style.display = 'none';
    setView("scale-d set-gstar"); 
  });

  $(".set-kstar").click(function() { 
    document.getElementById('kstar-system').style.display = 'inline';
    document.getElementById('kstars').style.display = 'inline';
    document.getElementById('gstar-system').style.display = 'none';
    document.getElementById('gstars').style.display = 'none';
    document.getElementById('mstar-system').style.display = 'none';
    document.getElementById('mstars').style.display = 'none';
    setView("scale-d set-kstar"); 
  });
  $(".set-mstar").click(function() { 
    document.getElementById('mstar-system').style.display = 'inline';
    document.getElementById('mstars').style.display = 'inline';
    document.getElementById('gstar-system').style.display = 'none';
    document.getElementById('gstars').style.display = 'none';
    document.getElementById('kstar-system').style.display = 'none';
    document.getElementById('kstars').style.display = 'none';
    setView("scale-d set-mstar"); 
  });

  
  init();

});