import { useState } from "react";

const Schedule = () => {
  const [tab, setTab] = useState("schedule");

  const tabs = [
    { id: "schedule", label: "Programme Schedule" },
    { id: "plenary", label: "Plenary Sessions" },
    { id: "counselling", label: "Career Counselling" },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Programme Schedule
        </h1>

        <p className="text-center text-gray-500 mb-10">
          SOA Campus II Convention Centre • 28 March 2026
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-6 py-2 rounded-full border transition 
              ${
                tab === t.id
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* TAB 1 PROGRAMME SCHEDULE */}

        {tab === "schedule" && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <table className="w-full text-left">

              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 font-semibold">Time</th>
                  <th className="p-4 font-semibold">Session</th>
                  <th className="p-4 font-semibold">Details</th>
                </tr>
              </thead>

              <tbody className="divide-y">

                <tr>
                  <td className="p-4 font-medium">09:00 – 10:00</td>
                  <td className="p-4">Registration & Orientation</td>
                  <td className="p-4 text-gray-600">
                    Welcome of students and seminar overview
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-medium">10:00 – 10:45</td>
                  <td className="p-4">Inaugural Session</td>
                  <td className="p-4 text-gray-600">
                    Welcome Address – Dr Banabihari Mishra <br />
                    Theme Address – Dr Batakrushna Tripathy <br />
                    Guest Speaker – Manoj Kumar Nayak
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-medium">10:45 – 11:00</td>
                  <td className="p-4">Tea Break</td>
                  <td className="p-4 text-gray-600">
                    Networking & Refreshments
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-medium">11:00 – 01:00</td>
                  <td className="p-4">Career Counselling Session</td>
                  <td className="p-4 text-gray-600">
                    Key Speakers: <br />
                    Dr Jubilee Purkayastha <br />
                    Dr Pravakar Mohanty <br />
                    Mr Surya Prakash Mahapatra <br />
                    Dr Sutanu Chakraborty <br />
                    Dr Lingaraj Sahoo
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-medium">01:00 – 01:45</td>
                  <td className="p-4">Lunch Break</td>
                  <td className="p-4 text-gray-600"></td>
                </tr>

                <tr>
                  <td className="p-4 font-medium">01:45 – 02:00</td>
                  <td className="p-4">Rhythm & Resonance</td>
                  <td className="p-4 text-gray-600">
                    Musical reflection by Bedashree Sahoo
                  </td>
                </tr>

                <tr>
                  <td className="p-4 font-medium">02:00 – 04:00</td>
                  <td className="p-4">Domain Specific Plenary</td>
                  <td className="p-4 text-gray-600">
                    Civil Services • Higher Education • Corporate Careers • Agriculture
                  </td>
                </tr>

              </tbody>
            </table>

          </div>
        )}

        {/* TAB 2 PLENARY */}

        {tab === "plenary" && (
          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 bg-white shadow-lg rounded-xl border">
              <h3 className="font-semibold mb-2">
                Civil, Staff & Defence Services
              </h3>

              <p className="text-gray-600 text-sm">
                Moderator: Dr Jubilee Purkayastha
              </p>

              <ul className="list-disc pl-5 mt-3 text-gray-600 text-sm space-y-1">
                <li>Lt Raj Kumar Thakur</li>
                <li>Mr Shantanu Singh</li>
                <li>Mr Pradyumna Mohapatra</li>
                <li>Dr Pravakar Mohanty</li>
              </ul>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl border">
              <h3 className="font-semibold mb-2">
                Higher Education & Research
              </h3>

              <p className="text-gray-600 text-sm">
                Moderator: Dr Sutanu Chakraborty
              </p>

              <ul className="list-disc pl-5 mt-3 text-gray-600 text-sm space-y-1">
                <li>Dr Lingaraj Sahoo</li>
                <li>Mr Abheek Ghosh</li>
                <li>Mr Rishikeshan Pradhan</li>
                <li>Mr Sanchari Kundu</li>
              </ul>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl border">
              <h3 className="font-semibold mb-2">
                Management & Corporate Careers
              </h3>

              <p className="text-gray-600 text-sm">
                Moderator: Surya Prakash Mahapatra
              </p>

              <ul className="list-disc pl-5 mt-3 text-gray-600 text-sm space-y-1">
                <li>Kalinga Keshari Rath</li>
                <li>Siddharth Das</li>
                <li>Biswojit Gouda</li>
              </ul>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl border">
              <h3 className="font-semibold mb-2">
                Agricultural Technology
              </h3>

              <p className="text-gray-600 text-sm">
                Moderator: Dr Hrushikesh Senapati
              </p>

              <ul className="list-disc pl-5 mt-3 text-gray-600 text-sm space-y-1">
                <li>Dr Trinath Mahararana</li>
                <li>Dr Pramod Kumar Rout</li>
                <li>Dr Kalikinkar Bandyopadhyay</li>
              </ul>
            </div>

          </div>
        )}

        {/* TAB 3 COUNSELLING */}

        {tab === "counselling" && (
          <div className="bg-white shadow-lg rounded-xl p-6">

            <h3 className="font-semibold mb-4 text-lg">
              One-to-One Career Counselling
            </h3>

            <table className="w-full text-left">

              <thead className="border-b">
                <tr>
                  <th className="p-3">Table</th>
                  <th className="p-3">Topics</th>
                  <th className="p-3">Experts</th>
                </tr>
              </thead>

              <tbody className="divide-y">

                <tr>
                  <td className="p-3">Civil Services</td>
                  <td className="p-3">
                    UPSC • PCS • SSC • CDS • OAS
                  </td>
                  <td className="p-3">
                    Lt Raj Kumar Thakur, Shantanu Singh
                  </td>
                </tr>

                <tr>
                  <td className="p-3">Corporate & MBA</td>
                  <td className="p-3">
                    MBA • HR • Corporate Careers
                  </td>
                  <td className="p-3">
                    Surya Prakash Mahapatra, Kalinga Rath
                  </td>
                </tr>

                <tr>
                  <td className="p-3">Research & PhD</td>
                  <td className="p-3">
                    PhD • Fellowships • UGC NET
                  </td>
                  <td className="p-3">
                    Dr Sutanu Chakraborty, Dr Lingaraj Sahoo
                  </td>
                </tr>

                <tr>
                  <td className="p-3">Agriculture</td>
                  <td className="p-3">
                    Agricultural Technology
                  </td>
                  <td className="p-3">
                    Dr Trinath Mahararana
                  </td>
                </tr>

              </tbody>
            </table>

          </div>
        )}

      </div>
    </div>
  );
};

export default Schedule;
