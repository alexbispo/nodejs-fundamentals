import Transaction from '../../models/Transaction';
import TransactionBalanceDto from './TransactionBalanceDto';

export default interface TransactionSummaryDto {
  transactions: Transaction[];
  balance: TransactionBalanceDto;
}
