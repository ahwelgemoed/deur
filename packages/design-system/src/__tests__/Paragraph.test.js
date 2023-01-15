"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Paragraph_1 = require("../Paragraph");
afterEach(react_native_1.cleanup);
it('renders textual children', () => {
    (0, react_native_1.render)(<Paragraph_1.Paragraph>Textual content</Paragraph_1.Paragraph>);
    expect(react_native_1.screen.getByText('Textual content')).toBeDefined();
});
