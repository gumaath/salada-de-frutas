import background from '../../../public/assets/background.svg';
import logo from '../../../public/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

import { VT323 } from 'next/font/google';

const vt = VT323({
  subsets: ['latin'],
  weight: '400'
})


export default function Header() {
  return (
    <header>
      <div className="w-screen flex items-center justify-between pl-2 py-2 pr-[30%]"  style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'cover' }}>
      <Image src={logo} alt={''}></Image>
      <Link href={'/'} style={{fontSize: '32px'}} className={`${vt.className} letraTitulo`}>Inicio</Link>
      <Link href={'/sobre'} style={{fontSize: '32px'}} className={`${vt.className} letraTitulo`}>Sobre</Link>
      <Link href={'/teste'} style={{fontSize: '32px'}} className={`${vt.className} letraTitulo`}>Participe</Link>
      </div>
    </header>
  )
}