import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-28 bg-gray-700 text-white p-4 flex">
        <div className="max-w-10xl mx-auto px-4">
            <div className="ml-auto flex">
              <div className="flex-col">
                <p className="font-medium text-yellow-300 text-[17px]">Rung Chuông Vàng BTEC</p>
                <p className="text-gray-400 text-sm">Cuộc thi kiến thức trực tuyến dành cho sinh viên BTEC</p>
              </div>
              <div className="mr-auto flex flex-col justify-center text-gray-400 ml-[700px] text-sm">
                <p>Made with ❤️ and <span className="text-blue-500">&lt;&gt;</span> by BTEC Team </p>
              </div>
            </div>
            <hr className="border-gray-600 mx-auto mt-3 mb-1.5"/>
            <div className="flex justify-center text-sm text-gray-500">
              <p>© 2024 BTEC. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer