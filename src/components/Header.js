const Header = () => {
  return (
    <nav className="fixed bg-black bg-opacity-70 p-3 pt-5 flex w-full text-white ">
      <div className=' ml-2 mr-60 py-1'>
        <a href='/'>MMAAI</a>
      </div>
      <ul className="ml-56 flex">
        <li className=' pr-4'>
          <a href='/' className='p-1'>Dashboard</a>
        </li>
        <li className='px-4'>
          <a href='/'>About Us</a>
        </li>
        <li className='px-4'>
          <a href='/' className='p-1'>Pricing</a>
        </li>
        <li className='px-4'>
          <a href='/' className='p-1'>For Studios</a>
        </li>
        <li className='px-4'>
          <a href='/' className='p-1'>Features</a>
        </li>
        <li className='px-4'>
          <a href='/' className='p-1'>Create Script</a>
        </li>
        <li className='px-4'>
          <a href='/' className='p-1'>Blog</a>
        </li>
        <li className='pl-4'>
          <button className='bg-blue-500 text-white px-3 p-1  rounded-full'>
            Log in
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
