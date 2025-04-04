import { Select, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/features/languageSlice";
import { setTheme } from "../../store/features/themeSlice";
import { useEffect, useState } from "react";
import { THEMES, LANGUAGES } from "../../context";

import "./Navigation.css";

export default function Navigation() {
  const defaultClassName = "navigation";
  const [className, setClassName] = useState(defaultClassName);
  const language = useSelector((state) => state.language.language);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();  
  
  const handleThemeChange = (checked) => {
    const newTheme = checked ? THEMES.LIGHT : THEMES.DARK;
    dispatch(setTheme(newTheme));
  };

  const handleLanguageChange = (value) => {
    dispatch(setLanguage(value));
  };

  useEffect(() => {
    setClassName(`${defaultClassName} ${defaultClassName}-${theme}`);
  }, [theme]);

  return (
    <div className={className}>
      <div className="much-weight">
        <Select
          value={language}
          style={{ width: 120 }}
          onChange={handleLanguageChange}
          options={[
            { value: LANGUAGES.EN.value, label: LANGUAGES.EN.text },
            { value: LANGUAGES.UA.value, label: LANGUAGES.UA.text },
          ]}
        />
      </div>

      <div className="much-weight">
        <Switch
          checkedChildren={THEMES.LIGHT}
          unCheckedChildren={THEMES.DARK}
          onChange={handleThemeChange}
          checked={theme === THEMES.LIGHT}
        />
      </div>
    </div>
  );
}
