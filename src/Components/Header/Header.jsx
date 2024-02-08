import { Nav } from 'react-bootstrap';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <Nav activeKey='/' className='justify-content-between container'>

        <Nav.Item className={classes.header_logo}>
          <Nav.Link href='/'>
            Book-Store
          </Nav.Link> 
        </Nav.Item>
        
        <Nav.Item className={classes.header_icon}>
            <i className='fa-solid fa-cart-shopping'></i>
          </Nav.Item>
      </Nav>
    </header>
  )
}

export default Header