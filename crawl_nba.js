var request = require("request"),
cheerio = require("cheerio"),
nba_url = 'http://stats.nba.com/stats/leaguedashplayerptshot?CloseDefDistRange=&College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&DribbleRange=&GameScope=&GameSegment=&GeneralRange=Overall&Height=&LastNGames=0&LeagueID=00&Location=&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2015-16&SeasonSegment=&SeasonType=Playoffs&ShotClockRange=&ShotDistRange=&StarterBench=&TeamID=0&TouchTimeRange=&VsConference=&VsDivision=&Weight=&closestDef10='
var url = 'http://stats.nba.com/player/#!/201142/tracking/shots/?p=kevin-durant'
 
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      nba_results = $('.player').innerText;
      
    console.log("It’s " + nba_results + " nba score.");
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});