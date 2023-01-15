"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const Strong_1 = require("../Strong");
afterEach(react_native_1.cleanup);
it('renders textual children', () => {
    (0, react_native_1.render)(<Strong_1.Strong>Textual content</Strong_1.Strong>);
    expect(react_native_1.screen.getByText('Textual content')).toBeDefined();
});
