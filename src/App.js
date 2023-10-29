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
               <div  className='flex  justify-between'>
                  <h1 className='md:text-6xl text-2xl font-semibold text-white'>About Me</h1>
                  <ul className='flex w-[50%] justify-around text-xs md:xl text-gray-300 font-medium bg-slate-900 h-fit absolute right-0 top-0 p-4 rounded-bl-3xl opacity-80'>
                    <li className='text-yellow-300'>About</li>
                    <li><a href='certificate' >Certificates</a></li>
                    <li><a href='project'>Projects</a></li>
                    <li><a href='project'>More</a></li>
                    <li><a href='project'>Contact</a></li>
                  </ul>
               </div>


               <div className='bg-slate-900 opacity-80 text-white p-10 mt-6 rounded-3xl'>
            <p>
               Hello there! My name is Tejas Karde and I am from Pune,India.As a Full-Stack software developer. I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project i work on.

                         <span className='hidden'>
                Growing up bilingual, I developed a love for languages and I currently speak four of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client's identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly.

In my free time, I enjoy exploring my other passions, such as photography and music production, which provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto, NFTs and blockchain technology as I believe they have the potential to revolutionize business and online interactions.

If you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product. Don't hesitate to reach out and let's start a conversation about your concept. I'm excited to collaborate and help bring your ideas to life.
                             
                </span>      
               </p> 
               <button  className='w-[100%] text-white' id='show'>Show More</button>
           

          
         </div>

  
              <h1 className='self-center mt-4 md:text-4xl font-bold text-white mb-4 text-2xl '>Primary Focus</h1>

              <div className='w-[100%] flex justify-between'>
                <div className='bg-slate-950 w-[47%]  md:flex sm:flex-col   md:justify-between md:p-4  md:px-9 md:py-7 rounded-3xl opacity-80'>
                <i class="fa-solid fa-globe text-4xl p-2 text-yellow-300 "></i>
                      <div>
                         <h3 className='text-xl text-gray-300 mb-2'>Web Design & Development</h3>
                         <p className='text-gray-400'>Creating attractive, easy-to-use websites that  work well  for businesses and  individuals online.</p>
                      </div>
                </div>
                <div className='bg-slate-950 w-[47%]  md:flex sm:flex-col   md:justify-between md:p-4  md:px-9 md:py-7 rounded-3xl opacity-80'>
                <i class="fa-solid fa-mobile-screen-button text-4xl p-2 text-yellow-300"></i>
                      <div>
                         <h3 className='text-xl text-gray-300 mb-2'>Mobile Apps & Games</h3>
                         <p className='text-gray-400'>Creating and developing engaging mobile apps and games for iOS and Android devices.</p>
                      </div>
                </div>
              </div>

              <div className='w-[100%] flex justify-between mt-10'>
                <div className='bg-slate-950 w-[47%]  md:flex sm:flex-col   md:justify-between md:p-4  md:px-9 md:py-7 rounded-3xl opacity-80'>
                <i class="fa-solid fa-file-invoice text-4xl p-2 text-yellow-300"></i>
                      <div>
                         <h3 className='text-xl text-gray-300 mb-2'>Development Solutions</h3>
                         <p className='text-gray-400'>Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications.</p>
                      </div>
                </div>
                <div className='bg-slate-950 w-[47%]  md:flex sm:flex-col   md:justify-between md:p-4  md:px-9 md:py-7 rounded-3xl opacity-80'>
                <i class="fa-solid fa-chart-simple text-4xl p-2 text-yellow-300"></i>
                      <div>
                         <h3 className='text-xl text-gray-300 mb-2'>Marketing & SEO</h3>
                         <p className='text-gray-400'>Using SEO and marketing strategies to boost online visibility and promote products or services.</p>
                      </div>
                </div>
              </div>


              <h1 className='self-center mt-4 md:text-4xl font-bold text-white mb-4 text-2xl '>Exploring Creativity</h1>

