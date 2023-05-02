test("test toBe", () => {
    const name = "John";
    const hello = `Hello, ${name}`;

    expect(hello).toBe("Hello, John");
})

test("test toEqual", () => {
    let person = {
        "id": 1
    }
    Object.assign(person, {
        "name": "John"
    })

    expect(person).toEqual({
        "id": 1,
        "name": "John"
    })
})