import axios from 'axios';

export async function get({ request }) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return {
      status: 400,
      body: JSON.stringify({ error: 'Post ID is required' }),
    };
  }

  try {
    const response = await axios.get(`https://your-wordpress-site.com/wp-json/wp/v2/posts/${id}`);
    return {
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      status: 500,
      body: JSON.stringify({ error: 'Error fetching post' }),
    };
  }
}
