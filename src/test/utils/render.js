import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

const TestingContainer = ({ children }) => <div id="root">{children}</div>;

const customRender = (ui, options) => render(ui, { wrapper: TestingContainer, ...options });

export { customRender as render };
