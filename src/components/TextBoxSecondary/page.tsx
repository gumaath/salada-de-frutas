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
const TextBoxSecondary: React.FC<MyComponentProps> = ({ title, body, imageSrc }) => {
  return (
    <div className="w-screen flex items-center justify-between min-h-[600px]">
      <div className='flex flex-col items-center justify-between pr-10 text-center w-full text-black'>
        <h3 className={`${vt.className} letraTitulo`}>{title}</h3>
        <p className='font-robotomono'>{body}</p>
      </div>
      <Image src={imageSrc} alt='' style={{
        width: '45%',
        minHeight: 600,
        objectFit: 'cover'
      }} />
    </div>
  )
}

export default TextBoxSecondary;