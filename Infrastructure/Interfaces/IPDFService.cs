using System.Threading.Tasks;

namespace AspnetcorePdfExport.Infrastructure.Interfaces
{
    public interface IPDFService
    {
        Task<byte[]> Create();
    }
}