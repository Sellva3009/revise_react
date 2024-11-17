import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Fakeapi = ({ sharedData, loggedIn }) => {
  return (
    <div>
      Fake API
      <Outlet />
      <div className="list">
        {loggedIn ? (
          <ul>
            {sharedData.map((item) => (
              <li key={item.id}>
                {item.id} -{item.title}
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {sharedData.slice(0, 4).map((item) => (
              <li key={item.id}>
                {item.id} - {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Fakeapi;
