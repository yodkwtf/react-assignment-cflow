export const API_URL = 'https://linkedin-api8.p.rapidapi.com/search-posts';

export const HEADERS = {
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
  'Content-Type': 'application/json',
};

export const POST_BODY_MAX_LENGTH = 300;
export const POST_LIST_LIMIT = 6;
export const POST_FEATURED_LIMIT = 3;

export const LINKS = {
  GITHUB_REPO: 'https://github.com/yodkwtf/react-assignment-cflow',
  LIVE_DEMO: 'https://react-assignment-cflow.netlify.app/',
  PORTFOLIO: 'https://yodkwtf.com',
};
