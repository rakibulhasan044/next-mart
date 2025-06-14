import { getCurrentUser } from "@/services/authService";


const HomePage = async () => {

  const user = await getCurrentUser()
  console.log(user);
  return (
    <div>
      <h1>Welcome to NextMart home page</h1>
    </div>
  );
};

export default HomePage;