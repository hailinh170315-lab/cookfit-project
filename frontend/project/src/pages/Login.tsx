import React from 'react'
import { GoPerson } from "react-icons/go";

const Login = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-yellow-300 to-orange-400 ">   
            <div className="w-[600px] bg-white flex flex-col items-center justify-center rounded-xl shadow-md ">
                <div className="w-14 mt-10 h-14 bg-yellow-300 text-white flex items-center justify-center rounded-full">
                    <GoPerson fontSize={2} size={30}/>
                </div>

                <p className=" mt-5 font-bold text-[40px] text-black">Thông tin sinh viên</p>
                <p className=" text-[20px] text-black">Nhập thông tin để tham gia thi</p>

                

            </div>
        </div>
    )
}

export default Login