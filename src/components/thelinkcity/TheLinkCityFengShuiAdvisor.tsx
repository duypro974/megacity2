"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Compass,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  User,
  ArrowRight,
  Home,
  Phone,
  MessageCircle,
  Award,
  ChevronRight,
  TrendingUp,
  Store,
  Layers,
  Check,
  Plus,
  Minus
} from "lucide-react";
import { BANG_GIA_DATA, type SanPham } from "@/data/bangGiaData";
import { SITE_CONFIG } from "@/data/siteConfig";

// ─────────────────────────────────────────────────────────────
// THUẬT TOÁN PHONG THỦY BÁT TRẠCH & CAN CHI CHÍNH TÔNG
// ─────────────────────────────────────────────────────────────

export interface DirectionDetail {
  name: string;        // Ví dụ: Đông, Tây, Nam, Bắc...
  angle: number;       // Góc độ kim la bàn (0 - 360)
  cung: string;        // Sinh Khí, Thiên Y, Diên Niên, Phục Vị...
  isGood: boolean;     // Cát hay Hung
  desc: string;        // Ý nghĩa
  color: string;       // Màu sắc hiển thị
  highlightTag: string;
}

export interface FengShuiProfile {
  year: number;
  gender: "nam" | "nu";
  canChi: string;
  nguHanh: string;
  nguHanhElement: "Kim" | "Mộc" | "Thủy" | "Hỏa" | "Thổ";
  cungPhi: string;
  tuMenh: "Đông Tứ Mệnh" | "Tây Tứ Mệnh";
  tuTrach: "Đông Tứ Trạch" | "Tây Tứ Trạch";
  colorsGood: string[];
  colorsAvoid: string[];
  soHop: number[];
  bestDirection: DirectionDetail;
  directions: DirectionDetail[];
  huongNhaKhuyenNghi: string[];
  loiKhuyenThietKe: {
    cuaChinh: string;
    banTho: string;
    bepNau: string;
    phongNgu: string;
  };
}

const CAN_LIST = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
const CHI_LIST = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

const NGU_HANH_MAP: Record<number, { name: string; element: "Kim" | "Mộc" | "Thủy" | "Hỏa" | "Thổ"; colors: string[]; avoid: string[] }> = {
  1: { name: "Kim (Hải Trung Kim - Vàng Trong Biển)", element: "Kim", colors: ["Trắng", "Xám bạc", "Vàng ánh kim", "Nâu đất"], avoid: ["Đỏ", "Hồng", "Tím"] },
  2: { name: "Thủy (Giản Hạ Thủy - Nước Dưới Khe)", element: "Thủy", colors: ["Đen", "Xanh nước biển", "Trắng", "Xám ánh bạc"], avoid: ["Vàng đậm", "Nâu đất"] },
  3: { name: "Hỏa (Lư Trung Hỏa - Lửa Trong Lò)", element: "Hỏa", colors: ["Đỏ", "Cam", "Hồng", "Xanh lá cây tươi"], avoid: ["Đen", "Xanh nước biển"] },
  4: { name: "Thổ (Lộ Bàng Thổ - Đất Ven Đường)", element: "Thổ", colors: ["Nâu đất", "Vàng sẫm", "Đỏ", "Cam gạch"], avoid: ["Xanh lá cây", "Xanh ngọc"] },
  5: { name: "Mộc (Đại Lâm Mộc - Gỗ Rừng Già)", element: "Mộc", colors: ["Xanh lá cây", "Xanh lục", "Đen", "Xanh lam"], avoid: ["Trắng", "Xám ánh kim"] },
};

