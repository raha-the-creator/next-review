import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Next.js</span> course
      </h1>
      <p className={headerStyles.description}>Lorem ipsum</p>
    </div>
  )
}

export default Header