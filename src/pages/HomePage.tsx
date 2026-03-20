import React from 'react'
import homeLogo from '../assets/images/main-bg-org.png'
import Button from '../components/Button'

const HomePage = () => {
  return (
    // <div className='text-red-500 border' style={{ minHeight: "120vh" }}>
    //     Hello
    // </div>
    <div className="h-full w-full px-30"  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${homeLogo})`, backgroundSize: "cover", backgroundPosition: "60% 10%", height: "75vh"}}>
        <div className="flex flex-col items-start justify-end h-full w-full pb-30 text-white leading-none">
            <div className="flex flex-col">
            <h2 className='font-bold' style={{ fontSize: "clamp(3.5rem,6.5vw,5rem)"}}>
                 Love God
            </h2>
            {/* <div className=' w-90' style={{ fontSize: "clamp(2rem,6.5vw,7rem)"}}>
                and
            </div> */}
            <h2 className='font-bold' style={{ fontSize: "clamp(3.5rem,6.5vw,5rem)"}}>
                Love People.
            </h2>
            </div>
            <div className="mt-6 flex gap-3">
                <Button text="Get Started" />
                <Button text="Visit Us" />
                <Button text="Recent Message" />
            </div>
            
        </div>
    </div>
  )
}

export default HomePage
