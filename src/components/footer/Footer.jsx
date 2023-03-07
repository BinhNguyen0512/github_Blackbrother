import React from 'react'
import {Link} from 'react-router-dom'

import Grid from '../Grid'

import logo from '../../assets/images/logo.png'

const footerAboutLink = [
    {
        display: 'Giới thiệu',
    },
    {
        display: 'Liên hệ',
    },
    {
        display: 'Tuyển dụng',
    },
    {
        display: 'Tin tức',
    },
    {
        display: 'Hệ thống cửa hàng',
    },
]

const footerCustomerLink = [
    {
        display: 'Chính sách đổi trả',
    },
    {
        display: 'Chính sách bảo hành',
    },
    {
        display: 'Chính sách hoàn tiền',
    },

]

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <Grid
                col={4}
                mdCol={2}
                smCol={1}
                gap={10}
            >

                <div>
                    <div className="footer__title">
                        <h4>Tổng đài hỗ trợ</h4>
                    </div>

                    <div className="footer__content">
                        <p>Liên hệ đặt hàng <strong>0981377700</strong></p>
                        <p>Thắc mắc đơn hàng <strong>0981377700</strong></p>
                        <p>Góp ý kiến, khiếu nại <strong>0981377700</strong></p>
                    </div>      
                </div>

                <div>
                    <div className="footer__title">
                        <h4> Về BLACKBROTHER</h4>
                    </div>

                    <div className="footer__content">
                        {footerAboutLink.map( (item, index) => (
                            <p key={index}>
                                    {item.display}

                            </p>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="footer__title">
                        <h4>Chăm sóc khách hàng</h4> 
                    </div>

                    <div className="footer__content">
                        {
                            footerCustomerLink.map((item, index) => (
                                <p key={index}>
                                        {item.display}

                                </p>
                            ))
                        }
                    </div>
                </div>

                <div className='footer__about'>
                        <div className="header__logo">
                            <Link to='/github_Blackbrother/'>
                                BLACKBROTHER
                            </Link>
                        </div>


                        <p style={{
                            marginTop: '10px'
                        }}>
                            Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu
                            người tiêu dùng Việt. Hãy cùng BLACKBROTHER hướng đến một cuộc sống năng động, tích cực hơn.
                        </p>
                </div>

            </Grid>
        </div>
    </footer>
  )
}

export default Footer
