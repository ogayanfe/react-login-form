import logo from "./assets/sterling-bank-login-logo.png";

function App() {
  return (
    <div className="w-screen h-screen overflow-y-auto p-12 bg-[#F6F6F6]">
      <div className="w-full min-h-full h-max flex flex-col items-center justify-center gap-8">
        <img src={logo} className="w-[134px] mb-5" />
        <form className="w-[533px] flex flex-col items-center justify-center bg-white p-8 rounded-lg">
          <h1 className="text-[#4A4A4A] font-semibold text-2xl py-6">
            Login here
          </h1>
          <div className="flex flex-col gap-3 w-full">
            <label htmlFor="email" className="w-full text-[#4A4A4A]">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="border-[1px] w-full p-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-3 w-full pt-7">
            <label htmlFor="password" className="w-full text-[#4A4A4A]">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="border-[1px] w-full p-4 rounded-lg"
            />
          </div>
          <p className="text-[#4A4A4A] ml-auto py-8">Forgot Password?</p>
          <button className="bg-[#db4149] w-full p-3 text-lg text-white rounded-lg">
            Login
          </button>
        </form>
        <p className="text-[#666666]">Terms and Conditions | Privacy Policy</p>
        <p className="text-[#666666]"> (c) Sterling Bank 2022</p>
      </div>
    </div>
  );
}

export default App;
