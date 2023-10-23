import Image from 'next/image'
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Airbnb Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Airbnb Logo */}
            <a href="/" className="text-2xl font-extrabold text-gray-900">airbnb</a>

            {/* Search Bar (You can replace with your own search component) */}
            <div className="flex items-center border rounded-full px-3 py-2">
              <input
                type="text"
                placeholder="Search"
                className="outline-none w-full pr-3 bg-transparent"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M13.293 14.293a6 6 0 111.414-1.414l5 5a1 1 0 01-1.414 1.414l-5-5zm-.88-2.674a4.5 4.5 0 10-1.414-1.414 4.5 4.5 0 001.414 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* User Profile (You can replace with your own user profile component) */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                Sign in
              </button>
              <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600">
                Sign up
              </button>
            </div>
          </div>
        </nav>

        {/* Rest of your content */}
      </main>
    </div>
  )
}
