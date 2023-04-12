import { ApiTransactionRepository } from "./modules/transactions/infrastructure/ApiTransactionRepository";
import { Layout } from "./sections/shared";
import { TransactionContextProvider } from "./sections/transactions/TransactionsContext";
import { TransactionsLayout } from "./sections/transactions/TransactionsLayou";

function App() {
  const transactionRepository = ApiTransactionRepository();
  return (
    <TransactionContextProvider repository={transactionRepository}>
      <Layout>
        <TransactionsLayout />
      </Layout>
    </TransactionContextProvider>
  );
}

export default App;
