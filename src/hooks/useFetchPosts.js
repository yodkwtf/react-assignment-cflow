import { useEffect, useState } from 'react';
import { API_URL, HEADERS } from '../utils/constants';

const useFetchPosts = (keyword = 'tech') => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: HEADERS,
          body: JSON.stringify({
            keyword: keyword || 'tech',
            sortBy: 'date_posted',
            page: 1,
            fromMember: [],
            fromCompany: [],
            mentionsMember: [],
            mentionsOrganization: [],
            authorIndustry: [],
            authorCompany: [],
            authorTitle: '',
          }),
        });
        const data = await response.json();
        setPosts(data?.data?.items || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keyword]);

  return { posts, loading, error };
};

export default useFetchPosts;
