import React from "react"

type AuthLayoutProps = {
    children:React.ReactNode
}

const AuthLayout:React.FC<AuthLayoutProps> = ({children}) => {
    return (
        <div className="w-screen h-screen flex">
            <div className="h-full">
                <div>
                    <h2>Djangi</h2>
                </div>
                <div className="flex items-center justify-center">
                    <h2></h2>
                    <p></p>
                </div>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default AuthLayout