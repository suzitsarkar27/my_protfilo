import React from "react";
import phone from '../../assest/icon/phone.svg'
import emial from '../../assest/icon/email.svg'
import location from '../../assest/icon/location.svg'

const Contact = () => {
  return (
    <div className="mt-32 ">
      <h1 className="text-center text-4xl font-bold mb-16">Get In <span className="text-blue-600">Touch</span></h1>
      <div class="card lg:card-side boxex p-10 md:items-center">
        
        <div className="contact-infro w-9/12 md:mb-10">

           <div className="flex gap-10 items-center">
             <div> <img className="h-24" src={phone} alt="" /></div>
             <div>
              <h2 className="text-3xl font-medium">Phone</h2>
              <h5 className="text-3xl font-medium">01302906374</h5>
              </div>
           </div>
           <div className="flex gap-10 items-center">
             <div> <img className="h-24" src={emial} alt="" /></div>
             <div>
              <h2 className="text-3xl font-medium">Email</h2>
              <h5 className="text-3xl font-mediumd">suzitsarkar27@gmail.com</h5>
              </div>
           </div>
           <div className="flex gap-10 items-center">
             <div> <img className="h-24" src={location} alt="" /></div>
             <div>
              <h2 className="text-3xl font-medium">Locaton</h2>
              <h5 className="text-3xl font-medium">Biyanibazar, Sylhet</h5>
              </div>
           </div>
    
        </div>

        <div class="card-body justify-end w-9/12">
          <>
            <div className="lg:flex gap-5">
            <input type="text" placeholder="Type here" class="input input-bordered w-full " />
            <input type="text" placeholder="Type here" class="input input-bordered w-full " />
            </div>
            <input type="text" placeholder="Type here" class="input input-bordered w-full " />
            <div>
            <input type="text" placeholder="Type here" class="input input-bordered w-full" />

            <button className="btn_shadow mt-5">Send Messages</button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Contact;
