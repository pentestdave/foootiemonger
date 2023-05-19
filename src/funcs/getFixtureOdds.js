import axios from 'axios';
import prompt from 'prompt';
import { table } from 'table';
import dateFormat from 'dateformat';

function getFixtureOdds() {
  //2023-05-20 yyyy-MM-dd
  prompt.get(['Competition', 'Date'], (err, result) => {
    axios
      .get(
        `${process.env.ODDS}` +
          `/GameOddsByDate/${result.Competition}/${result.Date}?key=${process.env.KEY}`
      )
      .then((response) => {
        response.data.forEach((fixture) => {
          const data = [
            [
              `${fixture.Status}`,
              `${fixture.HomeTeamName}`,
              'VS',
              `${fixture.AwayTeamName}`,
              `${dateFormat(
                fixture.DateTime,
                'dddd, mmmm dS, yyyy, h:MM:ss TT'
              )}`,
              `${showOdds(fixture)}`,
            ],
          ];

          const config = {
            columns: [
              { alignment: 'center' },
              { alignment: 'center' },
              { alignment: 'center' },
              { alignment: 'center' },
            ],
            header: {
              alignment: 'center',
              content: 'Match Day',
            },
          };

          console.log(table(data, config));
        });
      })
      .catch((error) => {
        console.log(console.error(error));
      });
  });
}

function showOdds(fixture) {
  fixture.PregameOdds.forEach((odd) => {
    const data = [
      [
        `${odd.HomeMoneyLine}`,
        `${odd.AwayMoneyLine}`,
        `${odd.HomePointSpread}`,
        `${odd.AwayPointSpread}`,
        `${odd.SportsbookUrl}`,
      ],
    ];

    const config = {
      columns: [
        { alignment: 'center' },
        { alignment: 'center' },
        { alignment: 'center' },
        { alignment: 'center' },
        { alignment: 'center' },
      ],
      header: {
        alignment: 'center',
        content: 'Sport Book',
      },
    };

    console.log(table(data, config));
  });
}

export default getFixtureOdds;
