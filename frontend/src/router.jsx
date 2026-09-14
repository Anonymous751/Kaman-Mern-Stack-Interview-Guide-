import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";

/* ------------------ Main Pages ------------------ */
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

/* ------------------ Quick Access ------------------ */
import CrudApi from "./pages/quickAccess/CrudApi";
import FolderStructure from "./pages/folderStructure/FolderStructure";
import ReactFormikValidation from "./pages/quickAccess/ReactFormikValidation";
import ApiCalling from "./pages/quickAccess/ApiCalling";
import SearchFilter from "./pages/quickAccess/SearchFilter";
import SearchFilterBackend from "./pages/quickAccess/SearchFilterBackend";

/* ------------------ Tasks / Projects ------------------ */
import TasksPage from "./pages/tasks/TasksPage";
import TaskListPage from "./pages/tasks/TaskListPage";
import UserFormsPage from "./pages/tasks/projects/todoListApp/pages/UsersFormsPage";
import UsersListPage from "./pages/tasks/projects/todoListApp/pages/UsersListPage";
import SingleUserPage from "./pages/tasks/projects/todoListApp/pages/SingleUserPage";
import EditUserPage from "./pages/tasks/projects/todoListApp/pages/EditUserPage";

/* ------------------ Notes / Topics ------------------ */
import NotesList from "./pages/notes/NotesList";

/* ------------------ Frontend ------------------ */
import FtopicsList from "./pages/frontEnd/FTopicsList";
import TopicDetailPage from "./pages/frontEnd/topicsExplanation/FTopicsDetails";

/* ------------------ Backend ------------------ */
import BTopicsList from "./pages/backend/BTopicsList";
import BTopicsDetail from "./pages/backend/topicsExplanations/BTopicsDetail";

/* ------------------ Databases ------------------ */
import Databases from "./pages/databases/Databases";
import DatabaseTopicDetailPage from "./pages/databases/topicsExplanation/DatabaseTopicDetailPage";

/* ------------------ System Design ------------------ */
import SystemDesign from "./pages/systemDesign/SystemDesign";
import SystemDesignTopicDetailPage from "./pages/systemDesign/topicsExplanations/SystemDesignTopicDetailPage";

/* ------------------ Cloud ------------------ */
import Cloud from "./pages/cloud/Cloud";
import CloudTopicsDetailPage from "./pages/cloud/topicsExplanation/CloudTopicsDetailPage";

/* ------------------ Deployment ------------------ */
import Deployment from "./pages/deployement/Deployment";
import DeploymentTopicDetailPage from "./pages/deployement/topicsExplanations/DeploymentTopicDetailPage";

/* ------------------ SDLC ------------------ */
import SDLC from "./pages/sdlc/SDLC";


/* ------------------ Web ------------------ */
import WebTopicsList from "./pages/web/WebTopicsList";
import WebTopicsDetailPage from "./pages/web/topicExplanation/WebTopicsDetailPage";
import ClientPage from "./pages/tasks/projects/jsonServer/pages/ClientPage";
import BlogHomePage from "./pages/tasks/projects/blogApp/pages/BlogHomePage";
import FileUpload from "./pages/quickAccess/FileUpload";
import JwtAuth from "./pages/quickAccess/JwtAuth"
import RBAC from "./pages/quickAccess/RBAC";
import CreateBlogPage from "./pages/tasks/projects/blogApp/pages/CreateBlogPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />

      {/* ------------------ Quick Access ------------------ */}
      <Route path="crud-api" element={<CrudApi />} />
      <Route path="form-validation" element={<ReactFormikValidation />} />
      <Route path="api-calling" element={<ApiCalling />} />
      <Route path="search-filter" element={<SearchFilter />} />
      <Route path="pagination" element={<SearchFilterBackend/>} />
      <Route path="jwt-auth" element={<JwtAuth />} />
      <Route path="/rbac" element={<RBAC />} />

       
      <Route path="file-upload" element={<FileUpload currentPage={1} />}  />


      <Route path="folder_structure-page" element={<FolderStructure />} />

      {/* ------------------ Tasks / Projects ------------------ */}
      <Route path="task-page" element={<TasksPage />} />
      <Route path="mern-projects" element={<TaskListPage />} />

      {/* ------------------ Crud -Api Backend ------------------ */}
      <Route path="projects/user-form-page" element={<UserFormsPage />} />
      <Route path="projects/user-list-page" element={<UsersListPage />} />
      <Route path="projects/users/single-user/:id" element={<SingleUserPage />} />
      <Route path="projects/users/edit-user/:id" element={<EditUserPage />} />

      {/* ------------------ json-server ------------------ */}
      <Route path="/projects/json-crud" element={<ClientPage />} />

      {/* ------------------ BlogApp ------------------ */}
      <Route path="/projects/blog-app" element={<BlogHomePage />} />
     <Route path="/create-blog" element={<CreateBlogPage />} />



      {/* ------------------ SDLC ------------------ */}
      <Route path="sdlc" element={<SDLC />} />

      {/* ------------------ Notes / Frontend / Backend ------------------ */}
      <Route path="notes" element={<NotesList />} />

      {/* Frontend */}
      <Route path="frontend" element={<FtopicsList />} />
      <Route path="frontend/*" element={<TopicDetailPage />} />

      {/* Backend */}
      <Route path="backend" element={<BTopicsList />} />
      <Route path="backend/*" element={<BTopicsDetail />} />

      {/* ------------------ Databases ------------------ */}
      <Route path="database" element={<Databases />} />
      <Route path="database/*" element={<DatabaseTopicDetailPage />} />

      {/* ------------------ System Design ------------------ */}
      <Route path="system-design" element={<SystemDesign />} />
      <Route path="system-design/*" element={<SystemDesignTopicDetailPage />} />

      {/* ------------------ Cloud ------------------ */}
      <Route path="cloud" element={<Cloud />} />
      <Route path="cloud/*" element={<CloudTopicsDetailPage />} />

      {/* ------------------ Deployment ------------------ */}
      <Route path="deployment" element={<Deployment />} />
      <Route path="deployment/*" element={<DeploymentTopicDetailPage />} />

      {/* ------------------ Web ------------------ */}
      <Route path="/web" element={<WebTopicsList />} />
      <Route path="/web/:slug" element={<WebTopicsDetailPage />} />

      {/* ------------------ Not Found ------------------ */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
