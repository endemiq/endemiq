import axios from 'axios';

export const upload = async file => {
  const data = new FormData();
  await data.append('file', file);
  await data.append('upload_preset', process.env.CLOUDINARY_PRESET);

  const url = await axios
    .post(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD}/image/upload`,
      data,
      {
        headers: { 'content-type': 'multipart/form-data' },
      }
    )
    .then(res => res.data.secure_url);

  return url;
};
