import {Card} from "antd";
import img from "@/assets/img.png"
import { Button, Checkbox, Form, Input } from 'antd';
import './index.scss'
import {Navigate, useNavigate} from "react-router-dom";



function Login(){
    const Navigate = useNavigate()
    function onclick () {
        Navigate('/login',{ replace: true })
    }
    return(
        <div className="layout">
            <Card className="login-container">
                <Button type="middle"
                        onClick = { onclick }
                > 进入web版</Button>

            </Card>

        </div>
    )
}
export default Login