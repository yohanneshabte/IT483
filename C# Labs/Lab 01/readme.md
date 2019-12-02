# Lab 01 C# Programming
## Lab01.java -> Lab01.cs

**1. Convert the java code into a C# code**

```cs
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
            if (spicy && fancy)
                Console.WriteLine("I suggest you go to Thai Garden Palace.");
            else if (!spicy && !fancy)
                Console.WriteLine("I suggest you go to Joe's Diner.");
            else if (spicy && !fancy)
                Console.WriteLine("I suggest you go to Albreto's Tacqueria.");
            else if (!spicy && fancy)
                Console.WriteLine("I suggest you go to Chez Paris.");
        }
    }
}
```

**2. This program suggests restaurants based on a user's preferences for spiciness and fanciness. Notice that the yes/no answers are converted to boolean results in two different ways, are they equivalent and why?**

###### Yes they are equivalent
##### Because
```cs 
if(s == 'y' || s == 'Y) 
  spicy = true;
/**
if(boolean or boolean)
  boolean variable = boolean
else
  boolean variable = boolean
*/
fancy = ( f == 'y' ) || (f == 'Y')
/**
boolean variable = boolean or boolean
*/
```

**4. Convert if-else-if statements into a pair of nested if-else statements**

```cs
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
```

**5. Indicate which(if any) of the above ifs and elses need *block* form**
##### none of the if-else statements necessarily need *block* form

```cs
if (spicy)
  if(fancy)
    Console.WriteLine("I suggest you go to Thai Garden Palace.");
  else
    Console.WriteLine("I suggest you go to Albreto's Tacqueria.");
else
  if(fancy)
    Console.WriteLine("I suggest you go to Chez Paris.");
  else
    Console.WriteLine("I suggest you go to Joe's Diner.");
```

**6. Once you have written nested if-else statments**
  1. Make sure the program compiles and run without errors or warnings
###### Verified with Visual Studio and included in the attached .cs file including all the updates after every questionaire
  2. Run your program enough times to check all the choices for correctness
##### Used 5 test cases:
Input 1 | Input 2 | Output
------- | ------- | ------
Y | Y | Thai Garden Palace
y | y | Thai Garden Palace 
y | n | Albreto's Tacqueria
n | y | Chez Paris
n | n | Joe's Diner

###### I have decided all the other case-senstitive test cases are redundant after checking *Y Y*
