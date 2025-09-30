import Header from "../components/Header"
import { IoMdArrowBack } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

const Management = () => {
  return (
    <div>
        <div className="w-full h-screen flex flex-col bg-gradient-to-r from-gray-200 to-gray-300">
            <Header />

            <div className="flex flex-col items-center justify-center">
                <div className="w-[1300px] h-14 mt-10 flex items-center justify-center text-gray-700 bg-white rounded-xl">
                    <div  className="w[600px] h-auto flex items-center justify-center">
                        <button className="mr-60">
                            Tổng quan
                        </button>
                    </div>
                    <div>
                        <button className="w[600px] ml-60">
                            Quản lý đề thi
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mr-[1060px] mt-5 mb-5 font-bold text-[28px]">
                <IoMdArrowBack size={20} />
                <span className="ml-3">Tạo đề thi mới</span>
            </div>

            <div className="flex flex-col items-center justify-center mb-5">
                <div className="w-[1300px] h-auto flex justify-center text-gray-700 bg-white rounded-xl">
                    <div className="w-[1200px] h-auto mt-5">
                        <p className="font-semibold text-[20px] mb-5">Thông tin cơ bản</p>

                        <div className="flex flex-row">
                            <div className="flex-col">
                                <p className="mb-2 font-medium">Nhập tiêu đề đề thi</p>

                                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-[590px] bg-white mb-6">
                                    <input 
                                    type="text"
                                    placeholder="Nhập tiêu đề đề thi"
                                    className="outline-none w-full placeholder-gray-400"
                                    />
                                </div>
                            </div>
                            
                            <div className="flex-col ml-auto">
                                <p className="mb-2 font-medium">Thời gian làm bài (phút)</p>
                                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-[590px] bg-white mb-6">
                                    <p>60</p>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div>
                            <p className="mb-2 font-medium">Mô tả đề thi</p>
                            <div className="border border-gray-300 rounded-lg px-3 py-2 w-full bg-white mb-6">
                                <textarea
                                    placeholder="Mô tả về đề thi này"
                                    className="outline-none w-full h-20 resize-none placeholder-gray-400 "
                                />
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div className="flex-col">
                                <p className="mb-2 font-medium">Thời gian bắt đầu</p>
                                <div className="border border-gray-300 rounded-lg px-3 py-2 w-[590px] bg-white mb-6">
                                    <input
                                        type="datetime-local"
                                        className="outline-none w-full placeholder-gray-400 "
                                    />
                                </div>
                            </div>
                            <div className="flex-col ml-auto">
                                <p className="mb-2 font-medium">Thời gian bắt đầu</p>
                                <div className="border border-gray-300 rounded-lg px-3 py-2 w-[590px] bg-white mb-6">
                                    <input
                                        type="datetime-local"
                                        className="outline-none w-full placeholder-gray-400 "
                                    />
                                </div>
                            </div>
                        </div>

                        <input
                        type="checkbox"
                        className="mr-2 mb-6"
                        />
                        <label htmlFor="agree" className="font-medium">Kích hoạt đề thi (cho phép sinh viên tham gia)</label>

                    </div>
                    
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-center mb-5">
                <div className="w-[1300px] h-auto flex flex-col items-center justify-center text-gray-700 bg-white rounded-xl">
                    <div className="w-[1200px] h-auto mt-5 flex items-center justify-center">
                        <p className="font-semibold text-[20px] mb-5">Câu hỏi</p>
                        <div  className="w[600px] h-auto ml-auto flex items-center justify-center">
                            <button className="px-10 py-4 mb-5 bg-yellow-400 font-bold flex flex-row text-white rounded-xl shadow-md">
                                <FiPlus fontSize={2} size={25}/>
                                <span className="ml-3">Thêm câu hỏi</span>
                            </button>
                        </div>
                    </div>

                    <div className="border border-gray-300 rounded-lg px-3 py-2 w-[1200px] h-auto bg-white mb-6 flex flex-col items-center justify-center">
                        <div className="w-[1140px] h-auto mt-5 mb-5 flex items-center justify-center">
                            <p className="mr-auto font-medium">Câu 1</p>
                            <button className="ml-auto">
                                <FiTrash2 className="text-red-500" fontSize={2} size={20}/>
                            </button>

                            <div>
                                
                            </div>


                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Management