import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';



const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', "Sunday"]
const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = weekDays.slice(dayInAWeek, weekDays.length).concat(weekDays.slice(0, dayInAWeek));
    return (
        <>

            <label htmlFor="accordion">Daily</label>
            <Accordion id='accordion' allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='flex justify-between shadow-sm items-center bg-slate-200 p-2 gap-2 m-2 rounded-lg '>
                                    <div className='flex'>
                                        <img
                                            className='w-6 mx-2'
                                            src={`icons/${item.weather[0].icon}.png`} alt="weather" />
                                        <label
                                            className='text-sm font-semibold'
                                            htmlFor="">{forecastDays[index]}</label>
                                    </div>
                                    <div className='text-sm'>
                                        <label
                                            className='text-slate-800 font-medium'
                                            htmlFor="">{item.weather[0].description}</label>
                                        <label
                                            className='text-slate-500 mx-4'
                                        >{Math.round(item.main.temp_min)} °C / {Math.round(item.main.temp_min)} °C</label>
                                    </div>


                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='flex justify-between px-6 py-2 bg-slate-100 mx-2 rounded-lg shadow-lg'>
                                <div className='w-5/12' >
                                    <div className='flex justify-between'>
                                        <label htmlFor="">Pressure</label>
                                        <label >{item.main.pressure} mPa</label>
                                    </div>
                                    <div className='flex justify-between' >
                                        <label htmlFor="">Humidity</label>
                                        <label >{item.main.humidity} %</label>
                                    </div>
                                    <div className='flex justify-between'>
                                        <label htmlFor="">Clouds</label>
                                        <label >{item.clouds.all} %</label>
                                    </div>
                                </div>

                                <div className='w-5/12'>
                                    <div className='flex justify-between'>
                                        <label htmlFor="">Wind speed:</label>
                                        <label >{item.wind.speed} m/s</label>
                                    </div>
                                    <div className='flex justify-between'>
                                        <label htmlFor="">Sea level:</label>
                                        <label >{item.main.sea_level} m</label>
                                    </div>

                                    <div className='flex justify-between'>
                                        <label htmlFor="">Feels like</label>
                                        <label >{Math.round(item.main.feels_like)} °C</label>
                                    </div>
                                </div>


                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                ))}

            </Accordion>

        </>

    );

}

export default Forecast