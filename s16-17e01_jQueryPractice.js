//.css(property, value)/(object) | JS: .style
$("div").css("background", "purple");
$(".highlight").css("width", "200px");
$("div:first-of-type").css("color", "pink");

//.text()/(String) | JS: .textContent
$("h1").text();
$("h1").text("jQuery Methods Demo Page"); //treats the content as text, even if we type "<h1>Title</h1>"

//.html()/(htmlCode) | JS: .innerHTML
$("ul").html();
$("ul").html("<li>I hacked your UL!</li><li>Another li</li>");

//.attr(attributeName)/(attributeName, value)/(object) | 
$("input").attr("type");
$("input").attr("type", "text");
//$("img").last().attr(...); .last() method to get the last img of the list given by jQuery

//.val()/(value) | JS: .value()
$("input").val();
$("select").val();
$("input").val("input updated"); //eg if we wanted to clear the input box after submitting an input

//Methods to manipulate classes
//.addClass() | JS: classList.add()
$("h1").addClass("correct");
$("li").addClass("done");

//.removeClass() | JS: classList.remove()
$("h1").removeClass("correct");

//.toggleClass() | JS: classList.toggle()
$("li").first().toggleClass("done");