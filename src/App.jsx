import Login from "./pages/Login";
import TaskBoard from "./pages/TaskBoard";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <>
      {isLoggedIn ? <TaskBoard /> : <Login />}
    </>
  );
}

export default App;
