// TemplateContext.js
import React, { createContext, useContext, useState } from "react";

const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [templates, setTemplates] = useState([]);

  const addTemplate = (newTemplate) => {
    setTemplates([...templates, newTemplate]);
  };

  return (
    <TemplateContext.Provider value={{ templates, addTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => {
  return useContext(TemplateContext);
};
