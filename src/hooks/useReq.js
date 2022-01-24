import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useReq() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    request()
  }, [repo]);

  const request = () => {
    axios.get('https://api.github.com/users/bruna-fonseca/repos')
    .then((res) => setRepo(res.data))
    .catch((err) => console.log(err));
  }

  return {
    repo,
  };
};
