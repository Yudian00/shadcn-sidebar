import LoginForm from "./components/LoginForm"


function Home() {
  return (

    <div className=" flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-2/3 md:block hidden">
        <div className="h-full flex justify-center items-center">
          <div
            className="bg-cover bg-center h-full w-full"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/989936/pexels-photo-989936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
            }}
          />
        </div>
      </div>

      <div className="w-full md:w-1/3 flex justify-center items-center h-screen">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-center uppercase">Login</h2>
          <div className="p-4 rounded-md overflow-hidden shadow-md">
            <LoginForm />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
