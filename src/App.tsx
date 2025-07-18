import { useLanguage } from './context/context';
import { Router } from './routes/routes'

function App() {
  const { language } = useLanguage();
  return (
    <div dir={language === 'fa' ? 'rtl' : 'ltr'}>
      <Router />
    </div>
  )
}

export default App
