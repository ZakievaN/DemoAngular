using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System;
using System.Reflection;

namespace DemoAngular
{
    class myClass
    {
        public string NameField;

        public string NameProp { get; set; }

        public string GetName()
        {
            return ToString();
        }
    }

    public class Program
    {
        private static void test()
        {
            Type myType = typeof(myClass);
            var fields = myType.GetFields();
            var properties = myType.GetProperties();
            var methods = myType.GetMethods();
        }

        public static void Main(string[] args)
        {
            test();
            //CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
