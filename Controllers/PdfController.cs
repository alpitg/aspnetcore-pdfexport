using System;
using System.Threading.Tasks;
using AspnetcorePdfExport.Infrastructure.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace AspnetcorePdfExport.Controllers
{
    [Route("api/[controller]")]
    public class PdfController : Controller
    {
        private readonly IPDFService _pdfService;

        public PdfController(IPDFService pdfService)
        {
            _pdfService = pdfService;
        }

        [HttpGet("Create")]
        public async Task<IActionResult> CreatePdf()
        {
            var file = await _pdfService.Create();
            Console.WriteLine(file);

            return File(file, "application/pdf", "EmployeeReport.pdf");
        }
    }
}