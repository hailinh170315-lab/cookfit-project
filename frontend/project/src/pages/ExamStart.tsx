import { GoPerson } from "react-icons/go";
import { SiSharp } from "react-icons/si";
import { RiBookOpenLine } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { FaPencilAlt } from "react-icons/fa";

const ExamStart = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-yellow-300 to-orange-400 ">
            <input 
            type="text" 
            placeholder="  Trò chuyện:"
            className="fixed top-20 right-16 outline-none w-[200px] h-8 bg-black placeholder-white rounded-l rounded-r shadow-2xl"
            />
            <button className="fixed bottom-4 left-24 w-14 mt-[70px] h-14 bg-black text-green-500 flex items-center justify-center rounded-full shadow-2xl">
                <FaPencilAlt size={25} />
            </button>
            <div className="w-[400px] bg-white flex flex-col rounded-xl shadow-2xl ">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-14 mt-10 h-14 bg-yellow-300 text-white flex items-center justify-center rounded-full">
                        <GoPerson fontSize={2} size={30}/>
                    </div>
                    <p className=" mt-3 mb-1 font-bold text-[30px] text-black">Thông Tin Sinh Viên</p>
                    <p className=" text-[15px] text-gray-600 mb-6">Nhập thông tin để tham gia thi</p>
                </div>
                <div className="flex w-[350px] flex-col ml-6">
                    <p className="mb-1 font-medium">Họ và tên</p>
                    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-[350px] bg-white mb-6">
                        <GoPerson size={20} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Nguyễn Văn A"
                            className="outline-none w-full placeholder-gray-400"
                        />
                    </div>
                    <p className="mb-1 font-medium">Mã sinh viên</p>
                    <div>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-[350px] bg-white mb-6">
                        <SiSharp size={20} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="BT12345"
                            className="outline-none w-full placeholder-gray-400"
                        />
                        </div>
                    </div>
                    <p className="mb-1 font-medium">Lớp học</p>
                    <div>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-[350px] bg-white mb-6">
                        <RiBookOpenLine size={20} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="CNTT01"
                            className="outline-none w-full placeholder-gray-400"
                        />
                        </div>
                    </div>
                    <p className="mb-1 font-medium">Email</p>
                    <div>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-[350px] bg-white mb-6">
                        <RiBookOpenLine size={20} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="student@btec.edu.vn"
                            className="outline-none w-full placeholder-gray-400"
                        />
                        </div>
                    </div>
                    <button className="flex flex-col h-10 mb-5 text-white font-bold items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-l rounded-r  shadow-md">
                        Vào thi
                    </button>
                    <button className="font-medium flex flex-row items-center justify-center mb-10">
                        <GoArrowLeft size={20} className="text-gray-700 mr-2" />Quay lại trang chủ
                    </button>
                </div>
            </div> 
        </div>
    )
}

export default ExamStart