const messages = require('./messages.js');
const generateMessage = require('./script.js');

describe('generateMessage()', () => {
    const result = generateMessage();

    it('should be a function', () => {
        expect(typeof generateMessage).toBe('function');
    });

    it('should return a string', () => {
        expect(typeof result).toBe('string');
    });

    it('should generate one of the messages from the array', () => {
        expect(messages).toContain(result);
    });

    it('should produce a variety of messages when running multiple times', () => {
        const results = new Set();
        const numOfRuns = 100;

        for (let i = 0; i < numOfRuns; i++) {
            const message = generateMessage();
            results.add(message);
        }
        expect(results.size).toBeGreaterThan(1);
    });
});
