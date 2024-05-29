import { useSelector } from "react-redux";
import DNavbar from "../../components/Navbars/DNavbar";

const Dashboard = () => {
  const user_data = useSelector((reducers) => reducers.userDataReducer);

  return (
    <main>
      <DNavbar />
      <div className="p-16">
        <h1>
          Welcome {user_data.firstName} {user_data.lastName}!
        </h1>
      </div>
    </main>
  );
};

export default Dashboard;
