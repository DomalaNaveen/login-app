import './index.css'

const Login = props => {
  const {login} = props

  return (
    <button type="button" className="login" onClick={login}>
      Login
    </button>
  )
}

export default Login