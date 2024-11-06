import React from 'react'
import star from '../assets/icons/Vector (9).png'
import firstAv from '../assets/images/Avatar Image.png'
import secondAv from '../assets/images/Avatar Image (1).png'
import thirdAv from '../assets/images/Avatar Image (2).png'

const Testimonial = () => {
  return (
    <div className="general lg:p-10 bg-blue-100">
      <div className="head-text py-5">
        <div className="para text-sm py-3">
          <p>Clients Feedback</p>
        </div>
        <div className="text-3xl font-semibold">
          <h1>Customer Testimonials</h1>
        </div>
      </div>
      <div className="review flex lg:flex-row flex-col space-y-5 gap-10 py-10 justify-center items-center">
        <div className="each-review py-5 px-4 border border-green-800 w-[350px] h-[200px] rounded-md space-y-4"> 
          <div className="star flex gap-1 items-start">
            <img src={star} alt="" className="h-4 w-4" />
            <img src={star} alt="" className="h-4 w-4" />
            <img src={star} alt="" className="h-4 w-4" />
            <img src={star} alt="" className="h-4 w-4" />
            <img src={star} alt="" className="h-4 w-4" />
          </div>
          <div className="text-rv text-xs">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellat eaque optio sunt inventore facilis autem nostrum aliquam tenetur facere?</p>
          </div>
          <div className="img flex gap-3 items-center">
            <img src={firstAv} alt="" className="w-8 h-8" />
            <div className="text-sm">
              <p className="font-semibold">Dianne Russell</p>
              <p>Starbucks</p>
            </div>
          </div>
        </div>
        <div className="each-review py-5 px-4 border border-green-800 w-[350px] h-[200px] rounded-md space-y-4"> 
          <div className="star flex gap-1 items-start">
            <img src={star} alt="" className="h-4 w-4" />
            <img src={star} alt="" className="h-4 w-4" />
            <img src={star} alt="" className="h-4 w-4" />
            <img src={star} alt="" className="h-4 w-4" />
            <img src={star} alt="" className="h-4 w-4" />
          </div>
          <div className="text-rv text-xs">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore totam ea at, delectus praesentium similique nulla. Hic natus ratione distinctio voluptate perspiciatis recusandae consectetur corporis.</p>
          </div>
          <div className="img flex gap-3 items-center">
            <img src={secondAv} alt="" className="w-8 h-8" />
            <div className="text-sm">
              <p className="font-semibold">Kristin Watson</p>
              <p>Louis Vuitton</p>
            </div>
          </div>
        </div>
        <div className="each-review py-5 px-4 border border-green-800 w-[350px] h-[200px] rounded-md space-y-4"> 
          <div className="star flex gap-1 items-start">
            <img src={star} alt="" className="h-4 w-4" />
            <img src={star} alt="" className="h-4 w-4" />
            <img src={star} alt="" className="h-4 w-4" />
            <img src={star} alt="" className="h-4 w-4" />
            <img src={star} alt="" className="h-4 w-4" />
          </div>
          <div className="text-rv text-xs">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, recusandae cum repellat deserunt libero beatae. Harum sint nam at voluptatibus?</p>
          </div>
          <div className="img flex gap-3 items-center">
            <img src={thirdAv} alt="" className="w-8 h-8" />
            <div className="text-sm">
              <p className="font-semibold">Kathryn Murphy</p>
              <p>McDonald's</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
