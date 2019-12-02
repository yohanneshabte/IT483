using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            int a=1, b=3, c=5;
            Double x = 2.2, y = 4.4, z = 6.6, ans;

            ans = average(a, b);
            Console.WriteLine("\naverage(a, b) = " + ans);

            ans = average(a, b, c);
            Console.WriteLine("\naverage(a, b, c) = " + ans);

            ans = average(x, y);
            Console.WriteLine("\naverage(x, y) = " + ans);

            ans = average(x, y, z);
            Console.WriteLine("\naverage(x ,y, z) = " + ans);
        }

        public static double average(double n1, double n2)
        {
            return (n1 + n2) / 2.0;
        }
        public static double average(double n1, double n2, double n3)
        {
            return (n1 + n2 + n3) / 3.0;
        }
    }
}
