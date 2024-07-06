import React from 'react'

const CurrentWeather = ({data}) => {
    return (
        <div className='shadow rounded bg-black/80 w-[300px] text-white mx-auto px-5 pb-5 mt-8'>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='font-bold text-xl'>{data.city}</p>
                    <p className='text-sm'>{data.weather[0].description}</p>
                </div>
                <img
                    className='w-2/6'
                    src={`icons/${data.weather[0].icon}.png`} alt="weather" />

            </div>

            <div className='flex justify-between items-center'>{/*bottom */}
                <p className='text-5xl font-semibold tracking-tighter w-auto my-2'>{Math.round(data.main.temp)}°C</p>
                <div className='w-full pl-5'>{/*details*/}
                    <div className='row'> {/*parameter*/}
                        <span className='font-semibold'>Details</span>
                    </div>
                    <div className='row' > {/*Feels like*/}
                        <span className='label'>Feels like</span>
                        <span className='value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='row' > {/*Wind*/}
                        <span className='label'>Wind</span>
                        <span className='value' >{data.wind.speed} m/s</span>
                    </div>
                    <div className='row' > {/*Humidity*/}
                        <span className='label'>Humidity</span>
                        <span className='value' >{data.main.humidity} %</span>
                    </div>
                    <div className='row'> {/*Presure*/}
                        <span className='label'>Pressure</span>
                        <span className='value' >{data.main.pressure} mBar</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CurrentWeather