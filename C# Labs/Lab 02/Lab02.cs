using System;
using System.Collections.Generic;
using System.Text;

namespace Labs
{
    class Lab02
    {
        static void Main(string[] args)
        {
            String r1,r2;
            Double total;
            Console.WriteLine("Welcome to Our Eye Glass Store");
            Console.WriteLine("------------------------------");
            Console.WriteLine("Press:");
            do
            {
                Console.WriteLine("1 for Prescription glasses");
                Console.WriteLine("2 for Non-prescription glasses");
                r1 = Console.ReadLine();
            } while (!r1.Equals("1") && !r1.Equals("2"));
            if(r1 == "1")
            {
                total = 40;
                Console.WriteLine("Press:");
                do
                {
                    Console.WriteLine("1 for Anti-glare coating");
                    Console.WriteLine("2 for Brown tint coating");
                    r2 = Console.ReadLine();
                } while (!r2.Equals("1") && !r2.Equals("2"));
                if (r2 == "1")
                    total += 12.5;
                else
                    total += 9.99;
            } 
            else
                total = 25;
            Console.WriteLine("Your Total Cost is: "+ total);
        }
    }
}
