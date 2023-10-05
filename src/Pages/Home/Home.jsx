
import { useLoaderData } from 'react-router-dom';
import LeftsideNav from './../LeftsideNav/LeftsideNav';
import RightsideNav from './../RightsideNav/RightsideNav';
import Header from './../Shared/Header/Header';
import Navbar from './../Shared/Navbar/Navbar';
import BreadkingNews from './BreadkingNews';
import NewsCard from './NewsCard';



const Home = () => {
  const News = useLoaderData();
  return (
    <div>
      <Header></Header>
      <BreadkingNews></BreadkingNews>
      <Navbar></Navbar>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className=''><LeftsideNav></LeftsideNav></div>
        <div className='md:col-span-2'>
          {
            News.map(aNews =><NewsCard key={aNews._id} news={aNews}></NewsCard>
              )
          }
          </div>
        <div className=''><RightsideNav></RightsideNav></div>
      </div>
    </div>
  );
};

export default Home;