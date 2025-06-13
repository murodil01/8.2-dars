import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Form, Input, Typography, Divider } from "antd";
import { GoogleOutlined, FacebookFilled, CloseOutlined } from "@ant-design/icons";
import { Loader } from "lucide-react"; 
import type { FormProps } from "antd";

const { Title, Text, Link } = Typography;

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setLoading(true);
    setTimeout(() => {
      console.log(isLogin ? "Login data:" : "Register data:", values);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="relative w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
          onClick={() => navigate("/")}
        >
          <CloseOutlined />
        </button>

        <div className="flex justify-center mb-4">
          <Title level={4} className="!mb-0">
            <button
              onClick={() => setIsLogin(true)}
              className={`transition ${isLogin ? "text-green-600" : "text-gray-400"}`}
            >
              Login
            </button>{" "}
            |{" "}
            <button
              onClick={() => setIsLogin(false)}
              className={`transition ${!isLogin ? "text-green-600" : "text-gray-400"}`}
            >
              Register
            </button>
          </Title>
        </div>

        <Text className="block text-center mb-6 text-gray-500">
          {isLogin
            ? "Enter your email and password to login."
            : "Enter your username, email and password to register."}
        </Text>

        <Form<FieldType> layout="vertical" onFinish={onFinish}>
          {!isLogin && (
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please enter your username!" }]}
            >
              <Input placeholder="Enter your username" size="large" className="rounded" />
            </Form.Item>
          )}

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Enter a valid email!" },
            ]}
          >
            <Input placeholder="yourname@email.com" size="large" className="rounded" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="************" size="large" className="rounded" />
          </Form.Item>

          {!isLogin && (
            <Form.Item
              name="confirmPassword"
              rules={[{ required: true, message: "Please confirm your password!" }]}
            >
              <Input.Password placeholder="Confirm password" size="large" className="rounded" />
            </Form.Item>
          )}

          {isLogin && (
            <div className="flex justify-end mb-4">
              <Link href="#" className="!text-green-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
          )}

          <Form.Item>
            <Button
              htmlType="submit"
              size="large"
              className="w-full rounded flex items-center justify-center"
              style={{
                backgroundColor: "#46A358",
                borderColor: "#46A358",
                color: "white",
              }}
            >
              {loading ? <Loader className="animate-spin" /> : isLogin ? "Login" : "Register"}
            </Button>
          </Form.Item>
        </Form>

        <Divider plain className="text-gray-400">
          Or {isLogin ? "login" : "register"} with
        </Divider>

        <div className="space-y-3 flex flex-col gap-4">
          <Button
            icon={<GoogleOutlined />}
            block
            size="large"
            className="border border-gray-300 text-black"
          >
            Continue with Google
          </Button>
          <Button
            icon={<FacebookFilled />}
            block
            size="large"
            className="border border-gray-300 text-black"
          >
            Continue with Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
