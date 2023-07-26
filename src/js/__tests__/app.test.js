import Validator from '../app';

let validator = new Validator;

test('should return the true', () => {
    const checkedName = validator.validateUsername('BadAss21_08-98GG');
    
    expect(checkedName).toBeTruthy();
});

test('should return the true', () => {
    const checkedName = validator.validateUsername('AaA');
    
    expect(checkedName).toBeTruthy();
});


test('should return the true', () => {
    const checkedName = validator.validateUsername('A-a');
    
    expect(checkedName).toBeTruthy();
});

test('should return the true', () => {
    const checkedName = validator.validateUsername('a086A');
    
    expect(checkedName).toBeTruthy();
});

test('should return the false', () => {
    const checkedName = validator.validateUsername('09d-9_0f');
    
    expect(checkedName).toBeFalsy();
});

test('should return the false', () => {
    const checkedName = validator.validateUsername('BadAss2108-98GG');
    
    expect(checkedName).toBeFalsy();
});

test('should return the false', () => {
    const checkedName = validator.validateUsername('BadAss21=08-98GG');
    
    expect(checkedName).toBeFalsy();
});
