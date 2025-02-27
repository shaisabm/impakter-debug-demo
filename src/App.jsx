import {Routes, Route} from 'react-router-dom'
import LanguageChange from './pages/LanguageChange.jsx'
import HomePage from './pages/HomePage.jsx'
import {LanguageProvider} from './context/LanguageContext'
import {ClerkProvider} from "@clerk/clerk-react";
import GoogleSignup from "./pages/GoogeSignup.jsx";
import PasswordValidationDemo from "./pages/PasswordValidationDemo.jsx";
import DropdownOverlapDemo from "./pages/DropdownOverlapDemo.jsx";
import LogoDisplayDemo from "./pages/LogoDisplayDemo.jsx";
import MenuClickDemo from "./pages/MenuClickDemo.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <LanguageProvider>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/language-change" element={<LanguageChange/>}/>
                    <Route path="/google-signup" element={<GoogleSignup/>}/>
                    <Route path="/password-validation" element={<PasswordValidationDemo/>}/>
                    <Route path="/dropdown-overlap" element={<DropdownOverlapDemo/>}/>
                    <Route path="/logo-display" element={<LogoDisplayDemo/>}/>
                    <Route path ="menu-click" element={<MenuClickDemo/>}/>

                </Routes>
            </LanguageProvider>
        </ClerkProvider>
    )
}

export default App