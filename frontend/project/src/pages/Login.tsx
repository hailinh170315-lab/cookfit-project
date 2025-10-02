import { GoPerson } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { FaPencilAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

const Login = () => {
  return (
        <div className="w-full h-fullscreen md:min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-300 to-orange-400 ">
            {/* <input 
            type="text" 
            placeholder="  Trò chuyện:"
            className="fixed top-20 right-16 outline-none w-[200px] h-8 bg-black placeholder-white rounded-l rounded-r shadow-2xl"
            />
            <button className="fixed bottom-4 left-24 w-14 mt-[70px] h-14 bg-black text-green-500 flex items-center justify-center rounded-full shadow-2xl">
                <FaPencilAlt size={25} />
            </button> */}
            <div className="w-[400px] mt-[210px] md:mt-0 mb-[210px] md:mb-0 bg-white flex flex-col rounded-xl shadow-2xl ">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-14 mt-10 h-14 bg-yellow-300 text-white flex items-center justify-center rounded-full">
                        <FiLock fontSize={2} size={30}/>
                    </div>
                    <p className=" mt-3 mb-1 font-bold text-[30px] text-black">Admin Login</p>
                    <p className=" text-[15px] text-gray-600 mb-6">Đăng nhập với quyền quản trị</p>
                </div>
                <div className="flex w-[350px] flex-col ml-6">
                    <p className="mb-1 font-medium">Email</p>
                    <div>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-[350px] bg-white mb-6">
                        <FiMail size={20} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="student@btec.edu.vn"
                            className="outline-none w-full placeholder-gray-400"
                        />
                        </div>
                    </div>

                    <p className="mb-1 font-medium">Mật khẩu</p>
                    <div>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-[350px] bg-white mb-6">
                        <FiLock size={20} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="A123456a@"
                            className="outline-none w-full placeholder-gray-400"
                        />
                        </div>
                    </div>

                    <button className="flex flex-col h-10 mb-5 text-white font-bold items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-l rounded-r  shadow-md">
                        Đăng nhập
                    </button>
                    <button className="font-medium flex flex-row items-center justify-center mb-10">
                        <GoArrowLeft size={20} className="text-gray-700 mr-2" />Quay lại trang chủ
                    </button>
                </div>
            </div> 
        </div>
      )
}

export default Login