import TransactionType from '../../models/enums/TransactionType';

export default interface CreateTransactionDto {
  title: string;
  type: TransactionType;
  value: number;
}
