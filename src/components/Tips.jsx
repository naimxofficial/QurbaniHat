import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { LuAlignVerticalDistributeEnd, LuBoxes } from 'react-icons/lu';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { RiKnifeLine } from 'react-icons/ri';
import { SlCalender } from 'react-icons/sl';

const Tips = () => {
    return (
        <div className='w-11/12 mx-auto my-7'>
            <h1 className='text-center font-bold text-5xl not-md:text-3xl mb-3'>QURBANI TIPS</h1>
            <p className='text-2xl not-md:text-md text-center mb-7'>Essential Islamic guidelines for a valid and accepted sacrifice</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 animate__animated animate__slideInUp'>
            {/* card 1 */}
            <div className='border-green-500 border p-4 bg-base-100 shadow-xl rounded-2xl'>
            <div className=' flex items-center gap-4 '>
                <MdOutlineHealthAndSafety  className='p-2 rounded-2xl bg-[#eaf3de] text-[#3b6d11] text-6xl'/>
                <div className='border-b/20'>
                    <p className='text-md not-md:text-sm opacity-50 font-semibold text-[#3b6d11]'>AGE</p>
                    <h2 className='font-semibold text-xl'>Minimum age rules</h2>
                </div>
                
            </div>
            <p className='text-sm not-md:text-xs opacity-70 font-semibold mt-5'>Goat & sheep must be at least 1 year old. <br /> Cows and buffalo must be at least 2 years old. <br /> Camels must be at least 5 years old <br /> before they are eligible for Qurbani sacrifice.</p>
            </div>
            {/* card 2 */}
            <div className='border border-blue-500 p-4 bg-base-100 shadow-xl rounded-2xl'>
            <div className=' flex items-center gap-4 '>
                <IoTimeOutline className='p-2 rounded-2xl bg-[#e6f1fb] text-[#185fb9] text-6xl'/>
                <div className='border-b/20'>
                    <p className='text-md not-md:text-sm opacity-50 font-semibold text-[#185fb9]'>Health</p>
                    <h2 className='font-semibold text-xl'>Physical health check</h2>
                </div>
                
            </div>
            <p className='text-sm not-md:text-xs opacity-70 font-semibold mt-5'>The animal must be active, well-fed, and free <br /> from any visible illness. It cannot be blind, <br />excessively thin, lame, or have broken horns. <br /> Animals with missing more than half their <br /> teeth are also not valid.</p>
            </div>
            {/* card 3 */}
            <div className='border border-[#854f0b] p-4 bg-base-100 shadow-xl rounded-2xl'>
            <div className=' flex items-center gap-4 '>
                <LuBoxes className='p-2 rounded-2xl bg-[#faeeda] text-[#854f0b] text-6xl'/>
                <div className='border-b/20'>
                    <p className='text-md not-md:text-sm opacity-50 font-semibold text-[#854f0b]' >Sharing</p>
                    <h2 className='font-semibold text-xl '>Cow sharing — 7 shares</h2>
                </div>
                
            </div>
            <p className='text-sm not-md:text-xs opacity-70 font-semibold mt-5'>One cow or buffalo counts as 7 Qurbani <br /> shares. Up to 7 people can pool together to <br /> purchase one cow, with each person <br /> receiving the full spiritual reward of one <br /> Qurbani sacrifice.</p>
            </div>
            {/* card 4 */}
            <div className='border border-[#6f50b7] p-4 bg-base-100 shadow-2xl rounded-2xl'>
            <div className=' flex items-center gap-4 '>
                <LuAlignVerticalDistributeEnd  className='p-2 rounded-2xl bg-[#eeedfe] text-[#6f50b7] text-6xl'/>
                <div className='border-b/20'>
                    <p className='text-md not-md:text-sm opacity-50 font-semibold text-[#6f50b7]'>Distribution</p>
                    <h2 className='font-semibold text-xl'>Meat distribution rules</h2>
                </div>
                
            </div>
            <p className='text-sm not-md:text-xs opacity-70 font-semibold mt-5'>After the sacrifice, divide the meat into 3 <br /> equal portions: one-third for your <br /> household, one-third for relatives and <br /> friends, and one-third for the poor and <br /> needy in your community.</p>
            </div>
            {/* card 5 */}
            <div className='border border-[#0f6e56] p-4 bg-base-100 shadow-2xl rounded-2xl'>
            <div className=' flex items-center gap-4 '>
                <SlCalender  className='p-2 rounded-2xl bg-[#e1f5ee] text-[#0f6e56] text-6xl'/>
                <div className='border-b/20'>
                    <p className='text-md not-md:text-sm opacity-50 font-semibold text-[#0f6e56]'>Timing</p>
                    <h2 className='font-semibold text-xl'>Valid sacrifice window</h2>
                </div>
                
            </div>
            <p className='text-sm not-md:text-xs opacity-70 font-semibold mt-5'>Qurbani begins after the Eid al-Adha prayer on the 10th of Dhul Hijjah and remains valid until sunset on the 12th of Dhul Hijjah — a window of approximately 3 days.</p>
            </div>
            {/* card 6 */}
            <div className='border border-[#b33c1d] p-4 bg-base-100 shadow-2xl rounded-2xl'>
            <div className=' flex items-center gap-4 '>
                <RiKnifeLine  className='p-2 rounded-2xl bg-[#faece7] text-[#b33c1d] text-6xl'/>
                <div className='border-b/20'>
                    <p className='text-md not-md:text-sm opacity-50 font-semibold text-[#b33c1d]'>Slaughter</p>
                    <h2 className='font-semibold text-xl'>Humane slaughter rules</h2>
                </div>
                
            </div>
            <p className='text-sm not-md:text-xs opacity-70 font-semibold mt-5'>Use a sharp knife to avoid prolonged suffering. Recite &quot;Bismillahi Allahu Akbar&quot; at the time of sacrifice. Never sharpen the knife in front of the animal, and never slaughter one animal in sight of another.</p>
            </div>
            </div>

            
        </div>
    );
};

export default Tips;