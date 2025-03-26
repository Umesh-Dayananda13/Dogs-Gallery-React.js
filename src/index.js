import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

// Import images
import dog1 from './images/dog1.jpg';
import dog2 from './images/dog2.jpg';
import dog3 from './images/dog3.jpg';
import dog4 from './images/dog4.jpg';
import dog5 from './images/dog5.jpg';
import dog6 from './images/dog6.jpg';
import dog7 from './images/dog7.jpg';
import dog8 from './images/dog8.jpg';


const dogData = [
  { id: 1, name: "Buddy the Retriever", image: dog1 },
  { id: 2, name: "Luna the Husky", image: dog2 },
  { id: 3, name: "Max the German Shepherd", image: dog3 },
  { id: 4, name: "Bella the Poodle", image: dog4 },
  { id: 5, name: "Charlie the Bulldog", image: dog5 },
  { id: 6, name: "Lucy the Beagle", image: dog6 },
  { id: 7, name: "Rocky the Boxer", image: dog7 },
  { id: 8, name: "Daisy the Dachshund", image: dog8 },
];

const DogImage = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} className="dog-image" />
  );
};

const DogGrid = () => {
  return (
    <div className="dog-grid">
      {dogData.map((dog, index) => (
        <div key={dog.id} className="dog-card" style={{animationDelay: `${index * 0.1}s`}}>
          <DogImage src={dog.image} alt={dog.name} />
          <p className="dog-name">{dog.name}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
        

      <h1 className="app-title">Pawsome Dog Gallery</h1>
      <DogGrid />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('appu'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
