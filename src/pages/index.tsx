import { api } from '@/utils/api';
import { useState } from 'react';

export default function Home() {
  // handling state
  const [clearForm, setClearForm] = useState(true);

  // helper functions
  const everything = api.things.all.useQuery();

  return (
    <div className="mx-auto min-h-screen pb-8">
      <h1 className="border-b-4 text-center text-4xl font-bold">
        T3 CRUD DEMO
      </h1>

      {/* List everything */}
      <div className="m-2">
        <div className="mb-4 ml-2 mt-4">
          <h2 className="mb-4 text-2xl font-bold">List everything</h2>
        </div>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => {
            setClearForm(false);
            everything.refetch();
          }}
        >
          Fetch
        </button>
        <button
          className="ml-2 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          onClick={() => setClearForm(true)}
        >
          Clear
        </button>

        <div className="mb-4 mt-4 grid grid-cols-3 gap-4 border-t border-dashed pt-2 text-center font-bold">
          <p>Id</p>
          <p>Name</p>
          <p>Email</p>
        </div>

        {!clearForm &&
          everything?.data?.map((thing) => (
            <div
              key={thing.id}
              className="my-4 grid grid-cols-3 gap-4 rounded border border-gray-300 bg-white p-4 shadow"
            >
              <p>{thing.id}</p>
              <p>{thing.name}</p>
              <p>{thing.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
