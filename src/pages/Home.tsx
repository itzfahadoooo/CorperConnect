import Navbar from "../components/Navbar"

export default function Home(){
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Welcome to CopperConnect</h1>
        <p className="mt-4 text-lg text-gray-600">
          Your platform for connecting and collaborating with professionals across industries.
        </p>
      </div>
    </main>
  )
}
