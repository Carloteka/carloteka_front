export const reactSelectStyle = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#000',
    margin: '0',
    padding: '0',
    transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
  }),
  control: (provided, { isFocused }) => ({
    ...provided,
    '&:hover': {
      borderColor: 'black',
    },

    height: '50px',
    boxShadow: isFocused ? '0 4px 4px 0 #00000025' : 'none',
    border: isFocused ? '2px solid #2d3f24' : '1px solid #a7a5a3',
    borderRadius: '0',
    cursor: 'pointer',
  }),
  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    padding: '12px 16px 13px 16px',
    display: 'flex',
    alignItems: 'stretch',
    borderBottom: '0.5px solid #a7a5a3',
    background: isFocused ? '#2d3f24' : 'transparent',
    color: isFocused
      ? '#fff'
      : isSelected
      ? '#101010'
      : 'rgba(16, 16, 16, 0.8)',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#2d3f24',
    },
  }),
};
