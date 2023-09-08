import React from "react"

export const metadata = {
    title: "Djangi",
    description: "Login to you account",
  };
  

type AuthLayoutProps = {
    children:React.ReactNode
}

const AuthLayout:React.FC<AuthLayoutProps> = ({children}) => {
    return (
        <div className="w-full h-full flex">
            <div>
                
            </div>
            <div>{children}</div>
        </div>
    )
}

export default AuthLayout