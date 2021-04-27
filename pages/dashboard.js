import useAuth from './../hooks/useAuth';

function Dashboard() {
  const { user } = useAuth();

  return <h1>Dash: {user?.email}</h1>;
}

export default Dashboard;