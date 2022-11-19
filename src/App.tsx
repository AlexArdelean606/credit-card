import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { CreditCard } from './components/CreditCard';
import { Title } from './lib/title/Title';

function App() {

  return (
    <>
      <Title>Credit card</Title>
      <CreditCard />
    </>
  );
}

export default App
