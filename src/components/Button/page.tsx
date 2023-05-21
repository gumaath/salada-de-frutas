import { VT323 } from 'next/font/google';
import Link from 'next/link';

const vt = VT323({
  subsets: ['latin'],
  weight: '400'
})

export default function Button() {
  return (
    <header>
      <button className='bg-green-600 px-[180px] border-4 border-black'>
        <Link href={'/'} style={{fontSize: '32px'}} className={`${vt.className} letraTitulo`}>PARTICIPE</Link>
      </button>
    </header>
  )
}