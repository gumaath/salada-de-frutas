'use client'
import background from '../../../public/assets/backgroundpurple.svg';
import logo from '../../../public/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer>
      <div className="w-screen flex flex-col items-center"  style={{ backgroundImage: `url(${background.src})`, backgroundSize: '100%' }}>
        <Image src={logo} alt={''}/>
        <h4>Salada de Frutas - 2023</h4>
        <div className='flex items-center justify-center'>
          <div>
            <Link href={'/teste'}>
              <Icon icon="mdi:twitter" width='24px' />
            </Link>
          </div>
          <div>
            <Link href={'/teste'}>
              <Icon icon="mdi:twitch" width='24px' />
            </Link>
          </div>
          <div>
            <Link href={'/teste'}>
              <Icon icon="mdi:youtube" width='24px' />
            </Link>
          </div>
          <div>
            <Link href={'/teste'}>
              <Icon icon="ic:baseline-tiktok" width='24px' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}