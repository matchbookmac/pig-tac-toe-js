describe('BankAccount', function() {
  it("creates a new bank account with the given specs", function() {
    var testBankAccount = new BankAccount("Bruce Lee", 9001);
    expect(testBankAccount.owner).to.eq("Bruce Lee");
    expect(testBankAccount.initialAmount).to.eq(9001);
  });

  it("reduces the currentAmount balance by the amount passed into the withdraw function", function() {
    var testBankAccount = new BankAccount("Tywin Lannister", 9999999999);
    testBankAccount.withdraw(1);
    expect(testBankAccount.currentAmount).to.eq(9999999998);
  });

  it("reduces the currentAmount balance by the amount passed into the withdraw function", function() {
    var testBankAccount = new BankAccount("Daenerys Targaryen", 3);
    testBankAccount.deposit(1);
    expect(testBankAccount.currentAmount).to.eq(4);
  });
});
