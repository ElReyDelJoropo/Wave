interface T extends React.SVGProps<SVGSVGElement> {
  width: number | string
  height: number | string
}
export const Icons = {
  Arrow: ({ width, height, ...props }: T) => (<svg width={width || 10} height={height || 20} {...props} viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.438696 0.43918C0.157489 0.720471 -0.000484467 1.10193 -0.000484467 1.49968C-0.000484467 1.89743 0.157489 2.27889 0.438696 2.56018L7.8637 9.98518L0.438696 17.4102C0.165459 17.6931 0.014267 18.072 0.0176849 18.4653C0.021102 18.8586 0.178856 19.2348 0.456967 19.5129C0.73508 19.791 1.1113 19.9488 1.50459 19.9522C1.89789 19.9556 2.27679 19.8044 2.5597 19.5312L11.0452 11.0457C11.3264 10.7644 11.4844 10.3829 11.4844 9.98518C11.4844 9.58743 11.3264 9.20597 11.0452 8.92468L2.5597 0.43918C2.2784 0.157973 1.89694 0 1.4992 0C1.10145 0 0.719987 0.157973 0.438696 0.43918Z" fill="#962ADB"/></svg>),
  BurgerMenu: ({ width, height, ...props }: T) => (<svg width={width || 48} height={height || 48} {...props} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="23.333" width="24" height="2" rx="1" fill="#962ADB"/><rect x="12" y="14" width="24" height="2" rx="1" fill="#962ADB"/><rect x="12" y="32.667" width="24" height="2" rx="1" fill="#962ADB"/></svg>),
  Chat: ({ width, height, ..._props }: T) => (<svg width={width || 48} height={height || 48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#962ADB" d="M34.3333 11C36.1562 11 37.6667 12.5104 37.6667 14.3333V29.3333C37.6667 31.2083 36.1562 32.6667 34.3333 32.6667H26.8333L20.3229 37.5625C20.1667 37.6667 20.0625 37.6667 19.9583 37.6667C19.5938 37.6667 19.3333 37.4583 19.3333 37.0417V32.6667H14.3333C12.4583 32.6667 11 31.2083 11 29.3333V14.3333C11 12.5104 12.4583 11 14.3333 11H34.3333ZM35.1667 29.3333V14.3333C35.1667 13.9167 34.75 13.5 34.3333 13.5H14.3333C13.8646 13.5 13.5 13.9167 13.5 14.3333V29.3333C13.5 29.8021 13.8646 30.1667 14.3333 30.1667H21.8333V33.2917L25.3229 30.6875L26 30.1667H34.3333C34.75 30.1667 35.1667 29.8021 35.1667 29.3333ZM30.1667 18.0833C30.5833 18.0833 31 18.5 31 18.9167V19.75C31 20.2188 30.5833 20.5833 30.1667 20.5833H18.5C18.0312 20.5833 17.6667 20.2188 17.6667 19.75V18.9167C17.6667 18.5 18.0312 18.0833 18.5 18.0833H30.1667ZM25.1667 23.0833C25.5833 23.0833 26 23.5 26 23.9167V24.75C26 25.2188 25.5833 25.5833 25.1667 25.5833H18.5C18.0312 25.5833 17.6667 25.2188 17.6667 24.75V23.9167C17.6667 23.5 18.0312 23.0833 18.5 23.0833H25.1667Z"/></svg>),
  Eye: ({ width, height, ...props }: T) => (<svg xmlns="http://www.w3.org/2000/svg" width={width || 17} height={height || 9} fill="none" {...props} ><path fill="currentColor" d="M3.625 4.4016c-.4212.4732-.8726.9807-1.3246 1.4875-.0617.0692-.1214.1421-.1906.2014-.2447.2089-.5596.2146-.7254.0194-.2508-.2959-.2668-.6237-.0232-.8996.4093-.4637.8287-.9171 1.2432-1.3756.0557-.0617.1076-.1276.1452-.1723-.522-.5395-1.031-1.0638-1.5371-1.5905a2.2102 2.2102 0 0 1-.2058-.2522c-.2044-.2864-.1811-.6482.0509-.866.2262-.2128.5544-.1677.8012.077.6492.6437 1.2808 1.3132 1.969 1.9047 1.016.8733 2.1456 1.5406 3.411 1.9057 1.2278.3543 2.4383.265 3.6255-.1976 1.8725-.7294 3.3858-2.0199 4.7152-3.5855.1713-.2018.3655-.303.6121-.237.2126.0566.3407.22.3922.4475.0523.2302-.0112.4349-.1649.5927-.5316.5457-1.0698 1.0838-1.6058 1.6243-.0365.037-.0757.071-.1292.1206l1.0935 1.2099c.0984.1088.1983.2163.2955.3265.2274.2579.2448.6671.0307.8874-.2287.235-.6465.246-.8617-.0097-.4338-.5155-.8928-1.0062-1.3339-1.515-.1051-.1205-.1721-.1396-.3102-.0384a10.2829 10.2829 0 0 1-2.1626 1.218c-.068.028-.133.0652-.2129.1055.2026.6797.404 1.3483.6006 2.0183.086.2923.0056.5616-.2074.7282-.21.1643-.4433.1774-.6339.0024a.7676.7676 0 0 1-.207-.3281c-.1796-.6018-.3448-1.2087-.5112-1.815-.0882-.3218-.085-.3257-.395-.2732-.7077.1206-1.4169.1215-2.1267.0325-.4021-.0503-.4031-.054-.5218.3731-.1493.5368-.2986 1.0736-.4428 1.6119-.0739.2755-.207.4795-.489.5188-.5187.0724-.801-.3015-.6457-.8441.1903-.666.374-1.3329.554-1.9725L3.625 4.4017Z"/></svg>),
  Close: ({ width, height, ..._props }: T) => (<svg width={width || 48} height={height || 48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="31.1113" width="24" height="2" rx="1" transform="rotate(-45 15 31.1113)" fill="#3E2666"/><rect x="16.6055" y="14" width="24" height="2" rx="1" transform="rotate(45 16.6055 14)" fill="#3E2666"/></svg>),
  Configuration: ({ width, height, ..._props }: T) => (<svg width={width || 48} height={height || 48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#962ADB" d="M34.6273 23.3444C34.6814 24.0475 34.6814 24.7506 34.6273 25.3995L36.3579 26.4271C36.8447 26.6975 37.1151 27.2924 36.9528 27.8874C36.3579 30.1588 35.114 32.214 33.4915 33.8905C33.0589 34.2691 32.4099 34.3773 31.9231 34.1069L30.1925 33.0793C29.7598 33.4038 28.9486 33.8905 28.4077 34.1069V36.1079C28.4077 36.7029 28.0292 37.1896 27.4343 37.3518C25.2169 37.9468 22.7831 37.9468 20.5657 37.3518C20.0249 37.2437 19.5923 36.6488 19.5923 36.1079V34.1069C19.0514 33.8905 18.2402 33.4038 17.8075 33.0793L16.0769 34.1069C15.5901 34.3773 14.9411 34.2691 14.5085 33.8905C12.886 32.214 11.6421 30.1588 11.0472 27.8874C10.8849 27.2924 11.1553 26.6975 11.6421 26.4271L13.3727 25.3995C13.3186 25.1291 13.3186 24.6965 13.3186 24.372C13.3186 24.1016 13.3186 23.6689 13.3727 23.3444L11.6421 22.3709C11.1553 22.1005 10.8849 21.5056 11.0472 20.9107C11.6421 18.6392 12.886 16.584 14.5085 14.9075C14.9411 14.5289 15.5901 14.4207 16.0769 14.6912L17.8075 15.7187C18.2402 15.3942 19.0514 14.9075 19.5923 14.6912V12.6901C19.5923 12.0952 19.9708 11.6084 20.5657 11.4462C22.7831 10.8513 25.2169 10.8513 27.4343 11.4462C27.9751 11.5543 28.4077 12.1493 28.4077 12.6901V14.6912C28.9486 14.9075 29.7598 15.3942 30.1925 15.7187L31.9231 14.6912C32.4099 14.4207 33.0589 14.5289 33.4915 14.9075C35.114 16.584 36.3579 18.6392 36.9528 20.9107C37.1151 21.5056 36.8447 22.1005 36.3579 22.3709L34.6273 23.3444ZM31.7609 26.8057C32.1935 24.5342 32.1935 24.2638 31.7609 21.9923L34.1405 20.6403C33.816 19.6668 32.9507 18.2606 32.3017 17.5035L29.9221 18.8555C28.2455 17.3953 27.9751 17.233 25.8118 16.4759V13.7177C25.325 13.6636 24.5138 13.5554 24.027 13.5554C23.4862 13.5554 22.675 13.6636 22.1882 13.7177V16.4759C20.0249 17.233 19.8086 17.3953 18.0779 18.8555L15.6983 17.5035C14.887 18.4229 14.2921 19.5045 13.8595 20.6403L16.2391 21.9923C15.8065 24.2638 15.8065 24.5342 16.2391 26.8057L13.8595 28.1578C14.184 29.1313 15.0493 30.5374 15.6983 31.2946L18.0779 29.9425C19.7545 31.4027 20.0249 31.565 22.1882 32.3221V35.0804C22.675 35.1344 23.4862 35.2426 24.027 35.2426C24.5138 35.2426 25.325 35.1344 25.8118 35.0804V32.3221C27.9751 31.565 28.1914 31.4027 29.9221 29.9425L32.3017 31.2946C32.9507 30.5374 33.816 29.1313 34.1405 28.1578L31.7609 26.8057ZM24.027 19.18C26.8393 19.18 29.219 21.5597 29.219 24.372C29.219 27.2384 26.8393 29.5639 24.027 29.5639C21.1607 29.5639 18.8351 27.2384 18.8351 24.372C18.8351 21.5597 21.1607 19.18 24.027 19.18ZM24.027 26.9679C25.4332 26.9679 26.623 25.8322 26.623 24.372C26.623 22.9658 25.4332 21.776 24.027 21.776C22.5668 21.776 21.4311 22.9658 21.4311 24.372C21.4311 25.8322 22.5668 26.9679 24.027 26.9679Z"/></svg>),
  Emoticon: ({ width, height, ..._props }: T) => (<svg width={width || 32} height={height || 33} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="16" cy="16.2679" rx="15" ry="15.2679" fill="#FBFF48" stroke="#962ADB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="11" y="12.0269" width="0.0166667" height="0.0169643" fill="#FBFF48" stroke="#962ADB" strokeWidth="3" strokeLinejoin="round"/><rect x="21" y="12.0269" width="0.0166667" height="0.0169643" fill="#FBFF48" stroke="#962ADB" strokeWidth="3" strokeLinejoin="round"/><path d="M21.7752 19.6606C20.6225 21.6889 18.468 23.0535 16.0004 23.0535C13.5328 23.0535 11.3783 21.6889 10.2256 19.6606" stroke="#962ADB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  Exit: ({ width, height, ..._props }: T) => (<svg width={width || 48} height={height || 48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.3102 14H27.2066C26.9135 14 26.6204 14.2969 26.6204 14.5938V15.7812C26.6204 16.1276 26.9135 16.375 27.2066 16.375H31.3102C32.6292 16.375 33.6551 17.4635 33.6551 18.75V28.25C33.6551 29.5859 32.6292 30.625 31.3102 30.625H27.2066C26.9135 30.625 26.6204 30.9219 26.6204 31.2188V32.4062C26.6204 32.7526 26.9135 33 27.2066 33H31.3102C33.8994 33 36 30.8724 36 28.25V18.75C36 16.1276 33.8994 14 31.3102 14ZM20.0254 14.9896C19.83 14.7422 19.4392 14.7422 19.1949 14.9896L11.1832 23.1042C10.9389 23.3516 10.9389 23.6979 11.1832 23.9453L19.1949 32.0599C19.4392 32.3073 19.83 32.3073 20.0254 32.0599L21.0024 31.0703C21.2467 30.8724 21.2467 30.4766 21.0024 30.2292L15.4822 24.7865H27.5975C27.9394 24.7865 28.1837 24.5391 28.1837 24.1927V22.8073C28.1837 22.5104 27.9394 22.2135 27.5975 22.2135H15.4822L21.0024 16.8203C21.2467 16.5729 21.2467 16.1771 21.0024 15.9792L20.0254 14.9896Z" fill="#962ADB"/></svg>),
  Help: ({ width, height, ..._props }: T) => (<svg width={width || 48} height={height || 48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 11C31.129 11 37 16.8706 37 23.9991C37 31.1801 31.129 36.9983 24 36.9983C16.8185 36.9983 11 31.1801 11 23.9991C11 16.8706 16.8185 11 24 11ZM24 34.4823C29.7661 34.4823 34.4839 29.8173 34.4839 23.9991C34.4839 18.2334 29.7661 13.516 24 13.516C18.1815 13.516 13.5161 18.2334 13.5161 23.9991C13.5161 29.8173 18.1815 34.4823 24 34.4823ZM29.6089 21.1163C29.6089 24.6281 25.7823 24.6805 25.7823 25.9909V26.3054C25.7823 26.6723 25.5202 26.9344 25.1532 26.9344H22.7944C22.4274 26.9344 22.1653 26.6723 22.1653 26.3054V25.8861C22.1653 23.9991 23.5806 23.2653 24.629 22.6363C25.5726 22.1122 26.1492 21.7977 26.1492 21.1163C26.1492 20.1728 24.996 19.5962 24.0524 19.5962C22.8468 19.5962 22.2702 20.1728 21.4839 21.1687C21.2742 21.4307 20.8548 21.4832 20.5927 21.2735L19.125 20.1728C18.8629 19.9631 18.8105 19.5962 19.0202 19.3341C20.2258 17.4996 21.7984 16.4512 24.2621 16.4512C26.8306 16.4512 29.6089 18.4955 29.6089 21.1163ZM26.2016 29.8697C26.2016 31.1277 25.2056 32.0712 24 32.0712C22.7419 32.0712 21.7984 31.1277 21.7984 29.8697C21.7984 28.6641 22.7419 27.6682 24 27.6682C25.2056 27.6682 26.2016 28.6641 26.2016 29.8697Z" fill="#962ADB"/></svg>),
  HiddenPassword: ({ width, height, ...props }: T) => (<svg width={width || 32} height={height || 32} {...props} viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="eye" d="M2.80422 3.66143C2.37592 4.14259 1.91687 4.65869 1.45726 5.17403C1.39449 5.24438 1.33385 5.31857 1.26344 5.37881C1.01464 5.59126 0.694445 5.59708 0.525845 5.39858C0.270818 5.09769 0.254525 4.7643 0.502184 4.48379C0.918443 4.0123 1.3449 3.55122 1.76641 3.08494C1.82308 3.02225 1.87578 2.95526 1.91404 2.90974C1.38316 2.36114 0.865596 1.82802 0.35101 1.29245C0.275452 1.21273 0.205503 1.12701 0.141747 1.03601C-0.0660997 0.744777 -0.0424391 0.376899 0.19346 0.155406C0.42355 -0.0610286 0.75721 -0.0151965 1.00827 0.233734C1.66836 0.88825 2.3106 1.56898 3.01037 2.17046C4.04365 3.05857 5.19226 3.73716 6.47901 4.10841C7.7275 4.46862 8.95843 4.37788 10.1657 3.90745C12.0697 3.16572 13.6085 1.85347 14.9605 0.261478C15.1346 0.0562331 15.3321 -0.04662 15.5829 0.0203644C15.7991 0.0779985 15.9293 0.244157 15.9817 0.47546C16.0348 0.709522 15.9702 0.91768 15.814 1.07817C15.2734 1.63305 14.7261 2.18027 14.1811 2.72994C14.144 2.76749 14.1041 2.80213 14.0497 2.85256L15.1617 4.08281C15.2617 4.19348 15.3633 4.30277 15.4622 4.41482C15.6934 4.67708 15.7111 5.09325 15.4933 5.31719C15.2608 5.55616 14.8359 5.56735 14.6172 5.30738C14.176 4.78316 13.7093 4.28422 13.2607 3.76689C13.1539 3.64427 13.0857 3.6248 12.9453 3.72781C12.259 4.23127 11.521 4.64689 10.7462 4.96633C10.677 4.99484 10.611 5.03255 10.5297 5.07363C10.7357 5.76478 10.9405 6.44458 11.1405 7.12592C11.2279 7.42314 11.1461 7.69705 10.9295 7.86643C10.716 8.03351 10.4788 8.04684 10.285 7.86888C10.1888 7.77972 10.1162 7.66458 10.0745 7.53519C9.89182 6.92328 9.72379 6.30617 9.55462 5.68951C9.46494 5.36241 9.4682 5.35842 9.15296 5.41177C8.43336 5.53439 7.7122 5.53531 6.99033 5.44487C6.58144 5.39368 6.58045 5.38985 6.45974 5.82425C6.308 6.37009 6.15611 6.91593 6.00947 7.4633C5.93438 7.7435 5.79894 7.95089 5.51232 7.9909C4.98484 8.06447 4.69765 7.68433 4.85562 7.13251C5.04916 6.45531 5.23604 5.77719 5.41895 5.12681L2.80422 3.66143Z" fill="#949494"/></svg>),
  LogoHome: ({ width, height, ..._props }: T) => (<svg width={width || 48} height={height || 48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.9899 19.7315C42.0616 24.5084 40.821 28.895 38.0199 32.7795C36.6954 34.6163 35.0081 36.0115 32.8108 36.6749C31.5194 37.0679 30.1472 37.1053 28.8366 36.7832C26.8287 36.2955 25.7946 34.9234 25.8247 32.8279C25.8512 31.0562 26.4378 29.424 27.1514 27.8379C27.9854 25.9853 28.8724 24.1529 29.7072 22.3046C29.8835 21.9311 29.986 21.5267 30.0091 21.1138C30.0263 20.5357 29.5401 20.2395 29.018 20.4996C28.7251 20.6516 28.4715 20.8703 28.2772 21.1384C26.843 23.1182 25.4303 25.1124 24.0147 27.1053C22.232 29.614 20.4636 32.1328 18.6686 34.6322C17.5363 36.2088 16.0253 37.0686 14.0475 36.9624C11.8058 36.8382 10.1751 35.3446 9.80653 33.1134C9.54334 31.5129 9.83234 29.9601 10.145 28.4023C11.05 23.8911 11.9462 19.3784 12.8335 14.8644C12.8912 14.536 12.9179 14.2029 12.9131 13.8694C12.9131 13.3571 12.7696 12.8853 12.2576 12.6786C11.7284 12.4655 11.2157 12.571 10.7682 12.9366C10.2024 13.3997 10.102 14.0674 10.0131 14.7314C9.73768 16.7806 9.47737 18.8327 9.19985 20.8819C9.05643 21.9657 8.46337 22.582 7.55049 22.6377C6.67919 22.6911 5.97284 22.1384 6.0008 21.2648C6.14423 17.1896 7.56985 13.722 10.9166 11.2472C12.5818 10.0153 14.5022 9.86425 16.4707 10.1634C17.0919 10.2531 17.699 10.4231 18.2771 10.6692C19.7178 11.3036 20.3244 12.5226 20.0656 14.084C19.8253 15.5291 19.1534 16.7972 18.3997 18.0169C16.5352 21.0314 14.6262 24.0185 12.7775 27.0431C12.3802 27.7102 12.075 28.4288 11.8704 29.179C11.6717 29.8835 12.0461 30.5916 12.5932 30.903C13.2637 31.2831 14.1709 31.2701 14.6729 30.7455C15.2522 30.1518 15.7769 29.5063 16.2405 28.817C18.7303 25.098 21.1886 21.3551 23.6619 17.6282C24.3166 16.6411 25.0015 15.6642 26.0434 15.0544C26.4737 14.8015 26.9757 14.5891 27.4669 14.5277C28.7914 14.3615 29.5996 14.7878 30.032 16.0566C30.511 17.4533 30.8144 18.9122 31.1564 20.3537C31.8018 23.1117 32.4092 25.8798 33.0647 28.6356C33.1903 29.1189 33.3938 29.578 33.6671 29.9948C34.4028 31.1509 35.8442 31.3778 36.9041 30.5179C37.2181 30.2738 37.4854 29.9741 37.6929 29.6335C38.4251 28.3473 39.1272 27.0446 39.8156 25.7317C40.3721 24.6695 40.1663 23.6904 39.4699 22.7468C38.1124 20.9144 36.7879 19.0596 35.4591 17.2076C34.9937 16.5573 34.5089 15.9193 34.1088 15.2307C33.0016 13.3253 33.51 11.5117 35.4835 10.5565C36.7557 9.94084 38.1124 9.72697 39.4391 10.4842C40.2279 10.9322 40.6725 11.6808 40.9981 12.4951C41.7081 14.269 41.8852 16.1462 41.9849 18.0328C42.0157 18.5957 41.9899 19.1643 41.9899 19.7315Z" fill="#962ADB"/></svg>),
  Home: ({ width, height, ..._props }: T) => (<svg width={width || 48} height={height || 48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.6875 23.0246C38.8438 23.1924 39 23.472 39 23.6957C39 23.8635 38.8958 24.1432 38.7917 24.255L38.2708 24.9821C38.1146 25.1499 37.8021 25.3177 37.5938 25.3177C37.4375 25.3177 37.1771 25.2058 37.0729 25.094L35.6667 23.8076V34.2662C35.6146 35.217 34.8854 36 34 36H27.3333C26.3958 36 25.6667 35.217 25.6667 34.2103V28.3937H22.3333V34.2103C22.2812 35.217 21.5521 36 20.6667 36H14C13.0625 36 12.3333 35.217 12.3333 34.2103V23.8076L10.875 25.094C10.7708 25.2058 10.5104 25.2617 10.3542 25.2617C10.1458 25.2617 9.83333 25.1499 9.72917 24.9821L9.15625 24.255C9.05208 24.1432 9 23.8635 9 23.6957C9 23.472 9.10417 23.1924 9.26042 23.0246L22.125 11.6711C22.5417 11.2796 23.375 11 24 11C24.5729 11 25.4062 11.2796 25.8229 11.6711L38.6875 23.0246ZM33.1146 33.3154L33.1667 21.6264L24 13.5168L14.8333 21.6264V33.3154H19.8333V27.4989C19.8333 26.5481 20.5625 25.7651 21.5 25.7092H26.5C27.3854 25.7651 28.1146 26.5481 28.1667 27.4989V33.3154H33.1146Z" fill="#962ADB"/></svg>),
  Info: ({ width, height, ..._props }: T) => (<svg width={width || 48} height={height || 48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 11C31.129 11 37 16.8706 37 23.9991C37 31.1801 31.129 36.9983 24 36.9983C16.8185 36.9983 11 31.1801 11 23.9991C11 16.8706 16.8185 11 24 11ZM24 34.4823C29.7661 34.4823 34.4839 29.8173 34.4839 23.9991C34.4839 18.2334 29.7661 13.516 24 13.516C18.1815 13.516 13.5161 18.2334 13.5161 23.9991C13.5161 29.8173 18.1815 34.4823 24 34.4823ZM24 16.7657C25.2056 16.7657 26.2016 17.7616 26.2016 18.9672C26.2016 20.2252 25.2056 21.1687 24 21.1687C22.7419 21.1687 21.7984 20.2252 21.7984 18.9672C21.7984 17.7616 22.7419 16.7657 24 16.7657ZM26.9355 30.0794C26.9355 30.4463 26.621 30.7084 26.3065 30.7084H21.6935C21.3266 30.7084 21.0645 30.4463 21.0645 30.0794V28.8214C21.0645 28.5069 21.3266 28.1924 21.6935 28.1924H22.3226V24.8378H21.6935C21.3266 24.8378 21.0645 24.5757 21.0645 24.2088V22.9508C21.0645 22.6363 21.3266 22.3218 21.6935 22.3218H25.0484C25.3629 22.3218 25.6774 22.6363 25.6774 22.9508V28.1924H26.3065C26.621 28.1924 26.9355 28.5069 26.9355 28.8214V30.0794Z" fill="#962ADB"/></svg>),
  DropDown: ({ width, height, ..._props }: T) => (<svg width={width || 32} height={height || 32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3984 13.6001L16.3984 18.4001L21.9984 13.6001" stroke="#3E2666" strokeWidth="1.6" strokeLinecap="round"/></svg>),
  Star: ({ width, height, ..._props }: T) => (<svg width={width || 48} height={height || 48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="12.6" stroke="#962ADB" strokeWidth="2.8"/><path d="M23.5245 18.4635C23.6741 18.0029 24.3259 18.0029 24.4755 18.4635L25.4593 21.4914C25.5263 21.6974 25.7183 21.8369 25.9349 21.8369H29.1186C29.6029 21.8369 29.8043 22.4567 29.4124 22.7414L26.8368 24.6127C26.6615 24.74 26.5882 24.9657 26.6552 25.1717L27.639 28.1996C27.7886 28.6602 27.2614 29.0433 26.8695 28.7586L24.2939 26.8873C24.1186 26.76 23.8814 26.76 23.7061 26.8873L21.1305 28.7586C20.7386 29.0433 20.2114 28.6602 20.361 28.1996L21.3448 25.1717C21.4118 24.9657 21.3385 24.74 21.1632 24.6127L18.5876 22.7414C18.1957 22.4567 18.3971 21.8369 18.8814 21.8369H22.0651C22.2817 21.8369 22.4737 21.6974 22.5407 21.4914L23.5245 18.4635Z" fill="#962ADB"/></svg>),
  Switch: ({ width, height, ..._props }: T) => (<svg width={width || 48} height={height || 48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="12.6" stroke="#962ADB" strokeWidth="2.8"/><path d="M23.5245 18.4635C23.6741 18.0029 24.3259 18.0029 24.4755 18.4635L25.4593 21.4914C25.5263 21.6974 25.7183 21.8369 25.9349 21.8369H29.1186C29.6029 21.8369 29.8043 22.4567 29.4124 22.7414L26.8368 24.6127C26.6615 24.74 26.5882 24.9657 26.6552 25.1717L27.639 28.1996C27.7886 28.6602 27.2614 29.0433 26.8695 28.7586L24.2939 26.8873C24.1186 26.76 23.8814 26.76 23.7061 26.8873L21.1305 28.7586C20.7386 29.0433 20.2114 28.6602 20.361 28.1996L21.3448 25.1717C21.4118 24.9657 21.3385 24.74 21.1632 24.6127L18.5876 22.7414C18.1957 22.4567 18.3971 21.8369 18.8814 21.8369H22.0651C22.2817 21.8369 22.4737 21.6974 22.5407 21.4914L23.5245 18.4635Z" fill="#962ADB"/></svg>),
  User: ({ width, height, ..._props }: T) => (<svg width={width || 48} height={height || 48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="25" r="20" fill="#EDE4FF"/><path d="M35 33.5781C35 30.1094 32.1406 27.25 28.6719 27.25C27.3125 27.25 26.7031 28 24.5 28C22.25 28 21.6406 27.25 20.2813 27.25C16.8125 27.25 14 30.1094 14 33.5781V34.75C14 36.0156 14.9844 37 16.25 37H32.75C33.9688 37 35 36.0156 35 34.75V33.5781Z" fill="#962ADB"/><path d="M17.75 19.75C17.75 23.5 20.75 26.5 24.5 26.5C28.2031 26.5 31.25 23.5 31.25 19.75C31.25 16.0469 28.2031 13 24.5 13C20.75 13 17.75 16.0469 17.75 19.75Z" fill="#962ADB"/></svg>),
  User2: ({ width, height, ..._props }: T) => (<svg width={width || 48} height={height || 48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.3021 26.8333C32.1563 26.8333 35.3333 30.0104 35.3333 33.8646V35.1667C35.3333 36.5729 34.1875 37.6667 32.8333 37.6667H14.5C13.0938 37.6667 12 36.5729 12 35.1667V33.8646C12 30.0104 15.125 26.8333 18.9792 26.8333C20.4896 26.8333 21.1667 27.6667 23.6667 27.6667C26.1146 27.6667 26.7917 26.8333 28.3021 26.8333ZM32.8333 35.1667V33.8646C32.8333 31.3646 30.8021 29.3333 28.3021 29.3333C27.5208 29.3333 26.3229 30.1667 23.6667 30.1667C20.9583 30.1667 19.7604 29.3333 18.9792 29.3333C16.4792 29.3333 14.5 31.3646 14.5 33.8646V35.1667H32.8333ZM23.6667 26C19.5 26 16.1667 22.6667 16.1667 18.5C16.1667 14.3854 19.5 11 23.6667 11C27.7813 11 31.1667 14.3854 31.1667 18.5C31.1667 22.6667 27.7813 26 23.6667 26ZM23.6667 13.5C20.9062 13.5 18.6667 15.7917 18.6667 18.5C18.6667 21.2604 20.9062 23.5 23.6667 23.5C26.375 23.5 28.6667 21.2604 28.6667 18.5C28.6667 15.7917 26.375 13.5 23.6667 13.5Z" fill="#962ADB"/></svg>),
  ViewPassword: ({ width, height, ...props }: T) => (<svg width={width || 48} height={height || 48} {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0157 12.5C17.9565 12.5 19.5217 14.0938 19.5217 16C19.5217 17.9375 17.9565 19.5 16.0157 19.5C14.0748 19.5 12.5096 17.9375 12.5096 16C12.5096 15.7188 12.5722 15.3125 12.6661 15.0312C12.8539 15.1562 13.2609 15.25 13.5113 15.25C14.4504 15.25 15.2643 14.4688 15.2643 13.5C15.233 13.2812 15.1391 12.875 15.0139 12.6562C15.2957 12.5938 15.7339 12.5312 16.0157 12.5ZM24.9061 15.5625C24.9687 15.6875 25 15.875 25 16C25 16.1562 24.9687 16.3438 24.9061 16.4688C23.2157 19.7812 19.8348 22 16.0157 22C12.1652 22 8.78435 19.7812 7.09391 16.4688C7.0313 16.3438 7 16.1562 7 16.0312C7 15.875 7.0313 15.6875 7.09391 15.5625C8.78435 12.25 12.1652 10 16.0157 10C19.8348 10 23.2157 12.25 24.9061 15.5625ZM16.0157 20.5C19.0835 20.5 21.9322 18.7812 23.4348 16C21.9322 13.2188 19.0835 11.5 16.0157 11.5C12.9165 11.5 10.0678 13.2188 8.56522 16C10.0678 18.7812 12.9165 20.5 16.0157 20.5Z" fill="#962ADB"/></svg>),
  Heart: ({ width, height, ..._props }: T) => (<svg width={width || 48} height={height || 48} viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.51 22.9469C71.2939 29.374 70.1522 39.8819 64.6516 45.4928L46.3855 63.754C45.3476 64.7742 43.9984 65.3863 42.5454 65.3863C40.9887 65.3863 39.6395 64.7742 38.6016 63.754L20.4392 45.4928C14.8349 39.8819 13.6932 29.374 21.4771 22.9469C27.4966 17.9481 36.7335 18.6622 42.5454 24.4772C48.2536 18.6622 57.4905 17.9481 63.51 22.9469ZM61.0192 42.0242C64.8592 38.2496 65.5857 31.1083 60.2927 26.6196C56.2451 23.355 50.018 23.8651 46.1779 27.7418L42.5454 31.4144L38.913 27.7418C34.9691 23.8651 28.742 23.355 24.6944 26.7216C19.4014 31.1083 20.1279 38.2496 23.9679 42.0242L42.1303 60.2854C42.4417 60.4894 42.6492 60.4894 42.8568 60.2854L61.0192 42.0242Z" fill="#962ADB"/></svg>),
  Back: ({ width, height, ...props }: T) => (<svg width={width || 48} height={height || 48} {...props} fill="none"><path fill="#3E2666" d="M19.0004 10.9999h-11.17l4.88-4.88c.39-.39.39-1.03 0-1.42a.9957.9957 0 0 0-1.0866-.2164.9957.9957 0 0 0-.3234.2164l-6.59 6.59a.9957.9957 0 0 0-.2164 1.0866.9957.9957 0 0 0 .2164.3234l6.59 6.59a.9966.9966 0 0 0 .705.292.9977.9977 0 0 0 .705-.292.9972.9972 0 0 0 0-1.41l-4.88-4.88h11.17c.55 0 1-.45 1-1s-.45-1-1-1Z"/></svg>)
}
