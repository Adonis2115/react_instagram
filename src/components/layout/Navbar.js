import classes from './Navbar.module.css';

function Navigation(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Instagram</div>
            <nav>
                <ul>
                    <li>Search</li>
                    <li>Profile</li>
                    <li>Setting</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation