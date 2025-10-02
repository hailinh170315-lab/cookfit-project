const Footer = () => {
  return (
    <div className="w-full h-30 bg-gray-700 text-white p-4 flex items-center justify-center">
        <div className="w-full md:w-[1100px] mx-auto ">
            <div className=" md:ml-auto flex">
              <div className="flex-col">
                <p className="font-medium text-yellow-300 text-[17px]">Rung Chuông Vàng BTEC</p>
                <p className="text-gray-400 text-sm">Cuộc thi kiến thức trực tuyến dành cho sinh viên BTEC</p>
              </div>
              <div className="md:mr-auto flex flex-col md:items-center justify-center md:flex-row text-gray-400 ml-16 md:ml-[538px] text-sm">
                <p >Made with ❤️ and <span className="text-blue-500">&lt;&gt;</span> by BTEC Team </p>
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