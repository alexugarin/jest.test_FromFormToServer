## Запуск

Установите node модули командой:
```
npm i
```
Запустите выполнение тестовых скриптов командой:
```
npm run test
```

## Полученные результаты
В результате выполнения unit-тестирования были обнарушены ошибки в изначальной функции fromFormToServer.
Изначальный вид фукнции:
```js
const fromFormToServer = (personInForm) => ({
  type: [
    personInForm.isForeign ? null : "foreign",
    personInForm.isJuridical ? "juridical" : "physical",
  ]
    .filter(Boolean)
    .join("_"),
  tin: personInForm.isForeigh ? null : personInForm.tin,
  name: personInForm.isJuridical ? null : personInForm.title,
  foreign_tin: personInForm.isForeign ? personInForm.tin : null,
  company_title: personInForm.isJuridical ? personInForm.title : null,
});
```
Функция после проведения unit-тестирования и исправления ошибок:
```js
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
```