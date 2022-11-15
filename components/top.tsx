import Image from 'next/image';
import DSClight from '../public/DSClight.png';
import hacktober from '../public/hacktober.png';
import servatom from '../public/servatom.png';


const Top= ()=>{
    return (
        <div className='flex px-32 py-3 w-full justify-between bg-[#f4f4f4] align-middle'>

            <div className=''>
                <a href='https://dsctiet.com/#/'>
                    <Image src={DSClight} alt="dsc-logo" width={250}/>
                </a>
            </div>
            
            <div className='flex gap-10'>
                <Image src={hacktober} alt="hacktober-logo" width={50}/>
                <a href='https://servatom.com/'>
                    <Image src={servatom} alt="servatom-logo" width={50}/>
                </a>
            </div>
        </div>
    );
}

export default Top;