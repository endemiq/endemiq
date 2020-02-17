import axios from 'axios';

export default async (req, res) => {
  const { slug } = req.body;
  const query = `query Place {
    place(where: {slug: "${slug}"}) {
      id,
      geolocation {
        longitude
        latitude
      }
      revisions(orderBy: updatedAt_DESC, first: 1) {
        slug
        title
        subtitle
        cover
        description
        address
        opening
        phone
        email
        website
        type
        labels
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
