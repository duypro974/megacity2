"use client";

import { useState } from "react";
import { 
  Navigation, Plane, Building2, Trees, Waves, 
  Hospital, School, ShoppingBag, Factory, 
  Clock, MapPin, ArrowRight, Compass, Car, ExternalLink, Sparkles
} from "lucide-react";

interface CommutePoint {
  id: string;
  name: string;
  category: "highway" | "amenity" | "industrial";
  distance: string;
  time: string;
  route: string;
  highlight: string;
  icon: any;
  destinationCoords: string;
}

const COMMUTE_DATA: CommutePoint[] = [
  // HẠ TẦNG & CAO TỐC
  {
    id: "long-thanh-airport",
    name: "Sân Bay Quốc Tế Long Thành",
    category: "highway",
    distance: "28 km",
    time: "25 phút",
    route: "Cao tốc Long Thành – Dầu Giây hoặc trục ĐT 769",
    highlight: "Cực kỳ thuận tiện đón sóng lưu trú và chuyên gia quốc tế khi sân bay cất cánh năm 2026.",
    icon: Plane,
    destinationCoords: "10.7765,107.0189",
  },
  {
    id: "hcmc-an-phu",
    name: "TP. Hồ Chí Minh (Nút giao An Phú, Thủ Đức)",
    category: "highway",
    distance: "55 km",
    time: "45 phút",
    route: "Toàn tuyến cao tốc TP.HCM – Long Thành – Dầu Giây",
    highlight: "Khoảng cách hoàn hảo cho xu hướng ngôi nhà thứ 2 (Second home) nghỉ dưỡng cuối tuần.",
    icon: Building2,
    destinationCoords: "10.7969,106.7583",
  },
  {
    id: "da-lat",
    name: "TP. Đà Lạt (Lâm Đồng)",
    category: "highway",
    distance: "215 km",
    time: "2h45 phút",
    route: "Cao tốc Dầu Giây – Tân Phú – Bảo Lộc – Liên Khương",
    highlight: "Rút ngắn hơn một nửa thời gian so với 5 tiếng đi đèo QL20 trước đây.",
    icon: Trees,
    destinationCoords: "11.9404,108.4583",
  },
  {
    id: "phan-thiet",
    name: "TP. Phan Thiết & Biển Mũi Né",
    category: "highway",
    distance: "115 km",
    time: "1h15 phút",
    route: "Cao tốc Dầu Giây – Phan Thiết",
    highlight: "Kết nối trục du lịch biển Nam Trung Bộ thẳng tiến chỉ hơn 1 giờ lái xe.",
    icon: Waves,
    destinationCoords: "10.9273,108.1017",
  },
  {
    id: "bien-hoa",
    name: "Trung Tâm TP. Biên Hòa",
    category: "highway",
    distance: "42 km",
    time: "40 phút",
    route: "Trục chính Quốc lộ 1A thông thoáng",
    highlight: "Dễ dàng tiếp cận toàn bộ hệ thống đại học và trung tâm tài chính tỉnh lỵ Đồng Nai.",
    icon: Car,
    destinationCoords: "10.9574,106.8427",
  },

  // TIỆN ÍCH DÂN SINH & Y TẾ
  {
    id: "bv-thong-nhat",
    name: "Bệnh Viện Đa Khoa Huyện Thống Nhất",
    category: "amenity",
    distance: "1,5 km",
    time: "3 phút",
    route: "Mặt tiền Quốc lộ 1A",
    highlight: "Bệnh viện tuyến huyện quy mô lớn, chăm sóc sức khỏe toàn diện 24/7.",
    icon: Hospital,
    destinationCoords: "10.9482,107.1554",
  },
  {
    id: "cho-dau-giay",
    name: "Chợ Đầu Mối Nông Sản Dầu Giây",
    category: "amenity",
    distance: "800 m",
    time: "2 phút",
    route: "Ngay ngã tư Quốc lộ 20",
    highlight: "Chợ đầu mối nông sản sầm uất bậc nhất Đồng Nai, bảo chứng cho tiềm năng kinh doanh.",
    icon: ShoppingBag,
    destinationCoords: "10.9451,107.1528",
  },
  {
    id: "ubnd-dau-giay",
    name: "Trung Tâm Hành Chính Thị Trấn Dầu Giây",
    category: "amenity",
    distance: "1,2 km",
    time: "2 phút",
    route: "Trục Trần Phú & Quốc lộ 1A",
    highlight: "Công an, UBND, tòa án và trung tâm phục vụ hành chính công huyện Thống Nhất.",
    icon: Building2,
    destinationCoords: "10.9442,107.1481",
  },
  {
    id: "dh-lac-hong",
    name: "Cơ Sở Đại Học Lạc Hồng & Trường Liên Cấp",
    category: "amenity",
    distance: "2,0 km",
    time: "4 phút",
    route: "Đường nội thị Dầu Giây",
    highlight: "Đầy đủ các cấp mầm non, tiểu học, THCS đến đại học đào tạo nghề.",
    icon: School,
    destinationCoords: "10.9398,107.1612",
  },

  // CỤM KHU CÔNG NGHIỆP
  {
    id: "kcn-dau-giay",
    name: "Khu Công Nghiệp Dầu Giây (330 ha)",
    category: "industrial",
    distance: "2,5 km",
    time: "4 phút",
    route: "Trục ĐT 769 kết nối thẳng",
    highlight: "Thu hút hơn 30.000 chuyên gia, kỹ sư và lao động, nhu cầu thuê nhà ở cực cao.",
    icon: Factory,
    destinationCoords: "10.9312,107.1645",
  },
  {
    id: "kcn-long-khanh",
    name: "Khu Công Nghiệp Long Khánh",
    category: "industrial",
    distance: "7,0 km",
    time: "8 phút",
    route: "Quốc lộ 1A hướng về Long Khánh",
    highlight: "Cụm công nghiệp tập trung với tỷ lệ lấp đầy trên 90%.",
    icon: Factory,
    destinationCoords: "10.9521,107.2189",
  },
  {
    id: "kcn-bau-xeo",
    name: "Khu Công Nghiệp Bàu Xéo (Trảng Bom)",
    category: "industrial",
    distance: "15 km",
    time: "15 phút",
    route: "Quốc lộ 1A hướng về TP. Biên Hòa",
    highlight: "Trung tâm sản xuất quy mô lớn vùng phụ cận Dầu Giây.",
    icon: Factory,
    destinationCoords: "10.9514,107.0215",
  },
];

