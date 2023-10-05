import Marquee from "react-fast-marquee";

const BreadkingNews = () => {
  return (
    <div className="flex bg-slate-300 p-3">
      <button className="btn rounded-none bg-[#D72050] hover:bg-[#d35c7c] text-white mr-4">Latest</button>
      <Marquee className="text-bold text-black cursor-pointer" pauseOnHover={true} speed={100}>
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreadkingNews;