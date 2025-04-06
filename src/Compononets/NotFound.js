import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <button style={styles.button} onClick={() => navigate('/')}>
        Go to Home
      </button>
    </div>
  );
};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  },
  title: {
    fontSize: '5rem',
    fontWeight: 'bold',
    color: '#ff4c4c',
    marginBottom: '10px',
  },
  message: {
    fontSize: '1.5rem',
    color: '#555',
    marginBottom: '20px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
};
export default NotFound;
