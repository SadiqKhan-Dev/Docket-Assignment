import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <header>
        <h1>Full-Stack Web Application</h1>
      </header>
      
      <main>{children}</main>
      
      <footer>
        <p>© 2026 Containerized Full-Stack Web Application</p>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        html,
        body {
          max-width: 100vw;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
        }
        
        body {
          color: #333;
          background: #fff;
        }
        
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        header {
          background-color: #222;
          color: white;
          padding: 1rem;
          text-align: center;
        }
        
        footer {
          background-color: #f5f5f5;
          padding: 1rem;
          text-align: center;
          margin-top: auto;
        }
      `}</style>
    </div>
  );
}