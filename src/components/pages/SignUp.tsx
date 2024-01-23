import signup from "../../assets/signup.png";
export default function SignUp() {
  return (
    <div className="signup">
      <div className="signup-container flex items-center gap-x-14">
        <img src={signup} alt="" />
        <div className="signup-form">
          <div className="form-title mb-10 max-w-sm">
            <h1 className="text-5xl font-bold mb-5">Create Account</h1>
            <p className="text-xl">
              Welcome! Enter Your Details And Start Creating, Collecting And
              Selling Nfts.
            </p>
          </div>
          <form action="" className="inline-flex flex-col gap-y-5 w-72">
            <input
              type="text"
              className="h-10 rounded-2xl"
              placeholder="Username"
            />
            <input type="email" className="h-10 rounded-2xl" />
            <input type="password" className="h-10 rounded-2xl" />
            <input type="password" className="h-10 rounded-2xl" />
            <input type="submit" className="h-10 rounded-2xl bg-accent" />
          </form>
        </div>
      </div>
    </div>
  );
}
