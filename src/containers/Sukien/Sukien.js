import React from "react";
import Dautrang from "../../components/Header/Header";
import Chantrang from "../../components/Footer/Chantrang";
import './index.css';

function Sukien(){
    return(
        <>
            <Dautrang />
            <div className='su-kien'>
                <h1 className='title'>FLASH SALE THÁNG 10 </h1>
                <div>
                    <p style={{fontSize:'x-large', color:'red',fontWeight:'bold'}}>FLASH SALE UPTO 60%</p>
                    <p>Time : 18-21/10/2021</p>
                    <p>Địa điểm : Áp dụng tại các chi nhánh đã mở cửa hoạt động kể cả mua hàng online.</p>
                    <p>FLASH SALE các sản phẩm trong danh mục sale</p>
                    <p>(*)Lưu ý :</p>
                    <p>- Áp dụng mua tại các chi nhánh đã mở cửa hoạt động và kể cả mua online.</p>
                    <p>- Không áp dụng chung với các chương trình giảm giá khác.</p>
                    <p>- Không giảm thêm thẻ VIP ( Vẫn tích điểm).</p>
                    <p>- Có thể sử dụng thẻ mua hàng lần sau (Money back)</p>    
                </div>
                <div className='anh'><img src='https://cdn2.yame.vn/cimg/images/f7fbd2bf-4fca-0100-4145-00186cf38d33.jpg' /></div>
            </div>
            <Chantrang />
        </>
    );
}
export default Sukien;