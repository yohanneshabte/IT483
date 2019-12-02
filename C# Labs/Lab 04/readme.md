# Lab Exercise 4

### Direct coversion of the Java code to C# code *before any edits*

```cs
using System;

namespace Labs
{
    class Lab04
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

        public static double average(int n1, int n2)
        {
            return (n1 + n2) / 2.0;
        }
        
        // Overloaded method Definition(s) here ...
    }
}
```

### All methods including overloaded methods
```cs
public static double average(int n1, int n2)
{
  return (n1 + n2) / 2.0;
}
public static double average(int n1, int n2, int n3)
{
  return (n1 + n2 + n3) / 3.0;
}
public static double average(double n1, double n2)
{
  return (n1 + n2) / 2.0;
}
public static double average(double n1, double n2, double n3)
{
  return (n1 + n2 + n3) / 3.0;
}
```
## Questions
**1. Do you really need the *int* parameter version(s) of average, and why?**
#### No. Because an *int* data type can be implicitly converted to *Double* data type without being truncated.
##### Therefore the new overloaded methods are
```cs
public static double average(double n1, double n2)
{
  return (n1 + n2) / 2.0;
}
public static double average(double n1, double n2, double n3)
{
  return (n1 + n2 + n3) / 3.0;
}
```
**2. Do you really need the three parameter version of average, i.e. is average(average(a, b), c) == average(a, b, c), and why?**
#### Yes. We need three parameter version of average. Because:
```math
Let x, y, z E IR
Average of (x+y)/2 and z = (x/2 + y/2 +z)/2 = x/4 + y/4 + z/2 
x/4 + y/4 + z/2 != x/3 + y/3 + z/3
```
#### Therefore average(average(a, b), c) != average(a, b, c)
**3. Is average(1, 2.0, 3) legal, and if so which version is used, and why?**
#### Yes. The version of the overloaded method used is
```cs
public static double average(double n1, double n2, double n3)
```
#### Because n1 and n3 will be implicitly converted to **Double** during compile time.
