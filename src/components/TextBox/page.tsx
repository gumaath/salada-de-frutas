import background from '../../../public/assets/background.svg';
import Image, { StaticImageData } from 'next/image';
import { VT323 } from 'next/font/google';

const vt = VT323({
  subsets: ['latin'],
  weight: '400'
})

interface MyComponentProps {
  title: string;
  body: string;
  imageSrc: StaticImageData;
}
const TextBox: React.FC<MyComponentProps> = ({ title, body, imageSrc }) => {
  return (
    <div className="w-screen flex items-center justify-between min-h-[600px]" style={{ backgroundImage: `url(${background.src})`, backgroundSize: '100%' }}>
      <div className='h-full'>
        <Image src={imageSrc} alt={''}/>
      </div>
      <div className='flex flex-col items-center justify-between pr-10 text-center w-full'>
        <h3 className={`${vt.className} letraTitulo`}>{title}</h3>
        <p className='font-robotomono'>{body}</p>
      </div>
    </div>
  )
}

export default TextBox;