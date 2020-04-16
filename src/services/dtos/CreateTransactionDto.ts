import { TransactionType } from '../../models/Types';

export default interface CreateTransactionDto {
  title: string;
  type: TransactionType;
  value: number;
}