export function calculateFengShui(year: number, gender: "nam" | "nu"): FengShuiProfile {
  const safeYear = Math.max(1940, Math.min(2025, isNaN(year) ? 2004 : year));

  // 1. Can Chi
  const canIndex = (safeYear - 4) % 10;
  const chiIndex = (safeYear - 4) % 12;
  const can = CAN_LIST[canIndex >= 0 ? canIndex : canIndex + 10];
  const chi = CHI_LIST[chiIndex >= 0 ? chiIndex : chiIndex + 12];
  const canChi = `${can} ${chi}`;

  // 2. Ngũ Hành
  const canScores: Record<string, number> = { "Giáp": 1, "Ất": 1, "Bính": 2, "Đinh": 2, "Mậu": 3, "Kỷ": 3, "Canh": 4, "Tân": 4, "Nhâm": 5, "Quý": 5 };
  const chiScores: Record<string, number> = { "Tý": 0, "Sửu": 0, "Ngọ": 0, "Mùi": 0, "Dần": 1, "Mão": 1, "Thân": 1, "Dậu": 1, "Thìn": 2, "Tỵ": 2, "Tuất": 2, "Hợi": 2 };
  let nhScore = (canScores[can] || 1) + (chiScores[chi] || 0);
  if (nhScore > 5) nhScore -= 5;
  const nguHanhInfo = NGU_HANH_MAP[nhScore] || NGU_HANH_MAP[1];

  // 3. Cung Phi Bát Trạch
  const digitsSum = String(safeYear).split("").reduce((acc, d) => acc + parseInt(d, 10), 0);
  let rem = digitsSum % 9;
  if (rem === 0) rem = 9;

  let cungNum: number;
  if (safeYear < 2000) {
    cungNum = gender === "nam" ? 10 - rem : rem + 5;
  } else {
    cungNum = gender === "nam" ? 9 - rem : rem + 6;
  }
  while (cungNum > 9) cungNum -= 9;
  while (cungNum <= 0) cungNum += 9;

  if (cungNum === 5) {
    cungNum = gender === "nam" ? 2 : 8; // Nam Khôn (2), Nữ Cấn (8)
  }

  type CungMeta = {
    cung: string;
    tuMenh: "Đông Tứ Mệnh" | "Tây Tứ Mệnh";
    soHop: number[];
    huong: Record<string, { type: "Sinh Khí" | "Thiên Y" | "Diên Niên" | "Phục Vị" | "Tuyệt Mệnh" | "Ngũ Quỷ" | "Họa Hại" | "Lục Sát"; isGood: boolean; desc: string }>;
  };

  const CUNG_DICT: Record<number, CungMeta> = {
    1: {
      cung: "Khảm (Thủy)",
      tuMenh: "Đông Tứ Mệnh",
      soHop: [1, 6, 7],
      huong: {
        "Đông Nam": { type: "Sinh Khí", isGood: true, desc: "Phúc lộc vẹn toàn, tài vận dồi dào, thăng quan tiến chức" },
        "Đông":     { type: "Thiên Y",  isGood: true, desc: "Gặp thiên thời được che chở, trường thọ khỏe mạnh" },
        "Nam":      { type: "Diên Niên", isGood: true, desc: "Gia đạo êm ấm, quan hệ gia đình và đối tác bền vững" },
        "Bắc":      { type: "Phục Vị",  isGood: true, desc: "Được sự trợ giúp, tâm an định, học hành thi cử may mắn" },
        "Tây Nam":  { type: "Tuyệt Mệnh", isGood: false, desc: "Tổn hại sức khỏe, dễ hao tài tán của" },
        "Đông Bắc": { type: "Ngũ Quỷ",  isGood: false, desc: "Dễ gặp thị phi, trắc trở tài chính" },
        "Tây":      { type: "Họa Hại",  isGood: false, desc: "Khó tích lũy, việc làm ăn dễ phát sinh việc ngoài ý muốn" },
        "Tây Bắc":  { type: "Lục Sát",  isGood: false, desc: "Xáo trộn hòa khí, dễ tranh chấp pháp lý" }
      }
    },
    2: {
      cung: "Khôn (Thổ)",
      tuMenh: "Tây Tứ Mệnh",
      soHop: [2, 5, 8, 9],
      huong: {
        "Đông Bắc": { type: "Sinh Khí", isGood: true, desc: "Kinh doanh phát đạt, đất đai tăng giá vượt trội" },
        "Tây":      { type: "Thiên Y",  isGood: true, desc: "Sức khỏe dồi dào, quý nhân tương trợ đắc lực" },
        "Tây Bắc":  { type: "Diên Niên", isGood: true, desc: "Mối quan hệ hài hòa, con cái thành đạt" },
        "Tây Nam":  { type: "Phục Vị",  isGood: true, desc: "Củng cố sức mạnh nội tại, phát triển bền vững" },
        "Bắc":      { type: "Tuyệt Mệnh", isGood: false, desc: "Hao tán tiền bạc, năng lượng tiêu cực" },
        "Đông Nam": { type: "Ngũ Quỷ",  isGood: false, desc: "Mất mát của cải, dễ thất bại đầu tư" },
        "Đông":     { type: "Họa Hại",  isGood: false, desc: "Bất hòa trong quan hệ, công việc trắc trở" },
        "Nam":      { type: "Lục Sát",  isGood: false, desc: "Mất mát danh tiếng, hao hụt năng lượng" }
      }
    },
    3: {
      cung: "Chấn (Mộc)",
      tuMenh: "Đông Tứ Mệnh",
      soHop: [3, 4, 9],
      huong: {
        "Nam":      { type: "Sinh Khí", isGood: true, desc: "Đại cát đại lợi, danh tiếng vang xa, tài lộc dồi dào" },
        "Bắc":      { type: "Thiên Y",  isGood: true, desc: "Thân tâm an lạc, bệnh tật tiêu tan, quý nhân trợ lực" },
        "Đông Nam": { type: "Diên Niên", isGood: true, desc: "Vợ chồng hòa thuận, gia nghiệp phát triển lâu dài" },
        "Đông":     { type: "Phục Vị",  isGood: true, desc: "Vững vàng bản lĩnh, tài lộc ổn định" },
        "Tây":      { type: "Tuyệt Mệnh", isGood: false, desc: "Bất an, hao tổn nguồn lực tài chính" },
        "Tây Bắc":  { type: "Ngũ Quỷ",  isGood: false, desc: "Dễ gặp rủi ro đối tác, hao hụt ngân sách" },
        "Tây Nam":  { type: "Họa Hại",  isGood: false, desc: "Công việc bị đình trệ, khó thăng tiến" },
        "Đông Bắc": { type: "Lục Sát",  isGood: false, desc: "Tranh chấp thị phi, gia đạo xáo trộn" }
      }
    },
    4: {
      cung: "Tốn (Mộc)",
      tuMenh: "Đông Tứ Mệnh",
      soHop: [1, 3, 4],
      huong: {
        "Bắc":      { type: "Sinh Khí", isGood: true, desc: "Vận may tài chính liên tục, đầu tư sinh lời lớn" },
        "Nam":      { type: "Thiên Y",  isGood: true, desc: "Gia đình an khang thịnh vượng, được bề trên bảo bọc" },
        "Đông":     { type: "Diên Niên", isGood: true, desc: "Nhân duyên tốt đẹp, bạn bè và đối tác ủng hộ" },
        "Đông Nam": { type: "Phục Vị",  isGood: true, desc: "Tập trung trí tuệ, sự nghiệp thăng tiến vững chắc" },
        "Đông Bắc": { type: "Tuyệt Mệnh", isGood: false, desc: "Tổn thương nguyên khí, suy giảm may mắn" },
        "Tây Nam":  { type: "Ngũ Quỷ",  isGood: false, desc: "Dễ bị lừa gạt tiền bạc, bất hòa đối tác" },
        "Tây Bắc":  { type: "Họa Hại",  isGood: false, desc: "Thất thoát tiền tài, việc khó thành như ý" },
        "Tây":      { type: "Lục Sát",  isGood: false, desc: "Gia đạo lục đục, thị phi liên miên" }
      }
    },
    6: {
      cung: "Càn (Kim)",
      tuMenh: "Tây Tứ Mệnh",
      soHop: [6, 7, 8],
      huong: {
        "Tây":      { type: "Sinh Khí", isGood: true, desc: "Hút vượng khí đắc địa, buôn may bán đắt, phát tài" },
        "Đông Bắc": { type: "Thiên Y",  isGood: true, desc: "Tăng cường sinh lực, trường thọ an khang" },
        "Tây Nam":  { type: "Diên Niên", isGood: true, desc: "Hạnh phúc viên mãn, con cháu hiếu thuận vinh hiển" },
        "Tây Bắc":  { type: "Phục Vị",  isGood: true, desc: "Quyền uy gia tăng, tinh thần minh mẫn sáng suốt" },
        "Nam":      { type: "Tuyệt Mệnh", isGood: false, desc: "Khắc chế tài vận, dễ gặp biến cố bất ngờ" },
        "Đông":     { type: "Ngũ Quỷ",  isGood: false, desc: "Hao hụt ngân khố, tinh thần bất an" },
        "Đông Nam": { type: "Họa Hại",  isGood: false, desc: "Khó bề tích lũy, dễ hao tiền tốn của" },
        "Bắc":      { type: "Lục Sát",  isGood: false, desc: "Mất mát cơ hội, kiện tụng rắc rối" }
      }
    },
    7: {
      cung: "Đoài (Kim)",
      tuMenh: "Tây Tứ Mệnh",
      soHop: [2, 6, 7, 8],
      huong: {
        "Tây Bắc":  { type: "Sinh Khí", isGood: true, desc: "Thịnh vượng hanh thông, tài lộc dồi dào đầy nhà" },
        "Tây Nam":  { type: "Thiên Y",  isGood: true, desc: "Sức khỏe dẻo dai, tâm trí thông tuệ, bình an" },
        "Đông Bắc": { type: "Diên Niên", isGood: true, desc: "Tình cảm gắn bó, tài vận gia tăng qua từng năm" },
        "Tây":      { type: "Phục Vị",  isGood: true, desc: "Củng cố nội lực, đón nhận may mắn ngập tràn" },
        "Đông":     { type: "Tuyệt Mệnh", isGood: false, desc: "Hao tài tốn của, sức khỏe suy giảm" },
        "Nam":      { type: "Ngũ Quỷ",  isGood: false, desc: "Gặp điều phiền toái, đối tác trắc trở" },
        "Bắc":      { type: "Họa Hại",  isGood: false, desc: "Khó đạt thỏa thuận, kế hoạch bị đình trệ" },
        "Đông Nam": { type: "Lục Sát",  isGood: false, desc: "Bất đồng ý kiến, dễ xảy ra tranh cãi" }
      }
    },
    8: {
      cung: "Cấn (Thổ)",
      tuMenh: "Tây Tứ Mệnh",
      soHop: [2, 5, 8, 9],
      huong: {
        "Tây Nam":  { type: "Sinh Khí", isGood: true, desc: "Vận khí hưng thịnh, của cải dồi dào, sinh sôi nảy nở" },
        "Tây Bắc":  { type: "Thiên Y",  isGood: true, desc: "Gia đình yên ấm, sức khỏe dồi dào không lo âu" },
        "Tây":      { type: "Diên Niên", isGood: true, desc: "Gia hòa vạn sự hưng, quan hệ làm ăn bền chặt" },
        "Đông Bắc": { type: "Phục Vị",  isGood: true, desc: "Trực giác nhạy bén, công danh từng bước thăng tiến" },
        "Đông Nam": { type: "Tuyệt Mệnh", isGood: false, desc: "Hao tổn tiền bạc, dễ gặp rắc rối giấy tờ" },
        "Bắc":      { type: "Ngũ Quỷ",  isGood: false, desc: "Thất thoát vốn liếng, dễ sinh trắc trở" },
        "Nam":      { type: "Họa Hại",  isGood: false, desc: "Gặp việc trắc trở, kế hoạch kinh doanh bị cản trở" },
        "Đông":     { type: "Lục Sát",  isGood: false, desc: "Xáo trộn tâm trí, hao tổn tinh thần" }
      }
    },
    9: {
      cung: "Ly (Hỏa)",
      tuMenh: "Đông Tứ Mệnh",
      soHop: [3, 4, 9],
      huong: {
        "Đông":     { type: "Sinh Khí", isGood: true, desc: "Danh lợi song toàn, làm ăn phát tài đại thắng" },
        "Đông Nam": { type: "Thiên Y",  isGood: true, desc: "Thân thể tráng kiện, tài chính tăng trưởng vững chắc" },
        "Bắc":      { type: "Diên Niên", isGood: true, desc: "Tình cảm mặn nồng, các mối quan hệ xã hội bền vững" },
        "Nam":      { type: "Phục Vị",  isGood: true, desc: "Ý chí kiên định, thăng tiến thuận buồm xuôi gió" },
        "Tây Bắc":  { type: "Tuyệt Mệnh", isGood: false, desc: "Tổn hại sinh khí, năng lượng suy hao" },
        "Tây":      { type: "Ngũ Quỷ",  isGood: false, desc: "Dễ bị tổn thất bất ngờ, thị phi quấy nhiễu" },
        "Đông Bắc": { type: "Họa Hại",  isGood: false, desc: "Công sức bỏ ra khó thu lại kết quả trọn vẹn" },
        "Tây Nam":  { type: "Lục Sát",  isGood: false, desc: "Mâu thuẫn phát sinh, gia đạo thiếu êm ấm" }
      }
    }
  };

  const currentCung = CUNG_DICT[cungNum] || CUNG_DICT[1];
  const tuMenh = currentCung.tuMenh;
  const tuTrach = tuMenh === "Đông Tứ Mệnh" ? "Đông Tứ Trạch" : "Tây Tứ Trạch";

  const ANGLE_MAP: Record<string, number> = {
    "Bắc": 0,
    "Đông Bắc": 45,
    "Đông": 90,
    "Đông Nam": 135,
    "Nam": 180,
    "Tây Nam": 225,
    "Tây": 270,
    "Tây Bắc": 315
  };

  const directions: DirectionDetail[] = Object.entries(currentCung.huong).map(([hName, info]) => {
    let highlightTag = "";
    let color = "";

    if (info.type === "Sinh Khí") {
      highlightTag = "Đại Cát · Sinh Tài Lộc";
      color = "#10b981"; // emerald
    } else if (info.type === "Thiên Y") {
      highlightTag = "Cát · Vượng Sức Khỏe";
      color = "#38bdf8"; // sky
    } else if (info.type === "Diên Niên") {
      highlightTag = "Cát · Gia Đạo Bền Vững";
      color = "#f59e0b"; // amber
    } else if (info.type === "Phục Vị") {
      highlightTag = "Cát · Bình An Tiến Bước";
      color = "#a855f7"; // purple
    } else {
      highlightTag = "Hướng Hung · Cần Hóa Giải";
      color = "#64748b"; // slate
    }

    return {
      name: hName,
      angle: ANGLE_MAP[hName] ?? 0,
      cung: info.type,
      isGood: info.isGood,
      desc: info.desc,
      color,
      highlightTag
    };
  });

  const bestDirection = directions.find((d) => d.cung === "Sinh Khí") || directions[0];
  const goodDirs = directions.filter((d) => d.isGood).map((d) => d.name);

  return {
    year: safeYear,
    gender,
    canChi,
    nguHanh: nguHanhInfo.name,
    nguHanhElement: nguHanhInfo.element,
    cungPhi: currentCung.cung,
    tuMenh,
    tuTrach,
    colorsGood: nguHanhInfo.colors,
    colorsAvoid: nguHanhInfo.avoid,
    soHop: currentCung.soHop,
    bestDirection,
    directions,
    huongNhaKhuyenNghi: goodDirs,
    loiKhuyenThietKe: {
      cuaChinh: `Nên mở cửa chính quay về hướng ${bestDirection.name} (${bestDirection.cung}) để đón trọn vượng khí của The Link City.`,
      banTho: `Đặt ban thờ tọa hung hướng cát, nhìn về hướng ${goodDirs[1] || "Đông"} hoặc ${goodDirs[0]} để đấng tiên tổ che chở.`,
      bepNau: `Bố trí bếp theo nguyên tắc 'Tọa hung Hướng cát', cửa bếp quay về một trong 4 hướng tốt: ${goodDirs.join(", ")}.`,
      phongNgu: `Kê đầu giường hướng về ${goodDirs.includes("Nam") ? "Nam" : goodDirs[0]} hoặc ${goodDirs.includes("Bắc") ? "Bắc" : goodDirs[1]} để tụ khí an giấc.`
    }
  };
}

