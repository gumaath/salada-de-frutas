import background from '../../../public/assets/background.svg';
import Image, { StaticImageData } from 'next/image';
import { VT323 } from 'next/font/google';
import Button from '../Button/page';

const vt = VT323({
  subsets: ['latin'],
  weight: '400'
})

interface MyComponentProps {
  title: string;
  body: string;
  imageSrc: StaticImageData;
}
const TextBoxCenter: React.FC<MyComponentProps> = ({ title, body, imageSrc }) => {
  return (
    <div className="w-screen flex flex-col items-center justify-between min-h-[600px] pr-10 text-center" style={{ backgroundImage: `url(${background.src})`, backgroundSize: '100%' }}>
      <Image src={imageSrc} alt={''}/>
      <div className='flex w-1/2 flex-col mb-5'>
        <h3 className={`${vt.className} letraTitulo`}>{title}</h3>
        <p className='font-robotomono'>{body}</p>
      </div>
      <div>
         <Button/>
      </div>
    </div>
  )
}

export default TextBoxCenter;