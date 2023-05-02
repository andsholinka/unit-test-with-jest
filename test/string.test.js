test("string", () => {
    const name = "John Down";

    expect(name).toBe("John Down");
    expect(name).toMatch(/hn/);
});