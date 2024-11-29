import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope, faLock, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSign } from './Context/SignContext'



const Register = () =>{
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const userInfo = {
            username: e.target.username.value,
            email: e.target.email.value,  
            phone: e.target.phone.value,
            password: e.target.password.value 
        };
    
        if (!userInfo.username || !userInfo.email || !userInfo.phone || !userInfo.password) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }else{
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        
            navigate('/sign_up_in/login');
        }
    
    };
    
    return(
        <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
            <h1 className="text-[40px] font-bold mb-4 text-center font-Ubuntu text-gray-800">
                Register
            </h1>
            <div className="mb-4">
                <input
                    type="text"
                    id="username"
                    className="pr-[110px] pl-5 py-[10px] text-left rounded-[30px] relative outline-none !bg-[#3F4661] !text-white"
                    placeholder='Username'
                />
                <FontAwesomeIcon className='absolute translate-x-[-30px] translate-y-[15px] text-white' icon={faUser} />
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    id="email"
                    className="pr-[110px] pl-5 py-[10px] text-left rounded-[30px] relative outline-none !bg-[#3F4661] !text-white"
                    placeholder='Email'
                />
                <FontAwesomeIcon className='absolute translate-x-[-30px] translate-y-[15px] text-white' icon={faEnvelope} />
            </div>
            <div className="mb-4">
            <input
                    type="password"
                    id="password"
                    name="password"
                    className="pr-[110px] pl-5 py-[10px] text-left rounded-[30px] relative outline-none !bg-[#3F4661] !text-white"
                    placeholder='Password'
                />
                <FontAwesomeIcon className='absolute translate-x-[-30px] translate-y-[15px] text-white' icon={faLock} />
            </div>
            <div className="mb-4">
            <input
                    id='phone'
                    type="tel" 
                    placeholder="Enter your phone number" 
                    maxLength="10" 
                    pattern="[0-9]{10,11}" 
                    title="Please enter 10 to 11 digits" 
                    className="pr-[110px] pl-5 py-[10px] text-left rounded-[30px] relative outline-none !bg-[#3F4661] !text-white"
                />
                <FontAwesomeIcon className='absolute translate-x-[-30px] translate-y-[15px] text-white' icon={faPhone} />
            </div>
            <div className='flex items-center text-[15px]'>
                <div className='mr-14 bg-slate-300 p-1 rounded-[30px] text-[#3F4661]'>
                    <input type='checkbox'/>
                    <span className=' ml-1 '>Remember me</span>
                </div>
                <Link className='bg-slate-300 p-1 rounded-[30px] text-[#3F4661] hover:underline' to={''}>Forgot password?</Link>
            </div>
            <button
                type='submit'
                className="mt-[28px] bg-main border-main text-white border-2 border-solid rounded-[30px] hover:text-[#4378d8] hover:bg-transparent transition-all duration-[1800ms] ease-in-out inline-block font-bold leading-[24px] px-[120px] py-[10px] text-center"
            >
                Register
            </button>
            <p className='mr-14 mt-2 text-white'>
                Already have an account? <button className='hover:text-main underline' onClick={() =>navigate('/sign_up_in/login')}>Login</button>
            </p>
        </form>
    )
}

export const Login = ({setSignUp}) =>{
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        if (userInfo.email === e.target.email.value && userInfo.password === e.target.password.value) {
            setSignUp(true)
            navigate('/'); 
        } else {
            alert('Thông tin đăng nhập không chính xác');
        }
    };

    return(
        <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
            <h1 className="text-[40px] font-bold mb-12 text-center font-Ubuntu text-gray-800">
                Login
            </h1>
            <div className="mb-4">
                <input
                    type="email"
                    id="email"
                    className="pr-[110px] pl-5 py-[10px] text-left rounded-[30px] relative outline-none !bg-[#3F4661] !text-white"
                    placeholder='Email'
                />
                <FontAwesomeIcon className='absolute translate-x-[-30px] translate-y-[15px] text-white' icon={faEnvelope} />
            </div>
            <div className="mb-4">
            <input
                    type="password"
                    id="password"
                    className="pr-[110px] pl-5 py-[10px] text-left rounded-[30px] relative outline-none !bg-[#3F4661] !text-white"
                    placeholder='Password'
                />
                <FontAwesomeIcon className='absolute translate-x-[-30px] translate-y-[15px] text-white' icon={faLock} />
            </div>
            <button
                type='submit'
                className="mt-[28px] bg-main border-main text-white border-2 border-solid rounded-[30px] hover:text-[#4378d8] hover:bg-transparent transition-all duration-[1800ms] ease-in-out inline-block font-bold leading-[24px] px-[130px] py-[10px] text-center"
            >
                Login
            </button>
            <p className='mr-14 mt-7 text-white'>
                Don&#39;t have an account? <button className='hover:text-main underline' onClick={() =>navigate('/sign_up_in/register')}>Register</button>
            </p>
        </form>
    )
}



const Sign_Up_In = () => {
    const { form } = useParams();
    const { setSignUp} = useSign();
    const isRegister = form === "register";
    

  return (
    <div className="bg-cover bg-center  w-screen h-screen z-10" style={{ backgroundImage: `url(${assets.bg_signUpIn})` }}>
        <div className="flex items-center justify-center w-full h-full">
            <div className=" border border-solid border-white w-[500px] h-[500px] rounded-lg shadow-lg">
                <div className='w-full h-full p-6'>
                    {isRegister ? <Register />: <Login setSignUp={setSignUp}/> }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sign_Up_In