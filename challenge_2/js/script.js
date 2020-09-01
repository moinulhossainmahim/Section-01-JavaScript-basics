var JohnsTeamScoreInGame1 = 89;
var JohnsTeamScoreInGame2 = 120;
var JohnsTeamScoreInGame3 = 103;

var MikesTeamScoreInGame1 = 116;
var MikesTeamScoreInGame2 = 94;
var MikesTeamScoreInGame3 = 123;

var sumScoreOfJohnsTeam = ( JohnsTeamScoreInGame1 + JohnsTeamScoreInGame2 + JohnsTeamScoreInGame3 );
console.log( 'Total Score of John\'s team is ' + sumScoreOfJohnsTeam  );

var averageScoreOfJohnsTeam = ( sumScoreOfJohnsTeam/3 );
console.log( 'Average Score of John\'s team is ' + averageScoreOfJohnsTeam  );


var sumScoreOfMikesTeam = ( MikesTeamScoreInGame1 + MikesTeamScoreInGame2 + MikesTeamScoreInGame3 );
console.log( 'Total Score of Mike\'s team is ' + sumScoreOfMikesTeam  );

var averageScoreOfMikesTeam = ( sumScoreOfMikesTeam/3 );
console.log( 'Average Score of Mike\'s team is ' + averageScoreOfMikesTeam  );

var winTeam = averageScoreOfJohnsTeam > averageScoreOfMikesTeam ? 'John\'s team wins the match according to average score'
 : 'Mike\'s team wins the match according to average score';

 console.log( winTeam );