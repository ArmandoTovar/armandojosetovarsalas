import { useState , useEffect } from "react";

export default function PopUp(){
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

    return (
        <div>{showTopBtn && (
              <span    onClick={goToTop} data-href="#">
             
             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800"><g strokeWidth="72" stroke="hsl(0, 0%, 100%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(-0.7071067811865477,-0.7071067811865475,0.7071067811865475,-0.7071067811865477,400.0000000000001,998.685424949238)"><line x1="372.5" y1="372.5" x2="427.5" y2="427.5" markerEnd="url(#SvgjsMarker1469)"></line></g><defs><marker markerWidth="9.5" markerHeight="9.5" refX="4.75" refY="4.75" viewBox="0 0 9.5 9.5" orient="auto" id="SvgjsMarker1469"><polygon points="0,9.5 3.1666666666666665,4.75 0,0 9.5,4.75" fill="hsl(0, 0%, 100%)"></polygon></marker></defs></svg>

             </span>
            
            )}<style jsx>{`
            span{
                height: 64px;
                width: 64px;
                margin-left: 0px;
                margin-right: auto;
                margin-top: 0px;
                right: 20px;
                bottom: 20px;
                padding: 10px;
                background-image: none;
                display: block;
              
                background-color: var(--primary_text);
                border-radius: 50%;
                position: fixed;
                opacity: 0.85;
              }`}</style></div>
    )
}