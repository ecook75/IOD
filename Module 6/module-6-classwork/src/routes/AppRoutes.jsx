import AboutPage from "../pages/AboutPage";
import Homepage from "../pages/Homepage";
import DashboardPage, { DashboardMessages, DashboardTasks } from "../pages/DashboardPage";
import PageNotFound from "../pages/PageNotFound";
import { Routes, Route } from "react-router-dom";
import PostsPage, { Post, PostList } from "../pages/PostsPage";
import LoginForm from "../components/LoginForm";
import ProtectedRoute from "./ProtectedRoutes";
import BitcoinRates from "../components/BitcoinRates";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      
      {/* <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route> */}
        // update AppRoutes.jsx to protect the Dashboard
{/* <Route path="dash" element={<ProtectedRoute>
<DashboardPage {...props} /></ProtectedRoute>}>
<Route path="messages" element={<DashboardMessages />} />
<Route path="tasks" element={<DashboardTasks />} />
</Route>
<Route path="login" element={<LoginForm/>} />
      <Route path="/about" element={<AboutPage {...props} />} />

      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        <Route path="id" element={<Post />} />
        </Route> */}
        {/* <Homepage {...props} /><ProtectedRoute> */}
        <Route path="home" element={<Homepage />} />
        <Route path="bitcoin" element={<BitcoinRates />} />
        <Route path="login" element={<LoginForm />} />
          
        {/* </ProtectedRoute>
       */}

      <Route path="*" element={<PageNotFound />} />
    </Routes>
    
  );
}
export default AppRoutes;