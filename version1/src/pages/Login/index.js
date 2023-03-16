import {Card} from "antd";
import img_3 from "@/assets/img_3.png"
import { Button, Checkbox, Form, Input,FormProps } from 'antd';
import {Navigate, useNavigate} from "react-router-dom";
import './index.scss'
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


function Login(){
    const Navigate = useNavigate()
    function onFinish(value){
        console.log(value)
        Navigate('/Home',{replace:true})

    }

    return(
        <div className="login">
        <Card className="login-container">
            <img className="login-logo" src={img_3} alt="" />
            <Form
                validateTrigger={['onBlur', 'onChange']}
            initialValues={{
                remember:true,
                password:'123456'
            }}
            onFinish={onFinish}
            >
                <Form.Item
                    label="手机号"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入手机号',
                        },
                        {
                            pattern: /^1[3-9]\d{9}$/,
                            message: '请输入正确的手机号',
                            validateTrigger:'onBlur'
                        }
                    ]}
                >
                    <Input size="large" placeholder="请输入手机号" />
                </Form.Item>
                <Form.Item
                    label="验证码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入验证码',
                        },
                        {
                            len:6,
                            message:'请输入六位验证码',
                            validateTrigger:'onBlur'
                        }
                    ]}>
                    <Input size="large" placeholder="请输入验证码" />
                </Form.Item>
                <Form.Item
                    name = "remember"
                >
                    <Checkbox className="login-checkbox-label">
                        我已阅读并同意「用户协议」和「隐私条款」
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" block>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </Card>

        </div>
    )
}
export default Login