import axios from 'axios';

export default async (req, res) => {
  const {
    id,
    slug,
    title,
    subtitle,
    cover,
    description,
    address,
    opening,
    phone,
    email,
    website,
    type,
    labels,
  } = req.body;

  const query = `mutation {
    createRevision(data: {
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
        set: [${labels.join(',')}]
      }
      place: {
        connect: { id: "${id}" }
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
