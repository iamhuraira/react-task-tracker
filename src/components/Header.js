import propTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onshowtaskform, showAdd }) => {
  const onclick = () => {};
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd? 'red': 'green'} text={showAdd ? 'Close': 'Add'} onclick={onshowtaskform} />
    </header>
  );
};
Header.defaultProps ={
  title : 'Task Tracker'
}
Header.propTypes ={
  title : propTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color : 'red',
//   backgroundColor : 'green',
//   width : '50%',
//   margin:'auto',
//   marginTop : '30px'
// }
export default Header;