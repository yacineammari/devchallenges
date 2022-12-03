import React from 'react'
import Button from './Button/Button';

function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>

      <div className='btn-container'>
        <div className='btn-sub-container'>
          <h5>{'<Button />'}</h5>
          <Button />
        </div>
      </div>

      <div className='btn-container'>
        <div className='btn-sub-container'>
          <h5>{'<Button variant="outline" />'}</h5>
          <Button variant='outline' />
        </div>
      </div>

      <div className='btn-container'>
        <div className='btn-sub-container'>
          <h5>{'<Button variant="text" />'}</h5>
          <Button variant='text' />
        </div>
      </div>

      <div className='btn-container'>
        <div className='btn-sub-container'>
          <h5>{'<Button disableShadow />'}</h5>
          <Button disableShadow />
        </div>
      </div>

      <div className='btn-container'>
        <div className='btn-sub-container'>
          <h5>{'<Button disable />'}</h5>
          <Button disable />
        </div>
        <div className='btn-sub-container'>
          <h5>{'<Button variant="text" disable />'}</h5>
          <Button variant='text' disable />
        </div>
      </div>

      <div className='btn-container'>
        <div className='btn-sub-container'>
          <h5>{'<Button startIcon="add_shopping_cart" />'}</h5>
          <Button startIcon='add_shopping_cart' />
        </div>
        <div className='btn-sub-container'>
          <h5>{'<Button endIcon="add_shopping_cart" />'}</h5>
          <Button endIcon='add_shopping_cart' />
        </div>
      </div>

      <div className='btn-container'>
        <div className='btn-sub-container'>
          <h5>{'<Button size="sm" />'}</h5>
          <Button size="sm" />
        </div>
        <div className='btn-sub-container'>
          <h5>{'<Button size="md" />'}</h5>
          <Button size="md" />
        </div>
        <div className='btn-sub-container'>
          <h5>{'<Button size="lg" />'}</h5>
          <Button size="md" />
        </div>
      </div>

      <div className='btn-container'>
        <div className='btn-sub-container'>
          <h5>{'<Button color="default" />'}</h5>
          <Button color='default' />
        </div>
        <div className='btn-sub-container'>
          <h5>{'<Button color="primary" />'}</h5>
          <Button color='primary' />
        </div>
        <div className='btn-sub-container'>
          <h5>{'<Button color="secondary" />'}</h5>
          <Button color='secondary' />
        </div>
        <div className='btn-sub-container'>
          <h5>{'<Button color="danger" />'}</h5>
          <Button color='danger' />
        </div>
        
      </div>

      <h3>created by yacineammari - devchallenges.io</h3>
    </div>
  )
}

export default App;


// add_shopping_cart
