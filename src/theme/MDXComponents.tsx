import React from 'react';
  // Importing the original mapper + our components according to the Docusaurus doc
  import MDXComponents from '@theme-original/MDXComponents';
  import Button from '@site/src/components/Button';
  import Card from '@site/src/components/Card';
  import CardBody from '@site/src/components/Card/CardBody';
  import CardFooter from '@site/src/components/Card/CardFooter';
  import CardHeader from '@site/src/components/Card/CardHeader';
  import CardImage from '@site/src/components/Card/CardImage';
  import Accordion, { AccordionSection } from '@site/src/components/Accordion';
  import AppCard from '@site/src/components/AppCard';
  export default {
    // Reusing the default mapping
    ...MDXComponents,
    Button,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    CardImage,
    Accordion,
    AccordionSection,
    AppCard
  };