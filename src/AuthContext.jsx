import React from 'react';

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  const logIn = (email, password) => {
    if (email !== "qw" || password !== "qw") {
      return
    }
    setIsLoggedIn(true)
  }
  const logOut = () => {
    setIsLoggedIn(false)
  }
  return (
    <AuthContext.Provider value={{ logIn, logOut, isLoggedIn }}>
      {children}
    </ AuthContext.Provider >
  )
}
const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {
            (value) => {
              return <WrappedComponent {...value} {... this.props} />
            }
          }
        </AuthContext.Consumer>
      )
    }
  }
}
export default withAuth;



