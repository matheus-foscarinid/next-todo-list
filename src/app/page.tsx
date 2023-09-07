import Link from 'next/link';

export default function Home() {
  return <>
    <header className='flex justify-between items-center md-4'>
      <h1 className='text-2x1'>TODOs</h1>
      <Link
        className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none' 
        href='/new'
      >
        New
      </Link>
    </header>
  </>
}