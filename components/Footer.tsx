import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id="contact">
        <div className='flex flex-col items-center justify-center'>
            <h1 className='w-full heading lg:max-w-[65vw]'>Есть вопросы или предложения?</h1>
            {/* <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out me today and let`s discuss how I can help you achieve your goals.</p> */}
            <a href='https://t.me/marishine1106'>
                <MagicButton
                    title="Написать в Telegram"
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Kovaleva Marina</p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <a key={profile.id}  href={profile.url}
                        className='w-10 h-10 cursor-pointer flex justify-center items-center 
                            backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img src={profile.img} alt={`${profile.id}`} width={20} height={20}/>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer