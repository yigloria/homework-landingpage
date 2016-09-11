$(document).ready(start);

function start() {
$("#show_content").click(showingParagraph);
$(".readless").click(hideParagraph);
$(".learnmore").click(showingMore);
$("hide").click(hidePara);
// $("#learnmoretext").click(showingMore);
}

function showingParagraph(event) {
event.preventDefault();
$("#show-this-on-click").slideDown();
$(".readmore").hide();
$(".readless").show();
}

function hideParagraph(event) {
event.preventDefault();
$("#show-this-on-click").slideUp();
$(".readmore").show();
$(".readless").hide();

}

function showingMore(event) {
event.preventDefault();
$(".learnmore").hide();
$("#learnmoretext").slideDown();
}

function hidePara(event) {
event.preventDefault();
$(".hide").hide();
$("#learnmoretext").show();
}
