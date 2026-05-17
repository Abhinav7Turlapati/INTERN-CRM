const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white flex">

      <div className="w-[250px] bg-zinc-900 p-6">
        <h1 className="text-2xl font-bold text-purple-500">
          GigFlow
        </h1>

        <div className="mt-10 space-y-4">
          <button className="block">
            Dashboard
          </button>

          <button className="block">
            Leads
          </button>

          <button className="block">
            Users
          </button>
        </div>
      </div>

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-6">
          CRM Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-zinc-400">
              Total Leads
            </h2>

            <p className="text-4xl font-bold mt-4">
              24
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-zinc-400">
              Converted
            </h2>

            <p className="text-4xl font-bold mt-4">
              8
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h2 className="text-zinc-400">
              Pending
            </h2>

            <p className="text-4xl font-bold mt-4">
              16
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;