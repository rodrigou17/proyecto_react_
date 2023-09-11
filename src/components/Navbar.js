import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="navbarContent">
            <div className="divLogo">
                  <div className="logo">Takaria</div>
                </div>
                <div className='sections'>
                  <div className="Frae1" style={{width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'inline-flex'}}>
                  <div className="inicio">
                    <a href='/'>Inicio</a>
                  </div>
                  <div className="productos">
                    <a href='/products'>Productos</a>
                  </div>
                  <div className="contacto">
                    <a href='/contact'>Contacto</a>
                  </div>
                </div>
                <div className='icons'>
                  <a href='/vershoppingcart'>
                  <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M0 2.25C0 2.05109 0.0790176 1.86032 0.21967 1.71967C0.360322 1.57902 0.551088 1.5 0.75 1.5H3C3.1673 1.50005 3.32977 1.55603 3.4616 1.65904C3.59342 1.76205 3.68701 1.90618 3.7275 2.0685L4.335 4.5H21.75C21.8601 4.5001 21.9689 4.52445 22.0685 4.57133C22.1682 4.6182 22.2563 4.68644 22.3266 4.77121C22.3969 4.85597 22.4477 4.95518 22.4753 5.06178C22.5029 5.16838 22.5068 5.27976 22.4865 5.388L20.2365 17.388C20.2043 17.5599 20.1131 17.7151 19.9786 17.8268C19.8442 17.9386 19.6749 17.9998 19.5 18H6C5.82515 17.9998 5.65585 17.9386 5.52137 17.8268C5.38688 17.7151 5.29567 17.5599 5.2635 17.388L3.015 5.4105L2.415 3H0.75C0.551088 3 0.360322 2.92098 0.21967 2.78033C0.0790176 2.63968 0 2.44891 0 2.25ZM4.653 6L6.6225 16.5H18.8775L20.847 6H4.653ZM7.5 18C6.70435 18 5.94129 18.3161 5.37868 18.8787C4.81607 19.4413 4.5 20.2044 4.5 21C4.5 21.7956 4.81607 22.5587 5.37868 23.1213C5.94129 23.6839 6.70435 24 7.5 24C8.29565 24 9.05871 23.6839 9.62132 23.1213C10.1839 22.5587 10.5 21.7956 10.5 21C10.5 20.2044 10.1839 19.4413 9.62132 18.8787C9.05871 18.3161 8.29565 18 7.5 18ZM18 18C17.2043 18 16.4413 18.3161 15.8787 18.8787C15.3161 19.4413 15 20.2044 15 21C15 21.7956 15.3161 22.5587 15.8787 23.1213C16.4413 23.6839 17.2043 24 18 24C18.7956 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21C21 20.2044 20.6839 19.4413 20.1213 18.8787C19.5587 18.3161 18.7956 18 18 18ZM7.5 19.5C7.89782 19.5 8.27936 19.658 8.56066 19.9393C8.84196 20.2206 9 20.6022 9 21C9 21.3978 8.84196 21.7794 8.56066 22.0607C8.27936 22.342 7.89782 22.5 7.5 22.5C7.10217 22.5 6.72064 22.342 6.43934 22.0607C6.15804 21.7794 6 21.3978 6 21C6 20.6022 6.15804 20.2206 6.43934 19.9393C6.72064 19.658 7.10217 19.5 7.5 19.5ZM18 19.5C18.3978 19.5 18.7794 19.658 19.0607 19.9393C19.342 20.2206 19.5 20.6022 19.5 21C19.5 21.3978 19.342 21.7794 19.0607 22.0607C18.7794 22.342 18.3978 22.5 18 22.5C17.6022 22.5 17.2206 22.342 16.9393 22.0607C16.658 21.7794 16.5 21.3978 16.5 21C16.5 20.6022 16.658 20.2206 16.9393 19.9393C17.2206 19.658 17.6022 19.5 18 19.5Z" fill="#1E1E1E"/>
                  </svg>
                  </figure>
                  </a>
                  <a href='/login'>
                  <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12C13.1935 12 14.3381 11.5259 15.182 10.682C16.0259 9.83807 16.5 8.69347 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5C7.5 8.69347 7.97411 9.83807 8.81802 10.682C9.66193 11.5259 10.8065 12 12 12ZM15 7.5C15 8.29565 14.6839 9.05871 14.1213 9.62132C13.5587 10.1839 12.7956 10.5 12 10.5C11.2044 10.5 10.4413 10.1839 9.87868 9.62132C9.31607 9.05871 9 8.29565 9 7.5C9 6.70435 9.31607 5.94129 9.87868 5.37868C10.4413 4.81607 11.2044 4.5 12 4.5C12.7956 4.5 13.5587 4.81607 14.1213 5.37868C14.6839 5.94129 15 6.70435 15 7.5ZM21 19.5C21 21 19.5 21 19.5 21H4.5C4.5 21 3 21 3 19.5C3 18 4.5 13.5 12 13.5C19.5 13.5 21 18 21 19.5ZM19.5 19.494C19.4985 19.125 19.269 18.015 18.252 16.998C17.274 16.02 15.4335 15 12 15C8.565 15 6.726 16.02 5.748 16.998C4.731 18.015 4.503 19.125 4.5 19.494H19.5Z" fill="#1E1E1E"/>
                  </svg>
                  </figure>
                  </a>
                  
                  <div className="Line1" style={{width: '100%', height: '100%', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '0.50px #1E1E1E solid'}}></div>
                  <figure>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_9_32)">
                        <path d="M24.6 15.75C24.6 15.5511 24.5052 15.3603 24.3364 15.2197C24.1676 15.079 23.9387 15 23.7 15H18.3C18.0613 15 17.8324 15.079 17.6636 15.2197C17.4948 15.3603 17.4 15.5511 17.4 15.75C17.4 15.9489 17.4948 16.1397 17.6636 16.2803C17.8324 16.421 18.0613 16.5 18.3 16.5H23.7C23.9387 16.5 24.1676 16.421 24.3364 16.2803C24.5052 16.1397 24.6 15.9489 24.6 15.75ZM24.6 11.25C24.6 11.0511 24.5052 10.8603 24.3364 10.7197C24.1676 10.579 23.9387 10.5 23.7 10.5H11.1C10.8613 10.5 10.6324 10.579 10.4636 10.7197C10.2948 10.8603 10.2 11.0511 10.2 11.25C10.2 11.4489 10.2948 11.6397 10.4636 11.7803C10.6324 11.921 10.8613 12 11.1 12H23.7C23.9387 12 24.1676 11.921 24.3364 11.7803C24.5052 11.6397 24.6 11.4489 24.6 11.25ZM24.6 6.75C24.6 6.55109 24.5052 6.36032 24.3364 6.21967C24.1676 6.07902 23.9387 6 23.7 6H3.9C3.66131 6 3.43239 6.07902 3.2636 6.21967C3.09482 6.36032 3 6.55109 3 6.75C3 6.94891 3.09482 7.13968 3.2636 7.28033C3.43239 7.42098 3.66131 7.5 3.9 7.5H23.7C23.9387 7.5 24.1676 7.42098 24.3364 7.28033C24.5052 7.13968 24.6 6.94891 24.6 6.75Z" fill="#1E1E1E"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_9_32">
                          <rect width="24" height="24" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </figure>
                </div>
              </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1" viewBox="0 0 1440 1" fill="none">
  <path d="M-17.0043 0.500122C551.993 0.500122 871.007 0.500122 1440 0.500122" stroke="black"/>
</svg>
      </div>
    
    <style jsx>{`
            .navbar{
            display: flex;
            align-items: stretch;
            flex-direction: column;
            }
            .navbarContent {
             display: flex;
             flex-direction: row;
             justify-content: space-between;
             align-items: center;
             margin-left: 10px;
            }
            .navbarBox{
            display: flex;
             flex-direction: row;
             justify-content: space-between;
             align-items: center;
             margin-left: 10px;
            }
            .divLogo {
              width: 135px;
              height: 58px;
              flex-shrink: 0;
            }
            .logo {
              color: #000;
              font-family: Poppins;
              font-size: 32px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }
            .sections {
              display: flex;
              flex-direction: row;
              align-items: center;
            }
            .icons {
              display: flex;
              flex-direction: row; 
            }
            .inicio{
              color: #1E1E1E;
              font-family: Poppins;
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }
            .productos{
              color: #1E1E1E;
              font-family: Poppins;
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }
            .contacto{
              color: #1E1E1E;
              font-family: Poppins;
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }
            a{
              text-decoration: none;
              color: #1E1E1E;
              font-family: Poppins;
              font-size: 18px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }
            `}
            </style>
    </>
  )
}

export default Navbar