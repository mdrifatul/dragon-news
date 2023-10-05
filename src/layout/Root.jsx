import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto font-poppins">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;