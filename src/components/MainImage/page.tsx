import mainImage from '../../../public/assets/main_image.png';
import logoFull from '../../../public/assets/logofull.svg';
import Image from 'next/image';

export default function MainImage() {
  return (
    <div className="w-screen h-[650px] flex items-center justify-center"  style={{ backgroundImage: `url(${mainImage.src})`, backgroundSize: 'cover'}}>
      <div className="w-9/12 flex items-center justify-center">
        <Image src={logoFull} className="" style={{width: '30%'}} alt={''}/>
      </div>
    </div>
  )
}