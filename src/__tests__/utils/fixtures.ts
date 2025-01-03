import mongoose, { Types } from "mongoose";
import UserModel from "../../modules/user/model/user.model";
import AccountModel from "../../modules/account/model/account.model";
import IncomeModel, { IIncome } from "../../modules/income/model/income.model";
import FinancialGoalModel from "../../modules/financialGoal/model/financialGoal.model";
import ExpenseModel from "../../modules/expense/model/expense.model";
import TransactionModel from "../../modules/transaction/model/transaction.model";

export const userId = new mongoose.Types.ObjectId().toString();
export const accountId = new mongoose.Types.ObjectId().toString();
export const incomeId = new mongoose.Types.ObjectId().toString();
export const expenseId = new mongoose.Types.ObjectId().toString();
export const financialGoalId = new mongoose.Types.ObjectId().toString();
export const transactionId = new mongoose.Types.ObjectId().toString();

export const createUserPayload = {
    email: "dej@gmail.com",
    name: "Dej Lok",
    password: "pass12345678",
    country: 'Nigeria'
}

export const userReturnPayload = new UserModel({
    _id: userId,
    name: "Dej Lok",
    verified: false,
    email: "dej@gmail.com",
    country: 'Nigeria'
})

export const createAccountPayload = {
    userId: userId,
    accountType: "family",
    subscriptionPlan: "basic"
}

export const accountReturnPayload = new AccountModel({
    _id: accountId,
    user: userId,
    accountType: "family",
    subscriptionPlan: "basic"
})

export const addIncomePayload = {
    account: accountId,
    amount: 400.50,
    category: "salary",
    dateReceived: "2024-07-20",
    isRecurring: false
}

export const incomeReturnPayload  = {
    _id: incomeId,
    account: accountId,
    amount: 400.50,
    category: "salary",
    description: "",
    dateReceived: '2024-07-20',
    status: 'active'
}

const mockIncomeDocs = [
    { amount: 40050 },
    { amount: 20050 },
    { amount: 30050 },
]

export const expectedTotalIncome = mockIncomeDocs
    .reduce((sum, doc) => sum + doc.amount, 0);


export const recentIncomesReturnPayload = [
    {
        _id: "60f7c4d7b4b8e72a9d06e432",
        account: accountId,
        amount: 500.00,
        category: "Salary",
        description: "Monthly Salary",
        dateReceived: "2024-07-25",
        createdAt: "2024-07-25T00:00:00.000Z",
        updatedAt: "2024-07-25T00:00:00.000Z"
    },
    {
        _id: "60f7c4d7b4b8e72a9d06e433",
        account: accountId,
        amount: 250.00,
        category: "Freelance",
        description: "Freelance Project",
        dateReceived: "2024-07-24",
        createdAt: "2024-07-24T00:00:00.000Z",
        updatedAt: "2024-07-24T00:00:00.000Z"
    },
    {
        _id: "60f7c4d7b4b8e72a9d06e434",
        account: accountId,
        amount: 100.00,
        category: "Gift",
        description: "Birthday Gift",
        dateReceived: "2024-07-23",
        createdAt: "2024-07-23T00:00:00.000Z",
        updatedAt: "2024-07-23T00:00:00.000Z"
    },
];

export const deletedIncomesReturnPayload = [
    {
        _id: "60f7c4d7b4b8e72a9d06e432",
        account: accountId,
        amount: 500.00,
        category: "Salary",
        description: "Monthly Salary",
        dateReceived: "2024-07-25",
        status: 'deleted',
        createdAt: "2024-07-25T00:00:00.000Z",
        updatedAt: "2024-07-25T00:00:00.000Z"
    },
    {
        _id: "60f7c4d7b4b8e72a9d06e433",
        account: accountId,
        amount: 250.00,
        category: "Freelance",
        description: "Freelance Project",
        dateReceived: "2024-07-24",
        status: 'deleted',
        createdAt: "2024-07-24T00:00:00.000Z",
        updatedAt: "2024-07-24T00:00:00.000Z"
    }
];

export const addExpensePayload = {
    account: accountId,
    amount: 400.50,
    category: "salary",
    description: "",
    date: "2024-07-23",
    isRecurring: false
}

export const expenseReturnPayload  = {
    _id: expenseId,
    account: accountId,
    amount: 400.50,
    category: "food",
    description: "Food for family and friends",
    date: "2024-07-23",
    status: 'active'
}

export const deletedExpenseReturnPayload  = new ExpenseModel({
    _id: expenseId,
    account: accountId,
    amount: 400.50,
    category: "food",
    description: "Food for family and friends",
    date: "2024-07-23",
    status: 'deleted'
})

const mockExpenseDocs = [
    { amount: 40050 },
    { amount: 20050 },
    { amount: 30050 },
]

export const expectedTotalExpense = mockExpenseDocs
    .reduce((sum, doc) => sum + doc.amount, 0);


