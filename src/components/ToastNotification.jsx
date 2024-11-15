import React from 'react'

const ToastNotification = ({ status }) => {
  const elements = [
    {
      text:'يرجي تعبئة جميع الحقول',
      color: 'bg-[#ffea00]',
      icon: "fa-solid fa-triangle-exclamation text-[#ffea00]" 
    }, 
    {
      text: 'تم إرسال الرسالة بنجاح',
      color: 'bg-[#15D02E]',
      icon: "fa-solid fa-circle-check text-[#15D02E]"
    }, 
    {
      text: 'حدث خطأ أثناء إرسال الرسالة',
      color: 'bg-[#f01313]',
      icon: "fa-solid fa-circle-xmark text-[#f01313]"
    }
  ]

  function toastBackground() {
    switch(status) {
      case 1: 
        return 'bg-yellow-50';
      case 2:
        return 'bg-green-100';
      case 3: 
        return 'bg-red-100';
      default:
        return ''
    }
  }

  return (
    <>
      {elements.map((element, index) => {
        if ((index + 1) === status) {
          return (
            <div className={`w-[300px] py-2 px-5 fixed top-10 right-10 rounded-md ${toastBackground()}`}>
              <div className='flex gap-3 items-center'>
                <div className='text-2xl'>
                  <i className={element.icon}></i>
                </div>
                <p className='font-kufi'>{element.text}</p>
              </div>
              <div className={`absolute right-0 bottom-0 w-full h-[3.5px] ${element.color} toast-progress`}></div>
            </div>
          )
        }
      })}
    </>
  )
}

export default ToastNotification