import React from 'react'

const CurrentWeather = () => {
    return (
        <div className='shadow rounded bg-black/80 w-[300px] text-white mx-auto px-5 pb-5 mt-8'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='font-bold text-xl'>Madrid</p>
                    <p className='text-sm'>Sunny</p>
                </div>
                <img
                    className='w-2/6'
                    src="icons/01d.png" alt="weather" />

            </div>

            <div className='flex justify-between items-center'>{/*bottom */}
                <p className='text-5xl font-semibold tracking-tighter w-auto my-2'>18°C</p>
                <div className='w-full pl-5'>{/*details*/}
                    <div className='row'> {/*parameter*/}
                        <span className='font-semibold'>Details</span>
                    </div>
                    <div className='row' > {/*Feels like*/}
                        <span className='label'>Feels like</span>
                        <span className='value'>22°C</span>
                    </div>
                    <div className='row' > {/*Wind*/}
                        <span className='label'>Wind</span>
                        <span  className='value' >2 m/s</span>
                    </div>
                    <div className='row' > {/*Humidity*/}
                        <span className='label'>Humidity</span>
                        <span  className='value' >15%</span>
                    </div>
                    <div  className='row'> {/*Presure*/}
                        <span className='label'>Presure</span>
                        <span  className='value' >15 Pa</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CurrentWeather