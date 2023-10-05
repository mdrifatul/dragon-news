import moment from 'moment';
import logo from '../../../assets/logo.png';

const Header = () => {
  return (
    <div className='mt-12 mb-7 text-center'>
        <img className='mx-auto' src={logo} alt="" />
        <p className='text-gray-400 mt-5 mb-2'>Journalism Without Fear or Favour</p>
        <p className='text-xl text-gray-500'>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;