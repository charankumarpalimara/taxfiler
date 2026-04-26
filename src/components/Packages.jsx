import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function Packages() {
  const taxPackages = [
    { name: "Deliverables", solo: "Solo", partnership: "Partnership", llc: "LLC", scorp: "S-Corp" },
    { name: "Federal Tax Filing", solo: true, partnership: true, llc: true, scorp: true },
    { name: "State Tax Filing", solo: true, partnership: true, llc: true, scorp: true },
    { name: "Quarterly Estimates", solo: true, partnership: true, llc: true, scorp: true },
    { name: "Tax Planning", solo: true, partnership: true, llc: true, scorp: true },
    { name: "Audit Support", solo: true, partnership: true, llc: true, scorp: true },
    { name: "E-file Notification", solo: true, partnership: true, llc: true, scorp: true },
  ];

  return (
    <section id="packages" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Pumpkin Packages</h2>
          <p className="text-lg text-slate-600">
            Choose the right plan for your business structure.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-[2rem] overflow-hidden shadow-xl border-collapse">
            <thead>
              <tr className="bg-brand-dark text-white">
                <th className="p-6 text-left font-heading">Taxation Deliverables</th>
                <th className="p-6 text-center font-heading">Solo</th>
                <th className="p-6 text-center font-heading">Partnership</th>
                <th className="p-6 text-center font-heading">LLC</th>
                <th className="p-6 text-center font-heading">S-Corp</th>
              </tr>
            </thead>
            <tbody>
              {taxPackages.slice(1).map((pkg, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-6 text-slate-700 font-medium">{pkg.name}</td>
                  <td className="p-6 text-center text-brand-orange"><Check className="mx-auto w-6 h-6" /></td>
                  <td className="p-6 text-center text-brand-orange"><Check className="mx-auto w-6 h-6" /></td>
                  <td className="p-6 text-center text-brand-orange"><Check className="mx-auto w-6 h-6" /></td>
                  <td className="p-6 text-center text-brand-orange"><Check className="mx-auto w-6 h-6" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="text-center text-slate-500 mt-8 text-sm italic">
          * Tables for Bookkeeping and Payroll also available in detailed consultation.
        </p>
      </div>
    </section>
  );
}
