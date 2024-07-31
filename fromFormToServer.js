// Функция после проведения тестов
const fromFormToServer = (personInForm) => ({
  type: [
    personInForm.isForeign ? "foreign" : null, // Здесь была ошибка в условии: personInForm.isForeign ? null : "foreign",
    personInForm.isJuridical ? "juridical" : "physical",
  ]
    .filter(Boolean)
    .join("_"),
  tin: personInForm.isForeign ? null : personInForm.tin, // Здесь была опечатка: personInForm.isForeig'h'
  name: personInForm.isJuridical ? null : personInForm.title,
  foreign_tin: personInForm.isForeign ? personInForm.tin : null,
  company_title: personInForm.isJuridical ? personInForm.title : null,
});

module.exports = fromFormToServer;

// Изначальная функция
/*
const fromFormToServer = (personInForm) => ({
  type: [
    personInForm.isForeign ? null : "foreign", // Здесь ошибка в условии: personInForm.isForeign ? null : "foreign",
    personInForm.isJuridical ? "juridical" : "physical",
  ]
    .filter(Boolean)
    .join("_"),
  tin: personInForm.isForeigh ? null : personInForm.tin, // Здесь опечатка: personInForm.isForeig'h'
  name: personInForm.isJuridical ? null : personInForm.title,
  foreign_tin: personInForm.isForeign ? personInForm.tin : null,
  company_title: personInForm.isJuridical ? personInForm.title : null,
});
*/