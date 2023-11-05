import { useNavigate } from "react-router-dom";
import GithubUser from "./GithubUser";

const ShowGithubUser = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/users');
  };

  return (
    <div>
      <h1>User Profile</h1>
      <button onClick={handleBack}>Back</button>
      <GithubUser username="IluHeart" />
    </div>
  );
};

export default ShowGithubUser;
