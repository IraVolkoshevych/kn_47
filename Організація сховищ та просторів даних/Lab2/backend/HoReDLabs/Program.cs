using System;
using Entities.Services;
using System.Diagnostics;
using Excel = Microsoft.Office.Interop.Excel;
using System.Runtime.InteropServices;
using System.Collections.Generic;
using Microsoft.Office.Interop.Excel;
using Microsoft.Office.Interop.Word;
using System.Linq;

namespace HoReDLabs
{
    class Program
    {
        public ILab2Service _labService;
        static void Main(string[] args)
        {
            int labNumber;
            m: Console.WriteLine("Input number of lab");
            labNumber = Convert.ToInt32(Console.ReadLine());
            var dbContext = new DbContext();
            Stopwatch sw = new Stopwatch();
            switch (labNumber)
            {
                case 1:
                    var lab1NotStar = new Lab2Sevice(dbContext);
                    sw.Reset();
                    sw.Start();
                    lab1NotStar.GetFormInfo();
                    sw.Stop();
                    Console.WriteLine("time = {0}", sw.Elapsed);
                    break;
                case 2:
                    var lab2NotStar = new Lab2Sevice(dbContext);
                    sw.Reset();
                    sw.Start();
                    lab2NotStar.GetFormInfo();
                    sw.Stop();
                    Console.WriteLine("snowflake = {0}", sw.Elapsed);

                    dbContext.SetConnectionString("MyConStringSTORE_STAR");
                    sw.Reset();

                    var lab2Star = new Lab2Sevice(dbContext);
                    sw.Start();
                    lab2Star.GetFormInfo();
                    sw.Stop();
                    Console.WriteLine("star = {0}", sw.Elapsed);
                    break;
                case 3:
                    dbContext.SetConnectionString("MyConStringSTORE_3_2");
                    var lab3NotStar = new Lab2Sevice(dbContext);
                    sw.Reset();
                    sw.Start();
                    lab3NotStar.GetFormInfo();
                    sw.Stop();
                    Console.WriteLine("snowflake = {0}", sw.Elapsed);

                    dbContext.SetConnectionString("MyConStringSTORE_3_1");
                    sw.Reset();

                    var lab3Star = new Lab2Sevice(dbContext);
                    sw.Start();
                    lab3Star.GetFormInfo();
                    sw.Stop();
                    Console.WriteLine("star = {0}", sw.Elapsed);
                    break;
                //case 4:
                //    Console.WriteLine("Excel");
                //    Excel.Application xl = new Excel.Application();
                //    Workbook workbook = xl.Workbooks.Open(@"C:\Labs\Data.xlsx");
                //    Worksheet sheet = workbook.Sheets[1];

                //    int numRows = sheet.UsedRange.Rows.Count;
                //    int numColumns = 3;     // according to your sample

                //    List<string[]> contents = new List<string[]>();
                    
                //    for (int rowIndex = 1; rowIndex <= numRows; rowIndex++)  // assuming the data starts at 1,1
                //    {
                //        string[] record = new string[3];
                //        for (int colIndex = 1; colIndex <= numColumns; colIndex++)
                //        {
                //            Excel.Range cell = (Excel.Range)sheet.Cells[rowIndex, colIndex];
                //            if (cell.Value != null)
                //            {
                //                record[colIndex - 1] = Convert.ToString(cell.Value);
                //            }
                //        }
                //        contents.Add(record);
                //    }
                //    foreach (var row in contents)
                //    {
                //        foreach(var cell in row)
                //            Console.Write(cell + "\t");
                //        Console.WriteLine();
                //    }

                //    var lab5Star = new Lab2Sevice(dbContext);
                //    lab5Star.InsertProducts(contents);
                //    xl.Quit();
                //    Marshal.ReleaseComObject(xl);
                //    break;
                case 5:
                    dbContext.SetConnectionString("MyConStringSTORE_5");
                    var lab5Star = new Lab2Sevice(dbContext);
                    //MyConStringSTORE_5
                    var lines = System.IO.File.ReadAllLines(@"C:\Labs\Data.txt").ToList<string>(); ;
                    for (int i = 0; i < lines.Count; ++i)
                    {
                        lines[i] = "\'" + lines[i].Replace("\t", "\',\'") + "\'";
                    }
                    
                    //lab5Star.InsertManufacturers(lines);

                    Console.WriteLine("Excel");
                    Excel.Application xl = new Excel.Application();
                    Workbook workbook = xl.Workbooks.Open(@"C:\Labs\Data.xlsx");
                    Worksheet sheet = workbook.Sheets[1];

                    int numRows = sheet.UsedRange.Rows.Count;
                    int numColumns = 5;     // according to your sample

                    List<string[]> contents = new List<string[]>();

                    for (int rowIndex = 1; rowIndex <= numRows; rowIndex++)  // assuming the data starts at 1,1
                    {
                        string[] record = new string[5];
                        for (int colIndex = 1; colIndex <= numColumns; colIndex++)
                        {
                            Excel.Range cell = (Excel.Range)sheet.Cells[rowIndex, colIndex];
                            if (cell.Value != null)
                            {
                                record[colIndex - 1] = Convert.ToString(cell.Value);
                            }
                        }
                        contents.Add(record);
                    }                    
                    lab5Star.InsertProducts(contents);
                    xl.Quit();
                    Marshal.ReleaseComObject(xl);
                    break;
                case 6:
                    Microsoft.Office.Interop.Word.Application wordApp = new Microsoft.Office.Interop.Word.Application();
                    object filename = @"C:\Labs\Data.docx";
                    object missing = Type.Missing;
                    Microsoft.Office.Interop.Word.Document doc = wordApp.Documents.Open(ref filename, ref missing, ref missing, ref missing, ref missing,
                        ref missing, ref missing, ref missing, ref missing, ref missing,
                        ref missing, ref missing, ref missing, ref missing, ref missing, ref missing);
                    Microsoft.Office.Interop.Word.Table table = doc.Tables[0]; //define this index depending on the number of table which you want to get

                    doc.Close(ref missing, ref missing, ref missing);
                    Marshal.ReleaseComObject(wordApp);
                    break;
                default:
                    Console.WriteLine("Input correct lab number");
                    break;
            };
            goto m;
        }
    }
}