<div className='w-[100%] flex justify-between'>
  <div className='bg-slate-950 w-[47%]  md:flex sm:flex-col   md:justify-between md:p-4  md:px-9 md:py-7 rounded-3xl opacity-80'>
  <i class="fa-solid fa-camera text-4xl p-2 text-yellow-300"></i>
        <div>
           <h3 className='text-xl text-gray-300 mb-2'>Visual Storytelling</h3>
           <p className='text-gray-400'>Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.</p>
        </div>
  </div>
  <div className='bg-slate-950 w-[47%]  md:flex sm:flex-col   md:justify-between md:p-4  md:px-9 md:py-7 rounded-3xl opacity-80'>
  <i class="fa-brands fa-dropbox text-4xl p-2 text-yellow-300"></i>
        <div>
           <h3 className='text-xl text-gray-300 mb-2'>Digital Content Creation</h3>
           <p className='text-gray-400'>Creatiing dynamic digital content, such as 3D models, graphics or animations.</p>
        </div>
  </div>
</div>
       
       <h1 className='self-center mt-4 md:text-4xl font-bold text-white mb-4 text-2xl '>Programming Languages</h1>
   
        
         <div>
            
         <div className='bg-slate-950 w-[100%]  md:flex sm:flex-col   md:justify-between md:p-4  md:px-9 md:py-7 rounded-3xl opacity-80'>
               

               <h4 className='text-white'>JavaScript 80%</h4>
               <div className='w-[100%] h-2 bg-black rounded-full mt-5 mb-5'>
                 <div className='w-[80%] bg-yellow-300 h-2 rounded-md'></div>
               </div>
               <h4 className='text-white'>TypeScript 50%</h4>
               <div className='w-[100%] h-2 bg-black rounded-full mt-5 mb-5'>
                 <div className='w-[50%] bg-yellow-300 rounded-md h-2'></div>
               </div>
               <h4 className='text-white'>PHP 40%</h4>
               <div className='w-[100%] h-2 bg-black rounded-full mt-5 mb-5'>
                 <div className='w-[40%] rounded-md bg-yellow-300 h-2'></div>
               </div>
               <h4 className='text-white'>Python 25%</h4>
               <div className='w-[100%] h-2 bg-black rounded-full mt-5 mb-5'>
                 <div className='w-[25%] rounded-md bg-yellow-300 h-2'></div>
               </div>
               <h4 className='text-white'>Css 95%</h4>
               <div className='w-[100%] h-2 bg-black rounded-full mt-5 mb-5'>
                 <div className='w-[95%] rounded-md bg-yellow-300 h-2'></div>
               </div>
               <h4 className='text-white'>HTML 100%</h4>
               <div className='w-[100%] h-2 bg-black rounded-full mt-5 mb-5'>
                 <div className='w-[100%] rounded-md bg-yellow-300 h-2'></div>
               </div>



  </div>
             

           
         </div>
   
   

         <h1 className='self-center mt-4 md:text-4xl font-bold text-white mb-4 text-2xl '>
Human Languages</h1>
   
        
   <div>
      
   <div className='bg-slate-950 w-[100%]  md:flex sm:flex-col   md:justify-between md:p-4  md:px-9 md:py-7 rounded-3xl opacity-80'>
         

         <h4 className='text-white'>English Fluent</h4>
         <div className='w-[100%] h-2 bg-black rounded-full mt-5 mb-5'>
           <div className='w-[99%] bg-yellow-300 h-2 rounded-md'></div>
         </div>
         <h4 className='text-white'>Hindi Fluent</h4>
         <div className='w-[100%] h-2 bg-black rounded-full mt-5 mb-5'>
           <div className='w-[100%] bg-yellow-300 rounded-md h-2'></div>
         </div>
         <h4 className='text-white'>Marathi Native</h4>
         <div className='w-[100%] h-2 bg-black rounded-full mt-5 mb-5'>
           <div className='w-[100%] rounded-md bg-yellow-300 h-2'></div>
         </div>
         
         



