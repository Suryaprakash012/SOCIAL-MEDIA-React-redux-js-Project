import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllaccount } from '../Reducer/Accountreducer';

const Testfile = () => {
  const accountSlice = useSelector(selectAllaccount);

  const accountElements = accountSlice.map((accountSlice) => (
    <article key={accountSlice.id}>
      <h1>{accountSlice.username} {/* Use the correct field name */}</h1>
    </article>
  ));

  return (
    <div>
      {accountElements}
    </div>
  );
};

export default Testfile;
