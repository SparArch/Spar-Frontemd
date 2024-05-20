import { Button } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import downloadIcon from '../Images/download-icon.png'
import { useAuth } from '../AuthContext';
import dashText from '../Images/DASHBOARD.png'
import sideNavDash from '../Images/sidenav-dash.png'
import features from '../Images/FEATURES.png'
const SideNav = () => {
   const navigate = useNavigate();
   const { logout } = useAuth();
   return (

      <div>


         <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
            <div class="h-full px-6 py-4 overflow-y-auto bg-gray-50">
               <ul class="space-y-6 font-medium mt-[7rem] ">
                  <li className='flex flex-col gap-2'>
                     <a class="flex gap-5 align-middle items-center p-2 text-gray-900 rounded-lg dark:text-gray-400  ">
                        <div><img src={sideNavDash} alt="" /></div>
                        <div><img src={dashText} alt="" /></div>  </a>
                     <div><img src={features} alt="" /></div>
                  </li>
                  <li>
                     <button onClick={() => navigate("/admin")} type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M26.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V26.6667C0 28.5 1.5 30 3.33333 30H26.6667C28.5 30 30 28.5 30 26.6667V3.33333C30 1.5 28.5 0 26.6667 0ZM10 23.3333H6.66667V15H10V23.3333ZM16.6667 23.3333H13.3333V18.3333H16.6667V23.3333ZM16.6667 15H13.3333V11.6667H16.6667V15ZM23.3333 23.3333H20V6.66667H23.3333V23.3333Z" fill="#8D8D94" />
                        </svg>

                        <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-[18px]">Analytics</span>
                        <svg width="20" height="19" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M30.4142 16.4142C31.1953 15.6332 31.1953 14.3668 30.4142 13.5858L17.6863 0.857864C16.9052 0.0768156 15.6389 0.0768156 14.8579 0.857864C14.0768 1.63891 14.0768 2.90524 14.8579 3.68629L26.1716 15L14.8579 26.3137C14.0768 27.0948 14.0768 28.3611 14.8579 29.1421C15.6389 29.9232 16.9052 29.9232 17.6863 29.1421L30.4142 16.4142ZM0 17H29V13H0V17Z" fill="#8D8D94" />
                        </svg>

                     </button>
                     {/* <ul id="dropdown-example" class="hidden py-2 space-y-2">
                        <li>
                           <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Blogs</a>
                        </li>
                        <li>
                           <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                        </li>
                        <li>
                           <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                        </li>
                     </ul> */}
                  </li>
                  <li>
                     <a onClick={() => navigate("/admin-blogs")} href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">

                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M11.9629 13.1099H15.4334C15.7503 13.1099 16.0543 12.984 16.2784 12.7599C16.5025 12.5358 16.6284 12.2318 16.6284 11.9149C16.6284 11.5979 16.5025 11.2939 16.2784 11.0698C16.0543 10.8457 15.7503 10.7198 15.4334 10.7198H11.9629C11.646 10.7198 11.342 10.8457 11.1179 11.0698C10.8938 11.2939 10.7678 11.5979 10.7678 11.9149C10.7678 12.2318 10.8938 12.5358 11.1179 12.7599C11.342 12.984 11.646 13.1099 11.9629 13.1099ZM27.0258 0H3.97265C2.92029 0.00408211 1.91221 0.423939 1.16807 1.16807C0.423939 1.91221 0.00408211 2.92029 0 3.97265V27.0258C0.00367403 28.0784 0.423351 29.0869 1.16753 29.8314C1.91171 30.5758 2.92003 30.9959 3.97265 31H27.0258C28.0787 30.9963 29.0874 30.5764 29.8319 29.8319C30.5764 29.0874 30.9963 28.0787 31 27.0258V3.97265C30.9959 2.92003 30.5758 1.9117 29.8314 1.16753C29.0869 0.42335 28.0784 0.00367403 27.0258 0ZM25.3642 15.0009L25.3332 19.1471C25.321 20.801 24.6568 22.3834 23.485 23.5505C22.3132 24.7177 20.7282 25.3756 19.0743 25.3812H11.8823C10.2265 25.3776 8.63922 24.7199 7.46608 23.5514C6.29294 22.3829 5.62897 20.7983 5.61875 19.1425V11.8652C5.62815 10.2083 6.29182 8.62208 7.46526 7.45213C8.63869 6.28218 10.2268 5.62322 11.8839 5.61875H16.2595C17.2677 5.79378 18.2245 6.19047 19.0608 6.78016C19.8971 7.36986 20.592 8.13787 21.0955 9.02875C21.4404 9.6835 21.6322 10.408 21.6566 11.1476C21.762 11.9319 21.8163 12.5132 22.1681 12.8371C22.6641 13.2851 24.5055 12.9828 24.8697 13.268L25.1456 13.485L25.3161 13.8275L25.3704 14.1034L25.3642 15.0009ZM19.0138 17.8885H11.9629C11.6546 17.8885 11.3589 18.011 11.1409 18.229C10.9229 18.447 10.8004 18.7427 10.8004 19.0511C10.8004 19.3594 10.9229 19.6551 11.1409 19.8731C11.3589 20.0911 11.6546 20.2136 11.9629 20.2136H19.0138C19.3222 20.2136 19.6179 20.0911 19.8359 19.8731C20.0539 19.6551 20.1763 19.3594 20.1763 19.0511C20.1763 18.7427 20.0539 18.447 19.8359 18.229C19.6179 18.011 19.3222 17.8885 19.0138 17.8885Z" fill="#8D8D94" />
                        </svg>

                        <span class="flex-1 ms-3 whitespace-nowrap text-[18px]">Blogs</span>
                        <svg width="20" height="19" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M30.4142 16.4142C31.1953 15.6332 31.1953 14.3668 30.4142 13.5858L17.6863 0.857864C16.9052 0.0768156 15.6389 0.0768156 14.8579 0.857864C14.0768 1.63891 14.0768 2.90524 14.8579 3.68629L26.1716 15L14.8579 26.3137C14.0768 27.0948 14.0768 28.3611 14.8579 29.1421C15.6389 29.9232 16.9052 29.9232 17.6863 29.1421L30.4142 16.4142ZM0 17H29V13H0V17Z" fill="#8D8D94" />
                        </svg>
                     </a>
                  </li>
                  <li>
                     <a onClick={() => navigate("/admin-about")} href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M28.6316 26.35H5.36842L0 31V4.65C0 2.0925 2.41579 0 5.36842 0H28.6316C31.5842 0 34 2.0925 34 4.65V21.7C34 24.2575 31.5842 26.35 28.6316 26.35Z" fill="#8D8D94" />
                        </svg>

                        <span class="flex-1 ms-3 whitespace-nowrap text-[18px]">About</span>
                        <svg width="20" height="19" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M30.4142 16.4142C31.1953 15.6332 31.1953 14.3668 30.4142 13.5858L17.6863 0.857864C16.9052 0.0768156 15.6389 0.0768156 14.8579 0.857864C14.0768 1.63891 14.0768 2.90524 14.8579 3.68629L26.1716 15L14.8579 26.3137C14.0768 27.0948 14.0768 28.3611 14.8579 29.1421C15.6389 29.9232 16.9052 29.9232 17.6863 29.1421L30.4142 16.4142ZM0 17H29V13H0V17Z" fill="#8D8D94" />
                        </svg>

                     </a>
                  </li>
                  <li>
                     <a onClick={() => navigate("/admin-contact-main")} href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M31.0625 0C32.1068 0 33.1083 0.414713 33.8467 1.15291C34.5852 1.8911 35 2.89231 35 3.93627V24.0637C35 25.1077 34.5852 26.1089 33.8467 26.8471C33.1083 27.5853 32.1068 28 31.0625 28H3.9375C3.42042 28 2.9084 27.8982 2.43068 27.7004C1.95296 27.5026 1.5189 27.2126 1.15327 26.8471C0.787636 26.4816 0.497602 26.0476 0.299724 25.5701C0.101846 25.0925 0 24.5806 0 24.0637V3.93627C0 2.89231 0.414842 1.8911 1.15327 1.15291C1.89169 0.414713 2.89321 0 3.9375 0H31.0625ZM13.5625 14.8704H7.4375C7.12033 14.8704 6.8139 14.9852 6.57487 15.1936C6.33584 15.402 6.18038 15.6899 6.13725 16.004L6.125 16.1824V17.0432L6.139 17.2321C6.4225 19.181 8.0535 20.1187 10.5 20.1187C12.8293 20.1187 14.42 19.2685 14.812 17.505L14.861 17.2339L14.875 17.0449V16.1824C14.875 15.8654 14.7601 15.559 14.5517 15.3201C14.3432 15.0811 14.0552 14.9257 13.741 14.8826L13.5625 14.8704ZM27.5625 15.7381H19.691L19.5125 15.7503C19.1984 15.7935 18.9105 15.949 18.7021 16.1879C18.4937 16.4269 18.3789 16.7332 18.3789 17.0502C18.3789 17.3672 18.4937 17.6735 18.7021 17.9124C18.9105 18.1514 19.1984 18.3068 19.5125 18.35L19.691 18.3623H27.5625L27.741 18.35C28.0551 18.3068 28.343 18.1514 28.5514 17.9124C28.7598 17.6735 28.8746 17.3672 28.8746 17.0502C28.8746 16.7332 28.7598 16.4269 28.5514 16.1879C28.343 15.949 28.0551 15.7935 27.741 15.7503L27.5625 15.7381ZM10.5 7.87604C9.80381 7.87604 9.13613 8.15251 8.64384 8.64464C8.15156 9.13677 7.875 9.80424 7.875 10.5002C7.875 11.1962 8.15156 11.8637 8.64384 12.3558C9.13613 12.8479 9.80381 13.1244 10.5 13.1244C11.1962 13.1244 11.8639 12.8479 12.3562 12.3558C12.8484 11.8637 13.125 11.1962 13.125 10.5002C13.125 9.80424 12.8484 9.13677 12.3562 8.64464C11.8639 8.15251 11.1962 7.87604 10.5 7.87604ZM27.5625 9.62199H19.691L19.5125 9.63424C19.1984 9.67745 18.9105 9.8329 18.7021 10.0718C18.4937 10.3108 18.3789 10.6171 18.3789 10.9341C18.3789 11.2511 18.4937 11.5574 18.7021 11.7963C18.9105 12.0353 19.1984 12.1907 19.5125 12.2339L19.691 12.2462H27.5625L27.741 12.2339C28.0551 12.1907 28.343 12.0353 28.5514 11.7963C28.7598 11.5574 28.8746 11.2511 28.8746 10.9341C28.8746 10.6171 28.7598 10.3108 28.5514 10.0718C28.343 9.8329 28.0551 9.67745 27.741 9.63424L27.5625 9.62199Z" fill="#8D8D94" />
                        </svg>

                        <span class="flex-1 ms-3 whitespace-nowrap text-[18px]">Contact</span>
                        <svg width="20" height="19" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M30.4142 16.4142C31.1953 15.6332 31.1953 14.3668 30.4142 13.5858L17.6863 0.857864C16.9052 0.0768156 15.6389 0.0768156 14.8579 0.857864C14.0768 1.63891 14.0768 2.90524 14.8579 3.68629L26.1716 15L14.8579 26.3137C14.0768 27.0948 14.0768 28.3611 14.8579 29.1421C15.6389 29.9232 16.9052 29.9232 17.6863 29.1421L30.4142 16.4142ZM0 17H29V13H0V17Z" fill="#8D8D94" />
                        </svg>

                     </a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M31.5 0H3.5C1.56975 0 0 1.62581 0 3.625V25.375C0 27.3742 1.56975 29 3.5 29H31.5C33.4302 29 35 27.3742 35 25.375V3.625C35 1.62581 33.4302 0 31.5 0ZM7.875 5.4375C8.57119 5.4375 9.23887 5.72394 9.73115 6.2338C10.2234 6.74367 10.5 7.43519 10.5 8.15625C10.5 8.87731 10.2234 9.56883 9.73115 10.0787C9.23887 10.5886 8.57119 10.875 7.875 10.875C7.17881 10.875 6.51113 10.5886 6.01884 10.0787C5.52656 9.56883 5.25 8.87731 5.25 8.15625C5.25 7.43519 5.52656 6.74367 6.01884 6.2338C6.51113 5.72394 7.17881 5.4375 7.875 5.4375ZM17.5 23.5625H5.25L12.25 14.5L14.875 18.125L20.125 10.875L29.75 23.5625H17.5Z" fill="#8D8D94" />
                        </svg>

                        <span class="flex-1 ms-3 whitespace-nowrap text-[18px]">Projects</span>
                        <svg width="20" height="19" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M30.4142 16.4142C31.1953 15.6332 31.1953 14.3668 30.4142 13.5858L17.6863 0.857864C16.9052 0.0768156 15.6389 0.0768156 14.8579 0.857864C14.0768 1.63891 14.0768 2.90524 14.8579 3.68629L26.1716 15L14.8579 26.3137C14.0768 27.0948 14.0768 28.3611 14.8579 29.1421C15.6389 29.9232 16.9052 29.9232 17.6863 29.1421L30.4142 16.4142ZM0 17H29V13H0V17Z" fill="#8D8D94" />
                        </svg>

                     </a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M19.8686 10.2353H17.1429V1.70588C17.1429 0.767647 16.3714 0 15.4286 0H8.57143C7.62857 0 6.85714 0.767647 6.85714 1.70588V10.2353H4.13143C2.60571 10.2353 1.83429 12.0776 2.91429 13.1524L10.7829 20.9824C11.4514 21.6476 12.5314 21.6476 13.2 20.9824L21.0686 13.1524C22.1486 12.0776 21.3943 10.2353 19.8686 10.2353ZM0 27.2941C0 28.2324 0.771429 29 1.71429 29H22.2857C23.2286 29 24 28.2324 24 27.2941C24 26.3559 23.2286 25.5882 22.2857 25.5882H1.71429C0.771429 25.5882 0 26.3559 0 27.2941Z" fill="#8D8D94" />
                        </svg>


                        <span class="flex-1 ms-3 whitespace-nowrap text-[18px]">Downloads</span>
                        <svg width="20" height="19" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M30.4142 16.4142C31.1953 15.6332 31.1953 14.3668 30.4142 13.5858L17.6863 0.857864C16.9052 0.0768156 15.6389 0.0768156 14.8579 0.857864C14.0768 1.63891 14.0768 2.90524 14.8579 3.68629L26.1716 15L14.8579 26.3137C14.0768 27.0948 14.0768 28.3611 14.8579 29.1421C15.6389 29.9232 16.9052 29.9232 17.6863 29.1421L30.4142 16.4142ZM0 17H29V13H0V17Z" fill="#8D8D94" />
                        </svg>

                     </a>
                  </li>
                  <li className='ml-[20px]'>
                     <a onClick={() => navigate("/admin-newjoin")} href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">

                        <span class="flex-1 ms-3 whitespace-nowrap">Join Us</span>
                     </a>
                  </li>
                  <li className='ml-[20px]'>
                     <a onClick={() => navigate("/admin-jobs")} href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">

                        <span class="flex-1 ms-3 whitespace-nowrap">Collab</span>
                     </a>
                  </li>
                  {/* <li>
                     <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                     </a>
                  </li> */}
                  <li><Button marginTop={'20px'} onClick={() => navigate("/admin-social")} >SOCIAL MEDIA LINKS</Button></li>
                  <li className=''>
                     <a onClick={() => { logout() }} href="#" class="flex items-center  p-2 text-gray-900 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                           <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                           <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                           <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
                     </a>
                  </li>

               </ul>
            </div>
         </aside >

      </div >
   )
}

export default SideNav;
