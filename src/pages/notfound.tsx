import { useNavigate } from 'react-router-dom';
import { CSSProperties } from 'react';

export default function NotFound(): JSX.Element {
  const navigate = useNavigate();

  const containerStyle: CSSProperties = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "#0a0a0a", // Dark background like your image
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px"
  };

  const cardStyle: CSSProperties = {
    background: "rgba(255, 255, 255, 0.05)", // Subtle transparent card
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "60px 40px",
    maxWidth: "600px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
    animation: "slideIn 0.6s ease-out"
  };

  const iconStyle: CSSProperties = {
    fontSize: "80px",
    marginBottom: "20px"
  };

  const titleStyle: CSSProperties = {
    color: "#ffffff",
    fontSize: "32px",
    marginBottom: "15px"
  };

  const accentTextStyle: CSSProperties = {
    background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    display: "inline"
  };

  const subtitleStyle: CSSProperties = {
    color: "#a0a0a0",
    fontSize: "18px",
    marginBottom: "30px",
    lineHeight: "1.6"
  };

  const suggestionsBoxStyle: CSSProperties = {
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    padding: "25px",
    margin: "30px 0",
    textAlign: "left"
  };

  const suggestionsTitleStyle: CSSProperties = {
    color: "#a855f7",
    fontSize: "18px",
    marginBottom: "15px"
  };

  const listStyle: CSSProperties = {
    listStyle: "none",
    color: "#b0b0b0",
    paddingLeft: 0
  };

  const listItemStyle: CSSProperties = {
    padding: "8px 0"
  };

  const buttonGroupStyle: CSSProperties = {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "30px"
  };

  const primaryButtonStyle: CSSProperties = {
    padding: "15px 35px",
    fontSize: "16px",
    border: "none",
    borderRadius: "50px",
    background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  };

  const secondaryButtonStyle: CSSProperties = {
    padding: "15px 35px",
    fontSize: "16px",
    borderRadius: "50px",
    background: "transparent",
    color: "#a855f7",
    border: "2px solid #a855f7",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.3s ease"
  };

  const handlePrimaryMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 10px 30px rgba(168, 85, 247, 0.4)';
  };

  const handlePrimaryMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
  };

  const handleSecondaryMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = '#a855f7';
    e.currentTarget.style.color = 'white';
  };

  const handleSecondaryMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.background = 'transparent';
    e.currentTarget.style.color = '#a855f7';
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div style={cardStyle}>
        <div style={iconStyle}>🔍</div>
        <h1 style={titleStyle}>
          Oops! We <span style={accentTextStyle}>couldn't find</span> that page
        </h1>
        <p style={subtitleStyle}>
          Don't worry, it happens to the best of us. The page you're looking for seems to have wandered off.
        </p>

        <div style={suggestionsBoxStyle}>
          <h3 style={suggestionsTitleStyle}>Here's what you can try:</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}>✓ Check if the URL is spelled correctly</li>
            <li style={listItemStyle}>✓ Go back to the previous page</li>
            <li style={listItemStyle}>✓ Visit our homepage and start fresh</li>
            <li style={listItemStyle}>✓ Use the search feature to find what you need</li>
          </ul>
        </div>

        <div style={buttonGroupStyle}>
          <button
            onClick={() => navigate('/')}
            style={primaryButtonStyle}
            onMouseEnter={handlePrimaryMouseEnter}
            onMouseLeave={handlePrimaryMouseLeave}
          >
            Take Me Home
          </button>
          <button
            onClick={() => navigate(-1)}
            style={secondaryButtonStyle}
            onMouseEnter={handleSecondaryMouseEnter}
            onMouseLeave={handleSecondaryMouseLeave}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}