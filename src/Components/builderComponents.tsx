import React from 'react';

interface BuilderComponentProps { }

const BuilderComponent: React.FC<BuilderComponentProps> = () => {
  return (
    <div className="builder-component">
      <img src="./Components/Assests/builder_1.png" alt="Builder image" />
      <h1>Do you find for a builder?</h1>
      <p>Get started on your construction journey today!</p>
      <button>Create Your Profile</button>
    </div>
  );
};

export default BuilderComponent;

