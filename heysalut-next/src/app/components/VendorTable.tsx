export default function VendorTable() {
  return (
    <section>
      <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Find Your Perfect Vendor</h2>
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-xl border border-[#e0e0e0] bg-white">
          <table className="flex-1">
            <thead>
              <tr className="bg-white">
                <th className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-120 px-4 py-3 text-left text-[#141414] w-[400px] text-sm font-medium leading-normal">Vendor</th>
                <th className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-240 px-4 py-3 text-left text-[#141414] w-[400px] text-sm font-medium leading-normal">Dealership</th>
                <th className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-360 px-4 py-3 text-left text-[#141414] w-[400px] text-sm font-medium leading-normal">Overview</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-t-[#e0e0e0]">
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-120 h-[72px] px-4 py-2 w-[400px] text-[#141414] text-sm font-normal leading-normal">AutoMax Motors</td>
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-240 h-[72px] px-4 py-2 w-[400px] text-[#757575] text-sm font-normal leading-normal">AutoMax Dealership</td>
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-360 h-[72px] px-4 py-2 w-[400px] text-[#757575] text-sm font-normal leading-normal">Specializing in new and used cars, offering a wide range of models.</td>
              </tr>
              <tr className="border-t border-t-[#e0e0e0]">
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-120 h-[72px] px-4 py-2 w-[400px] text-[#141414] text-sm font-normal leading-normal">DriveTime Autos</td>
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-240 h-[72px] px-4 py-2 w-[400px] text-[#757575] text-sm font-normal leading-normal">DriveTime Dealership</td>
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-360 h-[72px] px-4 py-2 w-[400px] text-[#757575] text-sm font-normal leading-normal">Known for excellent customer service and competitive pricing.</td>
              </tr>
              <tr className="border-t border-t-[#e0e0e0]">
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-120 h-[72px] px-4 py-2 w-[400px] text-[#141414] text-sm font-normal leading-normal">Luxury Wheels</td>
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-240 h-[72px] px-4 py-2 w-[400px] text-[#757575] text-sm font-normal leading-normal">Luxury Wheels Dealership</td>
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-360 h-[72px] px-4 py-2 w-[400px] text-[#757575] text-sm font-normal leading-normal">Exclusive dealer of high-end luxury vehicles.</td>
              </tr>
              <tr className="border-t border-t-[#e0e0e0]">
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-120 h-[72px] px-4 py-2 w-[400px] text-[#141414] text-sm font-normal leading-normal">EcoDrive Motors</td>
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-240 h-[72px] px-4 py-2 w-[400px] text-[#757575] text-sm font-normal leading-normal">EcoDrive Dealership</td>
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-360 h-[72px] px-4 py-2 w-[400px] text-[#757575] text-sm font-normal leading-normal">Focusing on electric and hybrid vehicles, promoting sustainable driving.</td>
              </tr>
              <tr className="border-t border-t-[#e0e0e0]">
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-120 h-[72px] px-4 py-2 w-[400px] text-[#141414] text-sm font-normal leading-normal">Family Car Center</td>
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-240 h-[72px] px-4 py-2 w-[400px] text-[#757575] text-sm font-normal leading-normal">Family Car Center Dealership</td>
                <td className="table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-360 h-[72px] px-4 py-2 w-[400px] text-[#757575] text-sm font-normal leading-normal">Offering a variety of family-friendly vehicles, including minivans and SUVs.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <style>{`
          @container(max-width:120px){.table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-120{display: none;}}
          @container(max-width:240px){.table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-240{display: none;}}
          @container(max-width:360px){.table-1757cb52-fe06-4594-9fb7-6c33404afc7c-column-360{display: none;}}
        `}</style>
      </div>
    </section>
  );
} 