  $(document).ready(function () {
    $(".ul-menu li").hover(function (e) {
      let id = $(this).attr('id');
      var ul;
      switch (id) {
        case "Foreign":
          ul = document.getElementById("list-nav-film-Foreign");
          // alert(ul);

          $(ul).stop().slideDown(600);
          
          $(ul).hover(function () {
              // over
              console.log("22");
              $(ul).stop().slideDown(600);
            }, function () {
              // out
              console.log("33");
               $(ul).stop().slideUp(600);
            }
          );
          
          
          break;
        case "parsian":

          break;
        case "Bests":

          break;
        case "years":

          break;

        default:
          break;
      }

    }, function () {
      $("#list-nav-film-Foreign").stop().slideUp(500);
      //$(".ul-menu ul").stop().slideUp(500);
      console.log("11");
      // out
    });

  });