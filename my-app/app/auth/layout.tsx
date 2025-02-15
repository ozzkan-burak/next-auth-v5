interface AuthLayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      {children}
    </div>
  )
}

export default Layout
