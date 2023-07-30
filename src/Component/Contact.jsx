
import React from 'react'
import img from '../../public/images/f61.png';

const Contact = () => {
    return (
        <div className=' container mx-auto'>
            <div className="flex flex-col gap-4 ">
               
                    <div className="p-1.5 h-full  mt-3">
                        <h1 className='text-center h-14 '>Have Some Question?</h1>
                        <hr className='border-2 border-blue-950' />
                   
                    </div>
                
                <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                        <img src={img} alt="About Us" className='h-80 w-full'/>
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div className="mb-3">
                                <label htmlFor="exampleForm" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleForm" placeholder="John Smith"/>
</div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <button type="submit" className="bg-blue-800 px-8 py-2 rounded-xl shadow-3xl outline-none text-white no-underline hover:bg-blue-500 hover:outline-2 mb-3">Send Message</button>

                        </form>
                    </div>
                    </div>
                </div>
            </div>
            )
}

 export default Contact
