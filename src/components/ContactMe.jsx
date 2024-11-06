import React, { useState } from 'react'

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    termsAccepted: false,
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!form.firstName) newErrors.firstName = 'Please enter your first name.'
    if (!form.lastName) newErrors.lastName = 'Please enter your last name.'
    if (!form.message) newErrors.message = 'Please enter your messsage.'
    if (!form.email) {
      newErrors.email = 'Please enter your email address.'
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!form.phoneNumber) newErrors.phoneNumber = 'Please enter your phone number.'
    if (isNaN(form.phoneNumber)) newErrors.phoneNumber = 'Phone number must contain only numbers.'
    if (!form.termsAccepted) newErrors.termsAccepted = 'You must accept the terms.'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setErrors({})
      alert('Form submitted successfully!')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-container p-5 max-w-md lg:max-w-2xl mx-auto">
        <div className="text-center py-16 p-4">
  <p className="text-sm font-semibold">Get in Touch</p>
  <h1 className="text-4xl py-4 font-semibold">Contact Me</h1>
  <p className="lg:w-[400px] mx-auto text-center">Have a question, project idea, or just want to say hello? Drop me a message and I’ll get back to you as soon as possible!</p>
</div>
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block mb-1 font-semibold">First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 outline-none"
          />
          {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-semibold">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 outline-none"
          />
           {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 outline-none"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 outline-none"
          />
          {errors.phoneNumber && <p className="text-red-600 text-sm">{errors.phoneNumber}</p>}
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Type your message..."
          className="w-full border border-gray-300 rounded p-2 h-36 outline-none"
        />
         {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          name="termsAccepted"
          checked={form.termsAccepted}
          onChange={handleChange}
          className="mr-2 accent-purple-700" 
        />
        <label className="text-sm">I accept the terms</label>
        {errors.termsAccepted && <p className="text-red-600 text-sm">{errors.termsAccepted}</p>}
      </div>

      <button type="submit" className="w-full bg-purple-700 text-white p-2 rounded font-semibold">
        Submit
      </button>
    </form>
  )
}

export default ContactForm
