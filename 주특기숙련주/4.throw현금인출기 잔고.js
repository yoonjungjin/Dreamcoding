function withdraw(amount, account) {
    if (amount > account.balance)
    throw new Error("잔고가 부족합니다.");
    account.balance -= amount;
    console.log(`현재 잔고가 ${account.balance}남았습니다`);
};

const account = { balance : 2000};
withdraw(1000, account)

// amount : 총액