</div>
      

     
   </div>
   
   <h1 className='self-center mt-4 md:text-4xl font-bold text-white mb-4 text-2xl '>Development Skills</h1>

   <div className='bg-slate-950 w-[100%]  md:flex sm:flex-col   md:justify-between md:p-4  md:px-9 md:py-7 rounded-3xl opacity-80'>
      <div class="scroll-parent">
        <div class="scroll-element primary">
          <img
            src="https://w7.pngwing.com/pngs/911/515/png-transparent-figma-logo-brand-logos-brands-in-colors-icon-thumbnail.png"
            alt="damilola jerugba"
          />
          <img
            src="https://w7.pngwing.com/pngs/1005/511/png-transparent-web-development-html-logo-world-wide-web-consortium-create-html-signature-angle-text-rectangle-thumbnail.png"
            alt="tosin jerugba"
          />
          <img
            src="https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png"
            alt="fiyin jerugba"
          />
          <img className='h-[50%]'
            src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo-thumbnail.png"
            alt="feyikemi jerugba"
          />
          <img className='h-[50%]'
            src="https://w7.pngwing.com/pngs/134/190/png-transparent-sql-logo-microsoft-sql-server-mysql-database-logo-others-blue-text-trademark-thumbnail.png"
            alt="femi jerugba"
          />
        </div>
        <div class="scroll-element secondary">
          <img
            src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
            alt="damilola jerugba"
          />
          <img
            src="https://w7.pngwing.com/pngs/828/432/png-transparent-npm-node-js-computer-icons-computer-software-installation-others-text-rectangle-logo-thumbnail.png"
            alt="tosin jerugba"
          />
          <img
            src="https://w7.pngwing.com/pngs/247/558/png-transparent-node-js-javascript-express-js-npm-react-github-angle-text-trademark-thumbnail.png"
            alt="fiyin jerugba"
          />
          <img
            src="https://w7.pngwing.com/pngs/578/816/png-transparent-java-class-file-java-platform-standard-edition-java-development-kit-java-runtime-environment-coffee-jar-text-class-orange-thumbnail.png"
            alt="feyikemi jerugba"
          />
          <img
            src="https://w7.pngwing.com/pngs/646/324/png-transparent-github-computer-icons-github-logo-monochrome-head-thumbnail.png"
            alt="femi jerugba"
          />
        </div>
      </div>
   </div>
 

   <h1 className='self-center mt-4 md:text-4xl font-bold text-white mb-10 text-2xl '>Favorite Activities</h1>

<div className='w-[100%] flex justify-between'>
  <div className='bg-slate-950 w-[47%] relative  md:flex sm:flex-col   md:justify-between md:p-4  md:px-9 md:py-7 rounded-3xl opacity-80'>
  <i class="fa-solid fa-sack-dollar text-4xl p-2 text-yellow-300"></i>
        <div>
           <h3 className='text-xl text-gray-300 mb-2'>Investments</h3>
           <p className='text-gray-400'>Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.</p>
        </div>
  </div>
  <div className='bg-slate-950 relative w-[47%]  md:flex sm:flex-col   md:justify-between md:p-4  md:px-9 md:py-7 rounded-3xl opacity-80'>
  <i class="fa-solid fa-headphones-simple text-4xl p-2 text-yellow-300"></i>
        <div>
           <h3 className='text-xl text-gray-300 mb-2'>Music</h3>
           <p className='text-gray-400'>Creatiing dynamic digital content, such as 3D models, graphics or animations.</p>
        </div>
  </div>
  
</div>

<div className='w-[100%] flex justify-between mt-10'>
  <div className='bg-slate-950 w-[47%] relative md:flex sm:flex-col   md:justify-between md:p-4  md:px-9 md:py-7 rounded-3xl opacity-80'>
  <i class="fa-solid fa-plane-departure text-4xl p-2 text-yellow-300"></i>
        <div>
           <h3 className='text-xl text-gray-300 mb-2'>Traveling</h3>
           <p className='text-gray-400'>Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually.</p>
        </div>
  </div>
 
  <div className='bg-slate-950 w-[47%] relative  md:flex sm:flex-col   md:justify-between md:p-4  md:px-9 md:py-7 rounded-3xl opacity-80'>
  <i class="fa-solid fa-camera-retro text-4xl p-2 text-yellow-300"></i>
        <div>
           <h3 className='text-xl text-gray-300 mb-2'>Photography</h3>
           <p className='text-gray-400'>Creatiing dynamic digital content, such as 3D models, graphics or animations.</p>
        </div>
  </div>
  
</div>


    </div>

      
   </section>

    </>
  )
}



