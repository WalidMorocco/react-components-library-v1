import './styles.css'

export const Navbar = () => {
    return (
        <nav>
            <div id="nav-logo-section" className="nav-section">
                <a href='#'>
                    <svg id='social-logo' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M15.375 7.688c-.724 0-1.313-.589-1.313-1.313s.589-1.313 1.313-1.313 1.313.589 1.313 1.313-.589 1.313-1.313 1.313zm8.625-7.688v24h-24v-24h24zm-3.896 17.406c.55-.652.896-1.485.896-2.406 0-2.072-1.679-3.751-3.75-3.751h-10.5c-2.071.001-3.75 1.679-3.75 3.751 0 2.071 1.679 3.75 3.75 3.75h4.605c-.857-1.054-2.458-3-2.458-3h-2.147c-.414 0-.75-.336-.75-.75s.336-.75.749-.75h9.96c.669 0 1.05.186 1.472.718.722.909 1.879 2.372 1.923 2.438zm-1.799.628c-1.141-1.48-1.805-2.277-1.805-2.277h-5.25s1.905 2.316 3.017 3.708c.871 1.091 1.518 1.535 2.597 1.535 1.057 0 1.886-.799 1.886-1.731 0-.405-.137-.834-.445-1.235zm-11.491-11.659l-1.564 1.564 1.06 1.061 1.564-1.564 1.565 1.564 1.062-1.06-1.565-1.565 1.564-1.564-1.061-1.061-1.564 1.565-1.565-1.565-1.06 1.06 1.564 1.565zm8.561 3.375c1.86 0 3.375-1.515 3.375-3.375s-1.515-3.375-3.375-3.375c-1.862 0-3.375 1.515-3.375 3.375s1.513 3.375 3.375 3.375z"/></svg>
                </a>
            </div>
            <div id="nav-link-section" className="nav-section">
                <a href='#'>Components</a>
                <a href='#'>About</a>
            </div>
            <div id="nav-social-section" className="nav-section">
                <a href='#'>
                    <svg id='social-logo' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
                </a>
                <a href='#'>
                    <svg id='social-logo' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
            </div>
            <div id="nav-menu-section" className="nav-section">
                <button href='#' onClick={() =>{}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" /></svg>
                </button>
            </div>
        </nav>
    )
}