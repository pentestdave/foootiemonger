import * as env from 'dotenv';
env.config();
import prompt from 'prompt';
import getAllCompetitions from './funcs/getAllCompetition.js';
import getCompetitionStandings from './funcs/getCompetitionStandings.js';
import getFixtureOdds from './funcs/getFixtureOdds.js';
import getStadiumsInfo from './funcs/getStadiumsInfo.js';

prompt.start();
prompt.get(['Feature'], (err, result) => {
  const userOption = result.Feature.toLowerCase();

  switch (userOption) {
    case 'all competition':
      getAllCompetitions();
      break;
    case 'stadiums information':
      getStadiumsInfo();
      break;
    case 'competition standings':
      getCompetitionStandings();
      break;
    case 'fixture odds':
      getFixtureOdds();
      break;
    default:
      console.log(
        `[!] Input command: \"${userOption}\" not found, pls try again!`
      );
      break;
  }
});
