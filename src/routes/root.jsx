export default function Root() {
    return (
        <div className="min-h-screen flex flex-col text-white">
            <main className="container mx-auto px-6 pt-16 flex-1 text-center">
                <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
                    Welcome to
                </h2>

                <h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase">
                    IMO
                </h1>

                <div className="text-sm md:text-1xl lg:text-2xl px-4 md:py-4 md:px-10 lg:py-3 
                lg:px-12 w-fit mx-auto mb-2">
                    Your one stop destination to find the best eateries in the world.
                </div>

                <div className="flex flex-col md:flex-row justify-center mb-2">
                    <a href="./Login" className="font-bold bg-white bg-opacity-40 rounded-full w-fit mx-auto rounded-full text-base md:text-1xl lg:text-2xl py-4 px-6 md:px-8 lg:py-4 lg:px-10 cursor-pointer hover:opacity-75 duration-150">SIGN UP NOW</a>
                </div>

                <div className="italic">
                    By signing up, you agree with IMO's <a href="#" className="hover:opacity-80 duration-150">Terms of Service</a> and <a href="#" className="hover:opacity-80 duration-150">Privacy Policy</a>.
                </div>

            </main>

            <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
                <p>
                    This is the footer.
                </p>
                <div className="flex -mx-6">
                    <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> |
                    <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> |
                    <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
                </div>
            </footer>
        </div>
    );
  }