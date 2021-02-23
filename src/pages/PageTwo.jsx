import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'lib/loader/Loader';
import PageTiles from 'components/page-tiles/page-tiles';
import 'assets/styles/page-two.scss';

export default function PageTwo() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const url = 'https://voda-react-assessment.herokuapp.com/page';
      const data = await axios(url);
      setResult(data);
      setLoading(false);
    }
    return fetchData();
  }, []);

  const description = (result.data && result?.data['0'].description) || '';
  const PageList = (result.data && result?.data['0'].tiles) || [];

  return !loading ? (
    <div className="container-two">
      <h3 className="page-description">{description}</h3>
      <div className="tiles-container">
        <PageTiles PageList={PageList} />
      </div>
    </div>
  ) : (
    <Loader show={loading} />
  );
}