// ─────────────────────────────────────────────────────────────
// CẤU HÌNH CHIẾN LƯỢC BĐS THEO MỤC ĐÍCH ĐẦU TƯ
// ─────────────────────────────────────────────────────────────

export interface GoalStrategy {
  title: string;
  badge: string;
  icon: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  targetDirections: string;
  criteria: string;
  architecture: string;
  financeAdvice: string;
}

export const GOAL_STRATEGIES: Record<"an-cu" | "shophouse" | "dau-tu", GoalStrategy> = {
  "an-cu": {
    title: "Chiến Lược An Cư Lập Nghiệp (Gia Đạo Hưng Vượng)",
    badge: "AN CƯ BỀN VỮNG",
    icon: "🏡",
    accentBg: "bg-emerald-500/15",
    accentBorder: "border-emerald-400/40",
    accentText: "text-emerald-300",
    targetDirections: "Ưu tiên hướng Diên Niên (Gia đạo êm ấm, gắn kết) & Thiên Y (Sức khỏe dồi dào, thân tâm an lạc).",
    criteria: "Chọn lô trục đường nội khu yên tĩnh (Trục N20, N21, N17), kề cận công viên & trường học, không gian thoáng đãng.",
    architecture: "Nhà phố liên kế 1 trệt 2 lầu (Mẫu T3-2B) với 3 phòng ngủ tiện nghi, giếng trời thoáng sáng, sân trước đậu ô tô.",
    financeAdvice: "Phương án vốn nhẹ nhàng: Vay ngân hàng VietinBank 70% ân hạn nợ gốc, trả góp chỉ từ 8 - 12 triệu/tháng."
  },
  "shophouse": {
    title: "Chiến Lược Kinh Doanh Shophouse (Khai Thác Dòng Tiền)",
    badge: "MẶT TIỀN THƯƠNG MẠI",
    icon: "🏪",
    accentBg: "bg-amber-500/15",
    accentBorder: "border-amber-400/40",
    accentText: "text-amber-300",
    targetDirections: "Ưu tiên hướng Sinh Khí (Kích hoạt đại tài lộc, khách hàng tấp nập, buôn bán phát tài).",
    criteria: "Ưu tiên lô góc 2 mặt tiền hoặc mặt tiền các đại lộ chính (Trục D13A, N25, D18) đón lưu lượng giao thương ngã tư Dầu Giây.",
    architecture: "Mô hình kép 'Kinh doanh tầng 1 + An cư tầng 2, 3': Mặt tiền vỉa hè rộng 4-6m thuận tiện mở cafe, văn phòng, phòng khám.",
    financeAdvice: "Khai thác cho thuê kinh doanh ngay khi nhận bàn giao, tỷ suất sinh lời dòng tiền cho thuê ước đạt 8% - 12%/năm."
  },
  "dau-tu": {
    title: "Chiến Lược Đầu Tư Tăng Tốc (Tối Đa Hóa Lợi Nhuận)",
    badge: "ĐẦU TƯ TĂNG TỐC",
    icon: "📈",
    accentBg: "bg-sky-500/15",
    accentBorder: "border-sky-400/40",
    accentText: "text-sky-300",
    targetDirections: "Ưu tiên hướng Sinh Khí & Phục Vị (Tài sản tăng trưởng bền vững, thanh khoản cao, dễ chuyển nhượng).",
    criteria: "Chọn các lô có suất vốn đầu vào tối ưu nhất (~1.85 tỷ - 1.95 tỷ), biên độ tăng giá đón sóng hạ tầng liên vùng.",
    architecture: "Đất nền sổ đỏ thổ cư 100%, không áp lực xây dựng ngay, dễ dàng sang nhượng trên thị trường thứ cấp.",
    financeAdvice: "Đón điểm rơi tăng giá 2026 - 2028 khi Dầu Giây lên Thị xã và Sân bay Long Thành & Cao tốc Dầu Giây - Tân Phú thông xe."
  }
};

