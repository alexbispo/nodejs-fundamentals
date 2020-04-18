import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import CreateTransactionDto from './dtos/CreateTransactionDto';
import TransactionSummaryService from './TransactionSummaryService';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  private transactionSummaryService: TransactionSummaryService;

  constructor(
    transactionsRepository: TransactionsRepository,
    transactionSummaryService: TransactionSummaryService,
  ) {
    this.transactionsRepository = transactionsRepository;
    this.transactionSummaryService = transactionSummaryService;
  }

  public execute({ title, type, value }: CreateTransactionDto): Transaction {
    const summary = this.transactionSummaryService.execute();

    if (type === 'outcome' && value > summary.balance.total) {
      throw new Error('Invalid balance.');
    }

    const newTransaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return newTransaction;
  }
}

export default CreateTransactionService;
