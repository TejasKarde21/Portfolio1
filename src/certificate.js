import './index.css';
import './App.css';
export default function App() {
  return (
    <>
 
   <section className="  w-[100%] relative top-0 lg:flex md:pl-8 lg:pl-8 md:flex-row md:justify-between  md:flex flex flex-col items-center border-2 h-[100%]" >
    
    <div className='left  border-2 w-fit md:fixed md:top-10 md:ml-56 lg:ml-52 lg:fixed relative  mt-24  p-8 rounded-3xl bg-slate-900 bg-opacity-50 flex flex-col text-center'>
                   <img className='w-72 h-80 self-center mt-8 rounded-xl' src='https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D'/>
                   <h3 className='text-white text-3xl md:text-4xl'>Tejas Karde</h3>
                  <div className='bg-slate-800 opacity-8 w-[90%] text-center rounded-full text-white py-3	 self-center mt-2 text-3xl md:text-4xl'>Hello, World!!</div>
                  <div className='w-[70%] self-center h-[1px] bg-black mt-2'></div>
                  <div className='mt-5 flex '>
                   <div className='bg-slate-800 opacity-8 p-4 text-center rounded-md m-4 text-yellow-400 	shadow-slate-100 ' > <i class="fa-solid fa-hourglass-end text-3xl"></i></div>
                  <div className='mt-4 text-white text-left'> <h5 className='text-gray-400 text-2xl font-semibold'>AGE</h5>
                    <p className='text-xl'>29 year old</p>
                    </div> 
                  </div>
                  <div className='mt-5 flex '>
                   <div className='bg-slate-800 opacity-8 p-4 text-center rounded-md m-4 text-yellow-400 	shadow-slate-100 ' > <i class="fa-solid fa-location-dot text-3xl"></i></div>
                  <div className='mt-4 text-white text-left'> <h5 className='text-gray-400 text-2xl font-semibold'>LOCATION</h5>
                    <p className='text-xl'>PUNE,India</p>
                    </div> 
                  </div>
                  <div className='mt-5 flex '>
                   <div className='bg-slate-800 opacity-8 p-4 text-center rounded-md m-4 text-yellow-400 	shadow-slate-100 ' > <i class="fa-solid fa-user text-3xl"></i></div>
                  <div className='mt-4 text-white text-left'> <h5 className='text-gray-400 text-2xl font-semibold'>PERSONALITY TYPE</h5>
                    <p className='text-xl'>INTJ-T</p>
                    </div> 
                  </div>

                  <div className='mb-10 w-[80%] flex  self-center justify-around text-white text-3xl'><i class="fa-brands fa-github"></i> <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-twitter"></i></div>
    </div>
    <div className='right mt-8 md:ml-[100%] self-center lg:ml-[30%] md:flex flex flex-col relative  overflow-hidden  w-[90%] md:w-[40%]     bg-slate-800    p-4  px-9 py-7 rounded-3xl opacity-80'>
             


    </div>

      
   </section>

    </>
  )
}



