function getMenuCode(baseMenuCode, code)
{
  if (!code)
  {
    return baseMenuCode;
  }

  if (baseMenuCode == '')
  {
    return code;
  }

  return baseMenuCode + '-' + code;
}

function process(baseurl, arr, ul, baseMenuCode, menuHierarchy) {

  $.each(arr, function (index, value) {
    //check
    if(value.foldable)
    {
      if(!value.url)
        throw new Error("Foldable element '" + value.title + "' must bear an url");

      if(!value.children)
        throw new Error("Foldable element '" + value.title + "' must bear children");

      if(value.foldable != true)
        throw new Error("The value expected in the foldable information is 'true'");

      if(!value.code)
        throw new Error("Missing code for parent tree structure '" + value.title + "'");

      if(value.code.indexOf('-') != -1)
        throw new Error("No dash ('-') is allowed within a code. Please fix '" + value.code + "'");
    }

    var li = $("<li></li>");

    var el;
    if (value.url) {

      var codeForUrl = getMenuCode(baseMenuCode, value.code);
      var url = baseurl + value.url;
      if(codeForUrl != undefined &&  codeForUrl.length > 0)
      {
        url = url + "?menu=" + codeForUrl;
      }

      el = $('<a></a>');
      el.attr('href', url);
    } else {
      el = $('<label></label>');
    }
    el.text(value.title);

    var hasOpened = false;
    if(value.foldable == true)
    {
      var arrow = $('<span></span>');
      arrow.addClass('arrow_closed');

      li.click(function(){
        arrow.addClass('arrow_opened');
        $(this).children('ul').show();
      });
      el.append(arrow);

      if(value.code == menuHierarchy[menuHierarchy.length-1])
      {
        hasOpened = true;
        arrow.addClass('arrow_opened');
        menuHierarchy.pop();
      }
    }

    li.append(el);
    ul.append(li);

    if (value.children) {
      var inner_ul = $('<ul></ul>');
      li.append(inner_ul);
      process(baseurl, value.children, inner_ul, getMenuCode(baseMenuCode, value.code), menuHierarchy);
    }

    if(value.foldable == true)
    {
      if(!hasOpened){
        li.children('ul').hide();
      }
    }
  });
}

/* from http://stackoverflow.com/a/901144 */
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
