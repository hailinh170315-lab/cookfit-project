import { LuBell } from "react-icons/lu";
import { MdNotStarted } from "react-icons/md";
import { HiKey } from "react-icons/hi";
import { GiTrophyCup } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { LuCalendar } from "react-icons/lu";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center bg-gradient-to-r from-yellow-300 to-orange-400 ">
            {/* <div className="w-full">
                <Header />
            </div> */}

            <div className="w-14 mt-[80px] h-14 bg-yellow-100 text-white flex items-center justify-center rounded-full">
                <div className="animate-bounce-slow">
                    <LuBell fontSize={2} color="#fff" size={30}/>
                </div>
            </div>

            <p className="mt-5 font-bold text-[50px] text-white">Rung Chuông Vàng</p>
            <p className="font-bold text-[50px] text-yellow-200">BTEC</p>
            <div className="w-[600px]">
                <p className="mt-1 font-bold text-[20px] text-center text-white">
                    Cuộc thi kiến thức trực tuyến dành cho sinh viên BTEC. Thể hiện tài năng và dành những phần thưởng hấp dẫn!
                </p>
            </div>
                
            <div className="mt-5 flex">
                <button className="px-20 py-8 bg-white font-bold flex text-yellow-800 rounded-xl shadow-md">
                    <MdNotStarted fontSize={2} size={25}/>
                    <span className="ml-3">Tham gia thi ngay</span>
                </button>

                <button className="ml-5 px-20 py-8 bg-black font-bold flex flex-row text-white rounded-xl shadow-md">
                    <HiKey fontSize={2} size={25}/>
                    <span className="ml-3">Đăng nhập Admin</span>
                </button>
            </div>

            <div className="mt-10 h-auto flex flex-row">
                <div className="w-[300px] mr-3 bg-yellow-200 text-white flex flex-col items-center justify-center rounded-xl shadow-md">
                    <p className="mt-5"><GiTrophyCup fontSize={2} size={50}/></p>
                    <p className="mt-3 font-bold">Giải thưởng hấp dẫn</p>
                    <p className="mt-1 mr-10 ml-10 mb-5 text-center">Cơ hội nhận những phần thưởng giá trị từ cuộc thi</p>
                </div>

                <div className="w-[300px] mr-3 bg-yellow-200 text-white flex flex-col items-center justify-center rounded-xl shadow-md">
                    <p className="mt-5"><GoPeople fontSize={2} size={50}/></p>
                    <p className="mt-3 font-bold">Cộng đồng sinh viên</p>
                    <p className="mt-1 mr-10 ml-10 mb-5 text-center">
                        Kết nối và giao lưu với cái bạn sinh viên khác
                    </p>
                </div>

                <div className="w-[300px] bg-yellow-200 text-white flex flex-col items-center justify-center rounded-xl shadow-md">
                    <p className="mt-5"><LuCalendar fontSize={2} size={50}/></p>
                    <p className="mt-3 font-bold">Thi trực tuyến</p>
                    <p className="mt-1 mr-10 ml-10 mb-5 text-center">
                        Tham gia thi mọi lúc mọi nơi với giao diện thân thiện
                    </p>
                </div>
            </div>

            <div className="mt-auto w-full">
                <Footer />
            </div>

        </div>
    )
}

export default HomePage