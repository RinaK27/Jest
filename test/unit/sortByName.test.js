const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Should return empty array if input array is empty", () => {
    expect(sorting.sortByName([])).toEqual([]);
  });

  it("Should return sorted array if input array has one element", () => {
    expect(sorting.sortByName(["Гарри Поттер"])).toEqual(["Гарри Поттер"]);
  });

  it("Should sort array of same names", () => {
    expect(sorting.sortByName(["Анна", "anna", "AnNa"])).toEqual([
      "anna",
      "AnNa",
      "Анна",
    ]);
  });

  it("Should sort array of names in descending order", () => {
    expect(
      sorting.sortByName([
        "Волшебник изумрудного города",
        "Властелин Колец",
        "Гарри Поттер",
      ]).reverse()
    ).toEqual([
      "Гарри Поттер",
      "Волшебник изумрудного города",
      "Властелин Колец",
    ]);
  });
});
