import TransactionsRepository from '../repositories/TransactionsRepository';
import TransactionSummaryDto from './dtos/TransactionSummaryDto';
import TransactionBalanceDto from './dtos/TransactionBalanceDto';

class TransactionSummaryService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): TransactionSummaryDto {
    const transactions = this.transactionsRepository.all();

    let balance: TransactionBalanceDto = {
      income: 0,
      outcome: 0,
      total: 0,
    };

    balance = transactions.reduce((acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.value;
      } else if (transaction.type === 'outcome') {
        acc.outcome += transaction.value;
      }

      return acc;
    }, balance);

    balance.total = balance.income - balance.outcome;

    return { transactions, balance };
  }
}

export default TransactionSummaryService;
