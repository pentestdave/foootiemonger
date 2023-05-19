import axios from 'axios';
import { table } from 'table';

function getAllCompetitions() {
  axios
    .get(`${process.env.URL}` + `/Competitions?key=${process.env.KEY}`)
    .then((response) => {
      response.data.forEach((competition) => {
        const data = [
          [
            `${competition.CompetitionId}`,
            `${competition.Name}`,
            `${competition.Key}`,
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
          ],
          header: {
            alignment: 'center',
            content: 'Football Competition',
          },
        };
        console.log(table(data, config));
      });
    })
    .catch((error) => {
      console.log(console.error(error));
    });
}

export default getAllCompetitions;
