import React from "react";
import { IoIosArrowDown, IoMdHome } from "react-icons/io";
import logo from "./Assets/Images/logo.png";
import { RiEarthLine, RiHealthBookLine, RiSettings5Line } from "react-icons/ri";
import {
  FaAlignRight,
  FaAngleDown,
  FaArrowDownWideShort,
  FaArrowUp,
  FaArrowUpRightDots,
  FaArrowUpShortWide,
  FaCircleInfo,
  FaLightbulb,
} from "react-icons/fa6";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Home() {
  return (
    <>
      <header className="container h-[64px] flex flex-row justify-between items-center gap-2 bg-gray-900 text-[#eaecef] font-medium">
        <IoMdHome className="w-6 h-6" />
        <img src={logo} alt="logo" className="object-cover h-[64px]" />
        <div className="flex-row items-center gap-1 hover:text-[#fcd535] hidden sm:flex">
          <span>Futures</span>
          <IoIosArrowDown />
        </div>
        <div className="flex-row items-center gap-1 hover:text-[#fcd535] hidden sm:flex">
          <span>Quền chọn</span>
          <IoIosArrowDown />
        </div>
        <div className="flex-row items-center gap-1 hover:text-[#fcd535] hidden sm:flex">
          <span>Bot giao dịch</span>
          <IoIosArrowDown />
        </div>
        <span className="hover:text-[#fcd535] hidden sm:flex">
          Sao chép giao dịch
        </span>
        <div className="flex-row items-center gap-1 hover:text-[#fcd535] hidden sm:flex">
          <span>Dữ liệu</span>
          <IoIosArrowDown />
        </div>
        <div className="flex-row items-center gap-1 hover:text-[#fcd535] hidden sm:flex">
          <span>Xem thêm</span>
          <IoIosArrowDown />
        </div>
        <span className=" hidden sm:block">Thử thách</span>
        <div className="flex-row gap-2 items-center hover:text-[#fcd535] hidden sm:flex">
          <span>
            Futures <span>NEXT</span>
          </span>
          <div className="text-gray-800 bg-[#fcd535] px-1 text-xs rounded">
            New
          </div>
        </div>
        <div className=" hidden sm:block">
          <span className="text-sm">Đăng nhập</span>
        </div>
        <div className=" hidden sm:block">
          <span className="text-gray-800 bg-[#fcd535] rounded-md py-2 px-2 text-sm">
            Đăng ký
          </span>
        </div>
        <div className="flex flex-row items-center gap-4">
          <RiEarthLine className="w-6 h-6 " />
          <RiHealthBookLine className="w-6 h-6 " />
          <RiSettings5Line className="w-6 h-6 " />
        </div>
      </header>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-2/3 flex flex-col">
          <div className="h-[76px] flex flex-row items-center justify-between bg-[#161a1e] text-gray-100 gap-2 text-xs border-[1px] border-l-0 border-gray-700">
            <div className="flex flex-col ml-6">
              <div className="flex flex-row items-center gap-2">
                <span className="text-xl font-semibold text-gray-100">
                  BTCUSDT
                </span>
                <FaAngleDown className="text-lg" />
              </div>

              <span className="text-xs font-semibold text-gray-100">
                Vĩnh cửu
              </span>
            </div>
            <div className="text-2xl text-[#f6465d] font-medium">
              <span>69696.9</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-gray-400">Giá đánh dấu</span>
              <span className="font-medium">69,420.0</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-gray-400">Chỉ số</span>
              <span className="font-medium">69,420.0</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-gray-400">Fuding / Đếm ngược</span>
              <div className="flex flex-row gap-2">
                <span className="font-medium text-[#d77f43]">69,420.0</span>
                <span className="font-medium">05:05:05</span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-gray-400">Biến động giá 24h</span>
              <span className="font-medium text-[#0ecb81]">69,420.0%</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-gray-400">Giá cao nhất 24h</span>
              <span className="font-medium">69,420.0</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-gray-400">Giá thấp nhất 24h</span>
              <span className="font-medium">69,420.0</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-gray-400">KL 24h(BTC)</span>
              <span className="font-medium">202,020.222</span>
            </div>
            <div className="text-lg p-4 cursor-pointer text-gray-500">
              <FaAlignRight />
            </div>
          </div>

          <div className="bg-[#2b313a] sm:h-[90vh] h-[40vh]">
            khoi trading view
          </div>
        </div>

        <div className="w-full sm:w-1/3 flex flex-col sm:flex-row">
          <div className="bg-[#161a1e] border-t-[1px] border-gray-700 border-b-2 sm:w-1/2 w-full sm:pb-0 pb-4">
            <div className="flex flex-col px-4 bg-[#161a1e] border-t-[1px] border-gray-700">
              <div className="flex flex-row justify-between items-center">
                <span className="text-sm text-gray-200 font-medium">
                  Sổ lệnh
                </span>
                <div className="text-lg p-4 pr-0 cursor-pointer text-gray-500">
                  <FaAlignRight />
                </div>
              </div>
              <div className="flex flex-row items-center justify-between mt-2">
                <div className="flex flex-row items-center gap-4 text-white text-lg">
                  <FaArrowDownWideShort />
                  <FaArrowUpShortWide />
                  <FaArrowUpRightDots />
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-gray-200 font-medium text-sm">0.1</span>
                  <FaAngleDown className="text-xs text-gray-400" />
                </div>
              </div>
              <div className="flex flex-row justify-between mt-4">
                <div className="text-xs font-medium text-gray-400">
                  <span className="font-normal">Giá (USDT)</span>
                  <ul className="pt-3 flex flex-col gap-1 text-[#f6465d]">
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                  </ul>
                </div>
                <div className="text-xs font-medium text-gray-400">
                  <span className="font-normal">Kích cỡ (BTC)</span>
                  <ul className="ml-7 pt-3 flex flex-col gap-1">
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                  </ul>
                </div>
                <div className="text-xs font-medium text-gray-400">
                  <span className="font-normal">Tổng (BTC)</span>
                  <ul className="ml-5 pt-3 flex flex-col gap-1">
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                  </ul>
                </div>
              </div>

              <div className="text-2xl text-[#f6465d] font-medium flex flex-row gap-2 items-center mt-2">
                <span>69696.9</span> <FaArrowUp className="text-base" />
                <span className="text-gray-400 text-xs font-medium">
                  69696.9
                </span>
              </div>
              <div className="flex flex-row justify-between ">
                <div className="text-xs font-medium text-gray-400">
                  <ul className="pt-3 flex flex-col gap-1 text-[#0ecb81]">
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                  </ul>
                </div>
                <div className="text-xs font-medium text-gray-400">
                  <ul className="ml-7 pt-3 flex flex-col gap-1">
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                  </ul>
                </div>
                <div className="text-xs font-medium text-gray-400">
                  <ul className="ml-5 pt-3 flex flex-col gap-1">
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-gray-700 border-t-2 mt-2 px-4 pt-2">
              <span className="text-sm text-gray-200 font-medium">
                Giao dịch
              </span>
              <div className="flex flex-row justify-between pt-2">
                <div className="text-xs font-medium text-gray-400">
                  <span className="font-normal">Giá (USD)</span>
                  <ul className="pt-3 flex flex-col gap-1 text-[#f6465d]">
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                  </ul>
                </div>
                <div className="text-xs font-medium text-gray-400">
                  <span className="font-normal">Số</span>
                  <ul className="ml-7 pt-3 flex flex-col gap-1">
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                  </ul>
                </div>
                <div className="text-xs font-medium text-gray-400">
                  <span className="font-normal">Thời gian</span>
                  <ul className="ml-5 pt-3 flex flex-col gap-1">
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                    <li>696969</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 bg-[#1e2329] border-t-[1px] border-l-[1px] border-gray-700 px-4 text-gray-200 flex flex-col gap-4">
            <div className="flex flex-row gap-2 justify-between items-center">
              <div className="w-[40%] flex items-center justify-center bg-[#474d57] rounded-sm text-xs font-medium py-1">
                <span>Cross</span>
              </div>
              <div className="w-[40%] flex items-center justify-center bg-[#474d57] rounded-sm text-xs font-medium py-1">
                <span>20x</span>
              </div>
              <div className="text-lg p-4 pr-0 cursor-pointer w-[20%] text-gray-500">
                <FaAlignRight />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-2 text-sm text-gray-400">
              <span className="text-[#f0b90b]">Giới hạn </span>
              <span>Thị trường</span>
              <span>Story</span>
              <FaCircleInfo />
            </div>
            <div className="flex flex-row justify-between items-center">
              <span className="text-gray-400 text-xs">
                Số dư khả dụng{" "}
                <span className="text-gray-200 text-xs font-medium">
                  - USDT
                </span>
              </span>
              <div className="text-gray-400">
                <FaLightbulb />
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-[80%] flex flex-row justify-between items-center p-2 bg-[#2b3139] rounded-sm">
                <span className="text-gray-400 font-medium text-sm">Giá</span>
                <span className="text-gray-200 font font-medium text-sm">
                  696969,0 USDT
                </span>
              </div>
              <div className="w-[20%] p-2 text-gray-200 font font-medium text-sm flex items-center justify-center bg-[#2b3139] rounded-sm">
                <span>BBO</span>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center p-2 rounded-sm bg-[#2b3139]">
              <span className="text-gray-400 font-medium text-sm">
                Số lượng
              </span>
              <span className="text-gray-200 font font-medium text-sm">
                0% BTC
              </span>
            </div>
            <ProgressBar
              completed={60}
              height="14px"
              labelSize="12px"
              bgColor="#474d57"
            />
            <div className="flex items-center justify-center rounded-md w-full bg-[#fcd535] text-gray-800 text-sm font-medium py-3 cursor-pointer">
              <span>Đăng nhập</span>
            </div>
            <div className="flex items-center justify-center rounded-md w-full bg-[#474d57] text-gray-200 text-sm font-medium py-3 cursor-pointer">
              <span>Đăng ký</span>
            </div>
            <div className="flex items-center justify-center rounded-md w-full bg-[#474d57] text-gray-200 text-sm font-medium py-3 cursor-pointer">
              <span>Giao dịch thử</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
