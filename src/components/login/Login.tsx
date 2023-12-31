import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.min.css";
import { useNavigate } from "react-router-dom";
import { Flip, ToastContainer, toast } from "react-toastify";
import "./login.css";
import { instanceAxios } from "../../config/axios-config";

interface LoginForm {
  username: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  access_token?: string;
  error?: string;
}

interface LoginProps {
  setIsAuthenticated: (value: boolean) => void;
}

const Login: FC<LoginProps> = ({ setIsAuthenticated }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const login: SubmitHandler<LoginForm> = async (data: LoginForm) => {
    setIsLoading(true);

    try {

      const response = await instanceAxios.post<LoginResponse>(
        "/auth/login",
        data
      );
      if (response.status == 200) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: 0,
          toastId: "my_toast",
        });
        localStorage.setItem("authUserLogged", response.data.access_token!);
        setIsLoading(false);
        setIsAuthenticated(true);
        navigate("/");
      } else {
        toast.error(response.data.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: 0,
          toastId: "my_toast",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form autoComplete="off" onSubmit={handleSubmit(login)}>
                <div className="form-group">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    {...register("username", {
                      required: "Username is required!",
                    })}
                  />
                  {errors.username && (
                    <p className="text-danger">{errors.username.message}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    {...register("password", {
                      required: "Password is required!",
                    })}
                  />
                  {errors.password && (
                    <p className="text-danger">{errors.password.message}</p>
                  )}
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Submit
                  </button>
                  <p className="card-text mt-3">
                    Don't have an account? <Link to="/register">Sign Up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        limit={1}
        transition={Flip}
      />
    </>
  );
};
export default Login;
