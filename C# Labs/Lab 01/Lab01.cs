using System;

namespace Labs
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("CS 201 Restaurant Guide");

            String response;
            Char s, f;
            Boolean spicy, fancy;

            // Ask user preference
            Console.Write("Do you like spicy food? (y / n) : ");
            //Get the next token
            response = Console.ReadLine();
            //Look at first character
            s = response[0];
            if (s == 'y' || s == 'Y')
                spicy = true;
            else
                spicy = false;
            //Ask user preference
            Console.Write("Do you want to go to a fancy restaurant? (y / n) : ");
            //Get the next token
            response = Console.ReadLine();
            //Look at first character
            f = response[0];
            fancy = (f == 'y') || (f == 'Y');

            //Make suggestion
            if (spicy) {
                if(fancy)
                    Console.WriteLine("I suggest you go to Thai Garden Palace.");
                else
                    Console.WriteLine("I suggest you go to Albreto's Tacqueria.");
            } else {
                if(fancy)
                    Console.WriteLine("I suggest you go to Chez Paris.");
                else
                    Console.WriteLine("I suggest you go to Joe's Diner.");
            }
        }
    }
}
