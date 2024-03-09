describe("간단한 계산기 앱 테스트", () => {
  beforeEach(() => {
    /* 사전조건 : index.html 파일을 Live Server로 켜야함 */
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("2개의 숫자에 대해 덧셈이 가능하다.", () => {
    const num1 = 1;
    const num2 = 7;
    cy.get('.digit').contains(num1).click();
    cy.get('.operation').contains('+').click();
    cy.get('.digit').contains(num2).click();
    cy.get('.operation').contains('=').click();
    cy.get('#total').invoke("text").should("eq", String(num1+num2));
  });

  it("2개의 숫자에 대해 뺄셈이 가능하다.", () => {
    const num1 = 9;
    const num2 = 5;
    cy.get('.digit').contains(num1).click();
    cy.get('.operation').contains('-').click();
    cy.get('.digit').contains(num2).click();
    cy.get('.operation').contains('=').click();
    cy.get('#total').invoke("text").should("eq", String(num1-num2));
  });

  it("2개의 숫자에 대해 곱셈이 가능하다.", () => {
    const num1 = 3;
    const num2 = 4;
    cy.get('.digit').contains(num1).click();
    cy.get('.operation').contains('x').click();
    cy.get('.digit').contains(num2).click();
    cy.get('.operation').contains('=').click();
    cy.get('#total').invoke("text").should("eq", String(num1*num2));
  });

  it("2개의 숫자에 대해 나눗셈이 가능하다.", () => {
    const num1 = 8;
    const num2 = 2;
    cy.get('.digit').contains(num1).click();
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains(num2).click();
    cy.get('.operation').contains('=').click();
    cy.get('#total').invoke("text").should("eq", String(num1/num2));
  });

  it("AC(All Clear)버튼을 누르면 0으로 초기화 한다.", () => {
    const num = 6;
    cy.get('.digit').contains(num).click();
    cy.get('.modifier').click();
    cy.get('#total').invoke("text").should("eq", "0");
  });

  it("숫자는 한번에 최대 3자리 수까지 입력 가능하다.", () => {
    const num = 2;
    for (let i = 0; i < 3; i++) {
      cy.get('.digit').contains(num).click();
    }

    const stub = cy.stub();
    cy.on('window:alert', stub);

    cy.get('.digit')
      .contains(num)
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('최대 입력 숫자는 3자리 수 입니다');
      })
  });

  it("계산 결과를 표현할 때 소수점 이하는 버림한다.", () => {
    const num1 = 7;
    const num2 = 2;
    cy.get('.digit').contains(num1).click();
    cy.get('.operation').contains('/').click();
    cy.get('.digit').contains(num2).click();
    cy.get('.operation').contains('=').click();
    cy.get('#total').invoke("text").should("eq", String(Math.floor(num1/num2)));
  });
});