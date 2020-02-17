import axios from 'axios';

export default async (req, res) => {
  const query = `query allPlaces {
    places {
      slug
      geolocation {
        latitude
        longitude
      }
      revisions(orderBy: updatedAt_DESC, first: 1) {
        title
        subtitle
        cover
      }
    }
  }`;

  const response = await axios({
    method: 'post',
    url: process.env.GRAPHCMS_ENDPOINT,
    data: {
      query,
    },
  });

  const hasErrors = response.data.errors !== undefined;

  res.statusCode = hasErrors ? 500 : 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response.data.data));
};
