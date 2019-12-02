using System;
using System.Collections.Generic;
using System.Text;

namespace Labs
{
    class Lab03
    {
        static void Main(string[] args)
        {
            double curBal = 45.32;

            double amount;
            Console.Write("Please enter a amount to update account by $");
            amount = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine();
            Console.WriteLine("Customer's balance (before transaction) = $"+curBal);
            Console.WriteLine("Requested update amount = $"+amount);

            double actAmount;
            actAmount = transaction(curBal, amount);

            curBal += actAmount;

            Console.WriteLine("Actual update amount = $" + actAmount);
            Console.WriteLine("Customer's balance (after transaction) = $" + curBal);

            Console.WriteLine("\nThank you and good-bye!\n");
        }
        static Double transaction(Double balance, Double amount)
        {
            if(amount >= 0)
                return amount;
            if (balance < -amount)
                return 0.0;
            return amount;
        }
    }
}
