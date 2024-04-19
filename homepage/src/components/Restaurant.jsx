import React from 'react'

const Restaurant = () => {
  return (
     <>
     <h1 className='pt-20 font-bold'>Hotels and Restaurant</h1><div className='flex flex-row space-e items-center justify-around flex-col h-[600px]' >
     <div className=' flex flex-col font-bold '><h1>Search and Book Hotels</h1>
         <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Search Hotel
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
</div>
     <div>
 <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14002.521468202938!2d77.11399785!3d28.670784349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713563050644!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{border : "0"}} 
   allowfullscreen=""
   loading="lazy"
   referrerpolicy="no-referrer-when-downgrade"></iframe>
</div></div>
 </>
    
  )
}

export default Restaurant
