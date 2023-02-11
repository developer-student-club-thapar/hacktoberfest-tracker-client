import Image from 'next/image';
import DSClight from '../../public/DSClight.png';
import hacktober from '../../public/hacktober.png';
import servatom from '../../public/servatom.png';

const Top= ()=>{
    return (
        <div className='flex justify-between align-middle bg-componentLight shadowProfile2 px-2 py-1'>

            <div className=''>
                <a href='https://dsctiet.com/#/' target="_blank">
                    <Image src={DSClight} alt="dsc-logo" width={250}/>
                </a>
            </div>
            
            <div className='flex gap-5'>
                <Image src={hacktober} alt="hacktober-logo" width={50}/>
                <a href='https://servatom.com/' target="_blank">
                    <Image src={servatom} alt="servatom-logo" width={50}/>
                </a>
            </div>
        </div>
    );
}

export default Top;