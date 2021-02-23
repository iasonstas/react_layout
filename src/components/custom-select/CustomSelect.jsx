import { SectionContext } from 'lib/context/context';
import { useHistory } from 'react-router-dom';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import Select, { components } from 'react-select';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const options = [
  {
    label: 'Home',
    options: [
      { label: 'All', value: '/' },
      { label: 'Section 1', value: '/section-one' },
      { label: 'Section 2', value: '/section-two' }
    ]
  },
  {
    label: 'Page',
    options: [{ label: 'Page 2', value: '/page-2' }]
  }
];

export default function CustomSelect() {
  const { setSection } = useContext(SectionContext);
  const history = useHistory(SectionContext);

  const handleChange = e => {
    history.push(e.value);
    const value = e.value !== '/section-two' ? true : false;
    setSection(value);
  };

  return (
    <Select
      options={options}
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          neutral0: '#343A40',
          neutral20: '#fff', // next to placeholder
          neutral30: '#194e83',
          neutral50: 'white', // Placeholder color,
          neutral80: 'white', //cursor
          primary25: '#194e83',
          primary50: '#5295d8' //on key down option sec
        }
      })}
      components={{ DropdownIndicator }}
      onChange={handleChange}
      isSearchable
      placeholder={''}
      classNamePrefix="select-cont"
      styles={customStyles}
    />
  );
}

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon icon={faArrowAltCircleRight} className="pointer" />
    </components.DropdownIndicator>
  );
};

const customStyles = {
  container: (base, index) => ({
    ...base,
    width: '300px',
    border: 'none'
  }),
  control: base => ({
    ...base,
    border: 'none',
    borderBottom: '1px solid #2d68ac',
    boxShadow: 'none',
    height: '40px'
  }),
  indicatorSeparator: base => ({
    ...base,
    display: 'none'
  }),
  option: base => ({
    ...base,
    textIndent: '10px'
  })
};
