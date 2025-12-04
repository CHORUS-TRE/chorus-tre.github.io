import React, { useState, ReactNode, Children, isValidElement, ReactElement, CSSProperties } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
  detailsStyle?: CSSProperties;
  summaryStyle?: CSSProperties;
  className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick, detailsStyle, summaryStyle, className }) => {
  const defaultDetailsStyle: CSSProperties = { 
    backgroundColor: '#f5f5f5', 
    padding: '15px', 
    borderRadius: '8px', 
    border: '1px solid #f5f5f5', 
    marginBottom: '10px' 
  };

  const defaultSummaryStyle: CSSProperties = { 
    fontSize: '1.5em', 
    fontWeight: 'bold', 
    color: 'black', 
    cursor: 'pointer',
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const arrowStyle: CSSProperties = {
    display: 'inline-block',
    width: '0',
    height: '0',
    borderTop: isOpen ? '10px solid var(--chorus-blue)' : '8px solid transparent',
    borderBottom: isOpen ? 'none' : '8px solid transparent',
    borderLeft: isOpen ? '8px solid transparent' : '10px solid var(--chorus-blue)',
    borderRight: isOpen ? '8px solid transparent' : 'none',
    transition: 'transform 0.2s',
    
  };

  // Create a unique class name for this component instance
  const uniqueClassName = `accordion-item-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      <style>
        {`
          .${uniqueClassName} summary::-webkit-details-marker {
            display: none;
          }
          .${uniqueClassName} summary::marker {
            display: none;
          }
        `}
      </style>
      <details 
        className={`${className || "custom-details"} ${uniqueClassName}`}
        style={{ ...defaultDetailsStyle, ...detailsStyle }}
        open={isOpen}
      >
        <summary 
          style={{ ...defaultSummaryStyle, ...summaryStyle }}
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          <span style={arrowStyle}></span>
          {title}
        </summary>
        {isOpen && (
          <div>
            <div
              style={{
                borderTop: '0.5px solid #c7c7c7',
                marginTop: '12px',
                paddingTop: '14px'
              }}
            >
              <div style={{ fontSize: '0.95rem' }}>
                {children}
              </div>
            </div>
          </div>
        )}
      </details>
    </>
  );
};

interface AccordionSectionProps {
  title: string;
  children: ReactNode;
}

export const AccordionSection: React.FC<AccordionSectionProps> = ({ title, children }) => {
  // This is just a marker component, the actual rendering is done by Accordion
  return null;
};

interface AccordionProps {
  items?: Array<{
    title: string;
    content: ReactNode;
  }>;
  children?: ReactNode;
  className?: string;
  detailsStyle?: CSSProperties;
  summaryStyle?: CSSProperties;
}

const Accordion: React.FC<AccordionProps> = ({ items, children, className, detailsStyle, summaryStyle }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // If items prop is provided, use the old API
  if (items) {
    return (
      <div>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
            className={className}
            detailsStyle={detailsStyle}
            summaryStyle={summaryStyle}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    );
  }

  // Parse AccordionSection children
  const sections: Array<{ title: string; content: ReactNode }> = [];

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === AccordionSection) {
      sections.push({
        title: child.props.title,
        content: child.props.children
      });
    }
  });

  return (
    <div>
      {sections.map((section, index) => (
        <AccordionItem
          key={index}
          title={section.title}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
          className={className}
          detailsStyle={detailsStyle}
          summaryStyle={summaryStyle}
        >
          {section.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
