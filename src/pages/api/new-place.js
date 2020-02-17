import axios from 'axios';

export default async (req, res) => {
  const {
    slug,
    title,
    subtitle,
    cover,
    description,
    geolocation,
    address,
    opening,
    phone,
    email,
    website,
    type,
    label,
  } = req.body;

  const query = `mutation {
    createPlace(data: {
      status: DRAFT
      slug: "${slug}"
      geolocation: {
        latitude: ${geolocation.latitude}
        longitude: ${geolocation.longitude}
      }
      revisions: {
        create: [
          {
            status: DRAFT
            slug: "${slug}"
            title: "${title}"
            subtitle: "${subtitle}"
            cover: "${cover}",
            description: "${description}"
            opening: "${opening}"
            address: "${address}"
            phone: "${phone}"
            email: "${email}"
            website: "${website}"
            type: ${type}
            labels: {
              set: [${label.join(',')}]
            }
          }
        ]
      }
    }) {
      id
    }
  }`;

  const response = await axios({
    method: 'post',
    url: process.env.GRAPHCMS_ENDPOINT,
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
    data: {
      query,
    },
  });

  const hasErrors = response.data.errors !== undefined;

  res.statusCode = hasErrors ? 206 : 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(hasErrors ? response.data.errors : response.data.data)
  );
};
