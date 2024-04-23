import Header from "../Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        className="h-screen flex"
        style={{
          backgroundImage: 'url("https://wallpapercave.com/wp/u5BJPWl.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="   h-96 mt-48 ml-24 text-white ">
          <p className="text-8xl mb-1 font-bold">MMAAI</p>
          <p className="text-5xl font-bold mb-5" >Film Industry Service Hub</p>
          <p className="text-xl  ">
            Helping bring the next masterpiece to the big screens.
          </p>
          <button className='bg-orange-600 p-2 px-6 rounded-full my-4 mr-4 hover:bg-orange-500'>Sign Up</button>
          <button className='bg-orange-600 p-2 px-6 rounded-full my-4 mr-4 hover:bg-orange-500'>Login</button>
        </div>  
      </div>
      <div className="h-screen bg-black"></div>
    </div>
  );
};
export default Home;
