import { FiLogOut } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { LuBell } from "react-icons/lu";

const Header = () => {
  return (
    <div className="w-full h-16 bg-white text-white flex items-center justify-center">
        <div className="max-w-10xl mx-auto px-4 flex flex-row items-center">
            <div>
                <div className=" h-10 w-10 mr-4 bg-yellow-100 text-white bg-gradient-to-r from-yellow-300 to-orange-400 flex items-center justify-center rounded-r rounded-l">
                    <LuBell fontSize={2} color="#fff" size={30}/>
                </div>
            </div>
            <div className="ml-auto flex items-center justify-center">
                <div className="flex-col">
                    <p className="font-medium text-black text-[20px]">Rung Chuông Vàng BTEC</p>
                    <p className="text-gray-400 text-sm">Admin Dashboard</p>
                </div>
                <div className="flex justify-center text-black ml-[700px] text-sm">
                    <div className="mr-2 flex mr-5">
                        <GoPerson size={20}/>
                        <span className="ml-2">admin@gmail.com (Admin)</span>
                    </div>
                    <button className="flex">
                        <FiLogOut size={20} />
                        <span className="ml-2">Đăng xuất</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header