import axios from 'axios';
import prompt from 'prompt';
import { table } from 'table';

function getCompetitionStandings() {
  prompt.start();
  prompt.get(['Competition'], (err, result) => {
    axios
      .get(
        `${process.env.URL}` +
          `/Standings/${result.Competition}/2023?key=${process.env.KEY}`
      )
      .then((response) => {
        response.data.forEach((standing) => {
          standing.Standings.forEach((team) => {
            const data = [
              [
                `${team.Order}`,
                `${team.Name}`,
                `${team.Games}`,
                `${team.Wins}`,
                `${team.Losses}`,
                `${team.Draws}`,
              ],
            ];

            const config = {
              columnDefault: {
                width: 15,
              },
              columns: [
                { alignment: 'center' },
                { alignment: 'center' },
                { alignment: 'center' },
                { alignment: 'center' },
                { alignment: 'center' },
                { alignment: 'center' },
              ],
              header: {
                alignment: 'center',
                content: 'Team Standing',
              },
            };
            console.log(table(data, config));
          });
        });
      })
      .catch((error) => {
        console.log(console.error(error));
      });
  });
}

export default getCompetitionStandings;
