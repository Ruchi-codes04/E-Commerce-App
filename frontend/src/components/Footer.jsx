import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

            <div>
                <img src={assets.logo} alt="" className='mb-5 w-24 rounded-full' />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nesciunt facere porro similique quam, voluptate dolorum est itaque soluta, consequatur voluptatibus in, dolorem doloribus dicta eius laborum consectetur consequuntur quos?
                </p>

                
            </div>

            <div>
                    <p className='text-xl font-medium mb-5 mt-12'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us </li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>

                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5 mt-12'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>contact@glamnest.com</li>

                    </ul>
                </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ glamnest.com - All Rights Reserved.</p>
        </div>

       
    </div>
  )
}

export default Footer