export const recentExpensesReturnPayload = [
    {
        _id: "60f7c4d7b4b8e72a9d06e432",
        account: accountId,
        amount: 500.00,
        category: "Salary",
        description: "Monthly Salary",
        date: "2024-07-25",
        isRecurring: true,
        frequency: 'daily',
        createdAt: "2024-07-25T00:00:00.000Z",
        updatedAt: "2024-07-25T00:00:00.000Z"
    },
    {
        _id: "60f7c4d7b4b8e72a9d06e433",
        account: accountId,
        amount: 250.00,
        category: "Freelance",
        description: "Freelance Project",
        date: "2024-07-24",
        isRecurring: true,
        frequency: 'daily',
        createdAt: "2024-07-24T00:00:00.000Z",
        updatedAt: "2024-07-24T00:00:00.000Z"
    },
    {
        _id: "60f7c4d7b4b8e72a9d06e434",
        account: accountId,
        amount: 100.00,
        category: "Gift",
        description: "Birthday Gift",
        date: "2024-07-23",
        isRecurring: false,
        createdAt: "2024-07-23T00:00:00.000Z",
        updatedAt: "2024-07-23T00:00:00.000Z"
    },
];

export const deletedExpensesReturnPayload = [
    {
        _id: "60f7c4d7b4b8e72a9d06e432",
        account: accountId,
        amount: 500.00,
        category: "Salary",
        description: "Monthly Salary",
        date: "2024-07-25",
        status: 'deleted',
        createdAt: "2024-07-25T00:00:00.000Z",
        updatedAt: "2024-07-25T00:00:00.000Z"
    },
    {
        _id: "60f7c4d7b4b8e72a9d06e433",
        account: accountId,
        amount: 250.00,
        category: "Freelance",
        description: "Freelance Project",
        date: "2024-07-24",
        status: 'deleted',
        createdAt: "2024-07-24T00:00:00.000Z",
        updatedAt: "2024-07-24T00:00:00.000Z"
    }
];

export const createFinancialGoalPayload = {
    account: accountId,
    title: 'New Car Purchase',
    description: "Family car",
    targetAmount: 400.50,
    currentProgress: 100.50,
    deadline: '2024-08-06',
    isRecurring: false
}

export const financialGoalReturnPayload = new FinancialGoalModel({
    _id: "6739c4fcc15c89a501ca89db",
    account: "6739c4fcc15c89a501ca89d8",
    title: "New Car Purchase",
    type: "savings",
    category: "general",
    targetAmount: 400.5,
    currentProgress: 100.5,
    description: "",
    deadline: "2024-08-06",
    status: "ongoing",
})

export const updatedFinancialGoalPayload = new FinancialGoalModel({
    _id: financialGoalId,
    account: accountId,
    type: 'savings',
    title: 'Vacation Fund',
    targetAmount: 400.50,
    currentProgress: 100.50,
    description: "",
    deadline: '2024-08-06'
})

export const financialGoalsList = [
    {
        _id: financialGoalId,
        account: accountId,
        type: "savings",
        title: "Emergency Fund",
        targetAmount: 5000.00,
        currentProgress: 2000.00,
        deadline: "2024-12-31",
        description: "Save money for emergencies.",
        createdAt: "2024-07-01T00:00:00.000Z",
        updatedAt: "2024-07-20T00:00:00.000Z"
    },
    {
        _id: financialGoalId,
        account: accountId,
        type: "savings",
        title: "Vacation Fund",
        targetAmount: 3000.00,
        currentProgress: 1500.00,
        deadline: "2024-08-31",
        description: "Save for a vacation trip.",
        createdAt: "2024-05-15T00:00:00.000Z",
        updatedAt: "2024-07-20T00:00:00.000Z"
    },
    {
        _id: financialGoalId,
        account: accountId,
        type: "savings",
        title: "New Car",
        targetAmount: 20000.00,
        currentProgress: 5000.00,
        deadline: "2025-06-30",
        description: "Save for a new car purchase.",
        createdAt: "2024-06-01T00:00:00.000Z",
        updatedAt: "2024-07-20T00:00:00.000Z"
    },
    {
        _id: financialGoalId,
        account: accountId,
        type: "savings",
        title: "Home Renovation",
        targetAmount: 10000.00,
        currentProgress: 2500.00,
        deadline: "2024-11-30",
        description: "Save for home renovation projects.",
        createdAt: "2024-04-01T00:00:00.000Z",
        updatedAt: "2024-07-20T00:00:00.000Z"
    },
    {
        _id: financialGoalId,
        account: accountId,
        type: "savings",
        title: "Retirement Fund",
        targetAmount: 100000.00,
        currentProgress: 40000.00,
        deadline: "2040-01-01",
        description: "Save for retirement.",
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-07-20T00:00:00.000Z"
    }
];

export const updateFinancialGoalFields = {
    title: 'Updated Title',
    currentProgress: 2000.40,
};

export const sessionPayload = {
    session: {
        _id: new mongoose.Types.ObjectId().toString(),
        user: userId,
        valid: true,
        userAgent: "PostmanRuntime/7.28.4",
        createdAt: new Date("2021-09-30T13:31:07.674Z"),
        updatedAt: new Date("2021-09-30T13:31:07.674Z"),
        __v: 0,
    },
    accounts: []
}

export const createTransactionPayload = {
    user: 'dej@gmail.com',
    account: accountId,
    amount: 1000.00,
    status: "pending",
    reference: "7PVGX8MEk85tgeEpVDtD"
}

export const transactionReturnPayload  = new TransactionModel({
    _id: transactionId,
    user: 'dej@gmail.com',
    account: accountId,
    amount: 400.50,
    status: "pending",
    reference: "7PVGX8MEk85tgeEpVDtD"
})