import { add, total } from './Function';


// Unit Test
// It only test one thing
test("add", ()=> {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 2)).toBe(7);
})

// Integration Tests
// Testing things working together
test("total", ()=> {
    expect(total(5, 15)).toBe("$20")
})