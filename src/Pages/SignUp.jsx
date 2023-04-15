import "../Stylesheets/Main.css";
import logo from "../Img/comiczonelogo.svg";


const SignUp = () => {
  return (
    <div>
      <div className="h-32 bg-white flex flex-row items-center justify-center"><img className="h-16" src={logo} alt="This is Comic Zone Logo" /></div>
      <div className="h-full flex flex-col md:flex-row justify-center backgroundImage py-20 px-5 md:px-10">
        <div className="w-full md:w-1/2 my-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold text-left uppercase">Sign-Up To Join The Heros.</h1>
        </div>
        <div className="w-full md:w-1/2 bg-white/75 max-w-[40rem] p-8 rounded-lg mt-10 md:mt-0">
          <div className="h-[32rem] bg-white max-w-[40rem] rounded-lg p-4">
            <form className="mt-4 flex items-start flex-col" action="">
              <label className="text-left font-bold" htmlFor="email">Email:</label>
              <input className="w-full py-3 rounded-xl bg-gray-100 mt-2 focus:outline-brightRed capitalize px-10" type="email" name="email" id="email" required/>
              <label className="text-left font-bold mt-4" htmlFor="email">Password:</label>
              <input className="w-full py-3 rounded-xl bg-gray-100 mt-2 focus:outline-brightRed px-10" type="password" name="password" id="password" required/>
              <label className="text-left font-bold mt-4" htmlFor="email">Confirm Password:</label>
              <input className="w-full py-3 rounded-xl bg-gray-100 mt-2 focus:outline-brightRed px-10" type="password" name="confirmPassword" id="confirmPassword required"/>
              <input className="w-full py-4 mt-4 rounded-3xl font-bold bg-brightRed text-center text-white hover:bg-white hover:text-brightRed duration-500" type="submit" value={"Create Account"}/>
            </form>
            <div className="flex flex-row mt-16 justify-between">
                 <p className="font-bold text-sm md:text-base">Already Have An Account?<a className="text-brightRed hover:text-black duration-500" href="/login"> Login</a></p>
                 <a className="text-brightRed font-bold hover:text-black duration-500 text-sm md:text-base" href="/forgotPassword">Forgot Password?</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
