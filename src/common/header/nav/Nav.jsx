import NavList from './navList/NavList';
import './navStyle.scss';
const Nav = ({ data, setShow }) => {
    return (
        <nav id="nav">
            <NavList data={data} setShow={setShow} />
            <p>마이뮤직</p>
        </nav>
    );
};

export default Nav;
