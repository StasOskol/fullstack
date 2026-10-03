import { Route, Routes } from 'react-router-dom';

import MainPage from '../components/pages/MainPage';
import ChangeDataBackend from '../components/pages/ChangeDataBackend';
import CreateEditElement from '../components/components/CreateEditElement';
import Coder from '../components/pages/Coder';
import Verstka from '../components/pages/Verstka';

const Router = () => {
    return (
        <Routes>
            <Route path="/" index element={<MainPage />} />
            <Route path='change-backend' element={<ChangeDataBackend />} />
            <Route path='/change-backend/new' element={<CreateEditElement />} />
            <Route path='/change-backend/edit/:id' element={<CreateEditElement />} />
            <Route path='/coder' element={<Coder />} />
            <Route path='/ver' element={<Verstka />} />
        </Routes>
    );
};

export default Router;