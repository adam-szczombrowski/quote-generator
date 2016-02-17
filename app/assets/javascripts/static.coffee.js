quotes = [["A goal is not always meant to be reached, it often serves simply as something to aim at.","Brucee Lee"],
 ["To hell with circumstances. I create opportunities.", "Bruce Lee"],
 ["Do not pray for an easy life, pray for the strength to endure a difficult one.","Bruce Lee"],
 ["Success consists of going from failure to failure without loss of enthusiasm.", "Winston Churchill"],
 ["To improve is to change; to be perfect is to change often.", "Winston Churchill"],
 ["Attitude is a little thing that makes a big difference.","Winston Churchill"],
 ["A pessimist sees the difficulty in every opportynity, an optimist sees the opportunity in every difficulty.", "Winson Churchill"],
 ["The only way to have a friend is to be one.", "Ralph Waldo Emerson"],
 ["Always do what you are afraid to do","Ralph Waldo Emerson"],
 ["Nobody can bring you peace but yourself.","Ralph Waldo Emerson"]];

colors = ["#28191E", "#36181A", "#53181A","#762923","#A64630","#2C95A2","#364038", "#177c19", "#069256", "#389874", "#7c1717",
"#ffa700", "#FB2E01"];

function change_color(colors){
  var col = colors[Math.floor(Math.random() * colors.length)];
  $("body").css("background-color", col);
  $(".quote-box").css("border-color", col);
  $(".quote-box").css("color", col);
  $(".share").css("background-color", col);
  $(".new-quote").css("background-color", col);
}

function change_quote()
{
  var index = Math.floor(Math.random() * quotes.length);
        $(".quote").text("'" + quotes[index][0] + "'");
        $(".author").text("- " + quotes[index][1]);
        change_color(colors);
      var tweetQuote = "https://twitter.com/intent/tweet?text=" + "\"" + quotes[index][0] + " " + quotes[index][1] +"\"";
        $(".twitter-share-button").attr("href",tweetQuote);
        var ref = $(".twitter-share-button").attr('href');
        twttr.widgets.load(document.getElementById("twitterid"))
}

$( document ).ready(function() {
  $(".new-quote").click(change_quote);
});