// ─────────────────────────────────────────────────────────────
// COMPONENT CHÍNH: THE LINK CITY FENG-SHUI ADVISOR (IMPERIAL JADE & GOLD)
// ─────────────────────────────────────────────────────────────

export default function TheLinkCityFengShuiAdvisor() {
  const [birthYear, setBirthYear] = useState<number>(2004);
  const [yearInput, setYearInput] = useState<string>("2004");
  const [gender, setGender] = useState<"nam" | "nu">("nam");
  const [investmentGoal, setInvestmentGoal] = useState<"an-cu" | "shophouse" | "dau-tu">("an-cu");
  const [activeCompassDir, setActiveCompassDir] = useState<string>("Nam");

  // Đồng bộ khi đổi birthYear
  useEffect(() => {
    setYearInput(String(birthYear));
  }, [birthYear]);

  // Tính toán kết quả phong thủy
  const profile = useMemo(() => {
    return calculateFengShui(birthYear, gender);
  }, [birthYear, gender]);

  // Tự động cập nhật hướng la bàn khi đổi tuổi hoặc giới tính
  useEffect(() => {
    let target = profile.bestDirection.name;
    if (investmentGoal === "an-cu") {
      const dn = profile.directions.find((d) => d.cung === "Diên Niên" || d.cung === "Thiên Y");
      if (dn) target = dn.name;
    }
    setActiveCompassDir(target);
  }, [profile.bestDirection.name, investmentGoal]);

  // Xử lý chuyển đổi mục đích đầu tư -> xoay la bàn và cập nhật chiến lược
  const handleSelectGoal = (goal: "an-cu" | "shophouse" | "dau-tu") => {
    setInvestmentGoal(goal);
    let targetDir = profile.bestDirection.name;
    if (goal === "an-cu") {
      const dn = profile.directions.find((d) => d.cung === "Diên Niên" || d.cung === "Thiên Y");
      if (dn) targetDir = dn.name;
    } else {
      const sk = profile.directions.find((d) => d.cung === "Sinh Khí");
      if (sk) targetDir = sk.name;
    }
    setActiveCompassDir(targetDir);
  };

  const currentStrategy = GOAL_STRATEGIES[investmentGoal];

  // Tìm các lô đất trong BANG_GIA_DATA phù hợp với mệnh VÀ MỤC ĐÍCH của người dùng
  const recommendedPlots = useMemo(() => {
    let pool = BANG_GIA_DATA.filter((p) => p.tt === "Sẵn sàng");

    if (investmentGoal === "an-cu") {
      const anCuPool = pool.filter((p) => p.dt <= 100 && (p.truc.startsWith("N20") || p.truc.startsWith("N21") || p.truc.startsWith("N19") || p.truc.startsWith("N17")));
      if (anCuPool.length >= 4) pool = anCuPool;
    } else if (investmentGoal === "shophouse") {
      const kdPool = pool.filter((p) => p.dt >= 100 && (p.dt > 110 || p.truc.includes("-") || p.truc.startsWith("D13A") || p.truc.startsWith("N25") || p.truc.startsWith("D18")));
      if (kdPool.length >= 4) pool = kdPool;
    } else {
      const dtPool = pool.filter((p) => p.gia <= 2000000000 && (p.truc.startsWith("N18") || p.truc.startsWith("D14B") || p.truc.startsWith("N22") || p.truc.startsWith("D16A")));
      if (dtPool.length >= 4) pool = dtPool;
    }

    return pool.slice(0, 4).map((p, idx) => {
      let targetDir = profile.bestDirection.name;
      let targetCung = profile.bestDirection.cung;
      let goalBadge = "";
      let moTa = "";

      if (investmentGoal === "an-cu") {
        goalBadge = "🏡 Ưu Tiên An Cư";
        const dn = profile.directions.find((d) => d.cung === "Diên Niên" || d.cung === "Thiên Y");
        if (dn && idx % 2 === 0) {
          targetDir = dn.name;
          targetCung = dn.cung;
        } else {
          targetDir = profile.huongNhaKhuyenNghi[idx % profile.huongNhaKhuyenNghi.length];
          targetCung = profile.directions.find((d) => d.name === targetDir)?.cung || "Cát";
        }
        moTa = `Lô đất nằm tại trục ${p.truc} yên bình, kề cận công viên và trường học, hướng ${targetDir} (${targetCung}) mang lại sức khỏe và gia đạo êm ấm.`;
      } else if (investmentGoal === "shophouse") {
        goalBadge = "🏪 Mặt Tiền Kinh Doanh";
        const sk = profile.directions.find((d) => d.cung === "Sinh Khí");
        targetDir = sk ? sk.name : profile.bestDirection.name;
        targetCung = "Sinh Khí (Phát Tài)";
        moTa = `Lô thương mại trục ${p.truc} diện tích ${p.dt}m², hướng ${targetDir} (${targetCung}) kích hoạt tài lộc buôn bán, lưu lượng xe cộ đông đúc.`;
      } else {
        goalBadge = "📈 Suất Đầu Tư Đắc Địa";
        const sk = profile.directions.find((d) => d.cung === "Sinh Khí" || d.cung === "Phục Vị");
        targetDir = sk ? sk.name : profile.bestDirection.name;
        targetCung = sk ? sk.cung : "Sinh Khí";
        moTa = `Suất đầu tư ${(p.gia / 1_000_000_000).toFixed(3)} tỷ cực tốt, trục ${p.truc} thanh khoản cao, đón sóng tăng giá cao tốc & thị xã Dầu Giây 2026.`;
      }

      return {
        ...p,
        huongNha: targetDir,
        cungDanh: targetCung,
        goalBadge,
        moTa
      };
    });
  }, [profile, investmentGoal]);

  // Lấy chi tiết hướng đang chọn trên la bàn
  const selectedDirDetail = useMemo(() => {
    return profile.directions.find((d) => d.name === activeCompassDir) || profile.bestDirection;
  }, [profile, activeCompassDir]);

  // Xử lý khi người dùng gõ năm sinh (chỉ cho phép số, tối đa 4 chữ số)
  const handleYearInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 4);
    setYearInput(val);
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed >= 1940 && parsed <= 2025) {
      setBirthYear(parsed);
    }
  };

  return (
    <section
      id="phong-thuy"
      className="py-14 md:py-24 bg-gradient-to-b from-[#051712] via-[#09261e] to-[#04140f] text-slate-100 relative overflow-hidden border-t border-b border-emerald-500/20"
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* ── HEADER QUÝ PHÁI PHONG THỦY ── */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            <Compass className="w-4 h-4 text-amber-400" />
            Tra Cứu Phong Thủy Bát Trạch
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-amber-300 tracking-tight uppercase drop-shadow-sm">
            TÌM LÔ ĐẤT VƯỢNG KHÍ HỢP TUỔI GIA CHỦ
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-emerald-100/80 leading-relaxed">
            Nhập năm sinh và chọn nhu cầu của bạn để khám phá Cung Phi Bát Trạch, 4 Hướng Đại Cát 
            và danh sách lô đất thật tại The Link City giúp gia tăng tài lộc &amp; bình an.
          </p>
        </div>

        {/* ── BỘ ĐIỀU KHIỂN CHỌN NĂM SINH & MỤC ĐÍCH (ĐỒNG ĐỀU, CÙNG HÀNG, KHÔNG RỚT DÒNG) ── */}
        <div className="bg-[#0a231b]/90 border border-emerald-500/30 rounded-3xl p-5 sm:p-7 shadow-2xl mb-8">
          
          {/* Hàng 3 Cột: Cùng Chiều Cao, Cùng Đường Chân Baseline */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
            
            {/* 1. Nhập Năm Sinh */}
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5 mb-2.5 whitespace-nowrap">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                Năm Sinh Gia Chủ
              </label>

              <div className="flex items-center gap-2 h-12">
                {/* Nút giảm năm */}
                <button
                  type="button"
                  onClick={() => setBirthYear((prev) => Math.max(1940, prev - 1))}
                  className="w-11 h-12 rounded-xl bg-[#061812] hover:bg-[#0c2f24] active:scale-95 text-emerald-200 font-black flex items-center justify-center transition-all border border-emerald-500/30 shrink-0"
                  aria-label="Giảm 1 năm"
                >
                  <Minus className="w-4 h-4" />
                </button>

                {/* Ô nhập số trực tiếp (Đã loại bỏ mũi tên lên xuống mặc định của trình duyệt) */}
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={4}
                  value={yearInput}
                  onChange={handleYearInputChange}
                  className="w-24 h-12 bg-[#04130e] border border-emerald-500/40 focus:border-amber-400 focus:bg-[#061913] text-amber-300 font-black text-xl text-center rounded-xl shadow-inner transition-all outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="2004"
                  aria-label="Nhập năm sinh"
                />

                {/* Nút tăng năm */}
                <button
                  type="button"
                  onClick={() => setBirthYear((prev) => Math.min(2025, prev + 1))}
                  className="w-11 h-12 rounded-xl bg-[#061812] hover:bg-[#0c2f24] active:scale-95 text-emerald-200 font-black flex items-center justify-center transition-all border border-emerald-500/30 shrink-0"
                  aria-label="Tăng 1 năm"
                >
                  <Plus className="w-4 h-4" />
                </button>

                {/* Huy hiệu Can Chi tự nhảy (Luôn cùng hàng, không bao giờ xuống dòng) */}
                <div className="flex-1 h-12 px-2.5 rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-300 font-black text-sm flex items-center justify-center whitespace-nowrap shadow-sm">
                  {profile.canChi}
                </div>
              </div>
            </div>

            {/* 2. Chọn Giới Tính (Cùng hàng, Không rớt chữ) */}
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5 mb-2.5 whitespace-nowrap">
                <User className="w-4 h-4 text-emerald-400 shrink-0" />
                Giới Tính Gia Chủ
              </label>

              <div className="grid grid-cols-2 gap-2 h-12 p-1 bg-[#04130e] rounded-xl border border-emerald-500/30">
                <button
                  type="button"
                  onClick={() => setGender("nam")}
                  className={`h-full rounded-lg text-sm font-extrabold flex items-center justify-center gap-1.5 whitespace-nowrap transition-all ${
                    gender === "nam"
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-md"
                      : "text-emerald-200/70 hover:text-white"
                  }`}
                >
                  👨 Nam Mệnh
                </button>
                <button
                  type="button"
                  onClick={() => setGender("nu")}
                  className={`h-full rounded-lg text-sm font-extrabold flex items-center justify-center gap-1.5 whitespace-nowrap transition-all ${
                    gender === "nu"
                      ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-md"
                      : "text-emerald-200/70 hover:text-white"
                  }`}
                >
                  👩 Nữ Mệnh
                </button>
              </div>
            </div>

            {/* 3. Mục Đích Đầu Tư (Cùng hàng, Không rớt chữ) */}
            <div className="flex flex-col">
              <label className="text-xs font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5 mb-2.5 whitespace-nowrap">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                Nhu Cầu Tìm Kiếm
              </label>

              <div className="grid grid-cols-3 gap-1.5 h-12 p-1 bg-[#04130e] rounded-xl border border-emerald-500/30">
                <button
                  type="button"
                  onClick={() => handleSelectGoal("an-cu")}
                  className={`h-full rounded-lg text-xs font-extrabold flex items-center justify-center gap-1 whitespace-nowrap transition-all ${
                    investmentGoal === "an-cu"
                      ? "bg-emerald-600 text-white font-black shadow-md"
                      : "text-emerald-200/70 hover:text-white"
                  }`}
                >
                  🏡 An Cư
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectGoal("shophouse")}
                  className={`h-full rounded-lg text-xs font-extrabold flex items-center justify-center gap-1 whitespace-nowrap transition-all ${
                    investmentGoal === "shophouse"
                      ? "bg-amber-500 text-slate-950 font-black shadow-md"
                      : "text-emerald-200/70 hover:text-white"
                  }`}
                >
                  🏪 Kinh Doanh
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectGoal("dau-tu")}
                  className={`h-full rounded-lg text-xs font-extrabold flex items-center justify-center gap-1 whitespace-nowrap transition-all ${
                    investmentGoal === "dau-tu"
                      ? "bg-sky-600 text-white font-black shadow-md"
                      : "text-emerald-200/70 hover:text-white"
                  }`}
                >
                  📈 Đầu Tư
                </button>
              </div>
            </div>

          </div>

          {/* Dải phím chọn nhanh năm sinh trải ngang đồng đều */}
          <div className="mt-4 pt-3.5 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-emerald-300/80 font-bold whitespace-nowrap">Chọn nhanh năm sinh:</span>
              {[1985, 1988, 1990, 1992, 1995, 2000, 2004].map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setBirthYear(y)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    birthYear === y
                      ? "bg-amber-400 text-slate-950 font-black shadow-sm"
                      : "bg-[#061812] border border-emerald-500/30 text-emerald-200 hover:text-white hover:border-emerald-400"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>

            {/* Tóm tắt mệnh gia chủ */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-emerald-200/80 font-medium">Bản mệnh:</span>
              <span className="font-extrabold text-amber-300 whitespace-nowrap">{profile.nguHanh}</span>
              <span className="text-emerald-500/50">·</span>
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 whitespace-nowrap">
                {profile.tuMenh}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-amber-400/15 text-amber-300 font-bold border border-amber-400/30 whitespace-nowrap">
                {profile.cungPhi}
              </span>
            </div>
          </div>

          {/* ── THẺ CHIẾN LƯỢC TƯ VẤN ĐỘNG THEO MỤC ĐÍCH ── */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#061913] border border-emerald-500/30 transition-all shadow-inner">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">{currentStrategy.icon}</span>
                <h3 className="text-sm sm:text-base font-extrabold text-white">
                  {currentStrategy.title}
                </h3>
              </div>
              <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md border ${currentStrategy.accentBg} ${currentStrategy.accentBorder} ${currentStrategy.accentText}`}>
                {currentStrategy.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#0a231b] border border-emerald-500/20">
                <span className="text-emerald-400 font-bold block mb-1">🎯 Tiêu chí vị trí:</span>
                <p className="text-slate-200 leading-relaxed">{currentStrategy.criteria}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0a231b] border border-emerald-500/20">
                <span className="text-amber-400 font-bold block mb-1">🧭 Hướng phong thủy:</span>
                <p className="text-slate-200 leading-relaxed">{currentStrategy.targetDirections}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0a231b] border border-emerald-500/20">
                <span className="text-sky-400 font-bold block mb-1">💡 Giải pháp BĐS &amp; Tài chính:</span>
                <p className="text-slate-200 leading-relaxed">{currentStrategy.financeAdvice}</p>
              </div>
            </div>
          </div>

        </div>

        {/* ── KHỐI CHÍNH: LA BÀN BÁT TRẠCH & BẢNG PHÂN TÍCH HƯỚNG ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">

          {/* CỘT TRÁI (5 Cột): LA BÀN BÁT TRẠCH NGỌC BÍCH HOÀNG GIA */}
          <div className="lg:col-span-5 bg-[#0a231b]/90 border border-emerald-500/30 rounded-3xl p-5 flex flex-col items-center justify-between shadow-xl">
            
            <div className="w-full flex items-center justify-between mb-2">
              <div className="text-left">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">Định Vị Tự Động</span>
                <h3 className="text-base font-extrabold text-white flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-amber-400" />
                  La Bàn 360°
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 text-amber-300 font-mono text-xs font-bold border border-emerald-500/40">
                {selectedDirDetail.angle}° {selectedDirDetail.name}
              </span>
            </div>

            {/* MÔ PHỎNG LA BÀN */}
            <div className="relative w-60 h-60 sm:w-64 sm:h-64 my-4 flex items-center justify-center select-none">
              
              {/* Đĩa la bàn */}
              <div className="absolute inset-0 rounded-full border-2 border-emerald-500/40 bg-gradient-to-b from-[#061812] to-[#04120e] shadow-2xl flex items-center justify-center">
                <div className="absolute inset-2 rounded-full border border-dashed border-emerald-500/20" />
                <div className="absolute inset-6 rounded-full border border-emerald-500/30" />

                {/* 8 Nút hướng tương tác quanh la bàn */}
                {profile.directions.map((d) => {
                  const isSelected = activeCompassDir === d.name;
                  const rad = ((d.angle - 90) * Math.PI) / 180;
                  const radius = 98;
                  const x = Math.round(Math.cos(rad) * radius);
                  const y = Math.round(Math.sin(rad) * radius);

                  return (
                    <button
                      key={d.name}
                      type="button"
                      onClick={() => setActiveCompassDir(d.name)}
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                      className={`absolute w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${
                        isSelected
                          ? "bg-amber-400 text-slate-950 scale-110 shadow-lg shadow-amber-400/40 z-20 font-black"
                          : d.isGood
                          ? "bg-emerald-900/80 border border-emerald-400/50 text-emerald-300 hover:scale-105 z-10"
                          : "bg-[#061812] border border-white/10 text-slate-500 hover:text-slate-300 z-0"
                      }`}
                      title={`${d.name} · ${d.cung}`}
                    >
                      {d.name.length <= 4 ? d.name.substring(0, 1) : d.name.split(" ").map((w) => w[0]).join("")}
                    </button>
                  );
                })}
              </div>

              {/* Kim la bàn xoay mượt mà */}
              <div
                className="relative w-full h-full flex items-center justify-center pointer-events-none transition-transform duration-500 ease-out"
                style={{
                  transform: `translate3d(0,0,0) rotate(${selectedDirDetail.angle}deg)`,
                  willChange: "transform"
                }}
              >
                {/* Đầu kim vàng chỉ hướng cát */}
                <div className="absolute top-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[80px] border-b-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                {/* Đuôi kim */}
                <div className="absolute bottom-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[80px] border-t-slate-600" />
                {/* Trục tâm kim */}
                <div className="w-5 h-5 rounded-full bg-[#061812] border-2 border-amber-400 shadow-md z-30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                </div>
              </div>

              <div className="absolute text-[9px] font-black text-emerald-500/50 tracking-wider pointer-events-none">
                BÁT TRẠCH
              </div>
            </div>

            {/* Chi tiết hướng đang được trỏ trên la bàn */}
            <div className="w-full bg-[#061913] border border-emerald-500/25 rounded-2xl p-3.5 text-left">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-emerald-400">Hướng đang xem:</span>
                <span className={`text-[11px] font-black px-2 py-0.5 rounded-md ${
                  selectedDirDetail.isGood
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-slate-800 text-slate-400 border border-slate-700"
                }`}>
                  {selectedDirDetail.cung} · {selectedDirDetail.isGood ? "Đại Cát" : "Cần Tránh"}
                </span>
              </div>
              <h4 className="text-base font-extrabold text-amber-300 mb-1">
                Hướng {selectedDirDetail.name} ({selectedDirDetail.angle}°)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedDirDetail.desc}
              </p>
            </div>

            <p className="text-[11px] text-emerald-400/60 text-center mt-2.5">
              💡 Bấm vào các điểm chữ trên la bàn để xem từng hướng cụ thể.
            </p>
          </div>

          {/* CỘT PHẢI (7 Cột): 4 HƯỚNG ĐẠI CÁT & BỐ TRÍ NHÀ PHỐ */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">

            {/* Khối 4 Hướng Đại Cát */}
            <div className="bg-[#0a231b]/90 border border-emerald-500/30 rounded-3xl p-5 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between mb-3.5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">Khuyến Nghị Vàng</span>
                  <h3 className="text-base sm:text-lg font-extrabold text-white">
                    4 Hướng Đại Cát Tuổi {profile.canChi} ({profile.tuMenh})
                  </h3>
                </div>
                <span className="text-xs text-emerald-300/70 font-medium hidden sm:block">
                  Nhóm: <strong className="text-amber-300">{profile.tuTrach}</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.directions.filter((d) => d.isGood).map((d) => {
                  const isTop = d.cung === "Sinh Khí";
                  const isSelected = activeCompassDir === d.name;
                  return (
                    <div
                      key={d.name}
                      onClick={() => setActiveCompassDir(d.name)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer text-left ${
                        isSelected
                          ? "bg-[#0d2f24] border-amber-400 shadow-md shadow-amber-400/10"
                          : "bg-[#061913] border-emerald-500/20 hover:border-emerald-400/50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          Hướng {d.name}
                        </span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded ${
                          isTop
                            ? "bg-amber-400 text-slate-950 font-black shadow-sm"
                            : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        }`}>
                          {d.cung}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {d.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Khối Lời Khuyên Bố Trí Nhà Mẫu T3-2B */}
            <div className="bg-[#0a231b]/90 border border-emerald-500/30 rounded-3xl p-5 sm:p-6 shadow-xl">
              <h4 className="text-xs sm:text-sm font-extrabold text-amber-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Home className="w-4 h-4 text-emerald-400" />
                Quy Chuẩn Bố Trí Nhà Phố Mẫu T3-2B (The Link City)
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#061913] border border-emerald-500/20">
                  <span className="text-emerald-400 font-bold block mb-1">🚪 Cửa Chính Khai Môn:</span>
                  <p className="text-slate-200 leading-relaxed">{profile.loiKhuyenThietKe.cuaChinh}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#061913] border border-emerald-500/20">
                  <span className="text-amber-400 font-bold block mb-1">🔥 Hướng Bếp Sinh Tài:</span>
                  <p className="text-slate-200 leading-relaxed">{profile.loiKhuyenThietKe.bepNau}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#061913] border border-emerald-500/20">
                  <span className="text-sky-400 font-bold block mb-1">🛏️ Phòng Ngủ Gia Chủ:</span>
                  <p className="text-slate-200 leading-relaxed">{profile.loiKhuyenThietKe.phongNgu}</p>
                </div>

                <div className="p-3 rounded-xl bg-[#061913] border border-emerald-500/20">
                  <span className="text-purple-400 font-bold block mb-1">🎨 Màu Sắc Hợp Mệnh:</span>
                  <p className="text-slate-200 leading-relaxed">
                    Hợp: <strong className="text-amber-300">{profile.colorsGood.join(", ")}</strong> · Tránh: {profile.colorsAvoid.join(", ")}.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── DANH SÁCH LÔ ĐẤT THẬT ĐƯỢC KHỚP TỪ BẢNG GIÁ THE LINK CITY ── */}
        <div className="bg-[#0a231b]/95 border border-emerald-500/30 rounded-3xl p-5 sm:p-7 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5 pb-4 border-b border-emerald-500/20">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Kho Hàng BĐS Thực Tế (CRM Kim Oanh Land)
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">
                Gợi Ý Lô Đất {investmentGoal === "an-cu" ? "An Cư" : investmentGoal === "shophouse" ? "Kinh Doanh Shophouse" : "Đầu Tư Tăng Tốc"} Hợp Tuổi {profile.canChi}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/70 mt-0.5">
                Lọc tự động từ 369 sản phẩm đất nền có sẵn pháp lý sổ đỏ chuẩn của The Link City theo tiêu chí {currentStrategy.title}.
              </p>
            </div>

            <a
              href="#bang-gia"
              className="inline-flex items-center justify-center gap-1.5 bg-[#061913] hover:bg-[#0c2f24] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-emerald-500/30 transition-all self-start md:self-auto"
            >
              Xem toàn bộ bảng giá 369 lô
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Grid các lô đất đề xuất */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommendedPlots.map((plot) => (
              <div
                key={plot.ma}
                className="bg-[#061913] border border-emerald-500/25 hover:border-amber-400/60 rounded-2xl p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="font-mono text-sm font-black text-amber-300 bg-amber-400/15 px-2.5 py-0.5 rounded-md border border-amber-400/30">
                      {plot.ma}
                    </span>
                    <span className="text-[10px] font-black text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                      {plot.goalBadge}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    Trục {plot.truc} · {plot.loai}
                  </h4>

                  <div className="my-2.5 space-y-1.5 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Diện tích:</span>
                      <span className="font-bold text-white">{plot.dt} m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Hướng nhà:</span>
                      <span className="font-bold text-emerald-400">
                        {plot.huongNha} ({plot.cungDanh})
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Đơn giá tham chiếu:</span>
                      <span className="font-black text-amber-400 text-sm">
                        {(plot.gia / 1_000_000_000).toFixed(3)} tỷ
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed mb-3.5 line-clamp-2">
                    {plot.moTa}
                  </p>
                </div>

                <a
                  href={`https://zalo.me/${SITE_CONFIG.phone}?text=${encodeURIComponent(
                    `Chào Kim Oanh Group, tôi sinh năm ${birthYear} (${profile.canChi}) - ${profile.tuMenh}. Tôi đang quan tâm lô đất phong thủy ${plot.ma} (Trục ${plot.truc}, ${plot.dt}m², hướng ${plot.huongNha} - ${plot.cungDanh}, giá ${(plot.gia / 1_000_000_000).toFixed(3)} tỷ) với nhu cầu ${investmentGoal === "an-cu" ? "AN CƯ LẬP NGHIỆP" : investmentGoal === "shophouse" ? "KINH DOANH SHOPHOUSE" : "ĐẦU TƯ SINH LỜI"}. Vui lòng gửi trọn bộ trích lục quy hoạch và chính sách thanh toán cho tôi.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-all shadow-md group-hover:shadow-emerald-500/25"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Nhận Hồ Sơ Lô {plot.ma} Qua Zalo
                </a>
              </div>
            ))}
          </div>

          {/* Banner liên hệ chuyên gia phong thủy */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-[#061913] border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs sm:text-sm font-bold text-white">
                  Cần chuyên viên phong thủy Kim Oanh khảo sát thực địa tận nơi?
                </h4>
                <p className="text-xs text-slate-300">
                  Hỗ trợ đo đạc tọa độ la bàn thực địa, tư vấn thiết kế mẫu nhà T3-2B miễn phí.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-white text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-xl hover:bg-slate-100 transition-colors shadow"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`https://zalo.me/${SITE_CONFIG.phone}?text=${encodeURIComponent(
                  `Chào chuyên viên phong thủy Kim Oanh, tôi sinh năm ${birthYear} (${profile.canChi}) muốn tư vấn chuyên sâu về chọn lô đất tại The Link City Dầu Giây.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl transition-colors shadow"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Tư Vấn Zalo 1-1
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
