import { useState } from "react";
import { Button, Form, Input, Typography, Divider } from "antd";
import { GoogleOutlined, FacebookFilled, CloseOutlined } from "@ant-design/icons";
import { Loader } from "lucide-react";

const { Text, Link } = Typography;

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    console.log(isLogin ? "Login data:" : "Register data:", values);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="relative w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
          onClick={() => console.log("Close clicked")}
        >
          <CloseOutlined />
        </button>

        <div className="flex justify-center mb-4 gap-2 text-xl font-medium">
          <button
            onClick={() => setIsLogin(true)}
            className={`transition ${isLogin ? "text-green-600" : "text-gray-400"}`}
          >
            Login
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={() => setIsLogin(false)}
            className={`transition ${!isLogin ? "text-green-600" : "text-gray-400"}`}
          >
            Register
          </button>
        </div>

        <Text className="block text-center mb-6 text-gray-500">
          {isLogin
            ? "Enter your username and password to login."
            : "Enter your username, email, and password to register."}
        </Text>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true }]}>
            <Input
              placeholder="Enter your username"
              size="large"
              className="rounded"
              autoComplete="off"
            />
          </Form.Item>

          {!isLogin && (
            <Form.Item name="email" rules={[{ required: true }]}>
              <Input
                placeholder="Enter your email address"
                size="large"
                className="rounded"
                autoComplete="off"
              />
            </Form.Item>
          )}

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              size="large"
              className="rounded"
            />
          </Form.Item>

          {!isLogin && (
            <Form.Item
              name="confirmPassword"
              rules={[{ required: true, message: "Please confirm your password!" }]}
            >
              <Input.Password
                placeholder="Confirm your password"
                size="large"
                className="rounded"
              />
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
              className="w-full rounded flex items-center justify-center gap-2"
              style={{
                backgroundColor: "#46A358",
                borderColor: "#46A358",
                color: "white",
              }}
              disabled={loading}
            >
              {loading ? (
                <Loader className="animate-spin" size={20} />
              ) : (
                isLogin ? "Login" : "Register"
              )}
            </Button>
          </Form.Item>
        </Form>

        <Divider plain className="text-gray-400">
          Or {isLogin ? "login" : "register"} with
        </Divider>

        <div className="space-y-3">
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

export default Register;


