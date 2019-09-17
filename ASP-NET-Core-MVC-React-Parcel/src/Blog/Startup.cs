using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace Blog
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddSpaStaticFiles(spa =>
            {
                spa.RootPath = "wwwroot/admin";
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseSpaStaticFiles();
            app.UseMvcWithDefaultRoute();
            app.Map("/admin", adminApp =>
            {
                adminApp.UseSpa(spa => { });
            });
        }
    }
}
