import Topbar from './Scence/Global/Topbar';
import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './Theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Dashboard from './Scence/Dashboard';
import Sidebar from './Scence/Global/Sidebar';
import Team from './Scence/team/index';
import Contacts from './Scence/contacts';
 import Invoices from './Scence/invoices';
// import Contacts from './Scence/contacts';
 import Bar from './Scence/bar';
 import Form from './Scence/form';
 import Line from './Scence/line';
 import Pie from './Scence/pie';
 import FAQ from './Scence/faq';
 import Geography from './Scence/geography';
import Calendar from './Scence/calendar';



function App() {
  const [theme, colorMode] = useMode();
  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
           <CssBaseline/>
            <div className='app'>
              <Sidebar/>
                 <main className="content">
                    <Topbar/>
                    <Routes>
                       <Route path='/' element={<Dashboard/>}/>
                       <Route path='/team' element={<Team/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                      <Route path='/invoices' element={<Invoices/>}/>
                       <Route path='/form' element={<Form/>}/>
                       <Route path='/calendar' element={<Calendar/>}/>
                       <Route path='/faq' element={<FAQ/>}/>
                      <Route path='/bar' element={<Bar/>}/>
                        <Route path='/pie' element={<Pie/>}/>
                       <Route path='/line' element={<Line/>}/>
                       
                       <Route path='/geography' element={<Geography/>}/>
                       
                    </Routes>
                 
             </main>
            </div>
    </ThemeProvider>
          
    </ColorModeContext.Provider>
  )
}

export default App
