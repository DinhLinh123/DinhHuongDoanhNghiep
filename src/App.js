
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import './App.css';
import Trangchu from './containers/Trangchu/Trangchu';
import Quan from './containers/Quan/Quan';
import Ao from "./containers/Ao/Ao";
import Dobo from './containers/Dobo/Dobo';
import Sukien from './containers/Sukien/Sukien';
import Thongbao from './containers/Thongbao/Thongbao';
import Hotro from './containers/Hotro/Hotro';
import Phukien from './containers/Phukien/Phukien';
import Dangnhap from './containers/Dangnhap/Dangnhap';
import Khongtimthay from './containers/Notfound/Khongtimthay';

function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/dang-nhap" component={Dangnhap}></Route>
        <Route exact path="/" component={Trangchu}></Route>
        <Route path="/quan" component={Quan}></Route>
        <Route path="/ao" component={Ao}></Route>
        <Route path="/do-bo" component={Dobo}></Route>
        <Route path="/su-kien" component={Sukien}></Route>
        <Route path="/thong-bao" component={Thongbao}></Route>
        {/* <Route path="/ho-tro" component={Hotro}></Route> */}
        <Route path="/phu-kien" component={Phukien}></Route>
        <Route path="/" component={Khongtimthay}></Route>
      </Switch>
    </Router>
  );
}

export default App;
