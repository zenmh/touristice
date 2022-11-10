import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { router } from "./Routes/router";

function App() {
  return (
    <div className="mx-2">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
