const fromFormToServer = require("./fromFormToServer.js");

describe("fromFormToServer", () => {
  it("Конвертация отечественного юридического лица", () => {
    const personInForm = {
      isForeign: false,
      isJuridical: true,
      title: "Отечественная компания",
      tin: "1234567890",
    };

    const result = fromFormToServer(personInForm);

    expect(result.type).toBe("juridical");
    expect(result.tin).toBe("1234567890");
    expect(result.company_title).toBe("Отечественная компания");
    expect(result.foreign_tin).toBeNull();
    expect(result.name).toBeNull();
  });

  it("Конвертация отечественного физического лица", () => {
    const personInForm = {
      isForeign: false,
      isJuridical: false,
      title: "Иван Иванов",
      tin: "1234567890",
    };

    const result = fromFormToServer(personInForm);

    expect(result.type).toBe("physical");
    expect(result.tin).toBe("1234567890");
    expect(result.name).toBe("Иван Иванов");
    expect(result.foreign_tin).toBeNull();
    expect(result.company_title).toBeNull();
  });

  it("Конвертация иностранного юридического лица", () => {
    const personInForm = {
      isForeign: true,
      isJuridical: true,
      title: "Foreign Company Ltd.",
      tin: "111111111",
    };

    const result = fromFormToServer(personInForm);

    expect(result.type).toBe("foreign_juridical");
    expect(result.company_title).toBe("Foreign Company Ltd.");
    expect(result.foreign_tin).toBe("111111111");
    expect(result.name).toBeNull();
    expect(result.tin).toBeNull();
  });

  it("Конвертация иностранного физического лица", () => {
    const personInForm = {
      isForeign: true,
      isJuridical: false,
      title: "Foreign Person",
      tin: "222222222",
    };

    const result = fromFormToServer(personInForm);

    expect(result.type).toBe("foreign_physical");
    expect(result.name).toBe("Foreign Person");
    expect(result.foreign_tin).toBe("222222222");
    expect(result.company_title).toBeNull();
    expect(result.tin).toBeNull();
  });
});
