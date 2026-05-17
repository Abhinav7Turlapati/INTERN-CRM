import { useEffect, useState } from "react";

import API from "../services/api";

const Leads = () => {

  const [leads, setLeads] =
    useState<any[]>([]);

  const fetchLeads = async () => {
    try {

      const response =
        await API.get("/leads");

      setLeads(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Leads
      </h1>

      <div className="bg-zinc-900 rounded-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-zinc-800">

            <tr>

              <th className="p-4 text-left">
                Company
              </th>

              <th className="p-4 text-left">
                Contact
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Priority
              </th>

            </tr>

          </thead>

          <tbody>

            {leads.map((lead) => (

              <tr
                key={lead._id}
                className="border-t border-zinc-800"
              >

                <td className="p-4">
                  {lead.companyName}
                </td>

                <td className="p-4">
                  {lead.contactPerson}
                </td>

                <td className="p-4">
                  {lead.status}
                </td>

                <td className="p-4">
                  {lead.priority}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Leads;