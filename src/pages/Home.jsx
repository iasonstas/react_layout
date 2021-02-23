import React, { useState, useEffect, useContext } from 'react';
import 'assets/styles/home.scss';
import axios from 'axios';
import SectionOne from 'components/section-one/SectionOne';
import SectionTwo from 'components/section-two/SectionTwo';
import { SectionContext } from 'lib/context/context';
import Loader from 'lib/loader/Loader';
import { NavWithDot } from 'components/nav-with-dot/NavWithDot';

export default function Home() {
  const { section, setSection } = useContext(SectionContext);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const url = 'https://voda-react-assessment.herokuapp.com/home';
      const data = await axios(url);
      setResult(data);
      setLoading(false);
    }
    return fetchData();
  }, []);

  //  For debugging and undefined errors.
  const description = (result.data && result?.data['0'].description) || '';
  const id = (result.data && result?.data['0'].id) || '';
  const sectionOne = (result.data && result?.data['0']?.sections[0]?.images) || [];
  const sectionTwo = (result.data && result?.data['0']?.sections[1]) || [];

  return (
    <main className="container-home" id={id}>
      <SectionTabs description={description} />
      {/* Loader is for better user experience and checks if the async fetchData has returned values */}
      {!loading ? (
        section ? (
          <SectionOne sectionOne={sectionOne} />
        ) : (
          <SectionTwo sectionTwo={sectionTwo} />
        )
      ) : (
        <Loader show={loading} />
      )}
    </main>
  );
}

//  Some components are in the same jsx file for better guidance.
const sectionOne = { url: '/section-one', desc: 'Section 1' };
const sectionTwo = { url: '/section-two', desc: 'Section 2' };
const styles = { color: 'white', width: '100%' };

function SectionTabs({ description }) {
  const { section, setSection } = useContext(SectionContext);

  return (
    <div className="">
      <h3 className="page-description">{description}</h3>
      {/* Nav With Dot became a reusable component. Probably in an enterprize enviroment with changing requests example(adding one navbar item) It would not be worthy. */}
      <NavWithDot options={{ one: sectionOne, two: sectionTwo, styles }} value={{ section, setSection }} />
    </div>
  );
}