const CATEGORIES = [
  { id: "all", label: "Tất cả điểm đến", emoji: "🌐" },
  { id: "highway", label: "Cao tốc & Sân bay", emoji: "✈️" },
  { id: "amenity", label: "Tiện ích & Y tế", emoji: "🏥" },
  { id: "industrial", label: "Khu công nghiệp", emoji: "🏭" },
];

export default function InteractiveCommuteMatrix() {
  const [activeCat, setActiveCat] = useState<string>("all");
  const [selectedPoint, setSelectedPoint] = useState<CommutePoint>(COMMUTE_DATA[0]);

  const filteredPoints = COMMUTE_DATA.filter(
    (p) => activeCat === "all" || p.category === activeCat
  );

  // Link Google Maps Direct Navigation từ GPS của khách đến The Link City
  const googleMapsDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=10.9427836,107.1500261";

  // Link chỉ đường từ The Link City tới điểm được chọn
  const routeToPointUrl = `https://www.google.com/maps/dir/?api=1&origin=10.9427836,107.1500261&destination=${selectedPoint.destinationCoords}`;

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
            Công Cụ Tương Tác Vị Trí
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Bộ Đo Khoảng Cách &amp; Thời Gian Di Chuyển Thực Tế
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Chọn một địa điểm bên dưới để xem chi tiết lộ trình, thời gian di chuyển và chỉ đường trực tiếp từ tâm điểm ngã tư Dầu Giây.
          </p>
        </div>

        {/* Big Action Bar: One-Touch Navigation */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-primary-700 via-primary-800 to-slate-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0 text-amber-400">
              <Navigation className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <p className="font-extrabold text-base text-white">Đang đến xem thực tế dự án The Link City?</p>
              <p className="text-xs text-slate-300">Nhấn để Google Maps tự động dẫn đường từ vị trí hiện tại của bạn đến dự án.</p>
            </div>
          </div>
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all transform hover:scale-105 shadow-md flex-shrink-0"
          >
            <MapPin className="w-4 h-4" />
            Chỉ đường bằng Google Maps
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto no-scrollbar pb-1 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                activeCat === cat.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-primary-400 hover:text-primary-700"
              }`}
            >
              <span className="mr-1.5">{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Grid: Interactive List + Highlight Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* List of Commute Points (Left 7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filteredPoints.map((point) => {
              const isSelected = selectedPoint.id === point.id;
              const IconComponent = point.icon;
              return (
                <div
                  key={point.id}
                  onClick={() => setSelectedPoint(point)}
                  className={`cursor-pointer rounded-2xl p-4 transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? "bg-primary-50/70 border-primary-500 shadow-md ring-2 ring-primary-500/20"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isSelected ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-700"
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                          {point.name}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1 font-extrabold text-primary-700">
                      <Clock className="w-3.5 h-3.5" />
                      {point.time}
                    </span>
                    <span className="font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {point.distance}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Point Showcase (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-7 shadow-lg sticky top-24">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Lộ Trình Đang Chọn
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-primary-600" />
                Xuất phát từ The Link City
              </div>
            </div>

            <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight">
              {selectedPoint.name}
            </h3>

            {/* Metrics Badge */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-primary-50 rounded-2xl p-4 border border-primary-100 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-primary-600 mb-1">Thời gian di chuyển</p>
                <p className="text-2xl font-black text-primary-800">{selectedPoint.time}</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Khoảng cách thực tế</p>
                <p className="text-2xl font-black text-slate-800">{selectedPoint.distance}</p>
              </div>
            </div>

            {/* Route Detail */}
            <div className="space-y-3 mb-6 text-xs text-slate-700">
              <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <Car className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">Tuyến đường chính: </span>
                  <span>{selectedPoint.route}</span>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-amber-50/60 p-3 rounded-xl border border-amber-100 text-slate-800">
                <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-900">Tiềm năng nổi bật: </span>
                  <span>{selectedPoint.highlight}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <a
                href={routeToPointUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                Xem lộ trình chi tiết trên Google Maps
              </a>
              <a
                href="tel:0937587438"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
              >
                Đặt xe đưa đón tham quan thực địa miễn phí
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
