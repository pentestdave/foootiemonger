import axios from 'axios';
import { table } from 'table';

function getStadiumsInfo() {
  axios
    .get(`${process.env.URL}` + `/Venues?key=${process.env.KEY}`)
    .then((response) => {
      response.data.forEach((stadium) => {
        const data = [
          [
            `${stadium.VenueId}`,
            `${stadium.Name}`,
            `${stadium.Country}`,
            `${stadium.Capacity}`,
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
          ],
          header: {
            alignment: 'center',
            content: 'Stadium Information',
          },
        };
        console.log(table(data, config));
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getStadiumsInfo;
