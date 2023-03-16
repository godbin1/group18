import "./index.scss"
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {useNavigate} from "react-router-dom";

const { Header, Content, Footer } = Layout;

function getItem(label,key){
    return{
        key,
        label,
    };
}
const items=[
    getItem('首页','/home'),
    getItem('游戏','/game'),
    getItem('个人','/selfcenter'),
    getItem('聊天','/chat'),
    getItem('关于','/about'),
];
function Home(){
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate()
    const onClick = (e) =>{
        navigate(e.key)
    }
    return(
            <Layout className="s">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items}
                        onClick = {onClick}
                    />
                </Header>
            </Layout>


    )
}

export default Home