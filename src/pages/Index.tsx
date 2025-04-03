
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the Home page since our app uses Home as the main page
    navigate('/');
  }, [navigate]);

  return null;
};

export default Index;
