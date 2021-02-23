import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'template/layouts/components/Nav/Nav.scss';
import Loader from 'lib/loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavWithDot } from 'components/nav-with-dot/NavWithDot';
import kebabCase from 'lodash.kebabcase';
import 'assets/styles/global.scss';
import CustomSelect from 'components/custom-select/CustomSelect';
import SimpleSlider from 'components/simple-slider/SimpleSlider';
import history from 'history';

// Static Generation in Next has an advantage on content. Because it renders all the pages at build time.
// If the photos change often (propably not with these large images) then we could use server side rendering getServerSideProps

export default function Nav() {

  const [data, setData] = useState([]);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const urlMenu = 'https://voda-react-assessment.herokuapp.com/menu';
      const resultMenu = await axios(urlMenu);
      setMenu(resultMenu.data);
      const urlSlider = 'https://voda-react-assessment.herokuapp.com/slider';
      const result = await axios(urlSlider);
      setData(result);
      setLoading(false);
    }
    fetchData();
  }, []);

  return !loading ? (
    <div className="bg-dark">
      <Navbar menu={menu} />
      <SimpleSlider data={data?.data} />
    </div>
  ) : (
    <Loader show={loading} />
  );
}

function Navbar({ menu }) {
  const [search, setSearch] = useState(true);
  const [section, setSection] = useState(true);

  // When Implementing business rules in a project we create dynamic slugs with kebabCase

  const sectionOne = (menu && { url: '/', desc: menu[0]?.title }) || {};
  const sectionTwo = (menu && { url: `/${kebabCase(menu[1]?.title.toLowerCase())}`, desc: menu[1]?.title }) || {};
  const styles = { color: 'white', width: '50%' };

  return (
    <nav className="navbar-dark">
      <NavWithDot options={{ one: sectionOne, two: sectionTwo, styles }} value={{ section, setSection }} />
      <div className="search-select-container">
        {search ? (
          <FontAwesomeIcon icon={faSearch} onClick={() => setSearch(false)} className="pointer" />
        ) : (
          <CustomSelect />
        )}
      </div>
    </nav>
  );
}
