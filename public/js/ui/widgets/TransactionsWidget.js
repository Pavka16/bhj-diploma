/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    if (!element) {
      throw new Error ('Элемент не существует');
    }
    this.element = element;
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    // document.querySelector('.create-income-button').addEventListener('click', () => {
    //   App.getModal('newIncome').open();
    // })
    // document.querySelector('create-expense-button').addEventListener('click', () => {
    //   App.getModal('newExpense').open();
    // })
    const bt = Array.from(this.element.querySelectorAll(`button`));
    bt.forEach(el => {
      if(el.classList.contains(`create-income-button`)){
        el.addEventListener(`click`, () => {
          App.getModal(`newIncome`).open();
        });
      }else {
        el.addEventListener(`click`, () => {
          App.getModal(`newExpense`).open();
        });

      }
    })
  }
}
