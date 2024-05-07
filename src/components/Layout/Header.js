import './css/Header.css';

const Header = () => {
    return (
        <header>
            <div className='contents'>
                <div>로고 자리</div>
                <nav>
                    <ul>
                        <li>
                            로그인
                        </li>
                        <li>
                            회원가입
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;