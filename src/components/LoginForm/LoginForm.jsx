import { Button, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setAuth, setError, setLogin, setPassword } from "../../store/features/loginSlice";
import './LoginForm.css'
import { translations } from "../translations";

export default function LoginForm() {
  const error = useSelector((state) => state.login.error)
  const login = useSelector((state) => state.login.login);
  const password = useSelector((state) => state.login.password);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language) || "EN";
  const t = translations[language] || translations.EN;

  const handleLogin = () => {
    if (login === 'admin' && password === 'admin') {
      dispatch(setAuth())
    } else {
      dispatch(setError(t.errorLabel));
    }
  }

  return (
    <form className="form_styles">
      <div>
      {error && <span className="error">{error}</span>}
      <Input placeholder={t.loginLabel} className="first_input" value={login} onChange={(event) => dispatch(setLogin(event.target.value))} />
      <Input placeholder={t.passwordLabel} type="password" value={password} onChange={(event) => dispatch(setPassword(event.target.value))} />
      </div>
      <Button onClick={handleLogin} className="sign_button">{t.signInLabel}</Button>
    </form>
  )
}