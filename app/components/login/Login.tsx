import Styles from './Login.module.css';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className={"hero min-h-screen " + Styles.loginBg}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white">Login now!</h1>
          <p className='text-white'>Login to go to Students Dash Board</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
