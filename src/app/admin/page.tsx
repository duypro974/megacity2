"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, Clock, User, RefreshCw, Download, CheckCircle, MessageSquare } from "lucide-react";

type Lead = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  interest: string;
  note?: string;
  createdAt: string;
  status: "new" | "contacted" | "closed";
};

const interestMap: Record<string, string> = {
  "dau-tu": "Đầu tư sinh lời",
  "mua-o": "Mua để ở",
  "xem-mat-bang": "Xem mặt bằng",
  "nha-xay-san": "Nhà xây sẵn",
  khac: "Khác",
};

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [filter, setFilter] = useState<"all" | "new" | "contacted" | "closed">("all");

  const ADMIN_PASS = "megacity2admin"; // Đổi mật khẩu này khi deploy thật

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) fetchLeads();
  }, [authenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASS) {
      setAuthenticated(true);
    } else {
      alert("Mật khẩu sai!");
    }
  };

  const filteredLeads =
    filter === "all" ? leads : leads.filter((l) => l.status === filter);

  const exportCSV = () => {
    const headers = ["ID", "Họ tên", "SĐT", "Email", "Nhu cầu", "Ghi chú", "Thời gian", "Trạng thái"];
    const rows = filteredLeads.map((l) => [
      l.id,
      l.name,
      l.phone,
      l.email || "",
      interestMap[l.interest] || l.interest,
      l.note || "",
      new Date(l.createdAt).toLocaleString("vi-VN"),
      l.status,
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-mega-city-2-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-dark-900 mb-2 text-center">Admin Dashboard</h1>
          <p className="text-gray-500 text-center mb-6 text-sm">Mega City 2 · Quản lý Lead</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu admin"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-dark-900">Admin · Mega City 2</h1>
            <p className="text-sm text-gray-500">Quản lý thông tin khách hàng đăng ký</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Làm mới
            </button>
            <button
              onClick={exportCSV}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded-lg text-sm font-medium transition"
            >
              <Download className="w-4 h-4" />
              Xuất CSV
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Tổng lead", value: leads.length, color: "bg-blue-50 text-blue-700" },
            { label: "Mới", value: leads.filter((l) => l.status === "new").length, color: "bg-green-50 text-green-700" },
            { label: "Đã liên hệ", value: leads.filter((l) => l.status === "contacted").length, color: "bg-yellow-50 text-yellow-700" },
            { label: "Đã chốt", value: leads.filter((l) => l.status === "closed").length, color: "bg-purple-50 text-purple-700" },
          ].map((s, i) => (
            <div key={i} className={`rounded-2xl p-5 ${s.color}`}>
              <div className="text-3xl font-bold">{s.value}</div>
              <div className="text-sm font-medium opacity-80">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filter */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {(["all", "new", "contacted", "closed"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === f
                  ? "bg-primary-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border"
              }`}
            >
              {f === "all" ? "Tất cả" : f === "new" ? "Mới" : f === "contacted" ? "Đã liên hệ" : "Đã chốt"}
            </button>
          ))}
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-20 text-gray-500">Đang tải...</div>
        ) : filteredLeads.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            Chưa có lead nào. Khi khách đăng ký form, dữ liệu sẽ hiện ở đây.
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Khách hàng</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Liên hệ</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Nhu cầu</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Ghi chú</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Thời gian</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-600">Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="border-b last:border-0 hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                            <User className="w-4 h-4 text-primary-600" />
                          </div>
                          <span className="font-medium text-dark-900">{lead.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="space-y-1">
                          <a href={`tel:${lead.phone}`} className="flex items-center gap-1 text-primary-600 hover:underline">
                            <Phone className="w-3.5 h-3.5" /> {lead.phone}
                          </a>
                          {lead.email && (
                            <a href={`mailto:${lead.email}`} className="flex items-center gap-1 text-gray-500 text-xs">
                              <Mail className="w-3.5 h-3.5" /> {lead.email}
                            </a>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-block bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium">
                          {interestMap[lead.interest] || lead.interest}
                        </span>
                      </td>
                      <td className="px-4 py-4 max-w-xs">
                        {lead.note ? (
                          <div className="flex items-start gap-1 text-gray-600">
                            <MessageSquare className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                            <span className="line-clamp-2">{lead.note}</span>
                          </div>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="px-4 py-4 text-gray-500 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {new Date(lead.createdAt).toLocaleString("vi-VN")}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                            lead.status === "new"
                              ? "bg-green-100 text-green-700"
                              : lead.status === "contacted"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-purple-100 text-purple-700"
                          }`}
                        >
                          {lead.status === "new" && <CheckCircle className="w-3 h-3" />}
                          {lead.status === "new" ? "Mới" : lead.status === "contacted" ? "Đã LH" : "Đã chốt"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
