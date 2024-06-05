// Generated by CodiumAI
const steps = require('./steps')
describe('steps', () => {

    // prints a staircase pattern with n rows
    it('should print a staircase pattern with n rows when n is greater than 0', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        steps(3);
        expect(consoleSpy).toHaveBeenCalledWith('#  ');
        expect(consoleSpy).toHaveBeenCalledWith('## ');
        expect(consoleSpy).toHaveBeenCalledWith('###');
        consoleSpy.mockRestore();
    });

    // handles n = 0 gracefully
    it('should not print anything when n is 0', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        steps(0);
        expect(consoleSpy).not.toHaveBeenCalled();
        consoleSpy.mockRestore();
    });
});