import { useEffect } from 'react';
import bg from '../../assets/bg-furia.jpg';
import './landing.css';

const Landing = () => {
  useEffect(() => {
    window.chtlConfig = {
      chatbotId: "1344926212",
      display: "page_inline",
      settings: {
        widgetPosition: "inline",
        widgetBehavior: "default",
        containerStyle: {
          width: '100%',
          height: '100%'
        }
      }
    };

    const loadChatbot = () => {
      if (!document.getElementById('chatling-embed-script')) {
        const script = document.createElement('script');
        script.src = 'https://chatling.ai/js/embed.js';
        script.async = true;
        script.id = 'chatling-embed-script';
        script.setAttribute('data-id', '1344926212');
        script.setAttribute('data-display', 'page_inline');
        
        script.setAttribute('data-layout', 'full-width');
        script.setAttribute('data-responsive', 'true');
        
        document.body.appendChild(script);
      }
    };

    const loadDelay = setTimeout(loadChatbot, 300);

    return () => {
      clearTimeout(loadDelay);
      const existingScript = document.getElementById('chatling-embed-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      window.chtlConfig = undefined;
    };
  }, []);

  return (
    <div className="furia-landing">
      <div className="furia-bg" style={{ backgroundImage: `url(${bg})` }} />
      
      <div className="furia-content">
        <div className="furia-header">
          <h1 className="furia-title">
            <span className="furia-title-gradient">FURIA</span> CHAT
          </h1>
          <h2 className="furia-subtitle">
            A SELVA ESTÁ TE ESPERANDO!
          </h2>
        </div>

        <div className="space-y-4">
          <p className="furia-text">
            O único lugar onde você está <span className="furia-highlight">realmente conectado</span> com a FURIA
          </p>
        </div>

        <div 
          id="chatling-inline-bot" 
          className="furia-chat-container w-full h-[70vh] min-h-[500px] max-h-[800px]"
        ></div>

        <div className="furia-footer">
          #VEMPRASELVA • 100% GRÁTIS • SEM CADASTRO
        </div>
      </div>
    </div>
  );
};

export default Landing;