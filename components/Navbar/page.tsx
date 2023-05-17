import Link from "next/link"

export default function Navbar() {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='py-2 text-4xl font-bold'>NEXTJS</div>
        <ul className='flex justify-between items-center'>
          <li className='px-4 py-2 text-2xl font-bold hover:text-red-800'>
            <Link href={"/"}>HOME</Link>
          </li>
          <li className='px-4 py-2 text-2xl font-bold hover:text-red-800'>
            <Link href={"/about"}>ABOUT</Link>
          </li>
          <li className='px-4 py-2 text-2xl font-bold hover:text-red-800'>
            <Link href={"/back"}>BACK</Link>
          </li>
          <li className='px-4 py-2 text-2xl font-bold hover:text-red-800'>
            <Link href={"/project"}>PROJECT</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
