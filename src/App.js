
import './App.css';
import { Routes,Route  } from 'react-router-dom';
import Navbar from './components/navigation/navbar.component';
import MyInfo from './routes/myinfo/myinfo.component';
import Activities from './routes/activites/activities.component';
import Communication from './routes/communication/communication.component';
import ApplyNav from './components/applynav/applynav.component';
import Apply from './routes/apply/apply. container';
function App() {
  return (
    <Routes >
      {/* <Route path='/' element={<Navigate to='/myinfo' replace />}/> */}
      <Route path='/' element={<Navbar />}>
        <Route index element= {<MyInfo />}/>
        <Route path='/activities' element= {<Activities />}/>
        <Route path='/communication' element= {<Communication />}/>
      </Route>
      <Route path='/apply' element={<Apply />} />
    </Routes>
  );
}

export default App;
