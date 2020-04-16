import Transaction from '../models/Transaction';
import CreateTransactionDto from './dtos/CreateTransactionDto';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  // public all(): Transaction[] {
  //   // TODO
  // }

  // public getBalance(): Balance {
  //   // TODO
  // }

  public create({ title, type, value }: CreateTransactionDto): Transaction {
    const newTransaction = new Transaction({ title, value, type });

    this.transactions.push(newTransaction);

    return newTransaction;
  }
}

export default TransactionsRepository;
