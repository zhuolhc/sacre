import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomePage from './HomePage';
import FoodDetailsPage from './FoodDetailsPage';
import AboutPage from './AboutPage';
import DragDrop from './DragDrop';
import OtherSites from "./OtherSites";

function App() {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // 切换isDarkMode状态
  };

  return (
      <Router>
        <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
          <nav className="navbar">
            <div className="navbar-brand">
              <Link to="/">{t('siteTitle')}</Link>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">{t('home')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">{t('about')}</Link>
              </li>
              <li className="nav-item">
                <Link to="/OtherSites">{t('OtherSites')}</Link>
              </li>
              <li className="nav-item">
                <button onClick={() => handleLanguageChange('en')}>English</button>
                <button onClick={() => handleLanguageChange('zh')}>中文</button>
              </li>
              <li className="nav-item">
                <button onClick={toggleDarkMode}>
                  {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                </button>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/OtherSites" element={<OtherSites/>}/>
            <Route path="/food/:foodName" element={<FoodDetailsPage/>}/>
            <Route path="/" element={<><HomePage/><DragDrop/></>}/>
          </Routes>

          <footer className="footer">
            {/* 添加页脚内容 */}
          </footer>
        </div>
      </Router>
  );
}

export default App;