# Pdf export with Asp.Net Core

There are plenty of approach to generate pdf although after juggling between different approaches I have found myself very much comfortable with the approach i am sharing here.

> We are going to use:
>  **1.  Asp.Net Core**
>  **2.  Asp.Net Core Razor page**
>  **3.  DinkToPdf library**

# Prerequisite
1. Microsoft Visual C++ Redistributable
2. Dotnet core 2.2
3. NodeJS

### Key points:

 -	Make sure PDFNative folder is imported into your project before getting started. 
 -	To install DinkToPdf package add this package to your .csproj file
>   `<ItemGroup>`
>   `<PackageReference  Include="RazorLight"  Version="2.0.0-beta1" />`
>   `</ItemGroup>`
- Update the Startup.cs file and few others. (You can compare with my source code.)
