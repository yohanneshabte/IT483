using System;

namespace FahranheitToCelsius
{
    class Program
    {
        static void Main(string[] args)
        {
            Double fahrenheit, celsius, result;
            
            Console.WriteLine("Which conversion would you like to make\n1.Fahrenheit to Celsius\n2.Celsius to Fahrenheit");
            Console.Write("Response: ");
            String response = Console.ReadLine();
            while (response != "1" && response != "2")
            {
                Console.Write("Response: ");
                response = Console.ReadLine();
            }

            if (response == "1") {
                Console.Write("Type the Fahrenheit value: ");
                fahrenheit = Convert.ToDouble(Console.ReadLine());
                result = toCelsius(fahrenheit);
                Console.WriteLine("Temperature in Celsius is: " + result);

            } else
            {
                Console.Write("Type the Celsius value: ");
                celsius = Convert.ToDouble(Console.ReadLine());
                result = toFahrenheit(celsius);
                Console.WriteLine("Temperature in Fahrenheit is: " + result);
            }
        }
        static Double toFahrenheit(double celsius)
        {
            Double result;
            result = (celsius * 9 / 5) + 32;
            return result;
        }
        static Double toCelsius(double fahrenheit)
        {
            Double result;
            result = (fahrenheit - 32) * 5 / 9;
            return result;
        }
    }
}
