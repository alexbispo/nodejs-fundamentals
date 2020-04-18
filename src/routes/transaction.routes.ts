import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import CreateTransactionDto from '../services/dtos/CreateTransactionDto';
import TransactionSummaryService from '../services/TransactionSummaryService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const transactionSummaryService = new TransactionSummaryService(
      transactionsRepository,
    );

    const summary = transactionSummaryService.execute();

    return response.json(summary);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, type, value }: CreateTransactionDto = request.body;

    const createTransactionService = new CreateTransactionService(
      transactionsRepository,
    );

    const transaction = createTransactionService.execute({
      title,
      type,
      value,
    });

    return response.json(transaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
