import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../service/userService";
import {
  turnOffLoading,
  turnOnLoading,
} from "../../redux/loadingReducer/loadingSlice";

const DetailAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [dataInfo, setDataInfo] = useState({});
  const { infoUser } = useSelector((state) => state.userReducer);
  let authorization = `Bearer ${infoUser.accessToken}`;
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();

  const fetchInfo = async () => {
    dispatch(turnOnLoading());
    try {
      let data = await userService.postInfoAccount(authorization);
      let dataFinal = data.data.content; 
      setDataInfo(dataFinal);
      console.log('data from Detail account',dataFinal)
      dispatch(turnOffLoading());
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchInfo();
  }, []);


  //////









  //////

  return (
    <div className="overflow-x-hidden">
      <div className="flex justify-center w-full h-screen pt-20">
        <div className="w-2/3 bg-gray-200 h-3/4 rounded-xl border p-8">
          <div className="mb-4">
            <label className="block mb-1">Tên tài Khoản</label>
            <input
              type="text"
              className="w-full border rounded py-2 px-3"
              placeholder="Username"
              name="taikhoan"
              value={dataInfo.taiKhoan || ""}
              readOnly
            />
          </div>
          <div className="mb-4 relative">
            <label className="block mb-1">Mật Khẩu</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border rounded py-2 px-3"
              name="matkhau"
              value={dataInfo.matKhau || ""}
              readOnly
            />
            <button
              className="absolute inset-y-0 right-0 px-3 bg-gray-300 text-gray-600 border-l border-gray-400 rounded-r h-full"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Ẩn" : "Hiển thị"}
            </button>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="text"
              className="w-full border rounded py-2 px-3"
              placeholder="Email"
              name="email"
              value={dataInfo.email || ""}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Họ Tên</label>
            <input
              type="text"
              className="w-full border rounded py-2 px-3"
              placeholder="Full Name"
              name="hoTen"
              value={dataInfo.hoTen || ""}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Số Điện Thoại</label>
            <input
              type="text"
              className="w-full border rounded py-2 px-3"
              placeholder="Phone Number"
              name="soDT"
              value={dataInfo.soDT || ""}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAccount;
